<script setup lang="ts">
import { $ } from "vue/macros";
import { storeToRefs } from "pinia";
import { useBookStore } from "~/store/book";
import usePagination from "~/composables/usePagination";
import { BOOK_SERVICE } from "~/contracts/services";
import config from "~/config";

const bookStore = useBookStore();
const { setBooks } = bookStore;
const { books } = $(storeToRefs(bookStore));

const perPage = $ref(config.DEFAULT_PAGE_SIZE);
const { paginatedData, totalPages, goToBackPage, goToPage, goToNextPage, getCurrentPage } = usePagination(
  $$(books),
  $$(perPage)
);
const { t } = useI18n();

const bookService = inject(BOOK_SERVICE);
if (bookService) {
  setBooks(await bookService.getBooks());
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-4xl font-bold">{{ t("pages.book-list.title") }}</h1>
    <book-search />
  </div>
  <div class="flex flex-col">
    <book-list :books="paginatedData">
      <template #content="book">
        <book-single-list-view v-bind="book" />
      </template>
    </book-list>
    <pagination
      class="mt-4 self-center"
      :go-to-back-page="goToBackPage"
      :go-to-next-page="goToNextPage"
      :get-current-page="getCurrentPage"
      :go-to-page="goToPage"
      :paginated-data="paginatedData"
      :per-page="perPage"
      :total-pages="totalPages"
    />
  </div>
</template>
