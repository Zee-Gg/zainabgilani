import { decisions } from "@/lib/data";
import { DecisionDiff } from "@/components/DecisionDiff";

export function CraftSection() {
  return (
    <section
      id="craft"
      className="border-b border-hairline px-6 py-16 sm:px-10 sm:py-20 lg:px-[72px] lg:pb-[88px]"
    >
      <h2 className="mb-8 font-display text-[28px] font-bold tracking-[-0.035em] sm:text-[34px]">
        Decisions, not buzzwords
      </h2>
      <DecisionDiff decisions={decisions} />
    </section>
  );
}
