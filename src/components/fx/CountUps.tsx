"use client";

import { gsap, useGSAP, MOTION_OK } from "@/lib/motion";

/**
 * Renders null; counts every [data-countup] from 0 to its server-rendered
 * value on first scroll into view. Reduced motion / no JS: the real numbers
 * are already in the HTML.
 */
export default function CountUps() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      gsap.utils.toArray<HTMLElement>("[data-countup]").forEach((el) => {
        gsap.from(el, {
          textContent: 0,
          snap: { textContent: 1 },
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    });
  });
  return null;
}
