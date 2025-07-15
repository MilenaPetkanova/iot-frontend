<template>
  <v-container>
    <ViewTitle :title="store.selectedDevice?.name" hasBackBtn />
    <DeviceDetails />

    <v-overlay
      :model-value="store.isLoading"
      class="align-center justify-center"
    >
      <v-progress-circular indeterminate color="primary" size="64" />
    </v-overlay>
  </v-container>
</template>

<script setup lang="ts">
import ViewTitle from '@/components/General/ViewTitle.vue'
import DeviceDetails from '@/components/Device/Details.vue'
import { useDeviceStore } from '@/stores/deviceStore'
const store = useDeviceStore()
</script>
