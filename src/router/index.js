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
        children: [
          {
            path: "/user/profile",
            name: "profile",
            component: () => import("../views/user/userInfo/UserProfile.vue"), // Update import path
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
    ],
  },
  {
    path: "/loginAndReg",
    name: "loginAndReg",
    component: () => import("../views/loginAndReg/LoginAndRegView.vue"),
  },
  {
    path: "/orders/:type", // 动态路由参数
    name: "OrderStatus",
    component: () => import("../views/user/OrderStatus.vue"),
    props: true, // 自动将参数传递给组件的 props
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
