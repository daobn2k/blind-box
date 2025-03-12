import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import ResizeImage from "vite-plugin-resize-image/vite";
import MinifyCssModule from "vite-minify-css-module/vite";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";

import path from "path";
export default defineConfig(({ mode }) => {
  const isDev = mode !== "production";

  return {
    plugins: [
      manualChunksPlugin(),
      react(),
      // ResizeImage({
      //   mode: "sharp",
      //   cache: false,
      //   compress: {
      //     jpg: {
      //       quality: 70,
      //     },
      //     jpeg: {
      //       quality: 70,
      //     },
      //     png: {
      //       quality: 70,
      //     },
      //     webp: {
      //       quality: 70,
      //     },
      //   },
      //   conversion: [
      //     { from: "jpeg", to: "webp" },
      //     { from: "png", to: "webp" },
      //     { from: "jpg", to: "webp" },
      //     { from: "webp", to: "webp" },
      //   ],
      // }),
      MinifyCssModule({
        cleanCSS: {
          level: {
            2: {
              mergeSemantically: true,
              restructureRules: true,
            },
          },
        },
      }),
    ],
    css: {
      devSourcemap: isDev,
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
  };
});
