import * as path from "path";
import { crx } from "@crxjs/vite-plugin";
import { defineConfig } from "vite";

import manifest from "./src/manifest";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: "build",
    rollupOptions: {
      input: {
        options: path.resolve("options.html"),
        popup: path.resolve("popup.html"),
      },
      output: {
        chunkFileNames: "assets/chunk-[hash].js",
      },
    },
  },
  plugins: [crx({ manifest })],
});
