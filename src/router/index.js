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
  /** *{
    path: "/good", 
    name: "good",
    component: () => import("../views/goods/Good.vue"),
    props: (route) => ({ 
      type: route.query.id || '0' // 从查询参数获取，默认值设为'all'
    }),
  },   
  这是你自己写的，下面是新的good的router，看情况选择* **/
  {
    path: '/error',
    name: 'Error',
    component: () => import('../views/error/Error.vue')  // 将 @ 别名改为相对路径
},
{
    path: '/goods/:id',
    name: 'Good',
    component: () => import('../views/goods/Good.vue'),  // 路径保持一致
    props: true
},
{
  path: '/checkout',
  name: 'Checkout',
  component: () => import('@/views/checkout/CheckOut.vue'),
  props: (route) => ({
    productId: route.query.productId,
    spec: route.query.spec
  })
},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
