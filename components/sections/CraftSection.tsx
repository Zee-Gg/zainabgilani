import { decisions } from "@/lib/data";
import { DecisionCard } from "@/components/DecisionCard";

export function CraftSection() {
  return (
    <section
      id="craft"
      className="border-b border-hairline px-6 py-16 sm:px-10 sm:py-20 lg:px-[72px] lg:pb-[88px]"
    >
      <h2 className="mb-3 font-display text-[28px] font-bold tracking-[-0.035em] sm:text-[34px]">
        Decisions, not buzzwords
      </h2>
      <p className="mb-10 max-w-[560px] text-[15px] leading-[1.7] text-muted">
        Anyone can list a stack. Here&apos;s what I actually chose — and traded away — to ship these projects.
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {decisions.map((decision) => (
          <DecisionCard key={decision.choice} {...decision} />
        ))}
      </div>
    </section>
  );
}
