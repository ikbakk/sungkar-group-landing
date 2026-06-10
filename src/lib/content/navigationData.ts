import { packages } from "./tourPackages";
import { accommodations } from "./akomodasiData";
import { vehicles } from "./sewaModilData";

export type NavItem = {
  label: string;
  href?: string;
  variant: "link" | "mega";

  groups?: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  }[];
};

const createPackageLinks = (region: "lombok" | "sumbawa" | "labuan-bajo") =>
  packages
    .filter((pkg) => pkg.region === region)
    .map((pkg) => ({
      label: pkg.title,
      href: `/paket-wisata/${pkg.slug}`,
    }));

const createVehicleLinks = (region: "lombok" | "sumbawa" | "labuan-bajo") =>
  vehicles
    .filter((vehicle) => vehicle.region === region)
    .map((vehicle) => ({
      label: vehicle.name,
      href: `/sewa-mobil/${region}`,
    }));

export const navigation: NavItem[] = [
  {
    label: "Beranda",
    href: "/",
    variant: "link",
  },

  {
    label: "Paket Wisata",
    variant: "mega",

    groups: [
      {
        title: "Paket Wisata Lombok",
        items: createPackageLinks("lombok"),
      },

      {
        title: "Paket Wisata Sumbawa",
        items: createPackageLinks("sumbawa"),
      },

      {
        title: "Paket Wisata Labuan Bajo",
        items: createPackageLinks("labuan-bajo"),
      },
    ],
  },

  {
    label: "Akomodasi",
    variant: "mega",

    groups: [
      {
        title: "Hotel Lombok",
        items: [
          {
            label: "Semua Hotel Lombok",
            href: "/akomodasi/lombok",
          },
        ],
      },

      {
        title: "Hotel Labuan Bajo",
        items: [
          {
            label: "Semua Hotel Labuan Bajo",
            href: "/akomodasi/labuan-bajo",
          },
        ],
      },
    ],
  },

  {
    label: "Sewa Mobil",
    variant: "mega",

    groups: [
      {
        title: "Kendaraan Lombok",
        items: createVehicleLinks("lombok"),
      },

      {
        title: "Kendaraan Labuan Bajo",
        items: createVehicleLinks("labuan-bajo"),
      },
    ],
  },

  {
    label: "Tentang Kami",
    href: "/tentang-kami",
    variant: "link",
  },

  {
    label: "Panduan Wisata",
    href: "/panduan-wisata",
    variant: "link",
  },

  {
    label: "Ulasan",
    href: "/ulasan",
    variant: "link",
  },

  {
    label: "Kontak",
    href: "/kontak",
    variant: "link",
  },
];
