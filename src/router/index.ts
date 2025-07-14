import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DevicesList from '@/views/DevicesList.vue'
import DevicesDetails from '@/views/DevicesDetails.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/devices'
  },
  {
    path: '/devices',
    name: 'Dashboard',
    component: DevicesList
  },
  {
    path: '/devices/:id',
    name: 'DevicesDetails',
    component: DevicesDetails
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
