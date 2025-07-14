import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import DevicesList from '@/views/DevicesList.vue'
import DevicesDetails from '@/views/DevicesDetails.vue'
import { ROUTE_NAMES } from '@/constants/routes'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: `/${ROUTE_NAMES.DEVICES}`
  },
  {
    path: `/${ROUTE_NAMES.DEVICES}`,
    name: 'DevicesList',
    component: DevicesList
  },
  {
    path: `/${ROUTE_NAMES.DEVICES}/:id`,
    name: 'DevicesDetails',
    component: DevicesDetails
  },
  {
    path: `/${ROUTE_NAMES.REQUIREMENTS}`,
    name: 'Requirements',
    component: () => import('@/views/Static/Requirements.vue')
  },
  {
    path: `/${ROUTE_NAMES.NOTES}`,
    name: 'Notes',
    component: () => import('@/views/Static/Notes.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
