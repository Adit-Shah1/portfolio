"use client";

import { themes, type ThemeName } from "@/lib/themes";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/motion";

/**
 * The signature: renders null, watches every [data-theme] section and SETS
 * the :root accent vars at its thresholds. The CSS transition on :root does
 * the actual morphing. Reduced motion: no triggers, site stays monochrome.
 */
export default function ThemeMorph() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const apply = (name: ThemeName) => {
        const t = themes[name];
        const root = document.documentElement.style;
        root.setProperty("--accent", t.accent);
        root.setProperty("--accent-soft", t.accentSoft);
        root.setProperty("--glow", t.glow);
      };
      gsap.utils.toArray<HTMLElement>("[data-theme]").forEach((el) => {
        const name = el.dataset.theme as ThemeName;
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => apply(name),
          onEnterBack: () => apply(name),
        });
      });
    });
  });
  return null;
}
