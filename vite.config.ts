import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "./", // ✅ Corrige o carregamento de CSS e assets no Render
  plugins: [react()],
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "client", "dist"),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@assets": path.resolve(__dirname, "client", "public", "assets"),
    },
  },
  server: {
    open: true,
  },
});
