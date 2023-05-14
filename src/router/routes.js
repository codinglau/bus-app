const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        redirect: {
          name: 'bus.index',
          params: {
            lang: 'tc',   // default language is Traditional Chinese
          },
        },
      },
      {
        path: ':lang',
        children: [
          {
            path: '',
            name: 'bus.home',
            component: () => import('pages/IndexPage.vue'),
          },
          {
            path: ':method',
            redirect: (to) => ({
              name: 'bus.routeList',
              params: {
                lang: to.params.lang,
                method: to.params.method,
                companyId: 'nwfb',
              },
            }),
            children: [
              {
                path: ':companyId',
                children: [
                  {
                    path: '',
                    name: 'bus.routeList',
                    component: () => import('pages/bus/RouteListPage.vue'),
                    props: (route) => ({
                      ...route.params,
                    }),
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
