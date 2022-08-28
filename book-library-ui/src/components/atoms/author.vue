<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
  <div class="text-left">{{ name }}</div>
</template>
