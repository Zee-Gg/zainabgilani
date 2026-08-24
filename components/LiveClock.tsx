"use client";

import { useEffect, useState } from "react";

export function LiveClock({ timeZone = "Asia/Karachi", label = "PKT" }: { timeZone?: string; label?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "2-digit",
          timeZone,
        }).format(new Date())
      );

    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  if (!time) return <span className="text-[12.5px] text-meta">&nbsp;</span>;

  return (
    <span className="flex items-center gap-1.5 text-[12.5px] text-meta">
      <span className="h-[5px] w-[5px] rounded-full bg-orchid/70" aria-hidden="true" />
      {time} {label}
    </span>
  );
}