"use client";

import { useEffect, useRef } from "react";
import { MOTION_OK } from "@/lib/motion";

const SPACING = 30;
const REPEL_R = 140;
// ponytail: canvas can't read var(--fg); hardcoded rgb of the warm-white token.
const DOT = "233, 231, 223";

type Dot = { x: number; y: number; hx: number; hy: number; vx: number; vy: number };

/** Hero dot-field: a quiet grid that flinches away from the cursor. */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let onScreen = true;
    const pointer = { x: -9999, y: -9999 };
    const motionOk = matchMedia(MOTION_OK).matches;

    const build = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let y = SPACING / 2; y < h; y += SPACING) {
        for (let x = SPACING / 2; x < w; x += SPACING) {
          dots.push({ x, y, hx: x, hy: y, vx: 0, vy: 0 });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        const px = d.x - pointer.x;
        const py = d.y - pointer.y;
        const dist = Math.hypot(px, py);
        if (dist < REPEL_R && dist > 0) {
          const f = ((REPEL_R - dist) / REPEL_R) * 1.6;
          d.vx += (px / dist) * f;
          d.vy += (py / dist) * f;
        }
        d.vx += (d.hx - d.x) * 0.02;
        d.vy += (d.hy - d.y) * 0.02;
        d.vx *= 0.88;
        d.vy *= 0.88;
        d.x += d.vx;
        d.y += d.vy;
        // Displaced dots glow brighter, so the cursor leaves a fading wake.
        const disp = Math.abs(d.x - d.hx) + Math.abs(d.y - d.hy);
        ctx.fillStyle = `rgba(${DOT}, ${Math.min(0.85, 0.22 + disp * 0.025)})`;
        ctx.fillRect(d.x - 0.75, d.y - 0.75, 1.5, 1.5);
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    build();
    draw();
    if (!motionOk) return; // static frame only — no listeners, no rAF

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    const ro = new ResizeObserver(build);
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (onScreen) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="h-full w-full" aria-hidden />;
}
