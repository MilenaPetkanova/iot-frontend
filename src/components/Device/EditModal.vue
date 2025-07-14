<template>
  <v-dialog v-model="store.isEditModalOpen" max-width="600px">
    <v-card>
      <v-card-title>Редакция на устройство</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="localDevice.name"
            label="Име"
            :rules="[rules.required]"
            required
          />
          <v-select
            v-model="localDevice.type"
            :items="store.deviceTypes"
            label="Тип"
          />
          <v-radio-group v-model="localDevice.status" label="Статус">
            <v-radio label="Онлайн" :value="DeviceStatus.ONLINE" />
            <v-radio label="Офлайн" :value="DeviceStatus.OFFLINE" />
            <v-radio label="Неизвестен" :value="DeviceStatus.UNKNOWN" />
          </v-radio-group>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn @click="store.closeEditModal()">Затвори</v-btn>
        <v-btn color="primary" @click="submit">Запази</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDeviceStore } from '@/stores/deviceStore'
import type { Device } from '@/types/device'
import { DeviceStatus } from '@/enums/statuses'

const store = useDeviceStore()

const emptyDevice: Device = {
  id: 0,
  name: '',
  type: '',
  status: 'unknown',
  last_active: new Date().toISOString()
}

const localDevice = ref<Device>(emptyDevice)

const valid = ref(false)
const form = ref()

const rules = {
  required: (v: string) => !!v || 'Полето е задължително'
}

watch(
  () => store.isEditModalOpen,
  (open) => {
    if (open && store.selectedDevice) {
      localDevice.value = { ...store.selectedDevice }
    } else {
      localDevice.value = emptyDevice
    }
  },
  { immediate: true }
)

function submit() {
  form.value?.validate()
  if (valid.value) {
    store.updateDevice({ ...localDevice.value })
  }
}
</script>
