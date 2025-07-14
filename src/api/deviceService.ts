import axios from 'axios'
import type { Device } from '@/types/device'
import { ROUTE_NAMES } from '@/constants/routes'

export const getDevices = async (): Promise<Device[]> => {
  const res = await axios.get(
    `${ROUTE_NAMES.API_BASE_URL}${ROUTE_NAMES.API_DEVICES_ROUTE}`
  )
  return res.data
}

export const getDeviceById = async (id: number): Promise<Device> => {
  const res = await axios.get(
    `${ROUTE_NAMES.API_BASE_URL}${ROUTE_NAMES.API_DEVICES_ROUTE}/${id}`
  )
  return res.data
}

export const updateDevice = async (device: Device): Promise<Device> => {
  const res = await axios.put(
    `${ROUTE_NAMES.API_BASE_URL}${ROUTE_NAMES.API_DEVICES_ROUTE}/${device.id}`,
    device
  )
  return res.data
}

export const getDeviceReadings = async (deviceId: number) => {
  const res = await axios.get(
    `${ROUTE_NAMES.API_BASE_URL}${ROUTE_NAMES.API_DEVICE_READINGS_ROUTE}?device_id=${deviceId}`
  )
  return res.data
}
