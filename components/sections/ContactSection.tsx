import { GitBranch, Mail } from "lucide-react";
import { Button } from "@/components/Button";
import { social } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-16 sm:px-10 sm:py-24 lg:px-[72px] lg:pb-[88px]">
      <span className="font-mono text-[12px] text-meta">{"( 06 — Contact )"}</span>
      <h2 className="mt-4 max-w-[780px] font-display text-[36px] leading-[1.05] font-bold tracking-[-0.03em] text-balance sm:text-[46px] lg:text-[58px] lg:leading-[1.04] lg:tracking-[-0.04em]">
        Have something that needs to <span className="text-orchid">ship</span>?
      </h2>
      <p className="mt-6 max-w-[500px] text-[17px] leading-[1.7] text-muted">
        Open to full-stack roles and freelance work. Email gets the fastest reply.
      </p>
      <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <Button
          href={`mailto:${social.email}`}
          size="lg"
          icon={<Mail className="h-[17px] w-[17px] stroke-[1.9] order-first" />}
        >
          Email me
        </Button>
        <Button
          href={social.github}
          target="_blank"
          variant="outline"
          size="lg"
          icon={<GitBranch className="h-[17px] w-[17px] stroke-[1.9] order-first" />}
        >
          View GitHub
        </Button>
      </div>
    </section>
  );
}
