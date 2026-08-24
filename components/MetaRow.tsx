import { LiveClock } from "./LiveClock";

export function MetaRow() {
  return (
    <div className="animate-fade-in-up relative z-10 flex items-center justify-between gap-4 font-mono text-[12px] text-meta">
      <span>( 01 — Intro )</span>
      <div className="flex items-center gap-3">
        <LiveClock />
        <span aria-hidden="true" className="h-3 w-px bg-hairline" />
        <span className="flex items-center gap-1.5">
          <span className="animate-pulse-soft h-[5px] w-[5px] rounded-full bg-orchid" />
          Open to work
        </span>
      </div>
    </div>
  );
}