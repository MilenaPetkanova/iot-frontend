import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as api from '@/api/deviceService'

export const useDeviceStore = defineStore('device', () => {
  const devices = ref([])
  const isLoading = ref(false)

  const fetchDevices = async () => {
    isLoading.value = true
    try {
      const res = await api.getDevices()
      devices.value = res.data
    } catch (err) {
      // eslint-disable-next-line no-undef
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  return { devices, isLoading, fetchDevices }
})
