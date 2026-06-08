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
        title: "Hotel Sumbawa",
        items: [
          {
            label: "Semua Hotel Sumbawa",
            href: "/akomodasi/sumbawa",
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
    href: "/sewa-mobil",
    variant: "link",
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
