# adit-shah.dev — portfolio

Single-page portfolio. Next.js App Router + Tailwind v4 + GSAP/ScrollTrigger + Lenis, fully static.

```bash
npm run dev     # local dev
npm run build   # production build (page must stay static)
npm run lint
```

## Adding a new project (the whole point)

Everything on the page renders from `src/data/projects.ts`.

**Shipped something small?** Append one `ArchiveItem` to `archive` (newest first):

```ts
{
  date: "2026-08-14",            // first-commit date, omit if not under git
  name: "Cool Thing",
  oneLiner: "One sentence on what it is.",
  stack: ["Rust", "WASM"],
  links: [{ label: "GitHub", href: "https://github.com/..." }],
  preview: "/images/archive/coolthing.png", // optional 16:9 hover preview
  status: "shipped",
}
```

**Big enough for a case study?** Add a `CaseStudy` to `selectedWork`, give it a
theme in `src/lib/themes.ts` (its real brand colours — the site adopts them on
scroll), and drop media into `public/images/<slug>/`.

Site-wide identity, stats and links live in `src/data/site.ts`
(`linkedin` / `resumeUrl` render automatically once set).

## Design notes

- The site owns no colour: monochrome chrome; each case study's brand palette
  takes over the page's accents while it's on screen (`ThemeMorph` +
  `@property`-registered CSS vars in `globals.css`).
- Reduced motion is handled in exactly two places: `MOTION_OK` in
  `src/lib/motion.ts` (JS) and one media query in `globals.css` (CSS).
