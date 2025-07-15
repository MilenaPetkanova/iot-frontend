<template>
  <div class="line-chart">
    <v-label
      class="text-uppercase text-caption text-grey-lighten-1 letter-spacing mb-3"
    >
      История на състоянито
    </v-label>
    <v-row>
      <!-- Start Date Field -->
      <v-col cols="12" md="6">
        <v-menu
          v-model="startMenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template #activator="{ props }">
            <v-text-field
              v-model="startDateFormatted"
              label="Начална дата"
              readonly
              v-bind="props"
              prepend-inner-icon="mdi-calendar"
            />
          </template>

          <v-date-picker
            v-model="startDate"
            @update:model-value="startMenu = false"
            first-day-of-week="1"
            :min="minDate"
            :max="endDate ?? maxDate"
          />
        </v-menu>
      </v-col>

      <!-- End Date Field -->
      <v-col cols="12" md="6">
        <v-menu
          v-model="endMenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template #activator="{ props }">
            <v-text-field
              v-model="endDateFormatted"
              label="Крайна дата"
              readonly
              v-bind="props"
              prepend-inner-icon="mdi-calendar"
            />
          </template>

          <v-date-picker
            v-model="endDate"
            @update:model-value="endMenu = false"
            first-day-of-week="1"
            :min="startDate ?? minDate"
            :max="maxDate"
          />
        </v-menu>
      </v-col>
    </v-row>

    <LineChart v-bind="lineChartProps" />
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, watchEffect } from 'vue'
import { Chart, registerables } from 'chart.js'
import { LineChart, useLineChart } from 'vue-chart-3'
import 'chartjs-adapter-date-fns'
import type { DeviceReading } from '@/types/deviceReading'
import { useDateFormat } from '@/composables/useDateFormat'

Chart.register(...registerables)

export default defineComponent({
  name: 'DeviceLineChart',
  components: {
    LineChart
  },
  props: {
    deviceReadings: {
      type: Array as () => DeviceReading[],
      required: true
    }
  },
  setup(props) {
    const startMenu = ref(false)
    const endMenu = ref(false)

    const startDate = ref<Date | null>(null)
    const endDate = ref<Date | null>(null)

    const { formatDateToBG } = useDateFormat()

    const startDateFormatted = computed(() => formatDateToBG(startDate.value))
    const endDateFormatted = computed(() => formatDateToBG(endDate.value))

    const minDate = computed(() => {
      if (!props.deviceReadings.length) return null
      return props.deviceReadings.reduce(
        (min, r) => (r.timestamp < min ? r.timestamp : min),
        props.deviceReadings[0].timestamp
      )
    })

    const maxDate = computed(() => {
      if (!props.deviceReadings.length) return null
      return props.deviceReadings.reduce(
        (max, r) => (r.timestamp > max ? r.timestamp : max),
        props.deviceReadings[0].timestamp
      )
    })

    watchEffect(() => {
      if (props.deviceReadings.length && !startDate.value && !endDate.value) {
        startDate.value = new Date(minDate.value as string)
        endDate.value = new Date(maxDate.value as string)
      }
    })

    const filteredReadings = computed(() => {
      if (!startDate.value || !endDate.value) return props.deviceReadings

      const start = new Date(startDate.value).getTime()
      const end = new Date(endDate.value).getTime()

      return props.deviceReadings.filter((r) => {
        const t = new Date(r.timestamp).getTime()
        return t >= start && t <= end
      })
    })

    const chartData = computed(() => ({
      datasets: [
        {
          label: 'Стойности на устройството',
          data: filteredReadings.value.map((r) => ({
            x: r.timestamp,
            y: r.value
          })),
          fill: true,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          tension: 0.3,
          pointRadius: 3,
          pointHoverRadius: 6
        }
      ]
    }))

    const chartOptions = computed(() => ({
      responsive: true,
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'hour',
            displayFormats: {
              hour: 'dd MMM, HH:mm'
            }
          },
          title: {
            display: true,
            text: 'Време'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Стойност'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx: any) => `Стойност: ${ctx.raw.y}`
          }
        }
      }
    }))

    const { lineChartProps, lineChartRef } = useLineChart({
      chartData,
      options: chartOptions
    })

    return {
      startMenu,
      endMenu,
      startDate,
      endDate,
      startDateFormatted,
      endDateFormatted,
      minDate,
      maxDate,
      lineChartProps,
      lineChartRef
    }
  }
})
</script>
