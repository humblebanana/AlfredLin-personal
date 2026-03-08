import { Icons } from "@/components/icons";
import type { ResumeProject } from "@/data/resume-types";

export const storyOfUsProjectZh: ResumeProject = {
  slug: "story-of-us",
  title: "The Story of Us 我们",
  href: "/projects/story-of-us",
  dates: "2024/11",
  active: true,
  description: "一个通过记录真实人物故事，编织我眼中中国与世界的纪实网站。",
  detail: `> 无数个人的故事，编织成了我们共同的记忆和历史。

过去两年里，我利用假期独自走访了中国多个城市，和当地人深入对话，聆听他们的故事、感受他们的生活。

我一直想问的是：来自台湾的我，在谈论「大陆」时，究竟在谈论什么？是隔着海峡眺望到的经济增长？是新闻标题里被放大的科技突破？

我很快意识到，都不是。一个时代真正的肌理，无法从远处的宏大叙事里捕捉。你必须走进去，放下预设，用自己的眼睛看、耳朵听。你得看到成都小巷里的粮油店奶奶，也得听见重庆白象居里那位母亲的讲述。那时你才会明白，这片土地从来不是抽象概念，而是由千千万万个具体的人构成。

这个项目做的事很简单：把那些常被巨大浪潮忽略的个体声音，诚实地打捞上岸。因为我始终相信，真正能让我们跨越标签、彼此辨认并相互温暖的，是这些关于「我们」的故事。

## 我负责的内容
- 选题与人物采访
- 纪实内容结构与叙事编排
- 网站内容呈现与持续迭代

## 这个项目对我的意义
它不是一篇文章或一次旅行记录，而是我持续观察中国社会与真实个体的一条长期线索，也是我把“内容”当作“产品”去打磨的起点。`,
  technologies: [
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Markdown",
    "PhotoSwipe",
  ],
  links: [
    {
      type: "Website",
      href: "https://www.storyofus.top/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/humblebanana/StoryofUS",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/story-of-us/cover.png",
  video: "",
  gallery: [
    "/projects/story-of-us/gallery/01.png",
    "/projects/story-of-us/gallery/02.png",
    "/projects/story-of-us/gallery/03.png",
    "/projects/story-of-us/gallery/04.png",
    "/projects/story-of-us/gallery/05.png",
  ],
};
