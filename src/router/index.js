import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: () => import('../views/MovieDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
