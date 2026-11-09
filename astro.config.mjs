// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { isPublished, langFromPath, publishedLangs } from "./src/i18n/config.ts";
import { switchLangPath } from "./src/i18n/utils.ts";

const site = "https://ivan-portfolio-v2.vercel.app";
const sitemapLocales = { es: "es-ES", en: "en-US" };

// https://astro.build/config
export default defineConfig({
  site,
  // Internal links use /personal (no trailing slash); keep canonical URLs and sitemap consistent.
  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss()],
  },

  // Spanish at the root, English under /en (see src/i18n/).
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    react(),
    sitemap({
      // Languages that are not published yet stay out of the sitemap.
      filter: (page) => isPublished(langFromPath(new URL(page).pathname)),
      i18n: { defaultLocale: "es", locales: sitemapLocales },
      // The i18n option only pairs URLs that differ by the /en prefix. Pages with a translated
      // segment (/proyectos/x ↔ /en/projects/x) get their alternates from switchLangPath.
      serialize(item) {
        if (item.links?.length || publishedLangs.length < 2) return item;
        const { pathname } = new URL(item.url);
        const links = publishedLangs.map((lang) => ({
          lang: sitemapLocales[lang],
          url: new URL(switchLangPath(pathname, lang), site).href.replace(/\/$/, ""),
        }));
        return { ...item, links };
      },
    }),
    mdx(),
  ],

  // Self-hosted Inter (downloaded from Fontsource at build time, served from our domain).
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],
});
