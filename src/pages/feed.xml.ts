import rss from "@astrojs/rss";
import { getCollection, render } from "astro:content";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { loadRenderers } from "astro:container";
import { getContainerRenderer as mdxContainerRenderer } from "@astrojs/mdx/container-renderer";

function absolutizeFeedHtml(html: string, site: URL) {
  const origin = site.toString().replace(/\/$/, "");

  return html
    .replace(/^<!DOCTYPE html>/i, "")
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/\b(href|src)="\/(?!\/)([^"]+)"/g, (_, attr, value) => {
      return `${attr}="${origin}/${value}"`;
    });
}

export async function GET(context: { site?: URL }) {
  const site = context.site;

  if (!site) {
    throw new Error("RSS feed requires Astro `site` to be configured.");
  }

  const renderers = await loadRenderers([mdxContainerRenderer()]);
  const container = await AstroContainer.create({ renderers });

  const posts = (
    await getCollection("blog", (entry) => entry.id.endsWith("/id"))
  ).sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());

  const items = await Promise.all(
    posts.map(async (post) => {
      const { Content } = await render(post);
      const rawContent = await container.renderToString(Content);
      const content = absolutizeFeedHtml(rawContent, site);
      const slug = post.id.split("/")[0];

      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.publishDate,
        link: `/blog/${slug}/`,
        categories: post.data.tags,
        content,
      };
    }),
  );

  return rss({
    title: "Sungkar Group Blog",
    description:
      "Artikel perjalanan, tips destinasi, dan panduan wisata dari Sungkar Group.",
    site,
    items,
    customData: `<language>id-ID</language>`,
  });
}
