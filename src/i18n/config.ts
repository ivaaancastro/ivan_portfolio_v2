/** Site languages. Spanish is the default and has no URL prefix; English lives under /en. */
export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

/** Label of the link that switches to each language, written in that language. */
export const switchLabels: Record<Lang, string> = {
  es: "Leer esta página en español",
  en: "Read this page in English",
};

export const ogLocales: Record<Lang, string> = { es: "es_ES", en: "en_US" };

/**
 * Languages shown to visitors and search engines. A language left out of this list is still
 * built, but its pages are noindex, out of the sitemap and hreflang, and not in the selector.
 */
export const publishedLangs: readonly Lang[] = ["es", "en"];

export function isPublished(lang: Lang): boolean {
  return publishedLangs.includes(lang);
}

/** Language of a URL pathname ("/en/personal" → "en"). */
export function langFromPath(pathname: string): Lang {
  const segment = pathname.split("/")[1];
  return segment in languages && segment !== defaultLang ? (segment as Lang) : defaultLang;
}
