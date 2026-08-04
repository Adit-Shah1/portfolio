# adit-shah.dev — portfolio

Single-page portfolio. Next.js App Router + Tailwind v4 + GSAP/ScrollTrigger + Lenis, fully static.

```bash
npm run dev     # local dev
npm run build   # production build (page must stay static)
npm run lint
```

## Adding a new project (the whole point)

Everything on the page renders from `src/data/projects.ts`.

**Shipped something small?** Append one `ArchiveItem` to `archive` — order doesn't
matter, `fullLog` sorts by date:

```ts
{
  date: "2026-08-14",            // first-commit date, omit if not under git
  name: "Cool Thing",
  oneLiner: "One sentence on what it is.",
  stack: ["Rust", "WASM"],
  repos: ["Adit-Shah1/cool-thing"],         // joins the live commit count
  links: [{ label: "GitHub", href: "https://github.com/..." }],
  preview: "/images/archive/coolthing.jpg", // optional 16:9 hover preview
  status: "shipped",
}
```

**Big enough for a case study?** Add a `CaseStudy` to `selectedWork`, give it a
theme in `src/lib/themes.ts` (its real brand colours — the site adopts them on
scroll), and drop media into `public/images/<slug>/`.

Site-wide identity and links live in `src/data/site.ts`
(`linkedin` / `resumeUrl` render automatically once set).

Every project appears twice: featured work gets its own scene, and `fullLog`
folds those in with `archive` to render "The full log" — derived, so the two
can't drift apart.

## The stats are derived, not typed

`src/lib/stats.ts` computes all four tiles. Project count and weeks come from
the data; the commit total is fetched live from the GitHub API
(`src/lib/github.ts`) — commits authored by `Adit-Shah1` across every repo
listed in a project's `repos` field, summed. Add a project with `repos` and its
commits join the count automatically.

Set `GITHUB_TOKEN` to a PAT with read access (most of the repos are private):

```bash
echo 'GITHUB_TOKEN=ghp_...' > .env.local   # gitignored
vercel env add GITHUB_TOKEN                # production + preview
```

Without it — or if the API is unreachable — the page falls back to
`site.commitsFallback` and still builds. The page revalidates daily, so the
number refreshes without a redeploy.

## Design notes

- The site owns no colour: monochrome chrome; each case study's brand palette
  takes over the page's accents while it's on screen (`ThemeMorph` +
  `@property`-registered CSS vars in `globals.css`).
- Reduced motion is handled in exactly two places: `MOTION_OK` in
  `src/lib/motion.ts` (JS) and one media query in `globals.css` (CSS).
