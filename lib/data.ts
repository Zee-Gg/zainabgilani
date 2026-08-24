export type NavItem = {
  href: string;
  label: string;
  count: string;
};

export const navItems: NavItem[] = [
  { href: "#work", label: "Work", count: "04" },
  { href: "#path", label: "Path", count: "01" },
  { href: "#words", label: "Words", count: "03" },
  { href: "#craft", label: "Decisions", count: "06" },
];

export type Stat = {
  value: string;
  label: string;
  accent?: boolean;
};

export const stats: Stat[] = [
  { value: "2023", label: "coding since" },
  { value: "10+", label: "projects shipped" },
  { value: "6", label: "trade-offs made", accent: true },
  { value: "10+", label: "tools & frameworks" },
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
    id: "w-quiz",
    name: "AI Quiz Events",
    role: "Full-stack developer",
    company: "Personal project",
    period: "AI tooling",
    blurb:
      "Turns a topic or an uploaded document into a full quiz — AI-generated questions, a countdown timer, and a leaderboard people actually compete on, with a graceful fallback when the AI provider isn't.",
    metric: "3 formats, 1 pipeline",
    stack: ["Next.js", "React", "TypeScript", "MongoDB", "Groq API", "Tailwind CSS"],
    liveUrl: "https://ai-quiz-events.vercel.app/",
  },
  {
    id: "w-inkline",
    name: "Inkline",
    role: "Full-stack developer",
    company: "Personal project",
    period: "Real-time collaboration",
    blurb:
      "A Google Docs–style editor for Markdown, where CRDTs resolve real-time editing conflicts, live cursors show who's typing where, and every save is one restorable snapshot in a browsable history.",
    metric: "Zero merge conflicts",
    stack: ["Next.js", "Node.js", "Socket.io", "Yjs (CRDT)", "PostgreSQL", "Prisma"],
     liveUrl: "https://md-editor-ivory.vercel.app/",
  },
  {
    id: "w-databridge",
    name: "DataBridge",
    role: "Full-stack developer",
    company: "Personal project",
    period: "Multi-tenant systems",
    blurb:
      "Two organizations, one system: OTP-only login, soft-deleted rows that stay recoverable, and cross-org transfers that move data in a single query instead of round-tripping through the app.",
    metric: "1 query, 0 round trips",
    stack: ["Next.js", "PostgreSQL (Neon)", "JWT", "Upstash Redis", "Nodemailer"],
    liveUrl: "https://multi-org-transfer-system.vercel.app/"
  },
  {
    id: "w-lecture-notes",
    name: "AI Lecture Notes Assistant",
    role: "Full-stack developer",
    company: "Personal project",
    period: "AI pipelines",
    blurb:
      "Uploads a lecture recording and hands back structured notes plus a searchable course chat — transcription, note generation, and embeddings all run as background jobs so a slow upload never blocks the page.",
    metric: "4-stage AI pipeline",
    stack: ["Next.js", "Groq Whisper", "Cohere", "Supabase Storage", "ffmpeg"],
    liveUrl: "https://ai-lecture-notes-frontend.vercel.app/"
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
       { href: "https://askpdf-b5uycurnv9xxuu57pesh8m.streamlit.app/", label: "AskPDF" },
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
  rejected: string;
  chosen: string;
  why: string;
  project: string;
};

export const decisions: Decision[] = [
  {
    rejected: "Manual locking",
    chosen: "CRDTs (Yjs)",
    why: "concurrent edits merge, they never conflict",
    project: "Inkline",
  },
  {
    rejected: "Save on every keystroke",
    chosen: "Debounce + snapshot",
    why: "keeps the database from drowning",
    project: "Inkline",
  },
  {
    rejected: "Passwords",
    chosen: "Email OTP",
    why: "nothing left to hash, salt, or leak",
    project: "DataBridge",
  },
  {
    rejected: "Hard deletes",
    chosen: "Soft deletes",
    why: "data stays recoverable, never gone",
    project: "DataBridge",
  },
  {
    rejected: "Block until done",
    chosen: "Background job + recovery",
    why: "upload returns instantly, survives a restart",
    project: "AI Lecture Notes Assistant",
  },
  {
    rejected: "Fail on quota limit",
    chosen: "Fallback questions",
    why: "the quiz still runs either way",
    project: "AI Quiz Events",
  },
];

export const social = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/Zee-Gg",
  email: "zainabgilani2226@gmail.com",
};
