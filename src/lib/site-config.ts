/**
 * Site Configuration - Single Source of Truth
 *
 * Defines the canonical domain used across the entire application.
 * All canonical URLs, sitemap, robots.txt, structured data, and OG tags derive from this.
 *
 * Override via PUBLIC_SITE_URL env var — useful for Netlify preview deploys where
 * the custom domain isn't active. Set it to the deploy URL (e.g. https://abc.netlify.app)
 * in the deploy context. Falls back to the production domain.
 *
 * IMPORTANT: If migrating to an image CDN, add a CDN_ORIGIN constant here and update
 * schema generators in src/lib/schemas.ts to use CDN_ORIGIN for image URLs.
 */

export const SITE_URL =
  process.env.PUBLIC_SITE_URL || "https://sungkargroup.com";

// TODO: If using image CDN (Cloudflare Images, Cloudinary, etc.), add:
// export const CDN_ORIGIN = "https://cdn.sungkargroup.com";
// Then update src/lib/schemas.ts to use CDN_ORIGIN for image fields.
