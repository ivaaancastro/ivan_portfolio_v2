import { getCollection, type CollectionEntry } from "astro:content";
import { defaultLang, type Lang } from "../i18n/config";

/** Text of a localized field, falling back to Spanish while a translation is missing. */
export type { Lang };

export function localize(value: { es: string; en?: string }, lang: Lang): string {
  return (lang === "en" && value.en) || value.es;
}

const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) =>
  a.data.order - b.data.order;

/**
 * Projects of one language (entries live in src/content/projects/<lang>/), sorted by `order`.
 * A project without a translation falls back to its Spanish entry.
 */
export async function getProjects(lang: Lang): Promise<CollectionEntry<"projects">[]> {
  const all = await getCollection("projects");
  const ofLang = (l: Lang) => all.filter(({ id }) => id.startsWith(`${l}/`));
  const translated = new Map(ofLang(lang).map((entry) => [projectSlug(entry), entry]));
  const projects = ofLang(defaultLang).map(
    (fallback) => translated.get(projectSlug(fallback)) ?? fallback,
  );
  return projects.sort(byOrder);
}

/** Slug of a project entry without the language folder ("es/ficfit" → "ficfit"). */
export function projectSlug(entry: CollectionEntry<"projects">): string {
  return entry.id.replace(/^[a-z]{2}\//, "");
}

export async function getExperience(): Promise<CollectionEntry<"experience">[]> {
  return (await getCollection("experience")).sort(byOrder);
}

export async function getStack(): Promise<CollectionEntry<"stack">[]> {
  return (await getCollection("stack")).sort(byOrder);
}
