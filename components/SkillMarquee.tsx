const skills = [ "Next.js", "TypeScript", "Tailwind CSS",  "Node.js","Express.js","MongoDB", "PostgreSQL", "Supabase", "Neon DB"];

export function SkillMarquee() {
  const loop = [...skills, ...skills];

  return (
    <div
      aria-hidden="true"
      className="group relative mt-12 overflow-hidden rounded-2xl border border-hairline bg-panel py-4 lg:mt-14"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-[linear-gradient(90deg,var(--color-panel),transparent)] sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-[linear-gradient(270deg,var(--color-panel),transparent)] sm:w-20" />
      <div className="animate-marquee flex w-max gap-8 px-8 group-hover:[animation-play-state:paused]">
        {loop.map((skill, i) => (
          <span key={i} className="flex items-center gap-8 text-[12.5px] text-meta sm:text-[13px]">
            {skill}
            <span className="h-1 w-1 rounded-full bg-orchid/40" />
          </span>
        ))}
      </div>
    </div>
  );
}