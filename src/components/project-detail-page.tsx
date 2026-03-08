/* eslint-disable @next/next/no-img-element */
import type { ResumeProject } from "@/lib/projects";
import type { Locale } from "@/lib/locale";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Markdown from "react-markdown";
import { ChevronLeft, ArrowUpRight } from "lucide-react";
import { isExternalHref, withLocalePrefix } from "@/lib/locale";
import ProjectGalleryCarousel from "@/components/project-gallery-carousel";

type ProjectDetailPageProps = {
  project: ResumeProject;
  locale: Locale;
};

const copy = {
  zh: {
    back: "返回首页",
    tech: "技术栈",
    links: "相关链接",
    gallery: "项目画廊",
  },
  en: {
    back: "Back to Home",
    tech: "Tech Stack",
    links: "Links",
    gallery: "Project Gallery",
  },
} as const;

function ProjectMedia({ project }: { project: ResumeProject }) {
  if (project.video) {
    return (
      <video
        src={project.video}
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-h-[460px] object-cover rounded-xl border border-border"
      />
    );
  }

  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full max-h-[460px] object-cover rounded-xl border border-border"
      />
    );
  }

  return <div className="w-full h-[280px] rounded-xl border border-border bg-muted" />;
}

export default function ProjectDetailPage({
  project,
  locale,
}: ProjectDetailPageProps) {
  const text = copy[locale];
  const homeHref = locale === "zh" ? "/zh" : "/";

  return (
    <section id="project">
      <Link
        href={homeHref}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
      >
        <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
        {text.back}
      </Link>

      <div className="flex flex-col gap-4 mb-6">
        <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
          {project.title}
        </h1>
        <p className="text-sm text-muted-foreground">{project.dates}</p>
      </div>

      <ProjectMedia project={project} />

      <div className="my-6 flex w-full items-center">
        <div
          className="flex-1 h-px bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>

      <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        <Markdown>{project.detail}</Markdown>
      </article>

      {project.gallery.length > 0 && (
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-base font-semibold">{text.gallery}</h2>
          <ProjectGalleryCarousel images={project.gallery} title={project.title} />
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4">
        <h2 className="text-base font-semibold">{text.tech}</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-[11px] font-medium border border-border h-6 w-fit px-2"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {project.links.length > 0 && (
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-base font-semibold">{text.links}</h2>
          <div className="flex flex-wrap gap-2">
            {project.links.map((linkItem) => {
              const href = withLocalePrefix(linkItem.href, locale);
              const external = isExternalHref(href);
              return (
                <Link
                  key={`${project.slug}-${linkItem.type}-${href}`}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-black bg-black text-white px-3 py-1.5 text-xs hover:bg-black/90 transition-colors"
                >
                  {linkItem.icon}
                  {linkItem.type}
                  <ArrowUpRight className="size-3" />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
