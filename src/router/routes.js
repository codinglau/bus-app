const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        redirect: {
          name: 'bus.routeList',
          params: { 
            lang: 'tc',   // default language is Traditional Chinese
            companyId: 'kmb', // default bus company is KMB 
          }, 
        },
      },
      {
        path: ':lang',
        children: [
          {
            path: '',
            redirect: (to) => ({
              name: 'bus.routeList',
              params: {
                lang: to.params.lang,
                companyId: 'kmb', // default bus company is KMB
              },
            }),
          },
          {
            path: ':companyId',
            children: [
              {
                path: '',
                name: 'bus.routeList',
                component: () => import('pages/bus/RouteListPage.vue'),
              },
              {
                path: ':routeId/:direction',
                name: 'bus.routeStopList',
                component: () => import('pages/bus/RouteStopListPage.vue'),
                props: (route) => ({
                  ...route.params,
                  ...route.query,
                }),
              }
            ],
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: '404',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
