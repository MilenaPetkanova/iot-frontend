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
        :items="store.deviceTypes"
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
      @click:row="handleRowClick"
    >
      <template #item="{ item }">
        <tr @click="handleRowClick(item)">
          <td>{{ item.name }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.status }}</td>
          <td>{{ formatDateToBG(item.last_active) }}</td>
          <td>
            <v-btn @click.stop="openEditModal(item)"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { Device } from '@/types/device'
import { useDeviceStore } from '@/stores/deviceStore'
import { useDateFormat } from '@/composables/useDateFormat'
import { ROUTE_NAMES } from '@/constants/routes'

const store = useDeviceStore()
const router = useRouter()

const { formatDateToBG } = useDateFormat()

const search = ref('')
const selectedType = ref('')
const selectedStatus = ref('')

const headers = [
  { title: 'Име', key: 'name' },
  { title: 'Тип', key: 'type' },
  { title: 'Статус', key: 'status' },
  { title: 'Последна активност', key: 'last_active' },
  { title: 'Действия', key: 'actions', sortable: false }
]

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

const openEditModal = (device: Device) => {
  store.isEditModalOpen = true
  store.selectedDevice = { ...device }
}

const handleRowClick = (device: Device) => {
  router.push({
    path: `/${ROUTE_NAMES.DEVICES}/${device.id}`
  })
}
</script>

<style lang="scss" scoped>
tr:hover {
  cursor: pointer;
}

td,
th {
  vertical-align: middle;
}
</style>
