export function Chip({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-surface-hover px-3.5 py-2 text-[13.5px] text-muted">
      {label}
    </span>
  );
}
