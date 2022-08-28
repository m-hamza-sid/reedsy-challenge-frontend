<script setup lang="ts">
import useIsoQuery from "~/composables/useIsoQuery";
import { BOOK_SERVICE, IBookService } from "~/contracts/services";

const props = defineProps<{ slug: string }>();
const router = useRouter();
const { t } = useI18n();
const { getBook } = inject(BOOK_SERVICE) as IBookService;

const { isLoading, isError, data: book, error } = useIsoQuery("todos", () => getBook({ slug: props.slug }));
</script>

<template>
  <span v-if="isLoading">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <book-single-detail-view v-else v-bind="book" />
  <button class="btn" @click="router.back()">{{ t("button.back") }}</button>
</template>

<route lang="yaml">
meta:
  layout: single
</route>
