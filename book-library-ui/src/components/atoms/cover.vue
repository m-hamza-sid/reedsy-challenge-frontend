<script setup lang="ts">
withDefaults(defineProps<{ src: string; size?: string | null }>(), {
  size: "small"
});
</script>

<template>
  <img class="rounded-lg" :class="size === 'small' ? 'w-32' : 'w-72'" :src="src" alt="" />
</template>
