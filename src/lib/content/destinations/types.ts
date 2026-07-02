import type { ImageSource } from "@/lib/images";

export type Destination = {
  slug: string;
  title: string;
  region: string;
  image: ImageSource;
  gallery: ImageSource[];
  summary: string;
  thingsToDo: string[];
  packages: string[];
  description?: string;
  highlights?: string[];
  bestTimeToVisit?: string;
  howToGetThere?: string;
  localTips?: string[];
};
