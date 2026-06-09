import { packages } from "@/lib/content/tourPackages";
import { destinations } from "@/lib/content/destinationsData";
import { accommodations } from "@/lib/content/akomodasiData";
import { vehicles } from "@/lib/content/sewaModilData";

export async function GET() {
  const siteUrl = "https://www.sungkargroup.id";

  // Static pages
  const staticPages = [
    "/",
    "/destinasi",
    "/paket-wisata",
    "/akomodasi",
    "/sewa-mobil",
    "/panduan-wisata",
    "/tentang-kami",
    "/ulasan",
    "/kontak",
  ];

  // Dynamic package pages
  const packagePages = packages.map((pkg) => `/paket-wisata/${pkg.slug}`);

  // Dynamic destination pages
  const destinationPages = destinations.map(
    (dest) => `/destinasi/${dest.slug}`,
  );

  // Dynamic accommodation region pages
  const accommodationRegions = ["lombok", "sumbawa", "labuan-bajo"];
  const accommodationPages = accommodationRegions.map(
    (region) => `/akomodasi/${region}`,
  );

  // Dynamic vehicle region pages
  const vehicleRegions = Array.from(new Set(vehicles.map((v) => v.region)));
  const vehiclePages = vehicleRegions.map((region) => `/sewa-mobil/${region}`);

  // Combine all pages
  const allPages = [
    ...staticPages,
    "/akomodasi",
    ...accommodationPages,
    ...packagePages,
    ...destinationPages,
    ...vehiclePages,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      const priority = getPriority(page);
      const changefreq = getChangeFreq(page);
      return `  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

function getPriority(page: string): number {
  if (page === "/") return 1.0;
  if (page === "/paket-wisata" || page === "/destinasi") return 0.9;
  if (page.includes("/paket-wisata/") || page.includes("/destinasi/"))
    return 0.8;
  if (page === "/akomodasi" || page === "/sewa-mobil") return 0.8;
  if (page.includes("/akomodasi/") || page.includes("/sewa-mobil/")) return 0.7;
  if (page === "/panduan-wisata" || page === "/tentang-kami") return 0.7;
  return 0.6;
}

function getChangeFreq(page: string): string {
  if (page === "/" || page === "/paket-wisata") return "weekly";
  if (page.includes("/paket-wisata/")) return "monthly";
  if (page.includes("/destinasi/")) return "monthly";
  if (page === "/akomodasi" || page === "/sewa-mobil") return "monthly";
  return "monthly";
}
