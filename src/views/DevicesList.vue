<template>
  <v-container>
    <ViewTitle title="Устройства" />
    <DeviceList />
    <DeviceEditModal />
  </v-container>
</template>

<script setup lang="ts">
import ViewTitle from '@/components/General/ViewTitle.vue'
import DeviceList from '@/components/Device/List.vue'
import DeviceEditModal from '@/components/Device/EditModal.vue'
</script>
