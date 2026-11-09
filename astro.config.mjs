// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://ivan-portfolio-v2.vercel.app",
  // Internal links use /personal (no trailing slash); keep canonical URLs and sitemap consistent.
  trailingSlash: "never",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap(), mdx()],

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
