import { defineStore } from "pinia";
import type { UIConfig } from "@/types/ui";

export const useUiStore = defineStore("ui", {
  state: (): UIConfig => ({
    darkMode: false,
    loading: false,
  }),
  getters: {
    darkModeClass: (state) => {
      return state.darkMode
        ? "p-5 rounded-2xl bg-gray-800 border border-gray-700 shadow-sm"
        : "p-5 rounded-2xl bg-white border border-gray-200 shadow-sm";
    },
  },
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem("theme", this.darkMode ? "dark" : "light");
    },
    setLoading(loading: boolean) {
      this.loading = loading;
    },
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode;
    },
  },
});
