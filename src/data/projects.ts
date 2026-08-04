import type { ThemeName } from "@/lib/themes";

export type ProjectStatus = "building" | "live" | "shipped" | "coming-soon";

export interface ProjectLink {
  label: string;
  href: string;
}

export const statusLabel: Record<ProjectStatus, string> = {
  building: "in build",
  live: "live",
  shipped: "shipped",
  "coming-soon": "coming soon",
};

export interface CaseStudy {
  slug: string;
  name: string;
  /** Honesty lives here as data: Vela is co-founded, never solo. */
  role: string;
  credit?: string;
  status: ProjectStatus;
  /** Real first-commit date — rendered as the git-log eyebrow */
  gitInit: string;
  /** Display heading — the product's own voice where it has one */
  headline: string;
  oneLiner: string;
  narrative: string[];
  stack: string[];
  /** GitHub "owner/name" repos behind this project — feeds the live commit count */
  repos?: string[];
  /** Screenshot shown on hover in the full log */
  preview?: string;
  theme: ThemeName;
  media: {
    video?: { loop: string; webm?: string; full?: string; poster: string };
    screens?: { src: string; alt: string }[];
    images?: { src: string; alt: string }[];
    figure?: "gesture-svg";
  };
  links: ProjectLink[];
}

/**
 * THE EXTENSION POINT.
 * Shipped something new? Append one ArchiveItem below — `fullLog` sorts by
 * date, so order doesn't matter. Add `repos` and its commits join the live
 * count; optionally drop a preview image in /public/images/archive/, done.
 */
export interface ArchiveItem {
  /** First-commit date, "YYYY-MM-DD"; omit if it isn't under git yet */
  date?: string;
  name: string;
  oneLiner: string;
  stack: string[];
  /** GitHub "owner/name" repos behind this project — feeds the live commit count */
  repos?: string[];
  links?: ProjectLink[];
  preview?: string;
  status?: ProjectStatus;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "petory",
    name: "Petory",
    role: "Co-founder · product & design lead",
    credit: "Built with Saad Malik",
    status: "building",
    gitInit: "2026-06-30",
    headline: "One private home for your pet family.",
    oneLiner: "The private app where families connect over their pets — coming to iOS & Android.",
    narrative: [
      "Petory is a private app for Australian pet families: the whole family shares the photos, splits the care, and keeps every record in one place — anchored by phygital QR tags on the collar, the fridge, the wall.",
      "I lead product and design — the brand, this marketing site with its interactive feature demos, an AI helper built on Groq, and the waitlist and admin infrastructure running on Supabase.",
      "Pre-launch and Melbourne-first: the waitlist is open while we build the app itself.",
    ],
    stack: ["Next.js", "React", "Tailwind", "Supabase", "Groq", "Resend"],
    repos: ["Adit-Shah1/petory", "Adit-Shah1/petory-app"],
    preview: "/images/archive/petory.jpg",
    theme: "petory",
    media: {
      video: { loop: "/videos/petory-hero.mp4", poster: "/images/petory/hero-poster.jpg" },
      screens: [
        { src: "/images/petory/screen-dashboard.jpg", alt: "Petory home — today's care checklist and the pet's timeline" },
        { src: "/images/petory/screen-calendar.jpg", alt: "Petory calendar — walks, vet visits and grooming, assigned across the family" },
        { src: "/images/petory/screen-passport.jpg", alt: "Petory digital passport — vaccinations and records, exportable for the vet" },
      ],
    },
    links: [{ label: "Visit petory.au", href: "https://www.petory.au/" }],
  },
  {
    slug: "vela",
    name: "Vela",
    role: "Co-founder",
    credit: "Led by Saad Malik — my co-founder on both startups",
    status: "building",
    gitInit: "2026-06-16",
    headline: "Your entire marketing team, powered by AI.",
    oneLiner: "An AI marketing platform for Australian small businesses.",
    narrative: [
      "Vela is what you get if you rebuild a marketing team as software: content generation, campaign scheduling, and analytics for Australian SMBs who can't pay agency prices.",
      "Under the hood it's a team of eight LangGraph agents — strategy, brand voice, content, SEO, ad copy, analytics — coordinated by a supervisor with a human approval gate, writing with brand-aware RAG over pgvector and Gemini, and exporting designs straight to Canva.",
      "Saad leads the build; I co-found and build alongside him. Waitlist-stage while we get it right.",
    ],
    stack: ["Next.js", "LangGraph", "Gemini", "Supabase", "pgvector", "Canva API"],
    repos: ["DAAS2/Vela"],
    preview: "/images/archive/vela.jpg",
    theme: "vela",
    media: {
      video: {
        loop: "/videos/vela-loop.mp4",
        webm: "/videos/vela-loop.webm",
        full: "/videos/vela-full.mp4",
        poster: "/images/vela/vela-poster.jpg",
      },
    },
    links: [{ label: "Visit velamarketing.app", href: "https://www.velamarketing.app/" }],
  },
];

export const selectedWork: CaseStudy[] = [
  {
    slug: "sls-designs",
    name: "SLS Designs",
    role: "Design & build",
    status: "live",
    gitInit: "2026-06-01",
    headline: "Real client. Real deadline.",
    oneLiner: "Production website for a Melbourne landscape-architecture practice.",
    narrative: [
      "A working practice needed a site that sells the work and runs itself: Sanity CMS so the client updates their own portfolio, an admin dashboard for enquiries, Resend email, structured-data SEO.",
      "Designed, built and deployed to production in under three weeks — and in use today.",
    ],
    stack: ["Next.js", "Sanity", "Supabase", "Resend", "Framer Motion"],
    repos: ["Adit-Shah1/slsdesigns-website"],
    preview: "/images/archive/sls.jpg",
    theme: "sls",
    media: {
      images: [
        { src: "/images/sls/sls-desktop.png", alt: "SLS Designs website on desktop" },
        { src: "/images/sls/sls-mobile.png", alt: "SLS Designs website on mobile" },
      ],
    },
    links: [{ label: "Visit the live site", href: "https://slsdesigns-website.vercel.app/" }],
  },
  {
    slug: "gesture-controller",
    name: "Hand-Gesture Controller",
    role: "Solo build — the first repo",
    status: "shipped",
    gitInit: "2026-05-16",
    headline: "Pinch to pause.",
    oneLiner: "Webcam gestures control your music — fully local, no cloud.",
    narrative: [
      "My first repo: a webcam, MediaPipe hand tracking, and 570 lines of Python. Raise your hand and it chimes; pinch your fingers and the music stops.",
      "OpenCV draws the live hand skeleton and pinch meter while AppleScript drives Apple Music. Everything runs on-device.",
    ],
    stack: ["Python", "MediaPipe", "OpenCV", "AppleScript"],
    repos: ["Adit-Shah1/hand-gesture-controller"],
    theme: "gesture",
    media: { figure: "gesture-svg" },
    links: [{ label: "Read the code", href: "https://github.com/Adit-Shah1/hand-gesture-controller" }],
  },
];

export const archive: ArchiveItem[] = [
  {
    date: "2026-07-31",
    name: "Carmate",
    oneLiner:
      "A connected-car app for a car that never had one — fuel and range estimation, automatic drive tracking, parked location, a lock log, a dashcam.",
    stack: ["Swift", "SwiftUI", "iOS 26", "watchOS 26"],
    repos: ["Adit-Shah1/carmate"],
    status: "building",
  },
  {
    date: "2026-07-07",
    name: "How to Think",
    oneLiner:
      "Nine rules for debugging anything, distilled from one long session with Claude Fable 5.",
    stack: ["HTML", "CSS"],
    repos: ["Adit-Shah1/how-to-think"],
    links: [
      { label: "Live", href: "https://how-to-think.vercel.app" },
      { label: "GitHub", href: "https://github.com/Adit-Shah1/how-to-think" },
    ],
    preview: "/images/archive/how-to-think.jpg",
    status: "live",
  },
  {
    date: "2026-07-06",
    name: "This website",
    oneLiner: "The page you're reading — monochrome until the work brings its own colour.",
    stack: ["Next.js", "GSAP", "Lenis"],
    repos: ["Adit-Shah1/portfolio"],
    links: [{ label: "GitHub", href: "https://github.com/Adit-Shah1/portfolio" }],
    status: "live",
  },
  {
    date: "2026-06-02",
    name: "Job Application Tracker",
    oneLiner: "Full-stack job-hunt manager: Kanban pipeline, five Gemini-powered assists, Playwright CI.",
    stack: ["Next.js", "Prisma", "Postgres", "Gemini"],
    repos: ["Adit-Shah1/job-application-tracker"],
    links: [
      { label: "Live", href: "https://job-application-tracker-one-ochre.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Adit-Shah1/job-application-tracker" },
    ],
    preview: "/images/archive/jobtracker.png",
    status: "live",
  },
];

const asLogItem = (c: CaseStudy): ArchiveItem => ({
  date: c.gitInit,
  name: c.name,
  oneLiner: c.oneLiner,
  stack: c.stack,
  repos: c.repos,
  links: c.links,
  preview: c.preview,
  status: c.status,
});

/**
 * Every project on the site, newest first — the featured work folded in with
 * the archive. Derived, so nothing here can drift out of sync with the
 * sections above it.
 */
export const fullLog: ArchiveItem[] = [
  ...caseStudies.map(asLogItem),
  ...selectedWork.map(asLogItem),
  ...archive,
].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
