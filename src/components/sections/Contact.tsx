import { site } from "@/data/site";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import MelbourneClock from "@/components/fx/MelbourneClock";

export default function Contact() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_100%,var(--glow),transparent_70%)]"
      />
      <div className="mx-auto w-full max-w-[80rem] px-6 md:px-12">
        <div data-reveal>
          <Eyebrow label="open to internships · 2026/27" />
          <SectionHeading>Say g&apos;day.</SectionHeading>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            If you&apos;re hiring interns — or just want to talk products, startups or Melbourne
            coffee — my inbox is open.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-6">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-accent px-7 py-4 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
            >
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted underline underline-offset-4 hover:text-accent"
            >
              GitHub ↗
            </a>
            {site.linkedin && (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted underline underline-offset-4 hover:text-accent"
              >
                LinkedIn ↗
              </a>
            )}
            {site.resumeUrl && (
              <a
                href={site.resumeUrl}
                className="font-mono text-sm text-muted underline underline-offset-4 hover:text-accent"
              >
                Resume (PDF) ↓
              </a>
            )}
          </div>
        </div>
        <footer className="mt-28 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 font-mono text-xs text-muted">
          <span>© 2026 Adit Shah · Melbourne</span>
          <MelbourneClock />
        </footer>
      </div>
    </section>
  );
}
