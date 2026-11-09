import { getCollection, type CollectionEntry } from "astro:content";

export type Lang = "es" | "en";

/** Text of a localized field, falling back to Spanish while a translation is missing. */
export function localize(value: { es: string; en?: string }, lang: Lang): string {
  return (lang === "en" && value.en) || value.es;
}

const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) =>
  a.data.order - b.data.order;

/** Projects of one language (entries live in src/content/projects/<lang>/), sorted by `order`. */
export async function getProjects(lang: Lang): Promise<CollectionEntry<"projects">[]> {
  const entries = await getCollection("projects", ({ id }) => id.startsWith(`${lang}/`));
  return entries.sort(byOrder);
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
