import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Device } from '@/types/device'
import type { DeviceReading } from '@/types/deviceReading'
import * as deviceService from '@/api/deviceService'
import { DeviceTypes } from '@/constants/deviceTypes'

export const useDeviceStore = defineStore('device', () => {
  const devices = ref<Device[]>([])
  const isLoading = ref(false)
  const isEditModalOpen = ref(false)
  const selectedDevice = ref<Device | null>(null)
  const deviceReadings = ref<DeviceReading[]>([])

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

  const fetchDeviceById = async (id: number) => {
    isLoading.value = true
    try {
      const response = await deviceService.getDeviceById(id)
      return response
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
      closeEditModal()
    } catch (error) {
      console.error('Error updating device:', error)
    }
  }

  const deviceTypes = computed(() => {
    return Object.values(DeviceTypes)
  })

  const fetchDeviceReadings = async (deviceId: number) => {
    try {
      const response = await deviceService.getDeviceReadings(deviceId)
      const sortedResponse = response.sort(
        (a: string, b: string) => new Date(a.timestamp) - new Date(b.timestamp)
      )
      return sortedResponse
    } catch (error) {
      console.error('Error fetching device readings:', error)
    }
  }

  function openEditModal(device: Device | null = null) {
    selectedDevice.value = device
    isEditModalOpen.value = true
  }

  function closeEditModal() {
    isEditModalOpen.value = false
  }

  return {
    devices,
    isLoading,
    fetchDevices,
    fetchDeviceById,
    updateDevice,
    isEditModalOpen,
    selectedDevice,
    deviceTypes,
    deviceReadings,
    fetchDeviceReadings,
    openEditModal,
    closeEditModal
  }
})
