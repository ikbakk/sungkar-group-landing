import { packages } from "./tourPackages";

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

const lombokPackages = packages
  .filter((pkg) => pkg.region === "lombok")
  .map((pkg) => ({
    label: pkg.title,
    href: `/paket-wisata/${pkg.slug}`,
  }));

const sumbawaPackages = packages
  .filter((pkg) => pkg.region === "sumbawa")
  .map((pkg) => ({
    label: pkg.title,
    href: `/paket-wisata/${pkg.slug}`,
  }));

const labuanBajoPackages = packages
  .filter((pkg) => pkg.region === "labuan-bajo")
  .map((pkg) => ({
    label: pkg.title,
    href: `/paket-wisata/${pkg.slug}`,
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
        items: lombokPackages,
      },

      {
        title: "Paket Wisata Sumbawa",
        items: sumbawaPackages,
      },

      {
        title: "Paket Wisata Labuan Bajo",
        items: labuanBajoPackages,
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
