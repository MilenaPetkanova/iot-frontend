<template>
  <v-card class="rounded-m pa-4 pb-0 mb-6" v-if="store.selectedDevice">
    <v-row dense class="mb-8">
      <v-col cols="12" sm="12" class="mb-2">
        <v-label
          class="text-uppercase text-caption text-grey-lighten-1 letter-spacing w-100"
          >Тип</v-label
        >
        <div class="text-h6">
          {{ store.selectedDevice?.type || 'N/A' }}
        </div>
      </v-col>

      <v-col cols="12" sm="12" class="mb-2">
        <v-label
          class="text-uppercase text-caption text-grey-lighten-1 letter-spacing w-100"
        >
          Последна активност
        </v-label>
        <div class="text-h6">
          {{ formatDateTimeToBG(store.selectedDevice?.last_active) }}
        </div>
      </v-col>

      <v-col cols="12" sm="12" class="mb-4">
        <v-label
          class="text-uppercase text-caption text-grey-lighten-1 letter-spacing w-100 mb-2"
          >Статус</v-label
        >
        <v-chip :color="statusColor" class="text-white">
          {{ store.selectedDevice?.status || 'Unknown' }}
        </v-chip>
      </v-col>

      <v-col cols="12" sm="12" class="mb-2">
        <DeviceLineChart
          :deviceReadings="store.deviceReadings"
          v-if="store.deviceReadings"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDeviceStore } from '@/stores/deviceStore'
import DeviceLineChart from '@/components/Device/LineChart.vue'
import { useDateFormat } from '@/composables/useDateFormat'
import { DeviceStatus } from '@/enums/statuses'

const route = useRoute()
const store = useDeviceStore()

const { formatDateTimeToBG } = useDateFormat()

onMounted(async () => {
  const deviceId: number = Number(route.params.id)

  store.selectedDevice = await store.fetchDeviceById(deviceId)
  store.deviceReadings = await store.fetchDeviceReadings(deviceId)
})

const statusColor = computed(() => {
  switch (store.selectedDevice?.status) {
    case DeviceStatus.ONLINE:
      return 'green'
    case DeviceStatus.OFFLINE:
      return 'red'
    case DeviceStatus.UNKNOWN:
      return 'amber'
    default:
      return 'grey'
  }
})
</script>
