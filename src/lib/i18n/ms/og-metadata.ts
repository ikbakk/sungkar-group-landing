// TODO: Translate to Bahasa Malaysia
export const pageOGMetadata = {};
export function getPageOGMetadata(pathname: string) {
  return { title: "", description: "", image: null as any, imageAlt: "" };
}
export function getPackageOGMetadata(title: string, description: string, image: any, imageAlt: string) {
  return { title, description, image, imageAlt, type: "article" as const };
}
export function getDestinationOGMetadata(title: string, description: string, image: any, imageAlt: string) {
  return { title, description, image, imageAlt, type: "article" as const };
}