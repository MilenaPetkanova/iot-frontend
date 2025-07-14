<template>
  <v-container class="py-16" fluid>
    <header class="mb-8">
      <!-- <v-btn variant="text" @click="$router.go(-1)"> назад </v-btn> -->
    </header>

    <DeviceDetails />
  </v-container>
</template>

<script setup lang="ts">
import DeviceDetails from '@/components/Device/Details.vue'
</script>

<style lang="scss" scoped></style>
