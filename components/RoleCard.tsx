// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import type { Role } from "@/lib/data";
// import { PillBadge } from "./PillBadge";

// export function RoleCard({ period, current, company, title, description, links }: Role) {
//   return (
//     <article className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-[170px_1fr_300px] md:items-start md:gap-11">
//       <div className="flex flex-row items-center gap-4 pt-1 md:flex-col md:items-start md:gap-3">
//         <span className="text-sm text-meta">{period}</span>
//         {current && <PillBadge size="sm">Current</PillBadge>}
//       </div>
//       <div
//         className={`flex flex-col gap-2.5 border-l-2 pl-8 ${
//           current ? "border-orchid" : "border-border-soft"
//         }`}
//       >
//         <h3 className="font-display text-2xl font-bold tracking-[-0.03em] sm:text-[26px]">
//           {company}
//         </h3>
//         <span className="text-[15px] font-medium text-text">{title}</span>
//         <p className="mt-1.5 max-w-[520px] text-[15.5px] leading-[1.7] text-muted">
//           {description}
//         </p>
//       </div>
//       <div className="flex flex-col gap-2">
//         {links.map((link) => (
//           <Link
//             key={link.href}
//             href={link.href}
//             className="group flex items-center justify-between gap-3 rounded-[13px] border border-border-soft px-4 py-3 text-sm font-medium text-text transition-colors duration-150 ease-out hover:border-orchid hover:text-orchid-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid"
//           >
//             {link.label}
//             <ArrowRight className="h-[15px] w-[15px] stroke-2" />
//           </Link>
//         ))}
//       </div>
//     </article>
//   );
// }


import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Role } from "@/lib/data";
import { PillBadge } from "./PillBadge";

export function RoleCard({ period, current, company, title, description, links }: Role) {
  return (
    <article className="flex flex-col gap-6 rounded-2xl border border-hairline bg-panel p-7 sm:p-9">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-meta">{period}</span>
        {current && <PillBadge size="sm" pulse>Current</PillBadge>}
      </div>

      <div className="flex flex-col gap-2.5">
        <h3 className="font-display text-[26px] font-bold tracking-[-0.03em] sm:text-[30px]">
          {company}
        </h3>
        <span className="text-[15px] font-medium text-orchid-text">{title}</span>
        <p className="mt-1.5 max-w-[560px] text-[15.5px] leading-[1.7] text-muted">
          {description}
        </p>
      </div>

      {links.length > 0 && (
        <div className="flex flex-col gap-2 sm:max-w-[280px]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-3 rounded-[13px] border border-border-soft px-4 py-3 text-sm font-medium text-text transition-colors duration-150 ease-out hover:border-orchid hover:text-orchid-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid"
            >
              {link.label}
              <ArrowRight className="h-[15px] w-[15px] stroke-2 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}