/**
 * Site Configuration - Single Source of Truth
 *
 * This file defines the canonical production domain used across the entire application.
 * All canonical URLs, sitemap, robots.txt, structured data, and OG tags derive from this.
 *
 * IMPORTANT: If migrating to an image CDN, add a CDN_ORIGIN constant here and update
 * schema generators in src/lib/schemas.ts to use CDN_ORIGIN for image URLs.
 */

export const SITE_URL = "https://www.sungkargroup.com";

// TODO: If using image CDN (Cloudflare Images, Cloudinary, etc.), add:
// export const CDN_ORIGIN = "https://cdn.sungkargroup.com";
// Then update src/lib/schemas.ts to use CDN_ORIGIN for image fields.