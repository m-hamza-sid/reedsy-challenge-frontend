<script setup lang="ts">
const props = defineProps<{ upVoted: boolean }>();
const { t } = useI18n();

const alreadyUpvoted = $ref<boolean>(props.upVoted || false);
</script>
<template>
  <button class="btn" :disabled="alreadyUpvoted" @click="alreadyUpvoted = !alreadyUpvoted">
    {{ !alreadyUpvoted ? t("atoms.upvote-button") : t("atoms.upvoted-button") }}
  </button>
</template>
