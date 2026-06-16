import { packages } from "./tourPackages/index";

export type NavCollection = {
  title: string;
  href?: string;

  items: {
    label: string;
    href: string;
  }[];
};

export type NavGroup = {
  title: string;
  href?: string;

  collections?: NavCollection[];

  items?: {
    label: string;
    href: string;
  }[];
};

export type NavItem = {
  label: string;
  href?: string;

  variant: "link" | "mega" | "dropdown";

  groups?: NavGroup[];
  items?: { label: string; href: string }[];
};

const createPackageCollections = (
  region: "lombok" | "sumbawa" | "labuan-bajo",
): NavCollection[] => {
  const regionPackages = packages.filter((pkg) => pkg.region === region);

  const grouped = Object.values(
    regionPackages.reduce(
      (acc, pkg) => {
        if (!acc[pkg.collectionSlug]) {
          acc[pkg.collectionSlug] = {
            title: pkg.collectionTitle,

            href: `/paket-wisata/${region}/${pkg.collectionSlug}`,

            items: [],
          };
        }

        acc[pkg.collectionSlug].items.push({
          label: pkg.title,

          href: `/paket-wisata/${region}/${pkg.collectionSlug}/${pkg.slug}`,
        });

        return acc;
      },
      {} as Record<string, NavCollection>,
    ),
  );

  return grouped;
};

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
        title: "Lombok",
        href: "/paket-wisata/lombok",

        collections: createPackageCollections("lombok"),
      },

      {
        title: "Sumbawa",
        href: "/paket-wisata/sumbawa",

        collections: createPackageCollections("sumbawa"),
      },

      {
        title: "Labuan Bajo",
        href: "/paket-wisata/labuan-bajo",

        collections: createPackageCollections("labuan-bajo"),
      },
    ],
  },

  {
    label: "Akomodasi",
    href: "/akomodasi",
    variant: "mega",

    groups: [
      {
        title: "Lombok",

        items: [
          {
            label: "Akomodasi Hotel di Lombok",
            href: "/akomodasi/lombok",
          },
        ],
      },

      {
        title: "Labuan Bajo",

        items: [
          {
            label: "Akomodasi Hotel di Labuan Bajo",
            href: "/akomodasi/labuan-bajo",
          },
        ],
      },
    ],
  },

  {
    label: "Sewa Mobil",
    href: "/sewa-mobil",
    variant: "mega",

    groups: [
      {
        title: "Lombok",

        items: [
          {
            label: "Daftar Mobil yang Tersedia",
            href: "/sewa-mobil/lombok",
          },
        ],
      },

      {
        title: "Labuan Bajo",

        items: [
          {
            label: "Daftar Mobil yang Tersedia",
            href: "/sewa-mobil/labuan-bajo",
          },
        ],
      },
    ],
  },

  {
    label: "Blog",
    href: "/blog",
    variant: "link",
  },

  {
    label: "Info",
    variant: "dropdown",
    items: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Panduan Wisata", href: "/panduan-wisata" },
      { label: "Destinasi", href: "/destinasi" },
      { label: "Ulasan", href: "/ulasan" },
      { label: "Kontak", href: "/kontak" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];
