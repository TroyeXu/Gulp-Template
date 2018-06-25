//requiresAuth 登陆验证
//isTrialUser 试玩用户验证
module.exports = {
  //mode: 'history',
  routes: [
      {
          path: "/",
          redirect: "AppIndex"
      },
      {
          path: "*",
          redirect: "404"
      },
      {
          path: "/404",
          name: "404",
          component: resolve => require(["@/components/404.vue"], resolve)
      },
      {
          path: "/AppIndex",
          name: "AppIndex",
          meta: {
              keepAlive: true
          },
          component: resolve => require(["@/pages/abc/index.vue"], resolve)
      },
      {
          path: "/BeiJingPk10Index",
          name: "BeiJingPk10",
          component: resolve =>
              require(["@/pages/Pk10/BeiJingPk10Index.vue"], resolve)
      },

      {
          path: "/ReportForms",
          name: "ReportForms",
          meta: {
              requiresAuth: true,
              isTrialUser: false
          },
          component: resolve => require(["@/pages/MyInfo/ReportForms.vue"], resolve)
      },
      {
          path: "/zhixuan/:id/:type/:czname",
          name: "zhixuan",
          component: resolve => require(["@/pages/abc/zhixuan.vue"], resolve)
      },
  ]
};
