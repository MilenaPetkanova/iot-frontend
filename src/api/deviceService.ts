import axios from 'axios'
import type { Device } from '@/types/device'

export const getDevices = () => axios.get('http://localhost:3001/devices')

export const getDeviceById = (id: number) =>
  axios.get(`http://localhost:3001/devices/${id}`)

export const createDevice = (data: Device) =>
  axios.post('http://localhost:3001/devices', data)

export const updateDevice = (id: number, data: Device) =>
  axios.put(`http://localhost:3001/devices/${id}`, data)
