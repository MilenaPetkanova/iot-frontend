<template>
  <v-app>
    <GeneralHeader></GeneralHeader>
    <v-main class="py-16">
      <router-view />
    </v-main>
    <GeneralFooter></GeneralFooter>
  </v-app>
</template>

<script setup lang="ts">
import GeneralHeader from '@/components/General/Header.vue'
import GeneralFooter from '@/components/General/Footer.vue'
</script>
