import type { Decision } from "@/lib/data";

export function DecisionCard({ choice, reasoning, project }: Decision) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-hairline bg-panel p-6 transition-colors duration-200 hover:border-border-strong-hover">
      <span className="text-[11px] tracking-[0.1em] text-orchid-text uppercase">{project}</span>
      <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em] text-balance">
        {choice}
      </h3>
      <p className="text-[14px] leading-[1.65] text-muted text-pretty">{reasoning}</p>
    </div>
  );
}
