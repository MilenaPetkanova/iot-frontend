<template>
  <v-container fluid>
    <DeviceHeader title="Устройство" />
    <DeviceDetails />
  </v-container>
</template>

<script setup lang="ts">
import DeviceHeader from '@/components/Device/Header.vue'
import DeviceDetails from '@/components/Device/Details.vue'
</script>
