import { Icons } from "@/components/icons";
import type { ResumeProject } from "@/data/resume-types";

export const machProjectEn: ResumeProject = {
  slug: "mach-markdown2aichat",
  title: "MACH Markdown2AIchat",
  href: "/projects/mach-markdown2aichat",
  dates: "2024/11",
  active: true,
  description:
    "A tool that renders Markdown into a high-fidelity mobile AI chat UI with streaming simulation and one-click export.",
  detail: `> MACH turns Markdown into a high-fidelity mobile AI chat UI in one click, with streaming simulation and export.

As an AI product manager, I often need to define ideal response strategies. But whenever I wanted to preview how Markdown responses actually look in a mobile product, I had to manually mock everything in Figma. It was slow and repetitive.

So I built MACH with CC.  
It solves one thing: showing realistic rendered AI responses with minimal effort.

## Core Features
- Instant rendering from standard Markdown to mobile AI chat UI
- Single-screen and full-screen display modes
- Multiple response style options
- Streaming-output simulation for realistic demos
- One-click export for PRDs and stakeholder updates

## Why It Matters
Its biggest value is freeing people from repetitive manual work, so time can go back to where it belongs: thinking, creating, and iterating.`,
  technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Markdown"],
  links: [
    {
      type: "Website",
      href: "https://markdown2-ai-chat-product.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/humblebanana/Markdown2AIChat",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/mach/cover.png",
  video: "/projects/mach/demo.mp4",
  gallery: [
    "/projects/mach/gallery/01.png",
    "/projects/mach/gallery/02.png",
    "/projects/mach/gallery/03.png",
  ],
};
