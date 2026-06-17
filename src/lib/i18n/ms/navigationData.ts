import { packages } from "@/lib/content/tourPackages/index";

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

type CollectionResult = {
  collections: NavCollection[];
  items: { label: string; href: string }[];
};

const createPackageCollections = (region: "lombok" | "sumbawa" | "labuan-bajo"): CollectionResult => {
  const regionPackages = packages.filter((pkg) => pkg.region === region);

  const grouped = regionPackages.reduce(
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
  );

  const collections: NavCollection[] = [];
  const items: { label: string; href: string }[] = [];

  for (const entry of Object.values(grouped)) {
    if (entry.items.length === 1) {
      items.push(entry.items[0]);
    } else {
      collections.push(entry);
    }
  }

  return { collections, items };
};

export const navigation: NavItem[] = [
  {
    label: "Laman Utama",
    href: "/",
    variant: "link",
  },

  {
    label: "Pakej Pelancongan",
    variant: "mega",

    groups: [
      {
        title: "Lombok",
        href: "/paket-wisata/lombok",

        ...createPackageCollections("lombok"),
      },

      {
        title: "Sumbawa",
        href: "/paket-wisata/sumbawa",

        ...createPackageCollections("sumbawa"),
      },

      {
        title: "Labuan Bajo",
        href: "/paket-wisata/labuan-bajo",

        ...createPackageCollections("labuan-bajo"),
      },
    ],
  },

  {
    label: "Penginapan",
    href: "/akomodasi",
    variant: "mega",

    groups: [
      {
        title: "Lombok",

        items: [
          {
            label: "Hotel di Lombok",
            href: "/akomodasi/lombok",
          },
        ],
      },

      {
        title: "Labuan Bajo",

        items: [
          {
            label: "Hotel di Labuan Bajo",
            href: "/akomodasi/labuan-bajo",
          },
        ],
      },
    ],
  },

  {
    label: "Kereta Sewa",
    href: "/sewa-mobil",
    variant: "mega",

    groups: [
      {
        title: "Lombok",

        items: [
          {
            label: "Kereta Tersedia",
            href: "/sewa-mobil/lombok",
          },
        ],
      },

      {
        title: "Labuan Bajo",

        items: [
          {
            label: "Kereta Tersedia",
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
    label: "Maklumat",
    variant: "dropdown",
    items: [
      { label: "Tentang Kami", href: "/tentang-kami" },
      { label: "Panduan Pelancongan", href: "/panduan-wisata" },
      { label: "Destinasi", href: "/destinasi" },
      { label: "Ulasan", href: "/ulasan" },
      { label: "Hubungi Kami", href: "/kontak" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];
