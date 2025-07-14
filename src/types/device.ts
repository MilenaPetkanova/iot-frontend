export interface Device {
  id: number
  name: string
  type: 'Водомер' | 'Реле' | 'Сензор' | string
  status: 'online' | 'offline' | 'unknown'
  last_active: string // ISO date string, e.g. "2025-06-27T19:00:00Z"
}
