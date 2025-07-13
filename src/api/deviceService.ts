// src/api/deviceService.ts
import axios from 'axios'
import type { Device } from '@/types/device'

const BASE_URL = 'http://localhost:3001/devices'

export const getDevices = async (): Promise<Device[]> => {
  const res = await axios.get(BASE_URL)
  return res.data
}

export const getDeviceById = async (id: number): Promise<Device> => {
  const res = await axios.get(`${BASE_URL}/${id}`)
  return res.data
}

export const updateDevice = async (device: Device): Promise<Device> => {
  const res = await axios.put(`${BASE_URL}/${device.id}`, device)
  return res.data
}
