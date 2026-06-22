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
    | "lombok-to-bajo",
): CollectionResult => {
  const regionPackages = packages.filter((pkg) => pkg.region === region);

  const grouped = regionPackages.reduce(
    (acc, pkg) => {
      if (!acc[pkg.collectionSlug]) {
        const titleMap: Record<string, string> = {
          "1-hari": "رحلة يوم واحد",
          "2-hari-1-malam": "رحلة يومين وليلة",
          "3-hari-2-malam": "رحلة 3 أيام وليلتان",
          "4-hari-3-malam": "رحلة 4 أيام و 3 ليال",
          "5-hari-4-malam": "رحلة 5 أيام و 4 ليال",
          "sailing-open-trip": "رحلة الإبحار المفتوحة",
          "sailing-private-trip": "رحلة الإبحار الخاصة",
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
      label: "الرئيسية",
      href: "/",
      variant: "link",
    },

    {
      label: "برامج سياحية",
      variant: "mega",

      groups: [
        {
          title: "لومبوك",
          href: "/paket-wisata/lombok",

          ...createPackageCollections(packages, "lombok"),
        },

        {
          title: "سومباوا",
          href: "/paket-wisata/sumbawa",

          ...createPackageCollections(packages, "sumbawa"),
        },

        {
          title: "لابوان باجو للإبحار",
          href: "/paket-wisata/sailing-labuan-bajo",

          ...createPackageCollections(packages, "sailing-labuan-bajo"),
        },

        {
          title: "لابوان باجو",
          href: "/paket-wisata/labuan-bajo",

          ...createPackageCollections(packages, "labuan-bajo"),
        },
      ],
    },

    {
      label: "الإقامة",
      href: "/akomodasi",
      variant: "mega",

      groups: [
        {
          title: "لومبوك",

          items: [
            {
              label: "فنادق في لومبوك",
              href: "/akomodasi/lombok",
            },
          ],
        },

        {
          title: "لابوان باجو",

          items: [
            {
              label: "فنادق في لابوان باجو",
              href: "/akomodasi/labuan-bajo",
            },
          ],
        },
      ],
    },

    {
      label: "تأجير السيارات",
      href: "/sewa-mobil",
      variant: "mega",

      groups: [
        {
          title: "لومبوك",

          items: [
            {
              label: "المركبات المتاحة",
              href: "/sewa-mobil/lombok",
            },
          ],
        },

        {
          title: "لابوان باجو",

          items: [
            {
              label: "المركبات المتاحة",
              href: "/sewa-mobil/labuan-bajo",
            },
          ],
        },
      ],
    },

    {
      label: "المدونة",
      href: "/blog",
      variant: "link",
    },

    {
      label: "معلومات",
      variant: "dropdown",
      items: [
        { label: "من نحن", href: "/tentang-kami" },
        { label: "أدلة السفر", href: "/panduan-wisata" },
        { label: "الوجهات", href: "/destinasi" },
        { label: "التقييمات", href: "/ulasan" },
        { label: "اتصل بنا", href: "/kontak" },
        { label: "الأسئلة الشائعة", href: "/faq" },
      ],
    },
  ];
}
