<script setup lang="ts">
import { IBook } from "~/contracts/data";

const props = defineProps<IBook>();
const link = `/books/${props.slug}`;
</script>

<template>
  <div class="flex flex-row-reverse gap-4 p-4">
    <with-link :link="link">
      <cover :src="cover" />
    </with-link>
    <div class="flex flex-1 flex-col gap-4 justify-between">
      <div class="flex flex-col items-start gap-1.5">
        <div class="flex gap-2">
          <with-link :link="link">
            <book-title :title="title" />
          </with-link>
          <rating class="self-center" :rating="rating" />
        </div>
        <author :name="author" />
      </div>
      <synopsis :synopsis="synopsis" :limit="200" />
      <div class="flex flex-row gap-2 items-center">
        <upvote :up-voted="upVoted" />
        <upvote-count :up-vote-count="upVotes" />
      </div>
    </div>
  </div>
</template>
