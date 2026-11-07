import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().default('Research'),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const references = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    creator: z.string().optional(),
    kind: z.string().default('Reference'),
    url: z.string().url().optional(),
    image: z.string().optional(),
    note: z.string().optional(),
  }),
});

const moodboards = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    images: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { notes, references, moodboards };
