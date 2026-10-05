# happinessisreal.github.io

My portfolio and writeups. Live at **[happinessisreal.github.io](https://happinessisreal.github.io)**.

A split-pane layout: who I am stays pinned on the left while projects and writeups scroll on the right. It's built with [Astro](https://astro.build), has no client framework, and ships almost no JavaScript (a scroll-spy, a cursor glow and one interactive demo).

## Writing

| What | Where |
| --- | --- |
| Name, tagline, intro, `now` line, links | [`src/site.ts`](src/site.ts) |
| Writeups (Markdown or MDX) | [`src/content/writeups/`](src/content/writeups) |
| Project case studies | [`src/content/projects/`](src/content/projects) |
| Screenshots | `public/projects/<slug>/` |

A new writeup is one file:

```md
---
title: Something I figured out
date: 2026-10-05
summary: One or two sentences for the list and the RSS feed.
tags: [compilers]
stage: seedling   # seedling · | budding + | evergreen @
project: alveelan # optional: links the writeup and the project page
---

Body in Markdown. Use .mdx to drop in components like `<AsciiDemo />`.
```

Set `draft: true` to keep a piece out of the build.

## Live sections

`scripts/fetch-live.mjs` runs before every build. It pulls `activity.svg` and `year.svg` from my [profile repo](https://github.com/happinessisreal/happinessisreal), which regenerates them daily. The deploy workflow rebuilds the site every morning after that refresh.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Pushing to `main` deploys to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
