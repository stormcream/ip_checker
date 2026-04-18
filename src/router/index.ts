// router/index.ts

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "IP",
    component: () => import("@/views/IP/index.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
