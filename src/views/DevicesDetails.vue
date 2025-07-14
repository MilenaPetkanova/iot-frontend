<template>
  <v-container>
    <ViewTitle title="Устройство" hasBackBtn />
    <DeviceDetails />
  </v-container>
</template>

<script setup lang="ts">
import ViewTitle from '@/components/General/ViewTitle.vue'
import DeviceDetails from '@/components/Device/Details.vue'
</script>
