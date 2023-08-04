import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-me',
      name: 'about me',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/api/docs',
      name: 'documentation',
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
