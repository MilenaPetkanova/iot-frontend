<template>
  <v-app-bar color="primary" flat elevation="1" class="px-6">
    <v-toolbar-title class="text-h5">{{ title }}</v-toolbar-title>
    <slot />
    <!-- <v-btn @click="theme.toggle()" text="Toggle Light / Dark"></v-btn> -->
  </v-app-bar>
</template>

<script setup lang="ts">
// import { useTheme } from 'vuetify'
// const theme = useTheme()

// const title = '✨ IOT ✨'
const title = 'IOT'
</script>
