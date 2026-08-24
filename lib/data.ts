export type NavItem = {
  href: string;
  label: string;
  count: string;
};

export const navItems: NavItem[] = [
  { href: "#work", label: "Work", count: "05" },
  { href: "#path", label: "Path", count: "03" },
  { href: "#words", label: "Words", count: "03" },
  { href: "#craft", label: "Decisions", count: "06" },
];

export type Stat = {
  value: string;
  label: string;
  accent?: boolean;
};

export const stats: Stat[] = [
  { value: "2020", label: "designing since" },
  { value: "31", label: "products shipped" },
  { value: "4.7×", label: "activation lift", accent: true },
  { value: "3", label: "teams embedded" },
];

export type Project = {
  id: string;
  name: string;
  role: string;
  company: string;
  period: string;
  blurb: string;
  metric: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "w-dispatch",
    name: "Dispatch Console",
    role: "Lead designer",
    company: "Northrail",
    period: "2025 — 2026",
    blurb:
      "Rebuilt the triage view planners live in for eight hours a day — one queue, keyboard-first, exceptions surfaced instead of buried.",
    metric: "42% faster triage",
    stack: ["Operations", "Design systems", "React", "Accessibility", "Research", "Figma"],
    liveUrl: "https://ai-quiz-events.vercel.app/",
    githubUrl: "https://github.com/example/dispatch-console",
  },
  {
    id: "w-atlas",
    name: "Atlas Design System",
    role: "System owner",
    company: "Northrail",
    period: "2024 — 2025",
    blurb:
      "A token-backed component library three squads ship from, with contribution rules that keep it from drifting apart.",
    metric: "3 squads, one language",
    stack: ["Design tokens", "Storybook", "React", "Documentation", "Figma", "UI patterns"],
    liveUrl: "https://example.com/atlas-design-system",
    githubUrl: "https://github.com/example/atlas-design-system",
  },
  {
    id: "w-onboarding",
    name: "Onboarding Rebuild",
    role: "Product designer",
    company: "Meridian",
    period: "2023 — 2024",
    blurb:
      "Replaced a nine-step signup with a guided first task, so people reach real value before they finish setting up.",
    metric: "4.7× activation",
    stack: ["Product strategy", "Onboarding", "Analytics", "React", "Testing", "UX writing"],
    liveUrl: "https://example.com/onboarding-rebuild",
    githubUrl: "https://github.com/example/onboarding-rebuild",
  },
  {
    id: "w-reports",
    name: "Report Builder",
    role: "Product designer",
    company: "Meridian",
    period: "2022 — 2023",
    blurb:
      "A drag-to-compose reporting surface for finance teams — saved views, sensible defaults, an export nobody has to reformat.",
    metric: "40k users",
    stack: ["Data viz", "Dashboards", "React", "UX", "Testing", "Research"],
    liveUrl: "https://example.com/report-builder",
    githubUrl: "https://github.com/example/report-builder",
  },
  {
    id: "w-kern",
    name: "Client Brand Systems",
    role: "Interface designer",
    company: "Studio Kern",
    period: "2020 — 2022",
    blurb:
      "Identity and first product surfaces for four early-stage teams across fintech and health, from wordmark to shipped app.",
    metric: "4 launches",
    stack: ["Brand systems", "Marketing", "Prototype", "Product design", "Figma", "Strategy"],
    liveUrl: "https://example.com/client-brand-systems",
    githubUrl: "https://github.com/example/client-brand-systems",
  },
];

export type RoleLink = {
  href: string;
  label: string;
};

export type Role = {
  period: string;
  current?: boolean;
  company: string;
  title: string;
  description: string;
  links: RoleLink[];
};

export const roles: Role[] = [
  {
    period: "2025",
    current: false,
    company: "NASTP",
    title: "AI Web Developer Intern",
    description:
      "Built and shipped web features integrating AI-driven functionality — working across the stack from API integration to the interfaces people actually used.",
    links: [
      // add a project link here if you have one, e.g.:
      // { href: "#w-project-id", label: "Related project" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  linkedin: string;
  featured?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    featured: true,
    quote:
      "She sat with our planners for a week before drawing anything. The fix was obvious once she showed us what they were actually doing.",
    name: "Hana Yusuf",
    role: "VP Product, Northrail",
    linkedin: "https://www.linkedin.com/",
  },
  {
    quote:
      "The design system she left behind is still the reason our releases look like one product. That is rarer than it sounds.",
    name: "Omar Sheikh",
    role: "Engineering Lead, Meridian",
    linkedin: "https://www.linkedin.com/",
  },
  {
    quote:
      "Calm in critique, ruthless about scope, and the only designer I've worked with who writes her own acceptance criteria.",
    name: "Priya Nair",
    role: "Founder, Studio Kern",
    linkedin: "https://www.linkedin.com/",
  },
];

export type Decision = {
  choice: string;
  reasoning: string;
  project: string;
};

export const decisions: Decision[] = [
  {
    choice: "CRDTs over manual locking",
    reasoning:
      "Real-time editing needs every client to converge on the same document no matter what order edits arrive in. Yjs turns each keystroke into a mergeable diff instead of a lock request, so ten people can type in the same paragraph and nobody loses a word.",
    project: "Inkline",
  },
  {
    choice: "Debounced saves over per-keystroke writes",
    reasoning:
      "Hitting Postgres on every keypress would drown the database. The live document stays in memory while people edit; disk only gets touched after a short pause, with full timestamped snapshots on a longer interval for history.",
    project: "Inkline",
  },
  {
    choice: "OTP over passwords",
    reasoning:
      "Nothing to hash, salt, or leak. A 6-digit code that expires in 10 minutes and can only be used once removes an entire class of auth bugs before they can happen.",
    project: "DataBridge",
  },
  {
    choice: "Soft deletes over hard deletes",
    reasoning:
      "Rows get an is_deleted flag instead of disappearing. Every query filters it out, but the data — and the ability to recover it — never actually leaves the table.",
    project: "DataBridge",
  },
  {
    choice: "Background jobs over blocking the request",
    reasoning:
      "Transcribing and compressing a lecture can take minutes. The upload returns immediately while a background worker carries the file through pending → processing → done, and a recovery job rescues anything left stuck after a crash.",
    project: "AI Lecture Notes Assistant",
  },
  {
    choice: "Graceful fallback over a hard failure",
    reasoning:
      "If the AI provider is down or the quota's gone, the quiz still generates from a fallback question set instead of showing the user an error screen.",
    project: "AI Quiz Events",
  },
];

export const social = {
  linkedin: "https://www.linkedin.com/",
  dribbble: "https://dribbble.com/",
  email: "zainab@example.com",
};
