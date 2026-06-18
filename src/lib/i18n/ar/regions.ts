export type RegionKey = "lombok" | "sumbawa" | "labuan-bajo";

export const REGIONS: RegionKey[] = ["lombok", "sumbawa", "labuan-bajo"];

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
};

export const REGION_LABEL: Record<RegionKey, string> = {
  lombok: "لومبوك",
  sumbawa: "سومباواواوا",
  "labuan-bajo": "لابوان باجو",
};

export const REGION_CONTENT_KEY: Record<RegionKey, string> = {
  lombok: "lombok",
  sumbawa: "sumbawa",
  "labuan-bajo": "labuanBajo",
};
