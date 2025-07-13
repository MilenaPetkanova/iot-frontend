import axios from 'axios'

export const getDevices = () => axios.get('http://localhost:3001/devices')

export const getDeviceById = (id: number) =>
  axios.get(`http://localhost:3001/devices/${id}`)

export const createDevice = (data: object) =>
  axios.post('http://localhost:3001/devices', data)

export const updateDevice = (id: number, data: object) =>
  axios.put(`http://localhost:3001/devices/${id}`, data)
