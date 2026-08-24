import { Compass, PenTool, Code2 } from "lucide-react";
import type { CraftGroup } from "@/lib/data";
import { Chip } from "./Chip";

const icons = {
  compass: Compass,
  "pen-tool": PenTool,
  "code-2": Code2,
} as const;

export function CraftColumn({ icon, title, chips }: CraftGroup) {
  const Icon = icons[icon];

  return (
    <div className="flex flex-col gap-4">
      <Icon className="h-5 w-5 stroke-[1.75] text-orchid" />
      <span className="text-[17px] font-semibold tracking-[-0.02em]">{title}</span>
      <div className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <Chip key={chip} label={chip} />
        ))}
      </div>
    </div>
  );
}
