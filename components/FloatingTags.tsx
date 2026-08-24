const tags = [
  { label: "TypeScript", top: "-6%", left: "6%", delay: "0s", rot: "-4deg" },
  { label: "Next.js", top: "18%", left: "84%", delay: "1.1s", rot: "3deg" },
  { label: "PostgreSQL", top: "78%", left: "2%", delay: "0.5s", rot: "2deg" },
  { label: "Node.js", top: "92%", left: "78%", delay: "1.7s", rot: "-3deg" },
];

export function FloatingTags() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
      {tags.map((tag) => (
        <span
          key={tag.label}
          className="animate-float-slow absolute rounded-full border border-border-soft bg-canvas/80 px-3 py-1.5 text-[12px] text-muted backdrop-blur-sm"
          style={{
            top: tag.top,
            left: tag.left,
            animationDelay: tag.delay,
            ["--tag-rot" as string]: tag.rot,
          }}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
}