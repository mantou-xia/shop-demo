import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: () => import('../views/home/HomeView.vue'),
    children: [
      {
        path: '/home',
        name: 'mainHome',
        component: () => import('../views/home/homeContent/MainHome.vue')
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('../views/home/homeContent/HomeCategory.vue') // Update import path
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/home/homeContent/HomeCart.vue') // Update import path
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/home/homeContent/HomeUser.vue') // Update import path
      }
    ]
  },
  {
    path: '/loginAndReg',
    name: 'loginAndReg',
    component: () => import('../views/loginAndReg/LoginAndRegView.vue')
  },
  {
    path: '/orders/:type', // 动态路由参数
    name: 'OrderStatus',
    component: () => import('../views/user/OrderStatus.vue'),
    props: true // 自动将参数传递给组件的 props
  },
  {
    path: '/404', // 动态路由参数
    name: 'error',
    component: () => import('../views/error/Error.vue'), 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
