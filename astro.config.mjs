// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import tunnel from "astro-tunnel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    tunnel({
      url: "http://0.0.0.0:4321",
      port: 4321,
      acceptCloudflareNotice: true,
    }),
  ],
});
