/** Section eyebrow in the git-log voice: `2026-06-30 · git init petory` */
export default function Eyebrow({
  date,
  label,
  className = "",
}: {
  date?: string;
  label: string;
  className?: string;
}) {
  return (
    <p className={`font-mono text-[13px] tracking-wide text-muted ${className}`}>
      {date && (
        <>
          <span className="text-accent">{date}</span>
          {" · "}
        </>
      )}
      {label}
    </p>
  );
}
