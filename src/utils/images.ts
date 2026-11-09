import type { ImageMetadata } from "astro";

const files = import.meta.glob<{ default: ImageMetadata }>("../assets/img/*.{png,jpg,jpeg}", {
  eager: true,
});

/**
 * Look up an image in src/assets/img by file name without extension (e.g. "ficfit"),
 * to pass to <Image /> from astro:assets when the name comes from data.
 */
export function imageByName(name: string): ImageMetadata {
  const entry = Object.entries(files).find(([path]) =>
    path.replace(/^.*\//, "").startsWith(`${name}.`),
  );
  if (!entry) throw new Error(`[images] src/assets/img/${name}.* not found`);
  return entry[1].default;
}
