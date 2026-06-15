// TODO: Translate to Bahasa Malaysia
export type SchemaType = "Organization" | "LocalBusiness" | "BreadcrumbList" | "FAQPage" | "TouristAttraction" | "Product" | "HowTo" | "ContactPage";
export interface BreadcrumbItem { name: string; url: string; }
export interface FAQItem { question: string; answer: string; }
export function generateOrganizationSchema(siteUrl: string) { return {}; }
export function generateLocalBusinessSchema(siteUrl: string) { return {}; }
export function generateBreadcrumbSchema(items: BreadcrumbItem[], siteUrl: string) { return {}; }
export function generateFAQPageSchema(faqs: FAQItem[]) { return {}; }
export function generateTouristAttractionSchema(title: string, description: string, image: string, siteUrl: string, slug: string, region?: string) { return {}; }
export function generateProductSchema(name: string, description: string, price: string, image: string, url: string, duration?: string) { return {}; }
export function generateHowToSchema(title: string, description: string, steps: Array<{ name: string; description: string; image?: string }>) { return {}; }
export function generateArticleSchema(title: string, description: string, image: string, siteUrl: string, slug: string, datePublished: string, dateModified?: string) { return {}; }
export function generateWebsiteSchema(siteUrl: string) { return {}; }
export function generateContactPageSchema(siteUrl: string, businessInfo: any) { return {}; }