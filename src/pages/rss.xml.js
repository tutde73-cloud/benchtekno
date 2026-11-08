import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('articles');
  return rss({
    title: 'Benchtekno — Global Tech Media & Hardware Reviews',
    description: 'Deep technical hardware benchmarks, smartphone performance evaluations, and mobile chipset architectural analysis.',
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishDate,
      link: `/articles/${article.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
