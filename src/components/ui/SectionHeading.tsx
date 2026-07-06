/** Display heading in Bricolage with the theme-fed accent bar. */
export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h2 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] font-extrabold tracking-tight [font-stretch:85%]">
        {children}
      </h2>
      <div className="mt-8 h-1 w-16 bg-accent" aria-hidden />
    </div>
  );
}
