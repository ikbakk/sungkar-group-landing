import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import type { SitemapItem } from "@astrojs/sitemap";

const ROOT_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const NON_DEFAULT_LOCALES = new Set(["en", "ar", "ms", "zh"]);

type LocaleCode = "id" | "en" | "ar" | "ms" | "zh";

type ContentMeta = {
  slug: string;
  locale: LocaleCode;
  file: string;
  region?: string;
  collectionSlug?: string;
};

function readFileMTime(filePath: string) {
  if (!fs.existsSync(filePath)) return undefined;
  return fs.statSync(filePath).mtime;
}

function parseFrontmatterField(source: string, field: string) {
  const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return undefined;

  const valueMatch = frontmatterMatch[1].match(
    new RegExp(`^${field}:\\s*(.+)$`, "m"),
  );

  return valueMatch?.[1]?.trim().replace(/^['\"]|['\"]$/g, "");
}

function loadCollectionMeta(collection: string) {
  const collectionDir = path.join(ROOT_DIR, "src", "content", collection);
  if (!fs.existsSync(collectionDir)) return [] as ContentMeta[];

  return fs
    .readdirSync(collectionDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => {
      const slug = entry.name;
      const slugDir = path.join(collectionDir, slug);

      return fs
        .readdirSync(slugDir, { withFileTypes: true })
        .filter((file) => file.isFile() && /\.(md|mdx)$/.test(file.name))
        .map((file) => {
          const locale = path.basename(
            file.name,
            path.extname(file.name),
          ) as LocaleCode;
          const absolutePath = path.join(slugDir, file.name);
          const source = fs.readFileSync(absolutePath, "utf8");

          return {
            slug,
            locale,
            file: absolutePath,
            region: parseFrontmatterField(source, "region"),
            collectionSlug: parseFrontmatterField(source, "collectionSlug"),
          } satisfies ContentMeta;
        });
    });
}

const collectionMeta = {
  blog: loadCollectionMeta("blog"),
  guides: loadCollectionMeta("guides"),
  tourPackages: loadCollectionMeta("tourPackages"),
  accommodations: loadCollectionMeta("accommodations"),
  carRental: loadCollectionMeta("car-rental"),
  destinations: loadCollectionMeta("destinations"),
};

function getContentFiles(
  collection: keyof typeof collectionMeta,
  locale: LocaleCode,
  filters: Partial<
    Pick<ContentMeta, "slug" | "region" | "collectionSlug">
  > = {},
) {
  return collectionMeta[collection]
    .filter((entry) => entry.locale === locale)
    .filter((entry) => (filters.slug ? entry.slug === filters.slug : true))
    .filter((entry) =>
      filters.region ? entry.region === filters.region : true,
    )
    .filter((entry) =>
      filters.collectionSlug
        ? entry.collectionSlug === filters.collectionSlug
        : true,
    )
    .map((entry) => entry.file);
}

function pageFile(locale: LocaleCode, filePath: string) {
  return path.join(
    ROOT_DIR,
    locale === "id" ? "src/pages" : "src/pages/[locale]",
    filePath,
  );
}

function resolveSourceFilesForPathname(pathname: string) {
  const trimmedPath = pathname.replace(/\/+$/, "") || "/";
  const segments = trimmedPath.split("/").filter(Boolean);
  const locale = (
    NON_DEFAULT_LOCALES.has(segments[0]) ? segments.shift() : "id"
  ) as LocaleCode;

  const files = new Set<string>();
  const section = segments[0] ?? "";

  const add = (...filePaths: Array<string | undefined>) => {
    for (const filePath of filePaths) {
      if (filePath && fs.existsSync(filePath)) files.add(filePath);
    }
  };

  if (segments.length === 0) {
    add(pageFile(locale, "index.astro"));
    return [...files];
  }

  if (locale === "id") {
    switch (section) {
      case "tentang-kami":
        add(pageFile(locale, "tentang-kami.astro"));
        return [...files];
      case "faq":
        add(pageFile(locale, "faq.astro"));
        return [...files];
      case "kontak":
        add(pageFile(locale, "kontak.astro"));
        return [...files];
      case "ulasan":
        add(pageFile(locale, "ulasan.astro"));
        return [...files];
      case "kebijakan-privasi":
        add(pageFile(locale, "kebijakan-privasi.astro"));
        return [...files];
      case "syarat-ketentuan":
        add(pageFile(locale, "syarat-ketentuan.astro"));
        return [...files];
    }
  } else {
    switch (section) {
      case "about":
        add(pageFile(locale, "about.astro"));
        return [...files];
      case "faq":
        add(pageFile(locale, "faq.astro"));
        return [...files];
      case "contact":
        add(pageFile(locale, "contact.astro"));
        return [...files];
      case "reviews":
        add(pageFile(locale, "reviews.astro"));
        return [...files];
      case "privacy-policy":
        add(pageFile(locale, "privacy-policy.astro"));
        return [...files];
      case "terms-conditions":
        add(pageFile(locale, "terms-conditions.astro"));
        return [...files];
    }
  }

  if (section === "blog") {
    add(pageFile(locale, "blog/index.astro"));
    add(
      ...(segments[1]
        ? [
            pageFile(locale, "blog/[slug].astro"),
            ...getContentFiles("blog", locale, { slug: segments[1] }),
          ]
        : [
            pageFile(locale, "blog/index.astro"),
            ...getContentFiles("blog", locale),
          ]),
    );
    return [...files];
  }

  if (
    (locale === "id" && section === "panduan-wisata") ||
    (locale !== "id" && section === "travel-guides")
  ) {
    add(
      pageFile(
        locale,
        `${locale === "id" ? "panduan-wisata" : "travel-guides"}/index.astro`,
      ),
    );
    add(
      ...(segments[1]
        ? [
            pageFile(
              locale,
              `${locale === "id" ? "panduan-wisata" : "travel-guides"}/[slug].astro`,
            ),
            ...getContentFiles("guides", locale, { slug: segments[1] }),
          ]
        : [
            pageFile(
              locale,
              `${locale === "id" ? "panduan-wisata" : "travel-guides"}/index.astro`,
            ),
            ...getContentFiles("guides", locale),
          ]),
    );
    return [...files];
  }

  if (
    (locale === "id" && section === "destinasi") ||
    (locale !== "id" && section === "destinations")
  ) {
    add(
      ...(segments[1]
        ? [
            pageFile(
              locale,
              `${locale === "id" ? "destinasi" : "destinations"}/[slug].astro`,
            ),
            ...getContentFiles("destinations", locale, { slug: segments[1] }),
          ]
        : [
            pageFile(
              locale,
              `${locale === "id" ? "destinasi" : "destinations"}/index.astro`,
            ),
            ...getContentFiles("destinations", locale),
          ]),
    );
    return [...files];
  }

  if (
    (locale === "id" && section === "akomodasi") ||
    (locale !== "id" && section === "accommodations")
  ) {
    add(
      ...(segments[1]
        ? [
            pageFile(
              locale,
              `${locale === "id" ? "akomodasi" : "accommodations"}/[slug].astro`,
            ),
            ...getContentFiles("accommodations", locale, {
              region: segments[1],
            }),
          ]
        : [
            pageFile(
              locale,
              `${locale === "id" ? "akomodasi" : "accommodations"}/index.astro`,
            ),
            ...getContentFiles("accommodations", locale),
          ]),
    );
    return [...files];
  }

  if (
    (locale === "id" && section === "sewa-mobil") ||
    (locale !== "id" && section === "car-rental")
  ) {
    const baseDir = locale === "id" ? "sewa-mobil" : "car-rental";
    if (!segments[1]) {
      add(
        pageFile(locale, `${baseDir}/index.astro`),
        ...getContentFiles("carRental", locale),
      );
    } else if (!segments[2]) {
      add(
        pageFile(locale, `${baseDir}/[region]/index.astro`),
        ...getContentFiles("carRental", locale, { region: segments[1] }),
      );
    } else {
      add(
        pageFile(locale, `${baseDir}/[region]/[slug].astro`),
        ...getContentFiles("carRental", locale, {
          region: segments[1],
          slug: segments[2],
        }),
      );
    }
    return [...files];
  }

  if (
    (locale === "id" && section === "paket-wisata") ||
    (locale !== "id" && section === "tour-packages")
  ) {
    const baseDir = locale === "id" ? "paket-wisata" : "tour-packages";
    if (!segments[1]) {
      add(
        pageFile(locale, `${baseDir}/index.astro`),
        ...getContentFiles("tourPackages", locale),
      );
    } else if (!segments[2]) {
      add(
        pageFile(locale, `${baseDir}/[region]/index.astro`),
        ...getContentFiles("tourPackages", locale, { region: segments[1] }),
      );
    } else if (!segments[3]) {
      add(
        pageFile(locale, `${baseDir}/[region]/[collection]/index.astro`),
        ...getContentFiles("tourPackages", locale, {
          region: segments[1],
          collectionSlug: segments[2],
        }),
      );
    } else {
      add(
        pageFile(locale, `${baseDir}/[region]/[collection]/[slug].astro`),
        ...getContentFiles("tourPackages", locale, {
          region: segments[1],
          collectionSlug: segments[2],
          slug: segments[3],
        }),
      );
    }
    return [...files];
  }

  return [...files];
}

function maxDateFromFiles(filePaths: string[]) {
  const dates = filePaths
    .map((filePath) => readFileMTime(filePath))
    .filter((date): date is Date => Boolean(date));

  if (dates.length === 0) return undefined;

  return new Date(Math.max(...dates.map((date) => date.getTime())));
}

export function getLastModForUrl(url: string) {
  const pathname = new URL(url).pathname;
  return maxDateFromFiles(resolveSourceFilesForPathname(pathname));
}

export function serializeSitemapItem(item: SitemapItem) {
  const lastmod = getLastModForUrl(item.url);
  return lastmod ? { ...item, lastmod: lastmod.toISOString() } : item;
}

function getLatestLastmodFromSitemap(filePath: string) {
  if (!fs.existsSync(filePath)) return undefined;
  const xml = fs.readFileSync(filePath, "utf8");
  const matches = [...xml.matchAll(/<lastmod>(.*?)<\/lastmod>/g)];
  if (matches.length === 0) return undefined;

  return new Date(
    Math.max(...matches.map((match) => new Date(match[1]).getTime())),
  );
}

export async function stampSitemapIndexLastmods(outDir: URL | string) {
  const outputDir = typeof outDir === "string" ? outDir : fileURLToPath(outDir);
  const sitemapIndexPath = path.join(outputDir, "sitemap-index.xml");

  if (!fs.existsSync(sitemapIndexPath)) return false;

  const source = fs.readFileSync(sitemapIndexPath, "utf8");
  const next = source.replace(
    /<sitemap><loc>(.*?)<\/loc>(?:<lastmod>.*?<\/lastmod>)?<\/sitemap>/g,
    (fullMatch, loc) => {
      const childPath = path.join(
        outputDir,
        path.basename(new URL(loc).pathname),
      );
      const lastmod = getLatestLastmodFromSitemap(childPath);
      if (!lastmod) return fullMatch;
      return `<sitemap><loc>${loc}</loc><lastmod>${lastmod.toISOString()}</lastmod></sitemap>`;
    },
  );

  if (next === source) return false;

  fs.writeFileSync(sitemapIndexPath, next);
  return true;
}

export function sitemapLastmodIntegration(): AstroIntegration {
  return {
    name: "sitemap-lastmod-integration",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const stamped = await stampSitemapIndexLastmods(dir);
        if (stamped) {
          logger.info(
            "Stamped sitemap-index.xml with per-sitemap <lastmod> values.",
          );
        }
      },
    },
  };
}
