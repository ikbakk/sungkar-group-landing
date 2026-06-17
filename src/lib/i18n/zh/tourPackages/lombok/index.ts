import { oneDay } from "./1d";

import type { TourPackage } from "@/lib/content/tourPackages/types";
import { threeDays } from "./3d2n";
import { fourDays } from "./4d3n";
import { twoDays } from "./2d1n";
import { motoGP } from "./openTrip";

export const lombokPackages: TourPackage[] = [
  ...oneDay,
  ...twoDays,
  ...threeDays,
  ...fourDays,
  ...motoGP,
];
