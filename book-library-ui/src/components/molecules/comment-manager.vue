<script setup lang="ts">
import { IComment } from "~/contracts/data";

const { t } = useI18n();

const comments = $ref<IComment[]>([]);
</script>

<template>
  <div class="shadow p-4 mb-4">
    <h6 v-if="comments.length" class="text-xl mb-2 text-left">{{ t("pages.book-single.comments") }}</h6>
    <div class="flex flex-col items-start" :class="comments.length ? 'my-4' : ''">
      <div v-for="({ content, user }, index) in comments" :key="index" class="flex flex-col items-start mb-2">
        <p class="text-xs">{{ user.name }}</p>
        <p class="text-base">{{ content }}</p>
      </div>
    </div>
    <comment-form :comment-press="(comment) => comments.push(comment)" />
  </div>
</template>
