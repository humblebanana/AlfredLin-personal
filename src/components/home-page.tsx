/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import TypingText from "@/components/typing-text";
import PrincipleSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import BlogHighlightsSection from "@/components/section/blog-highlights-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ResumeData } from "@/data/resume";
import type { Locale } from "@/lib/locale";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

type HomePageProps = {
  data: ResumeData;
  locale: Locale;
};

const copy = {
  zh: {
    hello: "你好，我是",
    about: "关于我",
    work: "工作经历",
    education: "教育背景",
    skills: "技能",
    present: "至今",
  },
  en: {
    hello: "Hi, I'm",
    about: "About",
    work: "Work Experience",
    education: "Education",
    skills: "Skills",
    present: "Present",
  },
} as const;

export default function HomePage({ data, locale }: HomePageProps) {
  const text = copy[locale];

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`${text.hello} ${data.name}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={data.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="w-24 h-32 md:w-28 md:h-36 border rounded-2xl shadow-lg ring-4 ring-muted">
                <AvatarImage
                  alt={data.name}
                  src={data.avatarUrl}
                  className="object-[50%_62%]"
                />
                <AvatarFallback>{data.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{text.about}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <TypingText text={data.summary} className="whitespace-pre-wrap" />
            </div>
          </BlurFade>
        </div>
      </section>

      {data.work.length > 0 && (
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
              <h2 className="text-xl font-bold">{text.work}</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
              <WorkSection work={data.work} presentLabel={text.present} />
            </BlurFade>
          </div>
        </section>
      )}

      {data.education.length > 0 && (
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 7} inView>
              <h2 className="text-xl font-bold">{text.education}</h2>
            </BlurFade>
            <div className="flex flex-col gap-8">
              {data.education.map((education, index) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                >
                  <Link
                    href={education.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-3 justify-between group"
                  >
                    <div className="flex items-center gap-x-3 flex-1 min-w-0">
                      {education.logoUrl ? (
                        <img
                          src={education.logoUrl}
                          alt={education.school}
                          className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                        />
                      ) : (
                        <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                      )}
                      <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                        <div className="font-semibold leading-none flex items-center gap-2">
                          {education.school}
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            aria-hidden
                          />
                        </div>
                        <div className="font-sans text-sm text-muted-foreground">
                          {education.degree}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                      <span>
                        {education.start} - {education.end}
                      </span>
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9} inView>
            <h2 className="text-xl font-bold">{text.skills}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.icon && (
                    <skill.icon className="size-4 rounded overflow-hidden object-contain" />
                  )}
                  <span className="text-foreground text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11} inView>
          <ProjectsSection projects={data.projects} locale={locale} />
        </BlurFade>
      </section>

      <section id="blog">
        <BlurFade delay={BLUR_FADE_DELAY * 12} inView>
          <BlogHighlightsSection locale={locale} />
        </BlurFade>
      </section>

      {data.hackathons.length > 0 && (
        <section id="hackathons">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <HackathonsSection hackathons={data.hackathons} locale={locale} />
          </BlurFade>
        </section>
      )}

      <section id="principle">
        <BlurFade delay={BLUR_FADE_DELAY * 16} inView>
          <PrincipleSection contact={data.contact} locale={locale} />
        </BlurFade>
      </section>
    </main>
  );
}
