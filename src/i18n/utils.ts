import { defaultLang, languages, routeSegments, type Lang } from "./config";
import { ui, type UIKey } from "./ui";

/** Language of the page being rendered, from Astro.currentLocale. */
export function getLang(currentLocale: string | undefined): Lang {
  return currentLocale && currentLocale in languages ? (currentLocale as Lang) : defaultLang;
}

/** Translator for one language; missing strings fall back to Spanish. */
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

/** Case study page of a project: projectPath("en", "forma") → "/en/projects/forma". */
export function projectPath(lang: Lang, slug: string): string {
  return pathFor(lang, `${routeSegments.projects[lang]}/${slug}`);
}

/**
 * The same page in another language ("/en/personal", "es" → "/personal").
 * Translated segments are swapped too ("/proyectos/forma", "en" → "/en/projects/forma").
 */
export function switchLangPath(pathname: string, target: Lang): string {
  const route = pathname.replace(/^\/(es|en)(?=\/|$)/, "").replace(/^\/+|\/+$/g, "");
  const [first = "", ...rest] = route.split("/");
  const segments = Object.values(routeSegments).find((bySegment) =>
    (Object.values(bySegment) as string[]).includes(first),
  );
  const translated = segments ? [segments[target], ...rest].join("/") : route;
  return pathFor(target, translated);
}
