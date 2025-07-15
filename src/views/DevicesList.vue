<template>
  <v-container>
    <ViewTitle title="Устройства" />
    <DeviceList />
    <DeviceEditModal />

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
import DeviceList from '@/components/Device/List.vue'
import DeviceEditModal from '@/components/Device/EditModal.vue'
import { useDeviceStore } from '@/stores/deviceStore'
const store = useDeviceStore()
</script>
