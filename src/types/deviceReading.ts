export interface DeviceReading {
  id: number
  device_id: number
  timestamp: string // ISO date string, e.g. "2025-06-27T19:00:00Z"
  value: number
}
