<script setup lang="ts">
defineProps<{ rating: string }>();
</script>
<template>
  <span v-if="rating"> ({{ rating }} / 10) </span>
</template>
