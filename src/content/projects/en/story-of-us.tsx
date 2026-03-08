import { Icons } from "@/components/icons";
import type { ResumeProject } from "@/data/resume-types";

export const storyOfUsProjectEn: ResumeProject = {
  slug: "story-of-us",
  title: "The Story of Us",
  href: "/projects/story-of-us",
  dates: "2024/11",
  active: true,
  description:
    "A documentary-style website capturing real personal stories to reflect the China and world I experienced.",
  detail: `> Countless individual stories weave our shared memory and history.

Over the past two years, I traveled solo across multiple cities in China during school breaks, speaking with local people and listening to their life stories.

As someone from Taiwan, I kept asking myself: when I talk about "mainland China", what am I really talking about? Economic growth seen from afar? Tech breakthroughs amplified by headlines?

Very quickly, I realized it was neither. The true texture of a society cannot be captured through distant grand narratives. You have to step in, suspend assumptions, and see and hear for yourself.

This project is my attempt to honestly surface voices that are often overlooked by larger narratives. I believe what helps us move beyond labels and truly recognize one another are these grounded, human stories.

## What I Led
- Topic selection and interviews
- Narrative structure and editorial flow
- Website presentation and continuous iteration

## Why It Matters to Me
This is not a one-off travel note. It is a long-term line of observation about people and society, and the starting point of how I treat content as a product.`,
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
