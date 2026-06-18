/**
 * Centralized region constants for type safety and consistency
 * All region keys should be defined here
 */
export const REGIONS = {
  LOMBOK: "lombok" as const,
  SUMBAWA: "sumbawa" as const,
  LABUAN_BAJO: "labuan-bajo" as const,
};

export type RegionKey = (typeof REGIONS)[keyof typeof REGIONS];

/**
 * Region information with display labels and styling classes
 */
export const REGION_INFO: Record<
  RegionKey,
  { label: string; className: string }
> = {
  [REGIONS.LOMBOK]: {
    label: "Lombok",
    className: "bg-blue-100 text-blue-800",
  },
  [REGIONS.SUMBAWA]: {
    label: "Sumbawa",
    className: "bg-green-100 text-green-800",
  },
  [REGIONS.LABUAN_BAJO]: {
    label: "Labuan Bajo",
    className: "bg-purple-100 text-purple-800",
  },
};

/**
 * Get region label for display
 */
export function getRegionLabel(region: RegionKey): string {
  return REGION_INFO[region]?.label || region;
}

/**
 * Get region class name for styling
 */
export function getRegionClassName(region: RegionKey): string {
  return REGION_INFO[region]?.className || "";
}
