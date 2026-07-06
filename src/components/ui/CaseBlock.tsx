import { statusLabel, type CaseStudy } from "@/data/projects";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import StackTags from "./StackTags";

/**
 * Shared case-study shell: eyebrow → headline → role/credit → narrative →
 * stack → links, with the media slot below. Petory/Vela wrap this (or their
 * own variant) in pinned scenes.
 */
export default function CaseBlock({
  cs,
  media,
}: {
  cs: CaseStudy;
  media?: React.ReactNode;
}) {
  return (
    <section data-theme={cs.theme} className="relative overflow-hidden py-28 md:py-40">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_35%,var(--glow),transparent_70%)]"
      />
      <div className="mx-auto w-full max-w-[80rem] px-6 md:px-12">
        <div data-reveal>
          <Eyebrow date={cs.gitInit} label={`git init ${cs.slug}`} />
          <SectionHeading>{cs.headline}</SectionHeading>
          <p className="mt-8 font-mono text-sm text-muted">
            <span className="text-accent">{cs.name}</span> · {cs.role}
            {cs.credit ? ` · ${cs.credit}` : ""}{" "}
            <span className="ml-2 rounded-full border border-accent-soft bg-accent-soft px-3 py-1 text-xs text-accent">
              {statusLabel[cs.status]}
            </span>
          </p>
        </div>
        <div data-reveal className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
          {cs.narrative.map((para, i) => (
            <p key={i} className={i === 0 ? "text-fg" : undefined}>
              {para}
            </p>
          ))}
        </div>
        <div data-reveal className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
          <StackTags items={cs.stack} />
          {cs.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent underline underline-offset-4 hover:no-underline"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
        {media && <div className="mt-16 md:mt-20">{media}</div>}
      </div>
    </section>
  );
}
