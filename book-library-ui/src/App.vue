<script setup lang="ts">
import { isDark, preferredDark } from "~/composables/dark";
import { BOOK_SERVICE } from "~/contracts/services";
import restBookService from "~/services/book";

provide(BOOK_SERVICE, restBookService);
useHead({
  title: "Reedsy Task",
  meta: [
    { name: "description", content: "Reedsy Task For Frontend Developer Position" },
    {
      name: "theme-color",
      content: computed(() => (isDark.value ? "#00aba9" : "#ffffff"))
    }
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: computed(() => (preferredDark.value ? "/favicon-dark.svg" : "/favicon.svg"))
    }
  ]
});
</script>

<template>
  <RouterView />
</template>
