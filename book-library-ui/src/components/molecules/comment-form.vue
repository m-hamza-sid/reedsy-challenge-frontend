<script setup lang="ts">
import dayjs from "dayjs";
import { IComment } from "~/contracts/data";

const { commentPress } = defineProps<{ commentPress: (comment: IComment) => void }>();

let commenterName = $ref("");
let comment = $ref("");

const handler = (e) => {
  e.preventDefault();
  const resetForm = () => {
    commenterName = "";
    comment = "";
  };

  if (commenterName && comment) {
    commentPress({
      user: {
        name: commenterName
      },
      content: comment,
      dateTime: dayjs()
    });
    resetForm();
  }
};
</script>

<template>
  <form class="flex flex-col gap-4 my-4">
    <input v-model="commenterName" type="text" class="input w-1/3 focus:" placeholder="Your Name" required />
    <textarea v-model="comment" class="input" placeholder="Enter comment" required></textarea>
    <button class="btn w-max" @click="handler">Comment</button>
  </form>
</template>
