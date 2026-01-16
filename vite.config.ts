import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/portfolio-frontend/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@scss": path.resolve(__dirname, "src/assets/scss"),
    },
  },
  server: {
    host: true,
    port: 5173,
    proxy: { "/api": "http://localhost:8080" }, // 개발 중 CORS 회피
  },
});
