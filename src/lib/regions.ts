export type RegionKey = "lombok" | "sumbawa" | "labuan-bajo";

export const REGIONS: RegionKey[] = ["lombok", "sumbawa", "labuan-bajo"];

export interface RegionInfo {
  label: string;
  className: string;
}

export const REGION_MAP: Record<RegionKey, RegionInfo> = {
  lombok: {
    label: "Lombok",
    className: "bg-brand-700 text-white border-brand-700",
  },
  sumbawa: {
    label: "Sumbawa",
    className: "bg-emerald-600 text-white border-emerald-600",
  },
  "labuan-bajo": {
    label: "Labuan Bajo",
    className: "bg-violet-600 text-white border-violet-600",
  },
};

export const REGION_LABEL: Record<RegionKey, string> = {
  lombok: "Lombok",
  sumbawa: "Sumbawa",
  "labuan-bajo": "Labuan Bajo",
};

export const REGION_CONTENT_KEY: Record<RegionKey, string> = {
  lombok: "lombok",
  sumbawa: "sumbawa",
  "labuan-bajo": "labuanBajo",
};
