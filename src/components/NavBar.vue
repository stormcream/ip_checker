<template>
  <!-- Navbar -->
  <header
    :class="[
      'sticky top-0 z-50 backdrop-blur border-b transition-colors',
      dark ? 'bg-gray-900/70 border-gray-800' : 'bg-white/80 border-gray-200',
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Left: Logo only -->
      <div class="flex items-center gap-2">
        <div
          :class="['w-8 h-8 rounded-xl', dark ? 'bg-white' : 'bg-black']"
        ></div>
        <span class="font-semibold text-lg">IP Insight</span>
      </div>

      <!-- Right: Nav + Theme (single button) -->
      <div class="flex items-center gap-4">
        <nav class="flex items-center gap-6 text-sm">
          <RouterLink to="/" class="font-medium">IP检测</RouterLink>
          <RouterLink to="/about" class="opacity-70 hover:opacity-100"
            >DNS检测</RouterLink
          >
        </nav>

        <button
          @click="toggleDark"
          class="px-3 py-2 text-sm rounded-xl border transition"
          :class="
            dark
              ? 'border-gray-700 hover:bg-gray-800'
              : 'border-gray-300 hover:bg-gray-100'
          "
        >
          {{ dark ? "🌙" : "☀️" }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useUiStore } from "@/stores/modules/ui.store";

const uiStore = useUiStore();

const dark = computed(() => uiStore.darkMode);

const toggleDark = () => {
  uiStore.toggleDarkMode();
};
</script>
