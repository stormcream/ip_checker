import { defineStore } from "pinia";
import type { IpResults } from "@/types/ip";

export const useIPStore = defineStore("ip", {
  state: (): IpResults => ({
    ipResults: [],
  }),
  getters: {
    getIpResults: (state) => state.ipResults,
  },
  actions: {
    setIpResults(results: IpResults) {
      this.ipResults = results.ipResults;
    },
  },
});
