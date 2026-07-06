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
 * Shipped something new? Append one ArchiveItem below (newest date first),
 * optionally drop a preview image in /public/images/archive/, done.
 */
export interface ArchiveItem {
  /** First-commit date, "YYYY-MM-DD"; omit if it isn't under git yet */
  date?: string;
  name: string;
  oneLiner: string;
  stack: string[];
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
    theme: "petory",
    media: {
      video: { loop: "/videos/petory-hero.mp4", poster: "/images/petory/hero-poster.jpg" },
      screens: [
        { src: "/images/petory/screen-dashboard.png", alt: "Petory dashboard — your pet's whole world in one view" },
        { src: "/images/petory/screen-feed.png", alt: "Petory private pet feed" },
        { src: "/images/petory/screen-passport.png", alt: "Petory digital passport — every record in one place" },
      ],
    },
    links: [],
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
    theme: "vela",
    media: {
      video: {
        loop: "/videos/vela-loop.mp4",
        webm: "/videos/vela-loop.webm",
        full: "/videos/vela-full.mp4",
        poster: "/images/vela/vela-poster.jpg",
      },
    },
    links: [],
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
    theme: "gesture",
    media: { figure: "gesture-svg" },
    links: [{ label: "Read the code", href: "https://github.com/Adit-Shah1/hand-gesture-controller" }],
  },
];

export const archive: ArchiveItem[] = [
  {
    date: "2026-07-06",
    name: "This website",
    oneLiner: "The page you're reading — monochrome until the work brings its own colour.",
    stack: ["Next.js", "GSAP", "Lenis"],
    status: "live",
  },
  {
    date: "2026-06-10",
    name: "Mobishell",
    oneLiner: "SwiftUI client for driving coding agents from a phone — Mosh, WebSockets, push. Early days.",
    stack: ["Swift", "SwiftUI"],
    status: "building",
  },
  {
    date: "2026-06-02",
    name: "Job Application Tracker",
    oneLiner: "Full-stack job-hunt manager: Kanban pipeline, five Gemini-powered assists, Playwright CI.",
    stack: ["Next.js", "Prisma", "Postgres", "Gemini"],
    links: [
      { label: "Live", href: "https://job-application-tracker-one-ochre.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Adit-Shah1/job-application-tracker" },
    ],
    preview: "/images/archive/jobtracker.png",
    status: "live",
  },
  {
    date: "2026-05-30",
    name: "Blackjack",
    oneLiner: "A casino in 10,000 lines of C++20 — rules engine, card-counting AI, TCP multiplayer, shipped as a .dmg.",
    stack: ["C++20", "SDL2", "CMake", "Catch2"],
    links: [{ label: "GitHub", href: "https://github.com/Adit-Shah1/blackjack-game" }],
    status: "shipped",
  },
  {
    date: "2026-05-27",
    name: "UniVibe",
    oneLiner: "48-hour Canva ImpactHack concept: helping new students belong before day one. With Saad Malik.",
    stack: ["Next.js", "Supabase"],
    status: "shipped",
  },
  {
    name: "Jarvis",
    oneLiner: "Voice-first macOS assistant — local Whisper STT, Piper TTS, a multi-model brain, a Three.js HUD.",
    stack: ["Electron", "React", "Three.js", "Whisper"],
    status: "coming-soon",
  },
];
