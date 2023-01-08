import { createRouter, createWebHistory } from 'vue-router'
import drawPage from '@/pages/drawPage.vue'
import buyPage from '@/pages/buyPage'

const routes = [
  {
    path: '/draw',
    name: 'draw',
    component: drawPage
  },
  {
    path: '/',
    name: 'buy',
    component: buyPage
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
