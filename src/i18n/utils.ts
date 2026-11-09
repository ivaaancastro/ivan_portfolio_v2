import { defaultLang, languages, type Lang } from "./config";
import { ui, type UIKey } from "./ui";

/** Language of the page being rendered, from Astro.currentLocale. */
export function getLang(currentLocale: string | undefined): Lang {
  return currentLocale && currentLocale in languages ? (currentLocale as Lang) : defaultLang;
}

/** Translator for one language; missing English strings fall back to Spanish (until F2.5b). */
export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui.es[key];
}

/**
 * Localised href for a route path ("" for home, "personal") or a home anchor ("#about").
 * pathFor("en", "personal") → "/en/personal", pathFor("es", "#about") → "/#about".
 */
export function pathFor(lang: Lang, path = ""): string {
  const base = lang === defaultLang ? "" : `/${lang}`;
  if (!path) return base || "/";
  if (path.startsWith("#")) return `${base || "/"}${path}`;
  return `${base}/${path.replace(/^\/+/, "")}`;
}

/** The same page in another language ("/en/personal", "es" → "/personal"). */
export function switchLangPath(pathname: string, target: Lang): string {
  const route = pathname.replace(/^\/(es|en)(?=\/|$)/, "").replace(/^\/+|\/+$/g, "");
  return pathFor(target, route);
}
