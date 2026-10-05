// Pulls the self-updating SVGs from the profile repo so the site's activity section
// matches the GitHub profile. Runs before every build; a failed download keeps the
// previous copy (or a placeholder) so the build never breaks on a network blip.
import { mkdir, writeFile, access } from 'node:fs/promises';

const BASE = 'https://raw.githubusercontent.com/happinessisreal/happinessisreal/main/';
const FILES = ['activity.svg', 'year.svg', 'stats.svg', 'langs.svg'];
const OUT = new URL('../public/live/', import.meta.url);

const placeholder = (name) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="820" height="60" viewBox="0 0 820 60">` +
  `<text x="0" y="36" font-family="monospace" font-size="14" fill="#6e7681">${name} unavailable</text></svg>`;

await mkdir(OUT, { recursive: true });
for (const name of FILES) {
  const dest = new URL(name, OUT);
  try {
    const res = await fetch(BASE + name, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(dest, await res.text());
    console.log(`live: ${name}`);
  } catch (err) {
    const have = await access(dest).then(() => true, () => false);
    if (!have) await writeFile(dest, placeholder(name));
    console.warn(`live: ${name} failed (${err.message}); ${have ? 'kept old copy' : 'wrote placeholder'}`);
  }
}
