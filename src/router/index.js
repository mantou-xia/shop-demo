import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/home",
    component: () => import("../views/home/HomeView.vue"),
    children: [
      {
        path: "/home",
        name: "mainHome",
        component: () => import("../views/home/homeContent/MainHome.vue"),
      },
      {
        path: "/category",
        name: "category",
        component: () => import("../views/home/homeContent/HomeCategory.vue"), // Update import path
      },
      {
        path: "/cart",
        name: "cart",
        component: () => import("../views/home/homeContent/HomeCart.vue"), // Update import path
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/home/homeContent/HomeUser.vue"), // Update import path
      },
      {
        path: "/user/profile",
        name: "profile", // 必须与组件中的name对应
        component: () => import("../views/user/userInfo/UserProfile.vue")
      },
      {
        path: "/user/security",
        name: "security",
        component: () => import("../views/user/userInfo/UserSecurity.vue"), // Update import path 
      },
      {
        path: "/user/address",
        name: "address",
        component: () => import("../views/user/userInfo/UserAddress.vue"), // Update import path 
      },
      {
        path: "/user/setting",
        name: "setting",
        component: () => import("../views/user/userInfo/UserSetting.vue"), // Update import path 
      }
    ],
  },
  {
    path: "/loginAndReg",
    name: "loginAndReg",
    component: () => import("../views/loginAndReg/LoginAndRegView.vue"),
  },
  {
    path: "/orders", 
    name: "OrderStatus",
    component: () => import("../views/user/OrderStatus.vue"),
    props: (route) => ({ 
      type: route.query.type || 'all' // 从查询参数获取，默认值设为'all'
    }),
  },
  {
    path: "/404", // 动态路由参数
    name: "error",
    component: () => import("../views/error/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
