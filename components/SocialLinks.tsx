import Link from "next/link";
import { Globe, Mail, GitBranch } from "lucide-react";
import { social } from "@/lib/data";

export function SocialLinks() {
  const links = [
    { href: social.linkedin, label: "LinkedIn", Icon: Globe },
    { href: social.github, label: "GitHub", Icon: GitBranch },
    { href: `mailto:${social.email}`, label: "Email", Icon: Mail },
  ];

  return (
    <div className="flex items-center gap-2">
      {links.map(({ href, label, Icon }) => (
        <Link
          key={label}
          href={href}
          title={label}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-soft text-muted transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-orchid hover:text-orchid-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orchid focus-visible:ring-offset-2"
        >
          <Icon className="h-3.75 w-3.75 stroke-[1.8]" />
        </Link>
      ))}
    </div>
  );
}
