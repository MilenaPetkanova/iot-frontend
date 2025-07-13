<template>
  <v-app>
    <GeneralHeader></GeneralHeader>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import GeneralHeader from '@/components/General/Header.vue'
</script>
