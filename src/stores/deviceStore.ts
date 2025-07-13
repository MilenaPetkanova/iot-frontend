import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Device } from '@/types/device'
import * as deviceService from '@/api/deviceService'

export const useDeviceStore = defineStore('device', () => {
  const devices = ref<Device[]>([])
  const isLoading = ref(false)

  const fetchDevices = async () => {
    isLoading.value = true
    try {
      const response = await deviceService.getDevices()
      devices.value = response
    } catch (error) {
      console.error('Error fetching devices:', error)
    } finally {
      isLoading.value = false
    }
  }

  const updateDevice = async (updatedDevice: Device) => {
    try {
      const savedDevice = await deviceService.updateDevice(updatedDevice)
      const index = devices.value.findIndex((d) => d.id === updatedDevice.id)
      if (index !== -1) {
        devices.value[index] = savedDevice
      }
    } catch (error) {
      console.error('Error updating device:', error)
    }
  }

  return {
    devices,
    isLoading,
    fetchDevices,
    updateDevice
  }
})
