/**
 * Image source type definition
 * Standardized across the codebase for type safety
 */
export type ImageSource = string | {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  format?: 'webp' | 'jpeg' | 'jpg' | 'png';
  priority?: boolean;
  loading?: 'eager' | 'lazy';
};

/**
 * Type guard to check if a value is an ImageSource object
 */
export function isImageSourceObject(value: unknown): value is { src: string } {
  return typeof value === 'object' && value !== null && 'src' in value;
}

/**
 * Type guard to check if a value is a string ImageSource
 */
export function isImageSourceString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Get image source URL from ImageSource type
 */
export function getImageSrc(source: ImageSource): string {
  return isImageSourceObject(source) ? source.src : source;
}

/**
 * Get image alt text from ImageSource type
 */
export function getImageAlt(source: ImageSource): string {
  return isImageSourceObject(source) ? (source.alt || '') : '';
}
