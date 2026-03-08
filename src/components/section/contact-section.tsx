import Link from "next/link";
import type { ResumeData } from "@/data/resume";
import type { Locale } from "@/lib/locale";
import { ArrowUpRight } from "lucide-react";

type PrincipleSectionProps = {
  contact: ResumeData["contact"];
  locale: Locale;
};

const copy = {
  zh: {
    badge: "PRINCIPLE",
    intro: "一个词，定义我的做事方式。",
    keyword: "Emancipate",
    outro: "让系统承担复杂，让人回到创造。",
    x: "X",
    linkedin: "LinkedIn",
    email: "Email",
  },
  en: {
    badge: "PRINCIPLE",
    intro: "One word defines how I build.",
    keyword: "Emancipate",
    outro: "Let systems absorb complexity, and return time to people.",
    x: "X",
    linkedin: "LinkedIn",
    email: "Email",
  },
} as const;

export default function PrincipleSection({ contact, locale }: PrincipleSectionProps) {
  const text = copy[locale];
  const xUrl = contact.social.X?.url;
  const linkedInUrl = contact.social.LinkedIn?.url;
  const email = contact.email;

  return (
    <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-black/[0.08] bg-white/70 px-7 py-12 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.35)] backdrop-blur-2xl dark:border-white/[0.14] dark:bg-[#0b0b0c]/70 sm:px-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_-10%,rgba(255,255,255,0.95),transparent_60%),radial-gradient(70%_70%_at_100%_0%,rgba(148,163,184,0.16),transparent_58%)] dark:bg-[radial-gradient(120%_100%_at_50%_-10%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(70%_70%_at_100%_0%,rgba(148,163,184,0.2),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent dark:via-white/20" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 text-[11px] font-medium tracking-[0.24em] text-foreground/60 dark:text-white/65">
            {text.badge}
          </span>

        <p className="text-sm text-muted-foreground sm:text-base">{text.intro}</p>

        <h2 className="relative mt-4 text-[clamp(3rem,14vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-foreground/95">
          <span
            aria-hidden="true"
            className="principle-keyword-glow absolute inset-0 select-none"
          >
            {text.keyword}
          </span>
          <span className="principle-keyword relative inline-block">
            {text.keyword}
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {text.outro}
        </p>

        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/15" />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {email ? (
            <Link
              href={`mailto:${email}`}
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {text.email}
              <ArrowUpRight className="size-3.5" />
            </Link>
          ) : null}
          {xUrl ? (
            <Link
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-black/10 bg-white/80 px-5 text-sm font-medium text-foreground transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:border-white/20 dark:bg-white/8 dark:text-white dark:hover:bg-white/12"
            >
              {text.x}
              <ArrowUpRight className="size-3.5" />
            </Link>
          ) : null}
          {linkedInUrl ? (
            <Link
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-black/10 bg-white/80 px-5 text-sm font-medium text-foreground transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:border-white/20 dark:bg-white/8 dark:text-white dark:hover:bg-white/12"
            >
              {text.linkedin}
              <ArrowUpRight className="size-3.5" />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/65 to-transparent dark:from-black/20" />
    </div>
  );
}
