// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import robotsTxt from "astro-robots-txt";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sungkargroup.id",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap(), robotsTxt()],
});
