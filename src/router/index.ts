import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import DeviceDetails from '@/views/DeviceDetails.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/devices/:id',
    name: 'DeviceDetails',
    component: DeviceDetails
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // use import.meta.env.BASE_URL for Vite
  routes
})

export default router
