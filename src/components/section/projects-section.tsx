import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import type { ResumeData } from "@/data/resume";
import type { Locale } from "@/lib/locale";
import { withLocalePrefix } from "@/lib/locale";

const BLUR_FADE_DELAY = 0.04;

type ProjectsSectionProps = {
    projects: ResumeData["projects"];
    locale: Locale;
};

const copy = {
    zh: {
        badge: "我的项目",
        title: "看看我最近在做什么",
        description:
            "我做过内容平台、AI 产品到全栈 Web 应用等项目，也包括 LLM、Agent、RAG 方向的实践。",
    },
    en: {
        badge: "My Projects",
        title: "check out my latest work",
        description:
            "I've built projects across content platforms, AI products, and full-stack web apps, including hands-on work with LLM, Agent, and RAG systems.",
    },
} as const;

export default function ProjectsSection({ projects, locale }: ProjectsSectionProps) {
    const text = copy[locale];

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">{text.badge}</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{text.title}</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            {text.description}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[920px] mx-auto">
                    {projects.map((project, id) => (
                        <BlurFade
                            key={project.slug}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={withLocalePrefix(project.href, locale)}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links
                                    .filter((linkItem) => !/^presentation/i.test(linkItem.type))
                                    .map((linkItem) => ({
                                        ...linkItem,
                                        href: withLocalePrefix(linkItem.href, locale),
                                    }))}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
