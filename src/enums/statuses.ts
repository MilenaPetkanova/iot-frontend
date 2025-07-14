export const DeviceStatus = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  UNKNOWN: 'unknown'
} as const

export type DeviceStatusType = (typeof DeviceStatus)[keyof typeof DeviceStatus]
