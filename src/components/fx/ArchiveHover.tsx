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

      let current: HTMLElement | null = null;

      const show = (row: HTMLElement) => {
        if (row === current) return;
        current = row;
        img.src = row.dataset.preview ?? "";
        gsap.to(el, { autoAlpha: 1, scale: 1, duration: 0.35, ease: "power3.out" });
      };
      const hide = () => {
        if (!current) return;
        current = null;
        gsap.to(el, { autoAlpha: 0, scale: 0.95, duration: 0.25, ease: "power3.out" });
      };

      const onMove = (e: PointerEvent) => {
        const row = (e.target as Element | null)?.closest<HTMLElement>("[data-preview]");
        if (!row) {
          hide();
          return;
        }
        show(row);
        xTo(e.clientX + 28);
        yTo(e.clientY - 110);
      };

      // Leaving the window stops pointermove firing, which would freeze the
      // card wherever it was. relatedTarget is null only when the pointer
      // exits the document — moving between elements always names the one
      // being entered.
      const onOut = (e: PointerEvent) => {
        if (!e.relatedTarget) hide();
      };

      // Position drives visibility, rather than per-row pointerenter/leave:
      // pointerleave never fires when a link opens a new tab, when the tab
      // loses focus with the cursor parked on a row, or when scrolling pulls
      // the row out from under a still cursor — each one stranded the card.
      document.addEventListener("pointermove", onMove);
      document.addEventListener("pointerout", onOut);
      document.addEventListener("contextmenu", hide);
      window.addEventListener("scroll", hide, { passive: true });
      window.addEventListener("blur", hide);
      document.addEventListener("visibilitychange", hide);

      return () => {
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerout", onOut);
        document.removeEventListener("contextmenu", hide);
        window.removeEventListener("scroll", hide);
        window.removeEventListener("blur", hide);
        document.removeEventListener("visibilitychange", hide);
      };
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
