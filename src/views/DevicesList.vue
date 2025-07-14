<template>
  <v-container>
    <DeviceHeader title="Устройства" />
    <DeviceList />
    <DeviceEditModal />
  </v-container>
</template>

<script setup lang="ts">
import DeviceHeader from '@/components/Device/Header.vue'
import DeviceList from '@/components/Device/List.vue'
import DeviceEditModal from '@/components/Device/EditModal.vue'
</script>
