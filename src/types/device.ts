import { DeviceStatusType } from '@/enums/deviceStatuses'

export interface Device {
  id: number
  name: string
  type: string
  status: DeviceStatusType
  last_active: string // ISO date string, e.g. "2025-06-27T19:00:00Z"
}
