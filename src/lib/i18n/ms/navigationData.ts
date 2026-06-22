import type { TourPackage } from "@/lib/content/tourPackages/types";

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

const createPackageCollections = (
  packages: TourPackage[],
  region:
    | "lombok"
    | "sumbawa"
    | "labuan-bajo"
    | "sailing-labuan-bajo"
    | "lombok-to-bajo"
    | "lombok-bajo",
): CollectionResult => {
  const regionPackages = packages.filter((pkg) => pkg.region === region);

  const grouped = regionPackages.reduce(
    (acc, pkg) => {
      if (!acc[pkg.collectionSlug]) {
        const titleMap: Record<string, string> = {
          "1-hari": "Pakej 1 Hari",
          "2-hari-1-malam": "Pakej 2 Hari 1 Malam",
          "3-hari-2-malam": "Pakej 3 Hari 2 Malam",
          "4-hari-3-malam": "Pakej 4 Hari 3 Malam",
          "5-hari-4-malam": "Pakej 5 Hari 4 Malam",
          "sailing-open-trip": "Sailing Open Trip",
          "sailing-private-trip": "Sailing Private Trip",
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

  // Sort collections alphabetically by title
  collections.sort((a, b) => a.title.localeCompare(b.title));

  return { collections, items };
};

export function createNavigation(packages: TourPackage[]): NavItem[] {
  return [
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

          ...createPackageCollections(packages, "lombok"),
        },

        {
          title: "Sumbawa",
          href: "/paket-wisata/sumbawa",

          ...createPackageCollections(packages, "sumbawa"),
        },

        {
          title: "Pelayaran Labuan Bajo",
          href: "/paket-wisata/sailing-labuan-bajo",

          ...createPackageCollections(packages, "sailing-labuan-bajo"),
        },

        {
          title: "Labuan Bajo",
          href: "/paket-wisata/labuan-bajo",

          ...createPackageCollections(packages, "labuan-bajo"),
        },

        {
          title: "Lombok - Bajo",
          href: "/paket-wisata/lombok-bajo",

          ...createPackageCollections(packages, "lombok-bajo"),
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
}
