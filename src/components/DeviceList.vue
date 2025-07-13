<template>
  <div class="devide-list">
    <v-text-field
      v-model="search"
      label="Търси по име"
      prepend-icon="mdi-magnify"
      clearable
    />

    <div class="devide-list__filters d-flex gap-4 mb-4">
      <v-select
        v-model="selectedType"
        :items="types"
        label="Филтър по тип"
        clearable
      />
      <v-select
        v-model="selectedStatus"
        :items="statuses"
        label="Филтър по статус"
        clearable
      />
    </div>

    <v-data-table
      :headers="headers"
      :items="filteredDevices"
      item-value="id"
      class="elevation-1"
    >
      <template #item.last_active="{ item }">
        {{ formatDateToBG((item as Device).last_active) }}
      </template>
    </v-data-table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDeviceStore } from '@/stores/deviceStore'
import type { Device } from '@/types/device'
import { useDateFormat } from '@/composables/useDateFormat'

const store = useDeviceStore()
const { formatDateToBG } = useDateFormat()

const search = ref('')
const selectedType = ref('')
const selectedStatus = ref('')

const headers = [
  { title: 'Име', key: 'name' },
  { title: 'Тип', key: 'type' },
  { title: 'Статус', key: 'status' },
  { title: 'Последна активност', key: 'last_active' }
]

const types = computed(() => {
  const all = store.devices.map((device: Device) => device.type)
  return [...new Set(all)]
})

const statuses = ['online', 'offline', 'unknown']

const filteredDevices = computed(() =>
  store.devices.filter((device: Device) => {
    const matchesSearch = device.name
      .toLowerCase()
      .includes(search.value.toLowerCase())
    const matchesType = selectedType.value
      ? device.type === selectedType.value
      : true
    const matchesStatus = selectedStatus.value
      ? device.status === selectedStatus.value
      : true

    return matchesSearch && matchesType && matchesStatus
  })
)

onMounted(() => {
  store.fetchDevices()
})
</script>
