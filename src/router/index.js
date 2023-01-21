import { createRouter, createWebHistory } from 'vue-router'
import mainPage from '@/pages/mainPage.vue'
// import drawPage from '@/pages/drawPage.vue'
// import buyPage from '@/pages/buyPage.vue'

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
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../pages/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
