<template>
  <header class="py-8">
    <h1 class="u-heading-1 mb-2">{{ props.title }}</h1>

    <v-btn variant="text" @click="goBack" v-if="props.hasBackBtn">
      <v-icon start>mdi-arrow-left</v-icon>
      Назад
    </v-btn>
  </header>
</template>

<script setup tlang="ts">
import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  hasBackBtn: Boolean
})

const router = useRouter()
const goBack = () => router.back()
</script>

<style lang="scss" scoped></style>
