<script setup lang="ts">
import { Ref } from "vue";

type Props = {
  goToNextPage: () => void;
  goToBackPage: () => void;
  goToPage: (page: number) => void;
  getCurrentPage: () => number;
  perPage: Ref<number>;
  totalPages: Ref<number>;
};
defineProps<Props>();

// const totalPages = computed(() =>
//   Math.ceil((props.totalItems as unknown as number) / (props.perPage as unknown as number))
// );
</script>

<template>
  <nav class="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
    <a
      data-test-id="pg-step-first"
      :class="getCurrentPage() === 1 ? 'cursor-not-allowed' : 'cursor-pointer'"
      class="pagination-step pagination-step-director rounded-l-md"
      @click="goToBackPage"
    >
      <span class="sr-only">Previous</span>
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
    <a
      v-for="item in totalPages"
      :key="item"
      :class="
        item === getCurrentPage()
          ? 'z-10 border border-amber-500 dark:border-amber-400/60 bg-amber-50 dark:bg-stone-900 text-amber-400'
          : 'pagination-step'
      "
      data-test-id="pg-step"
      class="px-4 py-2 text-sm font-medium"
      href="#"
      @click="() => goToPage(item)"
    >
      {{ item }}
    </a>
    <a
      data-test-id="pg-step-last"
      :class="getCurrentPage() === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'"
      class="pagination-step pagination-step-director rounded-r-md"
      @click="goToNextPage"
    >
      <span class="sr-only">Next</span>
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  </nav>
</template>

<style>
.pagination-step {
  @apply relative inline-flex items-center
  border border-gray-300 dark:border-stone-600
  bg-white hover:bg-gray-50 dark:bg-stone-900
  text-sm font-medium text-gray-500 dark:text-gray-200;
}
.pagination-step-director {
  @apply px-2 py-2;
}
</style>
