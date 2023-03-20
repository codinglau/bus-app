// @ts-check
import { Loading, Notify } from 'quasar';
import { reactive, toRefs } from 'vue';

/**
 * @param {[string]?} loadingComponents - array of loading components
 */
export default function useFetch(loadingComponents) {
  // init loadingContext
  let loadingContext = {};

  if (Array.isArray(loadingComponents)) {
    // construct loading context
    loadingContext = loadingComponents.reduce((cxt, component) => {
      // check if component is a string and not empty
      if (typeof component === 'string' && component.length > 0) {
        cxt[component] = false;
      }
  
      return cxt;
    }, {});
  }

  // init loading state
  const loading = reactive({
    ...loadingContext,
    loadingGlobal: false,
  });

  /**
   * @type {Object} defaultConfig - default loading configuration
   * @property {Boolean} enableLoading - default true; toggle on/off loading state
   * @property {string} loadingScope - default 'global'; loading scope (global or loading component)
   */
  const defaultConfig = {
    enableLoading: true,  
    loadingScope: 'global',
  };

  /**
   * @param {Function} action
   * @param {{[x: string]: string}} request
   * @param {{ 
   *  config?: Object,
   *  onSuccess?: Function,
   *  onError?: Function,
   *  onFinally?: Function, 
   * }} context
   * @returns {Promise<void>}
   */
  async function fetchApi(action, request, context) {
    // destructure context
    const {
      config,
      onSuccess,
      onError,
      onFinally
    } = context;

    // merge default config with the config provided by the user
    const { 
      enableLoading, 
      loadingScope 
    } = Object.assign({}, defaultConfig, config);

    if (loadingScope !== 'loadingGlobal' && !loadingComponents.includes(loadingScope)) {
      // check if loading scope is valid
      throw new Error('Invalid loading scope.');
    }
    
    try {      
      if (action === undefined || typeof action !== 'function') {
        // throw an error if action is undefined
        throw new Error('Missing action or action is not a function.');
      } else if (typeof action === 'function') {
        // turn on loading if enabled
        // render loading spinner if enabled
        if (enableLoading) {
          loading[loadingScope] = true;
          if (loadingScope === 'loadingGlobal') Loading.show();
        }
        
        // when action is a function
        // call action with request if request is provided
        const response = await action(request);
        
        // handle success
        if (typeof onSuccess === 'function') {
          const successMsg = onSuccess(response);
          if (successMsg) {
            Notify.create({ type: 'positive', message: successMsg });
          }
        }
      }
    } catch (error) {
      // catch and handle error
      let message = '';
      
      if (typeof onError === 'function') {
        message = onError(error);
      } else {
        message = error.message;
      }

      if (message) Notify.create({ type: 'negative', message: message });
    
    // turn off loading and hide loading spinner
    } finally {
      if (enableLoading) {
        loading[loadingScope] = false;
        if (loadingScope === 'loadingGlobal') Loading.hide();
      }
      if (typeof onFinally === 'function') {
        onFinally();
      }

      return Promise.resolve();
    }
  }

  return { 
    fetchApi, 
    ...toRefs(loading), 
  };
}