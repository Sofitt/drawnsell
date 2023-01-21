import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '@/pages/mainPage.vue'

const routes = [
  {
    path: '/draw',
    name: 'draw',
    component: () => import(/* webpackChunkName: "drawPage" */ '@/pages/drawPage.vue')
  },
  {
    path: '/buy',
    name: 'buy',
    component: () => import(/* webpackChunkName: "buyPage" */ '@/pages/buyPage.vue')
  },
  {
    path: '/',
    name: 'main',
    component: mainPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
