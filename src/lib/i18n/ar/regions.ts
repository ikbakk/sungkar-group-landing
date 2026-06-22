export type RegionKey =
  | "lombok"
  | "sumbawa"
  | "labuan-bajo"
  | "sailing-labuan-bajo"
  | "lombok-to-bajo";

export const REGIONS: RegionKey[] = [
  "lombok",
  "sumbawa",
  "labuan-bajo",
  "sailing-labuan-bajo",
  "lombok-to-bajo",
];

export interface RegionInfo {
  label: string;
  className: string;
}

export const REGION_MAP: Record<RegionKey, RegionInfo> = {
  lombok: {
    label: "لومبوك",
    className: "bg-brand-700 text-white border-brand-700",
  },
  sumbawa: {
    label: "سومباوا",
    className: "bg-emerald-600 text-white border-emerald-600",
  },
  "labuan-bajo": {
    label: "لابوان باجو",
    className: "bg-violet-600 text-white border-violet-600",
  },
  "sailing-labuan-bajo": {
    label: "لابوان باجو للإبحار",
    className: "bg-teal-600 text-white border-teal-600",
  },
  "lombok-to-bajo": {
    label: "لومبوك إلى باجو",
    className: "bg-amber-600 text-white border-amber-600",
  },
};

export const REGION_LABEL: Record<RegionKey, string> = {
  lombok: "لومبوك",
  sumbawa: "سومباوا",
  "labuan-bajo": "لابوان باجو",
  "sailing-labuan-bajo": "لابوان باجو للإبحار",
  "lombok-to-bajo": "لومبوك إلى باجو",
};

export const REGION_CONTENT_KEY: Record<RegionKey, string> = {
  lombok: "lombok",
  sumbawa: "sumbawa",
  "labuan-bajo": "labuanBajo",
  "sailing-labuan-bajo": "sailingLabuanBajo",
  "lombok-to-bajo": "lombokToBajo",
};
