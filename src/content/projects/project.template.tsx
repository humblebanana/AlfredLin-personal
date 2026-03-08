import { Icons } from "@/components/icons";
import type { ResumeProject } from "@/data/resume-types";

export const projectTemplate: ResumeProject = {
  slug: "my-new-project",
  title: "My New Project",
  href: "/projects/my-new-project",
  dates: "2026/03",
  active: true,
  description: "Write the short card description here.",
  detail: `> Add the one-line opener here.

Write the longer project story here.

## What It Does
- Key point 1
- Key point 2

## What I Led
- Responsibility 1
- Responsibility 2`,
  technologies: ["TypeScript", "Next.js", "React"],
  links: [
    {
      type: "Website",
      href: "https://example.com",
      icon: <Icons.globe className="size-3" />,
    },
  ],
  image: "/projects/my-new-project/cover.png",
  video: "",
  gallery: ["/projects/my-new-project/gallery/01.png"],
};
