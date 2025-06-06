import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: path.resolve(__dirname, "wcs/simplelayout/browser/static/js/dist"),
    lib: {
      entry: path.resolve(
        __dirname,
        "wcs/simplelayout/browser/static/js/src/main.js"
      ),
      name: "Simplelayout",
      fileName: (format) => `simplelayout.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn"t be bundled
      // into your library
      external: ["bootstrap", "tinyMCE"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          bootstrap: "bootstrap",
          tinyMCE: "tinyMCE",
        },
      },
    },
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      "@": fileURLToPath(
        new URL("./wcs/simplelayout/browser/static/js/src", import.meta.url)
      ),
    },
  },
});
