import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/HomeView.vue'),
    children:[
      {
        path: '/home',
        name: 'mainHome',
        component: () => import('../views/home/homeContent/MainHome.vue')
      }, 
    ]
  },
  {
    path: '/loginAndReg',
    name: 'loginAndReg',
    component: () => import('../views/loginAndReg/LoginAndRegView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
