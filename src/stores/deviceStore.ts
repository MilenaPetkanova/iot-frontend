import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Device } from '@/types/device'
import * as deviceService from '@/api/deviceService'

export const useDeviceStore = defineStore('device', () => {
  const devices = ref<Device[]>([])
  const isLoading = ref(false)
  const isModalOpen = ref(false)
  const selectedDevice = ref<Device | null>(null)

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
      closeModal()
    } catch (error) {
      console.error('Error updating device:', error)
    }
  }

  function openModal(device: Device | null = null) {
    selectedDevice.value = device
    isModalOpen.value = true
  }

  function closeModal() {
    isModalOpen.value = false
    selectedDevice.value = null
  }

  const deviceTypes = computed(() => {
    const all = devices.value.map((device: Device) => device.type)
    return [...new Set(all)]
  })

  return {
    devices,
    isLoading,
    fetchDevices,
    updateDevice,
    isModalOpen,
    selectedDevice,
    openModal,
    closeModal,
    deviceTypes
  }
})
