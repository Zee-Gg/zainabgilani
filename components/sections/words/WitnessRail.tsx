"use client";

import type { Testimonial } from "@/lib/data";
import { Avatar } from "@/components/Avatar";

const CYCLE_MS = 7000;

type WitnessRailProps = {
  testimonials: Testimonial[];
  active: number;
  progress: number;
  onSelect: (index: number) => void;
};

export function WitnessRail({ testimonials, active, progress, onSelect }: WitnessRailProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {testimonials.map((t, i) => {
        const isActive = i === active;
        return (
          <button
            key={t.name}
            type="button"
            onClick={() => onSelect(i)}
            className={`group relative flex items-center gap-2.5 overflow-hidden rounded-full border py-2 pr-4 pl-2 transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid ${
              isActive
                ? "border-orchid bg-badge"
                : "border-border-soft hover:border-border-strong-hover"
            }`}
          >
            <Avatar alt={t.name} size={26} />
            <span
              className={`text-[13px] font-medium whitespace-nowrap ${
                isActive ? "text-orchid-text" : "text-muted group-hover:text-text"
              }`}
            >
              {t.name}
            </span>
            {isActive && (
              <span className="absolute right-0 bottom-0 left-0 h-[2px] bg-hairline/60">
                <span
                  className="block h-full bg-orchid"
                  style={{
                    width: `${progress}%`,
                    transition: progress === 0 ? "none" : "width 60ms linear",
                  }}
                />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export { CYCLE_MS };