<script setup lang="ts">
import { useBookStore } from "~/store/book";

const { search, reset } = useBookStore();
let term = $ref("");

const resetHandler = (e) => {
  e.preventDefault();
  term = "";
  reset();
};

const searchHandler = (e) => {
  e.preventDefault();
  if (term) {
    search(term);
  }
};
</script>

<template>
  <form class="flex flex-col gap-4 my-4 items-center">
    <input v-model="term" type="text" class="input w-1/3" placeholder="Search books" required />
    <div class="flex gap-4">
      <button class="btn w-max" @click="searchHandler">Search</button>
      <button class="btn w-max" @click="resetHandler">Reset</button>
    </div>
  </form>
</template>
