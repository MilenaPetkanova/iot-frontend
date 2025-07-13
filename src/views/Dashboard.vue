<template>
  <v-container class="py-16" fluid>
    <header class="mb-8">
      <h1 class="u-heading-1 mb-2">Dashboard</h1>
      <h2 class="u-heading-2 font-weight-light">Управление на устройства</h2>
    </header>

    <DeviceList />

    <DeviceEditModal />
  </v-container>
</template>

<script setup lang="ts">
import DeviceList from '@/components/Device/List.vue'
import DeviceEditModal from '@/components/Device/EditModal.vue'
</script>
