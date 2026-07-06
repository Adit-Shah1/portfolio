export default function StackTags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-line px-3 py-1.5">
          {item}
        </li>
      ))}
    </ul>
  );
}
