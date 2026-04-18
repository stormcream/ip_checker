<template>
  <div
    :class="[
      'min-h-screen transition-colors duration-300',
      dark ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800',
    ]"
  >
    <!-- Navbar -->
    <NavBar />

    <!-- Main Content -->
    <RouterView />

    <!-- Footer -->
    <footer
      :class="[
        'border-t py-6 text-center text-sm',
        dark
          ? 'border-gray-800 text-gray-500'
          : 'border-gray-200 text-gray-500',
      ]"
    >
      © 2026 IP Insight
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import NavBar from "@/components/NavBar.vue";
import { useUiStore } from "@/stores/modules/ui.store";
import { RouterView } from "vue-router";
const uiStore = useUiStore();
const dark = computed(() => uiStore.darkMode);

onMounted(() => {
  const prefersDark = localStorage.getItem("theme");
  if (prefersDark && prefersDark === "dark") {
    uiStore.setDarkMode(true);
  } else {
    uiStore.setDarkMode(false);
  }
});
</script>

<style></style>
