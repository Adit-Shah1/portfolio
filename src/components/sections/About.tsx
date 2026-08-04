import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto w-full max-w-[80rem] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div data-reveal>
            <Eyebrow label="2026 · first year, monash university" />
            <SectionHeading>Learning by shipping.</SectionHeading>
          </div>
          <div data-reveal className="space-y-5 self-end text-lg leading-relaxed text-muted">
            <p className="text-fg">
              I&apos;m Adit — a first-year computer science student at Monash in Melbourne. Most of
              what I know, I learned by building the thing anyway and reading the error messages.
            </p>
            <p>
              This year that meant co-founding two startups with Saad Malik, shipping a production
              site for a real client, and filling a hard drive with everything from a watchOS car
              app to computer-vision toys. The degree gives me the fundamentals; shipping gives me
              everything else.
            </p>
            {/*
              Personality block — waiting on content from Adit:
              3–5 hobbies/facts + optional photo. Slot it in as a third
              paragraph or a mono "currently:" list here.
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
