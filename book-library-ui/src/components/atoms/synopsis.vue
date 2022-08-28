<script setup lang="ts">
withDefaults(defineProps<{ synopsis: string; limit?: number | null }>(), {
  limit: null
});
</script>

<template>
  <p v-if="limit" class="text-left">
    {{ `${synopsis.substring(0, Math.abs(limit))}...` }}
  </p>
  <p v-else class="text-left">
    {{ synopsis }}
  </p>
</template>
