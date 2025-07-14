<template>
  <v-app-bar absolute>
    <v-container fluid class="d-flex align-center justify-between">
      <v-app-bar-title class="cursor-pointer" @click="goHome">
        Устройства
      </v-app-bar-title>

      <!-- Desktop navigation -->
      <v-spacer />
      <v-row class="hidden-sm-and-down" align="center" justify="end">
        <v-btn
          v-for="(link, i) in navLinks"
          :key="i"
          :to="link.to"
          variant="plain"
        >
          {{ link.label }}
        </v-btn>
      </v-row>

      <!-- Mobile menu toggle -->
      <v-btn icon class="hidden-md-and-up" @click="drawer = true">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>

  <!-- Drawer for mobile -->
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
    disable-resize-watcher
    class="hidden-md-and-up"
  >
    <v-list>
      <v-list-item
        v-for="(link, i) in navLinks"
        :key="i"
        :to="link.to"
        @click="drawer = false"
        link
      >
        <v-list-item-title>{{ link.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const drawer = ref(false)

const goHome = () => {
  router.push({ name: 'devices' })
}

const navLinks = [
  { label: 'Задание', to: { name: 'DevicesList' } },
  { label: 'Бележки', to: { name: 'DevicesList' } },
  { label: 'Решение', to: { name: 'DevicesList' } }
]
</script>
