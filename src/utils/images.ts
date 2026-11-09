import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/**
 * Build-time image optimisation for images that end up inside React islands,
 * where `<Image />` from astro:assets cannot be used directly.
 * In .astro files prefer `<Image />` / `<Picture />`.
 */

const files = import.meta.glob<{ default: ImageMetadata }>("../assets/img/*.{png,jpg,jpeg}", {
  eager: true,
});

/** Look up an image in src/assets/img by file name without extension (e.g. "ficfit"). */
export function imageByName(name: string): ImageMetadata {
  const entry = Object.entries(files).find(([path]) =>
    path.replace(/^.*\//, "").startsWith(`${name}.`),
  );
  if (!entry) throw new Error(`[images] src/assets/img/${name}.* not found`);
  return entry[1].default;
}

/** Serializable props for an optimised <img> in a React island. */
export interface ResponsiveImage {
  src: string;
  srcSet: string;
  width: number;
  height: number;
}

interface Options {
  widths: number[];
  /** Crop to this aspect ratio (width / height), e.g. 1 for square. */
  aspectRatio?: number;
}

export async function responsiveImage(
  name: string,
  { widths, aspectRatio }: Options,
): Promise<ResponsiveImage> {
  const source = imageByName(name);
  const maxWidth = Math.min(Math.max(...widths), source.width);
  const height = aspectRatio ? Math.round(maxWidth / aspectRatio) : undefined;

  const image = await getImage({
    src: source,
    widths: widths.filter((w) => w <= source.width),
    width: maxWidth,
    ...(height ? { height, fit: "cover" as const } : {}),
    format: "webp",
  });

  return {
    src: image.src,
    srcSet: image.srcSet.attribute,
    width: Number(image.attributes.width),
    height: Number(image.attributes.height),
  };
}
