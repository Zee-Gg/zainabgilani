"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Folder, GitBranch, Quote, Terminal, type LucideIcon } from "lucide-react";
import { navItems } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  "#work": Folder,
  "#path": GitBranch,
  "#words": Quote,
  "#craft": Terminal,
};

export function SidebarNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex flex-col gap-0.5">
      {navItems.map((item) => {
        const isActive = active === item.href;
        const Icon = iconMap[item.href] ?? Folder;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative flex items-center gap-3 overflow-hidden rounded-xl py-2.5 pr-3.5 pl-4 text-[15px] transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid ${
              isActive ? "text-text" : "text-muted hover:text-text"
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute inset-0 -z-10 rounded-xl bg-surface-hover transition-all duration-300 ease-out ${
                isActive
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute top-1/2 left-0 h-4 w-[2.5px] -translate-y-1/2 rounded-full bg-orchid transition-all duration-300 ease-out ${
                isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              }`}
            />
            <Icon
              className={`h-[15px] w-[15px] shrink-0 stroke-[1.8] transition-colors duration-200 ${
                isActive ? "text-orchid" : "text-meta group-hover:text-muted"
              }`}
            />
            <span className="flex-1">{item.label}</span>
            <span className="font-mono text-[12px] text-meta">{item.count}</span>
          </Link>
        );
      })}
    </nav>
  );
}