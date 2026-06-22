export type RegionKey = "lombok" | "sumbawa" | "labuan-bajo" | "sailing-labuan-bajo" | "lombok-to-bajo";

export const REGIONS: RegionKey[] = ["lombok", "sumbawa", "labuan-bajo", "sailing-labuan-bajo", "lombok-to-bajo"];

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
  "sailing-labuan-bajo": {
    label: "Sailing Labuan Bajo",
    className: "bg-teal-600 text-white border-teal-600",
  },
  "lombok-to-bajo": {
    label: "Lombok ke Bajo",
    className: "bg-amber-600 text-white border-amber-600",
  },
};

export const REGION_LABEL: Record<RegionKey, string> = {
  lombok: "Lombok",
  sumbawa: "Sumbawa",
  "labuan-bajo": "Labuan Bajo",
  "sailing-labuan-bajo": "Sailing Labuan Bajo",
  "lombok-to-bajo": "Lombok ke Bajo",
};

export const REGION_CONTENT_KEY: Record<RegionKey, string> = {
  lombok: "lombok",
  sumbawa: "sumbawa",
  "labuan-bajo": "labuanBajo",
  "sailing-labuan-bajo": "sailingLabuanBajo",
  "lombok-to-bajo": "lombokToBajo",
};
