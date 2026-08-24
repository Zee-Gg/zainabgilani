"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export function WorkSection() {
  const tags = Array.from(new Set(projects.flatMap((p) => p.stack))).slice(0, 6);
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.stack.includes(active));

  return (
    <section
      id="work"
      className="border-b border-hairline px-6 py-16 sm:px-10 sm:py-20 lg:px-[72px] lg:pb-[88px]"
    >
      <SectionHeader
        title="Selected work"
        meta={`${filtered.length} of ${projects.length} shipped`}
        className="mb-6"
      />

      <p className="mb-8 max-w-[560px] text-[15px] leading-[1.7] text-muted">
        A handful of the products I&apos;ve taken from schema to shipped
        feature — filter by stack to see how the pieces fit together.
      </p>

      <div className="mb-10 flex flex-wrap gap-2">
        {["All", ...tags].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActive(tag)}
            className={`rounded-full border px-3.5 py-1.5 text-[13px] transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid ${
              active === tag
                ? "border-orchid bg-badge text-orchid-text"
                : "border-border-soft text-muted hover:border-border-strong-hover hover:text-text"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {filtered.map((project, i) => (
          <Reveal key={project.id} delay={i * 80} className={i === 0 ? "lg:col-span-2" : ""}>
            <ProjectCard project={project} index={i} featured={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}