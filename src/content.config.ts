import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    topic: z.string(),
    blurb: z.string(),
    /** one sentence: what observation would overturn the piece */
    falsifier: z.string(),
    updated: z.string().optional(),
  }),
});

export const collections = { notes };
