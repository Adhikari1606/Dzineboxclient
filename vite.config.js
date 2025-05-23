import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@fonts": path.resolve("src/assets/fonts"), // Adjust path as needed
    },
  },
  build:{
    chunkSizeWarningLimit: 1600,
  }
});
