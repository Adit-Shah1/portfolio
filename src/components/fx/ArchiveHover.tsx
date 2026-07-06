"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK, DESKTOP } from "@/lib/motion";

/** Cursor-following preview card for archive rows that carry data-preview. */
export default function ArchiveHover() {
  const box = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(`${MOTION_OK} and ${DESKTOP}`, () => {
      const el = box.current;
      if (!el) return;
      const img = el.querySelector("img");
      if (!img) return;
      const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3" });

      const onMove = (e: PointerEvent) => {
        xTo(e.clientX + 28);
        yTo(e.clientY - 110);
      };
      const onEnter = (row: HTMLElement) => {
        img.src = row.dataset.preview ?? "";
        gsap.to(el, { autoAlpha: 1, scale: 1, duration: 0.35, ease: "power3.out" });
      };
      const onLeave = () => {
        gsap.to(el, { autoAlpha: 0, scale: 0.95, duration: 0.25, ease: "power3.out" });
      };

      gsap.utils.toArray<HTMLElement>("[data-preview]").forEach((row) => {
        row.addEventListener("pointerenter", () => onEnter(row));
        row.addEventListener("pointerleave", onLeave);
        row.addEventListener("pointermove", onMove);
      });
      // ponytail: listeners live as long as the page — single static page, no teardown needed
    });
  });

  return (
    <div
      ref={box}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-50 w-80 scale-95 opacity-0"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative hover preview, DOM-swapped src */}
      <img
        alt=""
        className="aspect-video w-full rounded-lg border border-line object-cover object-top shadow-2xl"
      />
    </div>
  );
}
