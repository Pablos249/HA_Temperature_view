import { defineConfig } from "vite";

export default defineConfig({
  build: { lib: { entry: "src/dom-heat-card.ts", formats: ["es"], fileName: () => "HA_Temperature_view.js" }, outDir: "dist", emptyOutDir: true, minify: "esbuild" },
  test: { environment: "jsdom", include: ["test/**/*.test.ts"] }
});
