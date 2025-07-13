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
      @click:row="onRowClick"
    >
      <template #item.last_active="{ item }">
        {{ formatDateToBG((item as Device).last_active) }}
      </template>

      <template #item.actions="{ item }">
        <v-btn icon @click.stop="openEditModal(item)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="isDialogOpen" max-width="500px" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h6">Редактиране на устройство</span>
        </v-card-title>

        <v-card-text>
          <v-form ref="editForm" v-model="formValid">
            <v-text-field
              v-model="editDevice.name"
              label="Име"
              :rules="[(v) => !!v || 'Името е задължително']"
              required
            />

            <v-select
              v-model="editDevice.type"
              :items="types"
              label="Тип"
              :rules="[(v) => !!v || 'Изберете тип']"
              required
            />

            <v-select
              v-model="editDevice.status"
              :items="statuses"
              label="Статус"
              :rules="[(v) => !!v || 'Изберете статус']"
              required
            />
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn text @click="isDialogOpen = false">Затвори</v-btn>
          <v-btn color="primary" :disabled="!formValid" @click="saveDevice"
            >Запази</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar.show" :timeout="3000" color="success">
      {{ snackbar.message }}
    </v-snackbar>
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
  { title: 'Последна активност', key: 'last_active' },
  { title: 'Действия', key: 'actions', sortable: false }
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

const onRowClick = (device: Device) => {
  // console.log('Clicked row:', device)
}

const isDialogOpen = ref(false)
const formValid = ref(false)
const editForm = ref()

const emptyDevice: Device = {
  id: 0,
  name: '',
  type: '',
  status: '',
  last_active: new Date().toISOString()
}

const editDevice = ref<Device>({ ...emptyDevice })

const openEditModal = (device: Device) => {
  editDevice.value = { ...device }
  isDialogOpen.value = true
}

const snackbar = ref({
  show: false,
  message: ''
})

const saveDevice = async () => {
  if (!editForm.value?.validate()) return

  try {
    console.log(editDevice.value)
    await store.updateDevice(editDevice.value)
    snackbar.value.message = 'Редакритано беше успешно!'
    snackbar.value.show = true
    isDialogOpen.value = false
  } catch (err) {
    snackbar.value.message = 'Грешка при запис!'
    snackbar.value.show = true
  }
}
</script>
