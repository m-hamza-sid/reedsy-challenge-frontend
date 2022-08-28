<script setup lang="ts">
const { t } = useI18n();
defineProps<{ upVoteCount: number | null }>();
</script>
<template>
  <span v-if="upVoteCount">
    {{ t("atoms.upvote-count.text") }} {{ upVoteCount }}
    {{ upVoteCount > 1 ? t("atoms.upvote-count.times-plural") : t("atoms.upvote-count.times-singular") }}
  </span>
</template>
