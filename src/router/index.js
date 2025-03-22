import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/HomeView.vue')
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
