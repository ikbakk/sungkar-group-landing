import { SITE_URL } from "@/lib/site-config";

function absolute(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function GET() {
  return Response.json({
    version: "1.0",
    name: "Sungkar Group public discovery catalog",
    description:
      "Public SEO, schema, feed, sitemap, and AI discovery resources for Sungkar Group.",
    url: absolute("/.well-known/api-catalog"),
    apis: [
      {
        name: "Sitemap index",
        url: absolute("/sitemap-index.xml"),
        mediaType: "application/xml",
        type: "application/xml",
      },
      {
        name: "RSS feed",
        url: absolute("/feed.xml"),
        mediaType: "application/rss+xml",
        type: "application/rss+xml",
      },
      {
        name: "LLMs text",
        url: absolute("/llms.txt"),
        mediaType: "text/plain",
        type: "text/plain",
      },
      {
        name: "Schema map",
        url: absolute("/schemamap.xml"),
        mediaType: "application/xml",
        type: "application/xml",
      },
      {
        name: "Core schema graph",
        url: absolute("/schema/index.json"),
        mediaType: "application/ld+json",
        type: "https://schema.org/WebSite",
      },
    ],
  });
}
