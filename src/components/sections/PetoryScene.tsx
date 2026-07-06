"use client";

import { useRef } from "react";
import Image from "next/image";
import { caseStudies } from "@/data/projects";
import CaseBlock from "@/components/ui/CaseBlock";
import { gsap, useGSAP, MOTION_OK, DESKTOP } from "@/lib/motion";

const cs = caseStudies.find((c) => c.slug === "petory")!;
const video = cs.media.video!;

/**
 * Petory scene: the hero film plays while the stage pins and the three
 * Stitch phone screens rise into place. Mobile / reduced motion: the same
 * layout, just static.
 */
export default function PetoryScene() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // Autoplay only when motion is welcome; a rejected play() (iOS Low
      // Power) just leaves the poster frame.
      mm.add(MOTION_OK, () => {
        ref.current?.querySelector("video")?.play().catch(() => {});
      });
      mm.add(`${MOTION_OK} and ${DESKTOP}`, () => {
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: ".petory-stage",
              start: "top 18%",
              end: "+=100%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          })
          .from(".petory-video", { scale: 1.05, transformOrigin: "50% 0%" }, 0)
          .from("[data-phone]", { yPercent: 42, stagger: 0.15 }, 0);
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref}>
      <CaseBlock
        cs={cs}
        media={
          <div className="petory-stage pb-8">
            <div className="petory-video overflow-hidden rounded-2xl border border-line bg-panel">
              <video
                className="aspect-video w-full object-cover"
                src={video.loop}
                poster={video.poster}
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <div className="mx-auto -mt-10 grid w-full max-w-3xl grid-cols-3 gap-4 px-4 md:-mt-24 md:gap-8">
              {cs.media.screens!.map((s) => (
                <Image
                  key={s.src}
                  data-phone
                  src={s.src}
                  alt={s.alt}
                  width={390}
                  height={884}
                  className="w-full rounded-2xl border border-line shadow-2xl"
                />
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
}
