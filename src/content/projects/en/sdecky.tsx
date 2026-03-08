import { Icons } from "@/components/icons";
import type { ResumeProject } from "@/data/resume-types";

export const sdeckyProjectEn: ResumeProject = {
  slug: "sdecky",
  title: "Sdecky",
  href: "/projects/sdecky",
  dates: "2026/03",
  active: true,
  description:
    "A consulting-grade presentation AI agent that turns ideas into structured, data-driven decks.",
  detail: `> Every great idea deserves a professional presentation.

Sdecky is an AI agent product I built to engineer top consulting deck workflows into a productized experience.

It is not a template filler. It runs an end-to-end workflow: problem framing, research synthesis, narrative structuring, visual composition, and iteration.

## Core Capabilities
- Deep research with multi-source evidence synthesis
- Structured storytelling with consulting-style logic
- Intelligent design for layout, color, and chart presentation
- Transparent generation process with traceable history

## What I Led
- Product positioning and value proposition
- Agent system design and context engineering
- Agent eval framework design and iteration
- End-to-end build from 0 to 1 and launch`,
  technologies: [
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind CSS",
    "LLM API",
    "RAG",
    "Agent System Design",
    "Agent Eval",
    "Context Engineering",
  ],
  links: [
    {
      type: "Website",
      href: "https://sdecky.ai/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Presentation 1",
      href: "https://www.sdecky.ai/presentations/3152d07f-2538-4253-8ed9-9b7ae3fff724",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Presentation 2",
      href: "https://www.sdecky.ai/presentations/e4f37597-7df4-4666-a45a-06649ceb70e3",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Presentation 3",
      href: "https://www.sdecky.ai/presentations/03994319-82ce-42c4-a32b-5f56f211e917",
      icon: <Icons.globe className="size-3" />,
    },
  ],
  image: "/projects/sdecky/cover.svg",
  video: "",
  gallery: ["/projects/sdecky/gallery/01.jpg", "/projects/sdecky/gallery/02.jpg"],
};
