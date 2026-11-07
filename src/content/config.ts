import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Benchtekno Desk'),
    category: z.string().default('Smartphones'),
  }),
});

export const collections = {
  articles: articlesCollection,
};
