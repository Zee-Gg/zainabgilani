import { craftGroups } from "@/lib/data";
import { CraftColumn } from "@/components/CraftColumn";

export function CraftSection() {
  return (
    <section
      id="craft"
      className="border-b border-hairline px-6 py-16 sm:px-10 sm:py-20 lg:px-[72px] lg:pb-[88px]"
    >
      <h2 className="mb-10 font-display text-[28px] font-bold tracking-[-0.035em] sm:text-[34px]">
        Craft
      </h2>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-11">
        {craftGroups.map((group) => (
          <CraftColumn key={group.title} {...group} />
        ))}
      </div>
    </section>
  );
}
