import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    // how finished the piece is, using the profile's ASCII ramp: · seedling, + budding, @ evergreen
    stage: z.enum(['seedling', 'budding', 'evergreen']).default('budding'),
    project: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    repo: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    year: z.number(),
    live: z.string().url().optional(),
    shots: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
  }),
});

export const collections = { writeups, projects };
