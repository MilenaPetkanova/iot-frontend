import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DashboardView from '@/views/Dashboard.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // use import.meta.env.BASE_URL for Vite
  routes
})

export default router
