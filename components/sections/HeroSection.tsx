import { ArrowUpRight, FileDown } from "lucide-react";
import { stats } from "@/lib/data";
import { StatItem } from "@/components/StatItem";
import { Button } from "@/components/Button";
import { MetaRow } from "@/components/MetaRow";
import { OrbitMark } from "@/components/OrbitMark";
import { SkillMarquee } from "@/components/SkillMarquee";

const leadWords = "I build products that hold up in".split(" ");
const trailWords = "not just the demo.".split(" ");

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-hairline px-6 pt-10 pb-12 sm:px-10 sm:pt-14 sm:pb-14 lg:px-[72px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_55%_45%_at_30%_0%,black,transparent)]"
        style={{
          backgroundImage: "radial-gradient(var(--color-hairline) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <OrbitMark />

      <MetaRow />

      <h1 className="relative z-10 mt-8 max-w-[900px] font-display text-[36px] leading-[1.05] font-bold tracking-[-0.03em] text-balance sm:mt-10 sm:text-[54px] sm:leading-[1.02] lg:text-[78px] lg:leading-[0.97] lg:tracking-[-0.045em]">
        {leadWords.map((word, i) => (
          <span
            key={i}
            className="animate-word-in mr-[0.26em] inline-block"
            style={{ animationDelay: `${i * 65}ms` }}
          >
            {word}
          </span>
        ))}
        <span
          className="animate-word-in relative mr-[0.26em] inline-block whitespace-nowrap text-orchid"
          style={{ animationDelay: `${leadWords.length * 65}ms` }}
        >
          production,
          <svg
            aria-hidden="true"
            viewBox="0 0 220 12"
            preserveAspectRatio="none"
            className="absolute -bottom-2 left-0 h-[10px] w-[88%] text-orchid/55"
          >
            <path
              d="M2 9.5C44 3 132 2 218 8"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="220"
              className="animate-draw-underline"
              style={{ animationDelay: `${(leadWords.length + 2) * 65}ms` }}
            />
          </svg>
        </span>
        {trailWords.map((word, i) => (
          <span
            key={i}
            className="animate-word-in mr-[0.26em] inline-block"
            style={{ animationDelay: `${(leadWords.length + 1 + i) * 65}ms` }}
          >
            {word}
          </span>
        ))}
      </h1>

      <div className="relative z-10 mt-8 grid grid-cols-1 gap-8 sm:mt-10 lg:grid-cols-[1fr_260px] lg:items-start lg:gap-16">
        <div>
          <p
            className="animate-fade-in-up max-w-[520px] text-[15.5px] leading-[1.7] text-muted text-pretty sm:text-lg"
            style={{ animationDelay: "780ms" }}
          >
            Three years shipping full-stack products across operations, finance
            and early-stage teams — from database schema to the pixel that
            ships.
          </p>

          <div
            className="animate-fade-in-up mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row"
            style={{ animationDelay: "860ms" }}
          >
            <Button
              href="#work"
              size="lg"
              className="group"
              icon={
                <ArrowUpRight className="h-[17px] w-[17px] stroke-[2.2] transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              }
            >
              View my work
            </Button>
            <Button
              href="/Software_Engineer___Zainab_Gilani.pdf"
              variant="outline"
              size="lg"
              icon={<FileDown className="order-first h-[17px] w-[17px] stroke-[1.9]" />}
            >
              Resume
            </Button>
          </div>
        </div>

        <div
          className="animate-fade-in-up flex flex-col gap-6 border-t border-hairline pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8"
          style={{ animationDelay: "940ms" }}
        >
          <div className="flex flex-col gap-1">
            <span className="text-[11px] tracking-[0.1em] text-meta uppercase">Looking for</span>
            <span className="text-[14px] leading-[1.5] text-text">
              Full-stack roles & freelance work
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] tracking-[0.1em] text-meta uppercase">Based in</span>
            <span className="text-[14px] text-text">Rawalpindi, PK — UTC+5</span>
          </div>
        </div>
      </div>

      <SkillMarquee />

      <div className="relative z-10 mt-6 flex flex-col gap-3 sm:mt-8 lg:flex-row lg:items-stretch lg:gap-4">
        <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={1050 + i * 70} />
          ))}
        </div>

      </div>
    </section>
  );
}
