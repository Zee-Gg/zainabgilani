"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Role } from "@/lib/data";
import { useInView } from "../app/hooks/useInView";

export function ExperienceSpotlight({
  period,
  current,
  company,
  title,
  description,
  links,
}: Role) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const words = company.split(" ");

  return (
    <div ref={ref} className="flex flex-col gap-8 sm:flex-row sm:gap-10">
      {/* Node + growing line */}
      <div className="flex shrink-0 flex-row items-center gap-4 sm:w-[120px] sm:flex-col sm:items-start sm:gap-0">
        <span className="relative flex h-3 w-3 shrink-0">
          {current && (
            <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-orchid" />
          )}
          <span className="relative inline-flex h-3 w-3 rounded-full bg-orchid" />
        </span>
        <span
          aria-hidden="true"
          className="hidden h-24 w-px origin-top bg-orchid/40 sm:mt-3 sm:block"
          style={{
            transform: inView ? "scaleY(1)" : "scaleY(0)",
            transition: "transform 900ms cubic-bezier(0.16, 1, 0.3, 1) 150ms",
          }}
        />
        <span className="font-mono text-[12.5px] text-meta sm:mt-3">{period}</span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-display text-[34px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[46px] lg:text-[56px]">
          {words.map((word, i) => (
            <span
              key={i}
              className="mr-[0.2em] inline-block"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(0.3em)",
                filter: inView ? "blur(0)" : "blur(6px)",
                transition: "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1), filter 600ms cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: `${i * 90 + 100}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </h3>

        <div
          className="mt-3 flex items-center gap-3"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
            transitionDelay: `${words.length * 90 + 200}ms`,
          }}
        >
          <span className="text-[15px] font-medium text-orchid-text">{title}</span>
          {current && (
            <span className="flex items-center gap-1.5 text-[12.5px] text-meta">
              <span className="h-1 w-1 rounded-full bg-orchid" />
              Current
            </span>
          )}
        </div>

        <p
          className="mt-5 max-w-[540px] text-[15.5px] leading-[1.75] text-muted"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
            transitionDelay: `${words.length * 90 + 280}ms`,
          }}
        >
          {description}
        </p>

        {links.length > 0 && (
          <div
            className="mt-5 flex flex-wrap items-center gap-4"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 500ms ease-out, transform 500ms ease-out",
              transitionDelay: `${words.length * 90 + 360}ms`,
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-text transition-colors duration-150 hover:text-orchid-text"
              >
                <ArrowUpRight className="h-[13px] w-[13px]" />
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}