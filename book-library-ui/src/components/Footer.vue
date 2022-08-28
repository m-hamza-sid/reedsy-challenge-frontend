<script setup lang="ts">
import { isDark, toggleDark } from "~/composables/dark";
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="mt-6 text-xl">
    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <i-carbon-moon v-if="isDark" />
      <i-carbon-sun v-else />
    </button>

    <a class="mx-2 icon-btn" :title="t('button.toggle_langs')" @click="toggleLocales">
      <i-carbon-language />
    </a>
  </nav>
</template>
