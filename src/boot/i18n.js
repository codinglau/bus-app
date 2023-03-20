import { boot } from 'quasar/wrappers';
import { Notify } from 'quasar';
import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';

  const i18n = createI18n({
    locale: 'zh-TW',
    globalInjection: true,
    messages
  });

export default boot(({ app, router }) => {
  // set language based on lang parameter in route
  router.beforeEach((to, _) => {
    if ('lang' in to.params) {
      if (['EN', 'TC'].includes(to.params.lang.toUpperCase())) {
        // set language        
        i18n.global.locale.value = (to.params.lang === 'en') 
          ? 'en-US' 
          : 'zh-TW';
      } else {
        // for invalid language, redirect to home page
        Notify.create({
          type: 'negative',
          message: i18n.global.t('message.invalidLanguage'),
        });
        return { name: 'home' };
      }
    }
  });

  // set i18n instance on app
  app.use(i18n);
});

export { i18n };