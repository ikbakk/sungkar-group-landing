// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import robotsTxt from "astro-robots-txt";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import { SITE_URL } from "./src/lib/site-config";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap(), robotsTxt()],
});
