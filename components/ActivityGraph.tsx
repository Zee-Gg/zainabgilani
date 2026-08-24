"use client";

import { useMemo, useRef } from "react";
import { useCountUp } from "../app/hooks/useCountUp";

const COLS = 18;
const ROWS = 7;

function useSeed() {
  return useMemo(
    () =>
      Array.from({ length: COLS * ROWS }, (_, i) => {
        // deterministic pseudo-randomness so SSR/client match
        const n = Math.sin(i * 12.9898) * 43758.5453;
        return n - Math.floor(n);
      }),
    []
  );
}

export function ActivityGraph() {
  const cardRef = useRef<HTMLDivElement>(null);
  const cells = useSeed();
  const { ref: countRef, value } = useCountUp(1847);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${py * -6}deg) rotateY(${px * 8}deg)`;
  }

  function handleMouseLeave() {
    const el = cardRef.current;
    if (el) el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full bg-orchid/25 blur-[100px]"
      />
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl border border-hairline bg-panel p-6 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.7)] transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[11px] tracking-[0.1em] text-meta uppercase">
              Shipping activity
            </span>
            <div className="mt-1.5 flex items-baseline gap-1.5">
              <span ref={countRef} className="font-display text-[28px] font-bold tracking-[-0.02em]">
                {value.toLocaleString()}
              </span>
              <span className="text-[13px] text-muted">commits / year</span>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-badge px-2.5 py-1 text-[11.5px] font-medium text-orchid-text">
            <span className="h-1.5 w-1.5 rounded-full bg-orchid animate-pulse-soft" />
            active
          </span>
        </div>

        <div
          className="mt-5 grid gap-[3px]"
          style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
        >
          {cells.map((seed, i) => {
            const intensity =
              seed > 0.82 ? 3 : seed > 0.6 ? 2 : seed > 0.35 ? 1 : 0;
            const bg = [
              "var(--color-surface-hover)",
              "rgba(212,74,158,0.28)",
              "rgba(212,74,158,0.55)",
              "var(--color-orchid)",
            ][intensity];

            return (
              <span
                key={i}
                className="animate-cell-in aspect-square rounded-[3px]"
                style={{
                  backgroundColor: bg,
                  animationDelay: `${(i % COLS) * 22 + Math.floor(i / COLS) * 60}ms`,
                }}
              />
            );
          })}
        </div>

        <div className="mt-4 flex items-center justify-between text-[11px] text-meta">
          <span>52 weeks</span>
          <span className="flex items-center gap-1">
            Less
            <span className="flex gap-[3px]">
              {["var(--color-surface-hover)", "rgba(212,74,158,0.28)", "rgba(212,74,158,0.55)", "var(--color-orchid)"].map(
                (c, i) => (
                  <span key={i} className="h-2 w-2 rounded-[2px]" style={{ backgroundColor: c }} />
                )
              )}
            </span>
            More
          </span>
        </div>
      </div>
    </div>
  );
}