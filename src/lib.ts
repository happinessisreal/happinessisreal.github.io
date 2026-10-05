import { getCollection, type CollectionEntry } from 'astro:content';

export type Writeup = CollectionEntry<'writeups'>;
export type Project = CollectionEntry<'projects'>;

export const STAGE = { seedling: '·', budding: '+', evergreen: '@' } as const;
export const STAGE_LABEL = { seedling: 'seedling', budding: 'budding', evergreen: 'evergreen' } as const;

export async function writeups(): Promise<Writeup[]> {
  const all = await getCollection('writeups', (w) => !w.data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function projects(): Promise<Project[]> {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export function readingTime(body = ''): string {
  const words = body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min`;
}

export function fmtDate(d: Date, style: 'short' | 'long' = 'short'): string {
  return style === 'short'
    ? d.toISOString().slice(0, 7)
    : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
