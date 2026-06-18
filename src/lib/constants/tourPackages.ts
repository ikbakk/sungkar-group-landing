/**
 * Tour package collection constants
 * Standardized collection slugs and titles
 */
export const COLLECTIONS = {
  // Lombok Collections
  ONE_DAY: "one-day" as const,
  TWO_DAYS_ONE_NIGHT: "two-days-one-night" as const,
  THREE_DAYS_TWO_NIGHTS: "three-days-two-nights" as const,
  FOUR_DAYS_THREE_NIGHTS: "four-days-three-nights" as const,
  OPEN_TRIP: "open-trip" as const,

  // Labuan Bajo Collections
  DAY_TRIP: "day-trip" as const,
  OVERNIGHT: "overnight" as const,
  THREE_DAYS_TWO_NIGHTS_LB: "three-days-two-nights-lb" as const,
};

export type CollectionSlug = (typeof COLLECTIONS)[keyof typeof COLLECTIONS];

/**
 * Collection titles for display
 */
export const COLLECTION_TITLES: Record<CollectionSlug, string> = {
  [COLLECTIONS.ONE_DAY]: "Paket Wisata 1 Hari",
  [COLLECTIONS.TWO_DAYS_ONE_NIGHT]: "Paket Wisata 2 Hari 1 Malam",
  [COLLECTIONS.THREE_DAYS_TWO_NIGHTS]: "Paket Wisata 3 Hari 2 Malam",
  [COLLECTIONS.FOUR_DAYS_THREE_NIGHTS]: "Paket Wisata 4 Hari 3 Malam",
  [COLLECTIONS.OPEN_TRIP]: "Open Trip",
  [COLLECTIONS.DAY_TRIP]: "Day Trip",
  [COLLECTIONS.OVERNIGHT]: "Overnight Trip",
  [COLLECTIONS.THREE_DAYS_TWO_NIGHTS_LB]: "3D2N Labuan Bajo",
};

/**
 * Get collection title for display
 */
export function getCollectionTitle(slug: CollectionSlug): string {
  return COLLECTION_TITLES[slug] || slug;
}

/**
 * Collection categories
 */
export const CATEGORIES = {
  LOMBOK: "Paket Wisata Lombok" as const,
  SUMBAWA: "Paket Wisata Sumbawa" as const,
  LABUAN_BAJO: "Paket Wisata Labuan Bajo" as const,
  MOTOGP: "Open Trip MotoGP" as const,
  KOMODO: "Open Trip Komodo" as const,
};

export type CategorySlug = (typeof CATEGORIES)[keyof typeof CATEGORIES];
