import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/pconline": {
        target: "https://whois.pconline.com.cn/ipJson.jsp?json=true",
        changeOrigin: true,
        rewrite: () => "/",
      },
      "/api/ipcn": {
        target: "https://my.ip.cn",
        changeOrigin: true,
        rewrite: () => "/",
      },
      "/api/ipsb": {
        target: "https://api.ip.sb/geoip",
        changeOrigin: true,
        rewrite: () => "/",
      },
      "/api/ip2location": {
        target: "https://api.ip2location.io",
        changeOrigin: true,
        rewrite: () => "/",
      },
    },
  },
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
