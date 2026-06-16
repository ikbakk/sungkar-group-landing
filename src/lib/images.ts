import type { ImageMetadata } from "astro";

export type ImageSource = ImageMetadata | string;

export function isRemoteImage(src: ImageSource): src is string {
  return typeof src === "string";
}

export function getImageSrc(src: ImageSource): string {
  if (typeof src === "string") return src;
  return src.src;
}

export function getImageWidth(src: ImageSource): number | undefined {
  if (typeof src === "string") return undefined;
  return src.width;
}

export function getImageHeight(src: ImageSource): number | undefined {
  if (typeof src === "string") return undefined;
  return src.height;
}
