// src/api/deviceService.ts
import axios from 'axios'
import type { Device } from '@/types/device'

const BASE_URL = 'http://localhost:3001'
const DEVICES_ROUTE = '/devices'
const DEVICES_REDINGS_ROUTE = '/device_readings'

export const getDevices = async (): Promise<Device[]> => {
  const res = await axios.get(`${BASE_URL}${DEVICES_ROUTE}`)
  return res.data
}

export const getDeviceById = async (id: number): Promise<Device> => {
  const res = await axios.get(`${BASE_URL}${DEVICES_ROUTE}/${id}`)
  return res.data
}

export const updateDevice = async (device: Device): Promise<Device> => {
  const res = await axios.put(
    `${BASE_URL}${DEVICES_ROUTE}/${device.id}`,
    device
  )
  return res.data
}

export const getDeviceReadings = async (deviceId: number) => {
  const res = await axios.get(
    `${BASE_URL}${DEVICES_REDINGS_ROUTE}?device_id=${deviceId}`
  )
  return res.data
}
