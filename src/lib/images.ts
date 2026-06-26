import type { ImageMetadata } from "astro";

export type ImageSource = ImageMetadata | string;

export function isStringImage(src: ImageSource): src is string {
  return typeof src === "string";
}

export function isRemoteImage(src: ImageSource): src is string {
  return typeof src === "string" && /^(https?:)?\/\//.test(src);
}

export function getImageSrc(src: ImageSource): string {
  return typeof src === "string" ? src : src.src;
}

export function getImageWidth(src: ImageSource): number | undefined {
  return typeof src === "string" ? undefined : src.width;
}

export function getImageHeight(src: ImageSource): number | undefined {
  return typeof src === "string" ? undefined : src.height;
}
