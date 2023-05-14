import { boot } from 'quasar/wrappers';
import { Notify } from 'quasar';
import { i18n } from './i18n.js';
import { useGlobalOption } from 'src/constants';

const globalOption = useGlobalOption();
const companyIds = globalOption.getCompanyIds();

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ router }) => {
  router.beforeEach((to, from) => {
    // validate company id in route
    if ('companyId' in to.params) {
      if (!companyIds.includes(to.params.companyId)) {
        Notify.create({
          type: 'negative',
          message: i18n.global.t('message.invalidCompanyId'),
        });
        // for invalid company id, redirect to home page
        return { name: 'home' };
      }
    }
  });
});
