---
name: doofen
repo: doofen
summary: A scroll-driven 3D agency site. A wireframe building assembles as you scroll, with a built-in CMS for the portfolio.
tags: [astro, three.js, react three fiber, gsap]
order: 4
year: 2026
shots:
  - { src: /projects/doofen/scroll.webp, alt: "Scrolling the homepage: the camera pulls back to reveal the whole wireframe building and its orbiting services" }
  - { src: /projects/doofen/services.jpg, alt: "Services page" }
  - { src: /projects/doofen/mobile.jpg, alt: "Mobile homepage" }
---

## What it is

A site for an agency called DE Inc. The page opens on a close view of a wireframe "X-ray" building. As you scroll, the camera eases through keyframes to reveal the whole model, with the agency's services orbiting it.

## How it works

- **Astro** in hybrid mode: marketing pages are static, while the admin panel and API routes run server-side on Vercel.
- **React Three Fiber** for the scene, with a separate lighter layout on phones that keeps a single WebGL context.
- **A small CMS** at `/admin` for portfolio categories and works, with image uploads and YouTube embeds, behind signed session cookies.
