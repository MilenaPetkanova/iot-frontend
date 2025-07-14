<template>
  <header class="mb-8">
    <h1 class="u-heading-1 mb-2">{{ props.title }}</h1>
  </header>
</template>

<script setup tlang="ts">
const props = defineProps({
  title: String
})
</script>

<style lang="scss" scoped></style>
