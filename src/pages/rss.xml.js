import rss from '@astrojs/rss';
import { site } from '../site';
import { writeups } from '../lib';

export async function GET(context) {
  const posts = await writeups();
  return rss({
    title: `${site.name} · writeups`,
    description: site.tagline,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary,
      pubDate: p.data.date,
      link: `/writeups/${p.id}/`,
      categories: p.data.tags,
    })),
  });
}
