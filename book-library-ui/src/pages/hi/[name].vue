<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
const { t } = useI18n()

</script>

<template>
  <div>
    {{ t("intro.hi", { name: props.name }) }}

    <div>
      <button
        btn m="3 t6" text-sm
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
