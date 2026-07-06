import { site } from "@/data/site";
import Eyebrow from "@/components/ui/Eyebrow";
import CountUps from "@/components/fx/CountUps";

export default function Stats() {
  return (
    <section className="border-y border-line">
      <CountUps />
      <div className="mx-auto w-full max-w-[80rem] px-6 py-16 md:px-12 md:py-20">
        <Eyebrow label={`git log --all --since="${site.firstCommit}"`} />
        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label} data-reveal>
              <p className="font-display text-6xl font-extrabold [font-stretch:85%] md:text-7xl">
                <span data-countup>{stat.value}</span>
                {stat.suffix}
              </p>
              <p className="mt-3 font-mono text-xs text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
