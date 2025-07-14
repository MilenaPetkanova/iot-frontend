<template>
  <v-card class="p-4 rounded-m" v-if="device">
    <v-row dense class="mb-8">
      <v-col cols="12" sm="6">
        <v-label class="font-weight-medium text-grey-lighten-1">Name</v-label>
        <div class="text-h6">
          {{ device?.name || 'N/A' }}
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <v-label class="font-weight-medium text-grey-lighten-1">Type</v-label>
        <div class="text-h6">
          {{ device?.type || 'N/A' }}
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <v-label class="font-weight-medium text-grey-lighten-1">Status</v-label>
        <v-chip :color="statusColor" class="text-white">
          {{ device?.status || 'Unknown' }}
        </v-chip>
      </v-col>

      <v-col cols="12" sm="6">
        <v-label class="font-weight-medium text-grey-lighten-1"
          >Last Active</v-label
        >
        <div class="text-body-1">
          {{ formatDateToBG(device?.last_active) }}
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
import { useDateFormat } from '@/composables/useDateFormat'

const route = useRoute()
const store = useDeviceStore()

const { formatDateToBG } = useDateFormat()

const device = ref<Device | null>(null)
const deviceReadings = ref<DeviceReading[] | null>(null)

onMounted(async () => {
  const deviceId: number = Number(route.params.id)

  device.value = await store.fetchDeviceById(deviceId)
  deviceReadings.value = await store.fetchDeviceReadings(deviceId)
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
</script>
