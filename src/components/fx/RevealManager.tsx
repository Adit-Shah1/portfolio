"use client";

import { gsap, ScrollTrigger, useGSAP, MOTION_OK, EASE } from "@/lib/motion";

/**
 * Renders null; staggers every [data-reveal] block in on first view.
 * Base CSS keeps everything visible, so no JS / reduced motion = no hiding.
 */
export default function RevealManager() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.set("[data-reveal]", { opacity: 0, y: 32 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: EASE, stagger: 0.12 }),
      });
    });
  });
  return null;
}
