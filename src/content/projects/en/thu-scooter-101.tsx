import { Icons } from "@/components/icons";
import type { ResumeProject } from "@/data/resume-types";

export const thuScooterProjectEn: ResumeProject = {
  slug: "thu-scooter-101",
  title: "THU Scooter 101",
  href: "/projects/thu-scooter-101",
  dates: "2024/11",
  active: true,
  description:
    "A one-stop information hub for Tsinghua e-scooter usage, including buying, charging, parking, maintenance, and policy updates.",
  detail: `> Your next campus mobility tool should not be limited to walking.

At Tsinghua, e-scooters are a real daily need, but information was highly fragmented: what to buy, where to charge, where to park, where to repair, and what policy changed.

I built THU Scooter 101 to make this information searchable and continuously updated in one place, so students can get answers quickly and reliably, while policy updates can also reach users more clearly.

## What It Covers
- Buying advice and merchant recommendations
- Price comparison
- Charging navigation
- Parking guides
- Repair playbooks
- 24/7 AI assistant support

## The "4 Saves" Goal
- Save time: one-stop answers instead of scattered searching
- Save mental effort: timely and reliable information for decisions
- Save effort: AI-first access for faster understanding
- Save money: transparent price information and fewer pitfalls

## Why This Project Is Personal
This was my first end-to-end 0-to-1 product built from a real user pain point in a real campus environment.`,
  technologies: [
    "TypeScript",
    "Next.js",
    "React",
    "MongoDB",
    "SQLite",
    "Tailwind CSS",
    "Framer Motion",
  ],
  links: [
    {
      type: "Website",
      href: "https://www.thu-scooter-101.site/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/humblebanana/thu-scooter-101-web",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/thu-scooter-101/cover.png",
  video: "/projects/thu-scooter-101/demo.mp4",
  gallery: [
    "/projects/thu-scooter-101/gallery/01.png",
    "/projects/thu-scooter-101/gallery/02.png",
    "/projects/thu-scooter-101/gallery/03.png",
    "/projects/thu-scooter-101/gallery/04.png",
    "/projects/thu-scooter-101/gallery/05.png",
  ],
};
