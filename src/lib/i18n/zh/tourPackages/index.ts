import { lombokPackages } from "./lombok";
import { sumbawaPackages } from "./sumbawa";
import { labuanBajoPackages } from "./labuan-bajo";

export const packages = [
  ...lombokPackages,
  ...sumbawaPackages,
  ...labuanBajoPackages,
];

export const getPackageUrl = (pkg: any) =>
  `/tour-packages/${pkg.region}/${pkg.collectionSlug}/${pkg.slug}`;
