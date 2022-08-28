<script setup lang="ts">
import { IBook } from "~/contracts/data";
import CommentManager from "~/components/molecules/comment-manager.vue";
defineProps<IBook>();
const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col gap-4 p-8 shadow my-8 dark:bg-stone-900 rounded">
    <div class="flex justify-between">
      <div class="flex flex-col items-start gap-1.5">
        <book-title :title="title" />
        <author :name="author" />
      </div>
      <div class="flex flex-col md:flex-row-reverse gap-2 items-start justify-end">
        <upvote class="self-stretch md:self-auto" :up-voted="upVoted" />
        <upvote-count :up-vote-count="upVotes" />
      </div>
    </div>
    <cover :src="cover" size="large" class="self-center" />
    <div class="flex flex-1 flex-col gap-4 justify-between">
      <h3 class="text-left text-xl font-bold">{{ t("pages.book-single.synopsis") }}</h3>
      <synopsis :synopsis="synopsis" />
    </div>
    <rating class="self-start" :rating="rating" />
  </div>
  <comment-manager />
</template>
