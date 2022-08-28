<script setup lang="ts">
defineProps<{ content: string }>();
</script>

<template>
  <p class="text-left">{{ content }}</p>
</template>
