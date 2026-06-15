// TODO: Translate to Bahasa Malaysia
export type RegionKey = "lombok" | "sumbawa" | "labuan-bajo";
export const REGIONS: RegionKey[] = ["lombok", "sumbawa", "labuan-bajo"];
export interface RegionInfo { label: string; className: string; }
export const REGION_MAP: Record<RegionKey, RegionInfo> = {};
export const REGION_LABEL: Record<RegionKey, string> = {};
export const REGION_CONTENT_KEY: Record<RegionKey, string> = {};