import { lombokPackages } from "./lombok";
import { sumbawaPackages } from "./sumbawa";
import { labuanBajoPackages } from "./labuan-bajo";
import type { TourPackage } from "./types";

export const packages: TourPackage[] = [
  ...lombokPackages,
  ...sumbawaPackages,
  ...labuanBajoPackages,
];

export const getPackageUrl = (pkg: any) =>
  `/paket-wisata/${pkg.region}/${pkg.collectionSlug}/${pkg.slug}`;
