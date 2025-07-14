<template>
  <v-dialog v-model="store.isDetailsModalOpen" max-width="800">
    <v-card>
      <v-card-title class="text-h6">
        Детайли за устройство: {{ store.selectedDevice?.name }}
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="6"
            ><strong>Тип:</strong> {{ store.selectedDevice?.type }}</v-col
          >
          <v-col cols="6"
            ><strong>Статус:</strong> {{ store.selectedDevice?.status }}</v-col
          >
          <v-col cols="6"
            ><strong>Последна активност:</strong>
            {{ store.selectedDevice?.last_active }}</v-col
          >
        </v-row>

        <v-divider class="my-4" />

        <v-row>
          <v-col cols="12" md="6">
            <v-select
              v-model="selectedPeriod"
              :items="periods"
              label="Избери период"
              dense
            />
          </v-col>
        </v-row>

        <!-- <v-skeleton-loader v-if="loading" type="card" />
        <v-chart v-else :options="chartOptions" autoresize /> -->
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn @click="store.closeDetailsModal" color="primary">Затвори</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useDeviceStore } from '@/stores/deviceStore'
import type { DeviceReading } from '@/types/deviceReading'

const store = useDeviceStore()

const selectedPeriod = ref('7 дни')
const periods = ['1 ден', '7 дни', '30 дни']
// const chartOptions = ref({})

// watch(
//   () => props.deviceId,
//   async (id) => {
//     if (id !== null) {
//       loading.value = true
//       await store.fetchDeviceReadings(id)
//       // chartOptions.value = useChart(store.deviceReadings, selectedPeriod.value)
//       loading.value = false
//     }
//   },
//   { immediate: true }
// )
</script>
