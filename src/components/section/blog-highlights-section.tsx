import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Icons } from "@/components/icons";
import {
  getLocalizedPostSummary,
  getLocalizedPostTitle,
  getPostSlug,
  getSortedPosts,
} from "@/lib/blog";
import type { Locale } from "@/lib/locale";
import { withLocalePrefix } from "@/lib/locale";

const BLUR_FADE_DELAY = 0.04;

type BlogHighlightsSectionProps = {
  locale: Locale;
};

const copy = {
  zh: {
    badge: "我的博客",
    title: "最近的 4 篇文章",
    description: "这里是我最新发布的思考与实践记录。",
    read: "阅读",
    tag: "Blog",
  },
  en: {
    badge: "My Blog",
    title: "latest 4 blog posts",
    description: "A quick selection of my latest writing and field notes.",
    read: "Read",
    tag: "Blog",
  },
} as const;

export default function BlogHighlightsSection({
  locale,
}: BlogHighlightsSectionProps) {
  const text = copy[locale];
  const posts = getSortedPosts(locale).slice(0, 4);

  return (
    <section id="blog-highlights">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">{text.badge}</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {text.title}
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              {text.description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[920px] mx-auto">
          {posts.map((post, id) => {
            const slug = getPostSlug(post._meta.path);
            const href = withLocalePrefix(`/blog/${slug}`, locale);

            return (
              <BlurFade
                key={`${slug}-${id}`}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                className="h-full"
              >
                <ProjectCard
                  href={href}
                  title={getLocalizedPostTitle(post)}
                  description={getLocalizedPostSummary(post)}
                  dates={post.publishedAt}
                  tags={[text.tag]}
                  image={post.image}
                  video=""
                  links={[
                    {
                      type: text.read,
                      href,
                      icon: <Icons.globe className="size-3" />,
                    },
                  ]}
                />
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
