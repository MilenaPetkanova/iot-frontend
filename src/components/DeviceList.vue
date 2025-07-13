<script setup>
import { onMounted } from 'vue'
import { useDeviceStore } from '@/stores/deviceStore.ts'

const deviceStore = useDeviceStore()

onMounted(() => {
  deviceStore.fetchDevices()
})
</script>

<template>
  <div>
    <h2>Списък с устройства</h2>

    <div v-if="deviceStore.isLoading">Зареждане...</div>

    <div v-else-if="deviceStore.devices.length === 0">Няма устройства</div>

    <ul v-else>
      <li v-for="device in deviceStore.devices" :key="device.id">
        <strong>{{ device.name }}</strong> – {{ device.type }} –
        {{ device.status }} – {{ device.lastActivity }}
      </li>
    </ul>
  </div>
</template>
