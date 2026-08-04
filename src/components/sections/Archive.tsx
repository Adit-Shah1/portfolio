import { fullLog, statusLabel } from "@/data/projects";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import ArchiveHover from "@/components/fx/ArchiveHover";

export default function Archive() {
  return (
    <section data-theme="neutral" className="py-28 md:py-40">
      <ArchiveHover />
      <div className="mx-auto w-full max-w-[80rem] px-6 md:px-12">
        <div data-reveal>
          <Eyebrow label="ls ~/repos --sort=date" />
          <SectionHeading>The full log.</SectionHeading>
          <p className="mt-8 max-w-xl text-muted">
            Everything that&apos;s left the laptop — newest first. This list only grows.
          </p>
        </div>
        <ul className="mt-16">
          {fullLog.map((item) => (
            <li
              key={item.name}
              data-reveal
              data-preview={item.preview}
              className="group border-t border-line py-6 last:border-b md:py-7"
            >
              <div className="grid gap-2 md:grid-cols-[7.5rem_1fr_auto] md:items-baseline md:gap-8">
                <span className="font-mono text-xs text-muted">{item.date ?? "· · ·"}</span>
                <div>
                  <p className="font-display text-2xl font-bold [font-stretch:90%]">
                    {item.name}
                    {item.status && item.status !== "shipped" && (
                      <span className="ml-3 align-middle font-mono text-xs font-normal text-accent">
                        {statusLabel[item.status]}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 max-w-2xl text-muted">{item.oneLiner}</p>
                  <p className="mt-2 font-mono text-xs text-muted/70">{item.stack.join(" · ")}</p>
                </div>
                <div className="flex gap-5 font-mono text-sm">
                  {item.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline underline-offset-4 hover:no-underline"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
