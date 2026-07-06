export type ThemeName = "neutral" | "petory" | "vela" | "sls" | "gesture";

export interface SectionTheme {
  /** Ambient accent: underlines, links, ::selection, eyebrow dates */
  accent: string;
  /** Low-alpha wash of the accent for borders/tints */
  accentSoft: string;
  /** Radial glow behind section media */
  glow: string;
}

/**
 * The site owns no colour of its own. Each case study's real brand palette
 * takes the page over while it's on screen; `neutral` is the monochrome
 * chrome that reclaims it in between.
 */
export const themes: Record<ThemeName, SectionTheme> = {
  neutral: {
    accent: "oklch(0.92 0.005 90)",
    accentSoft: "oklch(0.92 0.005 90 / 0.12)",
    glow: "oklch(0.55 0.01 90 / 0.14)",
  },
  // Petory brand: marigold amber on deep navy (from petory/app/globals.css)
  petory: {
    accent: "oklch(0.81 0.135 78)",
    accentSoft: "oklch(0.81 0.135 78 / 0.14)",
    glow: "oklch(0.31 0.09 268 / 0.55)",
  },
  // Vela brand: indigo #4f46e5 (lifted for dark-bg legibility), sky-deep glow
  vela: {
    accent: "oklch(0.72 0.16 277)",
    accentSoft: "oklch(0.72 0.16 277 / 0.14)",
    glow: "oklch(0.45 0.22 275 / 0.45)",
  },
  // SLS Designs brand: sage + terracotta (verified from slsdesigns globals.css)
  sls: {
    accent: "#b0cfa7",
    accentSoft: "oklch(0.8 0.06 140 / 0.14)",
    glow: "oklch(0.58 0.08 55 / 0.4)",
  },
  // Hand-gesture controller: MediaPipe landmark-overlay green
  gesture: {
    accent: "oklch(0.87 0.19 150)",
    accentSoft: "oklch(0.87 0.19 150 / 0.14)",
    glow: "oklch(0.6 0.15 150 / 0.28)",
  },
};
