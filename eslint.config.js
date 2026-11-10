import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import globals from "globals";

export default defineConfig(
  { ignores: ["dist/", ".astro/", "node_modules/", ".agents/", "public/"] },
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  astro.configs["jsx-a11y-recommended"],
  {
    files: ["*.config.{js,mjs,ts}", "scripts/**/*.{js,mjs}", "src/scripts/**/*.{js,mjs}"],
    languageOptions: { globals: { ...globals.node } },
  },
);
