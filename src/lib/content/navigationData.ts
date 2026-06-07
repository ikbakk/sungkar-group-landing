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

const createPackageLinks = (region: "lombok" | "sumbawa" | "labuan-bajo") =>
  packages
    .filter((pkg) => pkg.region === region)
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
