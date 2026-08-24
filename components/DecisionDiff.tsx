import type { Decision } from "@/lib/data";

export function DecisionDiff({ decisions }: { decisions: Decision[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-panel">
      <div className="flex items-center justify-between border-b border-hairline px-5 py-3 font-mono text-[12px] text-meta">
        <span>{"// decisions.diff"}</span>
        <span>{decisions.length} trade-offs</span>
      </div>
      <div className="divide-y divide-hairline">
        {decisions.map((d) => (
          <div
            key={d.chosen}
            className="flex flex-col gap-1.5 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div className="flex flex-col gap-1 font-mono text-[13px] sm:text-[13.5px]">
              <span className="text-muted line-through decoration-1">- {d.rejected}</span>
              <span className="font-medium text-orchid-text">+ {d.chosen}</span>
            </div>
            <span className="text-[12.5px] text-meta sm:max-w-65 sm:text-right">
              {d.why} <span className="text-meta/70">— {d.project}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
