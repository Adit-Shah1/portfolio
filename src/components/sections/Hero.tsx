import { site } from "@/data/site";
import HeroCanvas from "@/components/fx/HeroCanvas";

export default function Hero() {
  return (
    <section
      data-theme="neutral"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      <div
        className="hero-fade pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_100%_at_50%_35%,black_35%,transparent_78%)]"
        style={{ "--d": "0.85s" } as React.CSSProperties}
        aria-hidden
      >
        <HeroCanvas />
      </div>
      <div className="relative mx-auto w-full max-w-[80rem] px-6 pb-16 md:px-12">
        <p
          className="hero-fade font-mono text-[13px] tracking-wide text-muted"
          style={{ "--d": "0.1s" } as React.CSSProperties}
        >
          <span className="text-accent">{site.firstCommit}</span> · first commit
        </p>
        <h1 className="mt-8 font-display text-[clamp(4.5rem,17vw,15rem)] leading-[0.88] font-extrabold tracking-tight uppercase [font-stretch:78%]">
          <span className="hero-mask">
            <span className="hero-line" style={{ "--d": "0.12s" } as React.CSSProperties}>
              Adit
            </span>
          </span>
          <span className="hero-mask">
            <span className="hero-line" style={{ "--d": "0.24s" } as React.CSSProperties}>
              Shah
            </span>
          </span>
        </h1>
        <p
          className="hero-fade mt-10 max-w-xl text-lg leading-relaxed text-muted"
          style={{ "--d": "0.55s" } as React.CSSProperties}
        >
          {site.claim}
        </p>
        <p
          className="hero-fade mt-8 font-mono text-[13px] text-muted"
          style={{ "--d": "0.7s" } as React.CSSProperties}
        >
          {site.statusLine} · <span className="text-accent">{site.availability.toLowerCase()}</span>
        </p>
      </div>
      <div
        className="hero-fade pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ "--d": "1.2s" } as React.CSSProperties}
      >
        <span className="cue block font-mono text-xs text-muted">scroll ↓</span>
      </div>
    </section>
  );
}
