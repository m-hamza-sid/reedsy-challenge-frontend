<script setup lang="ts">
import { IBook } from "~/contracts/data";
defineProps<{ books: Array<IBook> }>();
</script>

<template>
  <div>
    <template v-for="(content, index) in books" :key="content.slug">
      <div class="flex flex-row-reverse gap-4 p-4" :class="index % 2 === 0 ? 'bg-amber-50 dark:bg-stone-900' : ''">
        <slot name="content" v-bind="content" />
      </div>
    </template>
  </div>
</template>
