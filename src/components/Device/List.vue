<template>
  <div class="devide-list">
    <v-row>
      <v-col cols="12" md="3">
        <v-select
          v-model="selectedType"
          :items="store.deviceTypes"
          label="Филтър по тип"
          clearable
        />
      </v-col>
      <v-col cols="12" md="3">
        <v-select
          v-model="selectedStatus"
          :items="statuses"
          label="Филтър по статус"
          clearable
        />
      </v-col>
      <v-spacer />
      <v-col cols="12" md="5">
        <v-text-field
          v-model="search"
          label="Търси по име"
          prepend-icon="mdi-magnify"
          clearable
        />
      </v-col>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="filteredDevices"
      item-value="id"
      class="devices-list__table elevation-1"
      @click:row="handleRowClick"
    >
      <template #item="{ item }">
        <tr @click="handleRowClick(item)" class="cursor-pointer">
          <td>{{ item.name }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.status }}</td>
          <td>{{ formatDateTimeToBG(item.last_active) }}</td>
          <td>
            <v-btn @click.stop="openEditModal(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
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
import { DeviceStatus } from '@/enums/deviceStatuses'
import { ROUTE_NAMES } from '@/constants/routes'

const store = useDeviceStore()
const router = useRouter()

const { formatDateTimeToBG } = useDateFormat()

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

const statuses = [
  DeviceStatus.ONLINE,
  DeviceStatus.OFFLINE,
  DeviceStatus.UNKNOWN
]

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
  console.log(store.deviceTypes)
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
::v-deep .v-data-table thead th {
  vertical-align: middle;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.4px;
  opacity: 0.8;
}
</style>
