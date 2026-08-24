import Link from "next/link";
import { ArrowUpRight, ExternalLink, GitBranch } from "lucide-react";
import type { Project } from "@/lib/data";
import { SpotlightCard } from "./SpotlightCard";

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
};

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const { name, blurb, company, period, metric, role, stack, liveUrl, githubUrl } = project;

  return (
    <SpotlightCard
      className={`overflow-hidden rounded-2xl border border-hairline bg-panel transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong-hover ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-orchid transition-transform duration-500 ease-out group-hover/spot:scale-x-100"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-3 -right-2 select-none font-display text-[110px] leading-none font-bold text-text/[0.04] sm:text-[140px]"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div
        className={`relative z-20 flex flex-col gap-6 p-6 sm:p-8 ${
          featured ? "lg:flex-row lg:items-start lg:justify-between lg:gap-10" : ""
        }`}
      >
        <div className={featured ? "lg:max-w-[480px]" : ""}>
          <div className="flex items-center gap-2 text-[12px] text-meta">
            <span>{company}</span>
            <span aria-hidden="true">·</span>
            <span>{period}</span>
          </div>

          <h3
            className={`mt-3 font-display font-bold tracking-[-0.035em] transition-colors duration-200 group-hover/spot:text-orchid-text ${
              featured ? "text-[32px] sm:text-[40px]" : "text-[24px] sm:text-[27px]"
            }`}
          >
            {name}
          </h3>

          <p
            className={`mt-3 leading-[1.65] text-muted ${
              featured ? "text-[15.5px]" : "text-[14.5px]"
            }`}
          >
            {blurb}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border-soft px-2.5 py-1 text-[11.5px] text-muted transition-colors duration-200 group-hover/spot:border-border-strong"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-text transition-colors duration-150 hover:text-orchid-text"
              >
                <ExternalLink className="h-[13px] w-[13px]" />
                Live
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-text transition-colors duration-150 hover:text-orchid-text"
              >
                <GitBranch className="h-[13px] w-[13px]" />
                Source
              </Link>
            )}
          </div>
        </div>

        {featured ? (
          <div className="flex shrink-0 flex-col gap-4 border-t border-hairline pt-6 lg:w-[220px] lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] tracking-[0.1em] text-meta uppercase">Impact</span>
              <span className="flex items-center gap-1.5 font-display text-2xl font-bold tracking-[-0.02em] text-orchid-text">
                {metric}
                <ArrowUpRight className="h-4 w-4 stroke-[2.4] transition-transform duration-200 ease-out group-hover/spot:translate-x-0.5 group-hover/spot:-translate-y-0.5" />
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] tracking-[0.1em] text-meta uppercase">Role</span>
              <span className="text-[14px] text-text">{role}</span>
            </div>
          </div>
        ) : (
          <div className="mt-1 flex items-center justify-between border-t border-hairline pt-4">
            <span className="text-[12.5px] text-meta">{role}</span>
            <span className="flex items-center gap-1 text-[13.5px] font-semibold text-orchid-text">
              {metric}
              <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2] transition-transform duration-200 ease-out group-hover/spot:translate-x-0.5 group-hover/spot:-translate-y-0.5" />
            </span>
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}