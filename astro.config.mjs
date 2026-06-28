// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import indexnow from "astro-indexnow";

import { SITE_URL } from "./src/lib/site-config";
import {
  serializeSitemapItem,
  sitemapLastmodIntegration,
} from "./src/lib/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: true,
  },
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "id",
    locales: ["id", "en", "ar", "ms", "zh"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "id",
        locales: {
          id: "id-ID",
          en: "en-US",
          ar: "ar-SA",
          ms: "ms-MY",
          zh: "zh-CN",
        },
      },
      serialize: serializeSitemapItem,
    }),
    mdx(),
    indexnow({
      key: "9a02fa812af84613906d2cc898dc869a",
      enabled:
        process.env.NETLIFY === "true" && process.env.CONTEXT === "production",
    }),
    sitemapLastmodIntegration(),
  ],
});
