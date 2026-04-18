<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useUiStore } from "@/stores/modules/ui.store";
import { useIpProbe } from "@/composables/useIpProbe";
import SkeletonCard from "@/components/SkeletonCard.vue";
import IPCard from "@/components/IPCard.vue";

const uiStore = useUiStore();

const dark = computed(() => uiStore.darkMode);
const loading = computed(() => uiStore.loading);

const { run } = useIpProbe();
onMounted(() => {
  run();
});
</script>
<template>
  <!-- Title -->
  <section class="max-w-5xl mx-auto px-4 pt-8 pb-4 text-center">
    <h1 class="text-2xl md:text-3xl font-semibold mb-2">IP 检测结果</h1>
    <p :class="dark ? 'text-gray-400' : 'text-gray-500'">
      国内 2 个源 + 国外 2 个源
    </p>
  </section>

  <!-- Cards -->
  <section
    class="max-w-5xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 gap-5"
  >
    <!-- Skeleton -->
    <template v-if="loading">
      <SkeletonCard />
    </template>

    <!-- Real Cards -->
    <template v-else>
      <IPCard />
    </template>
  </section>
</template>
