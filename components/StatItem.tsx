import type { Stat } from "@/lib/data";

type StatItemProps = Stat & { delay?: number };

export function StatItem({ value, label, accent, delay = 0 }: StatItemProps) {
  return (
    <div
      className="animate-fade-in-up group relative flex flex-col gap-1.5 rounded-2xl border border-hairline bg-panel px-4 py-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-border-strong-hover hover:bg-surface-hover sm:px-5 sm:py-6"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span
        className={`font-display text-[28px] leading-none font-bold tracking-[-0.04em] transition-colors duration-200 ease-out sm:text-[34px] lg:text-[38px] ${
          accent ? "text-orchid" : "group-hover:text-orchid-text"
        }`}
      >
        {value}
      </span>
      <span className="text-[12.5px] text-meta sm:text-[13.5px]">{label}</span>
    </div>
  );
}