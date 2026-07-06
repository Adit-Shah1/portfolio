"use client";

import { useRef } from "react";
import { caseStudies } from "@/data/projects";
import CaseBlock from "@/components/ui/CaseBlock";
import { gsap, useGSAP, MOTION_OK, DESKTOP } from "@/lib/motion";

const cs = caseStudies.find((c) => c.slug === "vela")!;
const video = cs.media.video!;

const beats: [string, string][] = [
  [
    "eight agents, one supervisor",
    "Strategy, brand voice, content, SEO, ad copy and analytics — coordinated by LangGraph.",
  ],
  [
    "writes in the brand's voice",
    "Retrieval over pgvector keeps every Gemini draft grounded in the brand kit.",
  ],
  [
    "humans stay in the loop",
    "An approval gate before anything ships — then straight out to Canva.",
  ],
];

/**
 * Vela scene: the product loop plays while the stage pins and the tech
 * story lights up beat by beat. Mobile / reduced motion: all beats visible.
 */
export default function VelaScene() {
  const ref = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const fullRef = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        ref.current?.querySelector<HTMLVideoElement>(".vela-loop")?.play().catch(() => {});
      });
      mm.add(`${MOTION_OK} and ${DESKTOP}`, () => {
        gsap.set(".vela-beat", { opacity: 0.25 });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".vela-stage",
            start: "top 18%",
            end: "+=130%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });
        gsap.utils.toArray<HTMLElement>(".vela-beat").forEach((beat) => {
          tl.to(beat, { opacity: 1, duration: 1 }).to({}, { duration: 0.5 });
        });
      });
    },
    { scope: ref },
  );

  const openDemo = () => {
    dialogRef.current?.showModal();
    fullRef.current?.play().catch(() => {});
  };

  return (
    <div ref={ref}>
      <CaseBlock
        cs={cs}
        media={
          <div className="vela-stage grid items-center gap-8 pb-8 md:grid-cols-[1.6fr_1fr] md:gap-12">
            <div className="overflow-hidden rounded-2xl border border-line bg-panel">
              <video
                className="vela-loop aspect-[166/85] w-full object-cover"
                poster={video.poster}
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={video.webm} type="video/webm" />
                <source src={video.loop} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col gap-7">
              {beats.map(([head, body]) => (
                <div key={head} className="vela-beat border-l border-line pl-5">
                  <p className="font-mono text-sm text-accent">{head}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              ))}
              <button
                type="button"
                onClick={openDemo}
                className="mt-2 w-fit rounded-full border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
              >
                ▶ watch the full demo · 3:18
              </button>
            </div>
            <dialog
              ref={dialogRef}
              onClose={() => fullRef.current?.pause()}
              onClick={(e) => {
                if (e.target === dialogRef.current) dialogRef.current?.close();
              }}
              className="m-auto w-[min(92vw,64rem)] rounded-2xl border border-line bg-panel p-2 backdrop:bg-black/85"
            >
              {/* preload=none: the 4.4MB demo is only fetched on first open */}
              <video
                ref={fullRef}
                src={video.full}
                poster={video.poster}
                controls
                playsInline
                preload="none"
                className="aspect-[166/85] w-full rounded-xl"
                aria-label="Vela full product demo"
              />
            </dialog>
          </div>
        }
      />
    </div>
  );
}
