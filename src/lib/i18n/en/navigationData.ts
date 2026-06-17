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
        const titleMap: Record<string, string> = {
          "1-hari": "1 Day Package",
          "2-hari-1-malam": "2 Days 1 Night Package",
          "3-hari-2-malam": "3 Days 2 Nights Package",
          "4-hari-3-malam": "4 Days 3 Nights Package",
          "5-hari-4-malam": "5 Days 4 Nights Package",
          "open-trip": "Open Trip",
          "sailing": "Sailing",
        };
        acc[pkg.collectionSlug] = {
          title: titleMap[pkg.collectionSlug] ?? pkg.collectionTitle,
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
    label: "Home",
    href: "/",
    variant: "link",
  },

  {
    label: "Tour Packages",
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
    label: "Accommodations",
    href: "/akomodasi",
    variant: "mega",

    groups: [
      {
        title: "Lombok",

        items: [
          {
            label: "Hotels in Lombok",
            href: "/akomodasi/lombok",
          },
        ],
      },

      {
        title: "Labuan Bajo",

        items: [
          {
            label: "Hotels in Labuan Bajo",
            href: "/akomodasi/labuan-bajo",
          },
        ],
      },
    ],
  },

  {
    label: "Car Rental",
    href: "/sewa-mobil",
    variant: "mega",

    groups: [
      {
        title: "Lombok",

        items: [
          {
            label: "Available Vehicles",
            href: "/sewa-mobil/lombok",
          },
        ],
      },

      {
        title: "Labuan Bajo",

        items: [
          {
            label: "Available Vehicles",
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
      { label: "About Us", href: "/tentang-kami" },
      { label: "Travel Guides", href: "/panduan-wisata" },
      { label: "Destinations", href: "/destinasi" },
      { label: "Reviews", href: "/ulasan" },
      { label: "Contact", href: "/kontak" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];
