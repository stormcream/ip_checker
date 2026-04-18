<template>
  <div
    v-for="(item, index) in ipResults"
    :key="index"
    :class="
      dark +
      ' transform transition duration-300 hover:-translate-y-1 hover:shadow-lg'
    "
  >
    <!-- top -->
    <div class="flex justify-between items-center mb-3">
      <p class="text-sm opacity-70">{{ item.source_name }}</p>
      <span
        class="text-xs px-2 py-1 rounded-lg"
        :class="
          item.source_type === IpProviderRegion.CN
            ? 'bg-green-500/10 text-green-500'
            : 'bg-blue-500/10 text-blue-400'
        "
      >
        {{ item.source_type === IpProviderRegion.CN ? "国内" : "国外" }}
      </span>
    </div>

    <!-- IP -->
    <p class="text-2xl md:text-3xl font-semibold tracking-wide mb-2">
      {{ item.ip }}
    </p>

    <!-- location -->
    <p class="text-sm opacity-60 mb-4">
      {{ item.country }} {{ item.province }} {{ item.city }} {{ item.isp }}
    </p>

    <!-- bottom -->
    <div class="flex items-center justify-between text-sm" v-show="false">
      <div class="flex items-center gap-3">
        <span class="opacity-60">{{ item.latency }} ms</span>
        <span :class="statusColor(item.latency)" class="font-medium">
          {{ statusText(item.latency) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUiStore } from "@/stores";
import { useIPStore } from "@/stores";
import { IpProviderRegion } from "@/types/ip";

const uiStore = useUiStore();
const dark = computed(() => uiStore.darkModeClass);

const ipStore = useIPStore();
const ipResults = computed(() => ipStore.ipResults);

const statusText = (latency: number) => {
  if (latency < 80) return "良好";
  if (latency < 150) return "一般";
  return "较慢";
};

const statusColor = (latency: number) => {
  if (latency < 80) return "text-green-500";
  if (latency < 150) return "text-yellow-500";
  return "text-red-500";
};
</script>
