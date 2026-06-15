// TODO: Translate to Bahasa Malaysia
export const guides = [];
export interface Guide {
  slug: string;
  title: string;
  description: string;
  region: "lombok" | "sumbawa" | "labuan-bajo" | "general";
  content: string;
  keyTakeaways: string[];
  bestFor: string[];
  relatedDestinations: string[];
  relatedPackages: string[];
  publishDate: string;
  readingTime: number;
}