<template>
  <v-card class="p-4 rounded-m" v-if="device">
    <v-row dense class="mb-8">
      <v-col cols="12" sm="6">
        <v-label class="font-weight-medium text-grey">Name</v-label>
        <div class="text-h6">
          {{ device?.name || 'N/A' }}
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <v-label class="font-weight-medium text-grey">Type</v-label>
        <div class="text-h6">
          {{ device?.type || 'N/A' }}
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <v-label class="font-weight-medium text-grey">Status</v-label>
        <v-chip :color="statusColor" class="text-white">
          {{ device?.status || 'Unknown' }}
        </v-chip>
      </v-col>

      <v-col cols="12" sm="6">
        <v-label class="font-weight-medium text-grey">Last Active</v-label>
        <div class="text-body-1">
          {{ formatDate(device?.last_active) }}
        </div>
      </v-col>
    </v-row>

    <div class="mb-8">
      <DeviceLineChart :deviceReadings="deviceReadings" v-if="deviceReadings" />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDeviceStore } from '@/stores/deviceStore'
import DeviceLineChart from '@/components/Device/LineChart.vue'
import type { Device } from '@/types/device'
import type { DeviceReading } from '@/types/deviceReading'

const route = useRoute()
const store = useDeviceStore()
const device = ref<Device | null>(null)
const deviceReadings = ref<DeviceReading[] | null>(null)

onMounted(async () => {
  const deviceId: number = Number(route.params.id)
  device.value = await store.fetchDeviceById(deviceId)
  console.log('device.value', device.value)
  deviceReadings.value = await store.fetchDeviceReadings(deviceId)
  console.log('read', deviceReadings.value)
})

const statusColor = computed(() => {
  switch (device.value?.status) {
    case 'online':
      return 'green'
    case 'offline':
      return 'red'
    case 'unknown':
      return 'amber'
    default:
      return 'grey'
  }
})

function formatDate(date: string | undefined): string {
  if (!date) return 'N/A'
  const d = new Date(date)
  return d.toLocaleString()
}
</script>

<style scoped>
.text-grey {
  color: #6b7280;
}
</style>
