<template>
  <div v-for="i in 4" :key="i" :class="darkclass + ' animate-pulse'">
    <div class="flex justify-between mb-4">
      <div class="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div class="h-4 w-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
    </div>
    <div class="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
    <div class="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
    <div class="flex gap-3">
      <div class="h-4 w-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
      <div class="h-4 w-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useUiStore } from "@/stores/modules/ui.store";
const uiStore = useUiStore();
const darkclass = computed(() => uiStore.darkModeClass);
</script>
