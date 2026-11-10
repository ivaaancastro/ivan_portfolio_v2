import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { iconNames } from "./utils/icons";

/**
 * Text in both site languages. `en` is optional so a new entry can be added before its
 * translation; until then the Spanish text is used as fallback.
 */
const localized = z.object({ es: z.string(), en: z.string().optional() });

/** Month as "YYYY-MM", used to place periods on the timeline. */
const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/);

/** One MDX file per project and language: src/content/projects/<lang>/<slug>.mdx */
const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: ["**/[^_]*.{md,mdx}", "!**/* 2.*"] }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortDesc: z.string(),
      tags: z.array(z.string()).min(1),
      cover: image(),
      link: z.url(),
      icon: z.enum(iconNames),
      featured: z.boolean().default(false),
      /** Position in the projects grid (ascending). */
      order: z.number().int(),
    }),
});

const experience = defineCollection({
  loader: file("src/content/experience.json"),
  schema: z.object({
    company: z.string(),
    role: localized,
    start: yearMonth,
    end: yearMonth.optional(),
    desc: localized,
    tags: z.array(z.string()),
    order: z.number().int(),
  }),
});

/** Studies, drawn with the jobs on the experience timeline. No `end` means in progress. */
const education = defineCollection({
  loader: file("src/content/education.json"),
  schema: z.object({
    title: localized,
    school: z.string(),
    start: yearMonth,
    end: yearMonth.optional(),
    desc: localized.optional(),
    order: z.number().int(),
  }),
});

/** "Herramientas que domino" in the About section. */
const stack = defineCollection({
  loader: file("src/content/stack.json"),
  schema: z.object({
    name: localized,
    desc: localized,
    icon: z.enum(iconNames),
    order: z.number().int(),
  }),
});

export const collections = { projects, experience, education, stack };
