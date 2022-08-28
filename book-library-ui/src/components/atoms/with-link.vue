<script setup lang="ts">
defineProps<{ link: string }>();
</script>

<template>
  <router-link :to="link">
    <slot></slot>
  </router-link>
</template>
