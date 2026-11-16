import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/homecore-card.js",
      formats: ["es"],
      fileName: () => "homecore-card.js",
    },
    outDir: "dist",
    emptyOutDir: true,
    minify: true,
  },
});
