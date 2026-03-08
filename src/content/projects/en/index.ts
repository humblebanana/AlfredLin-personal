import type { ResumeProject } from "@/data/resume-types";
import { machProjectEn } from "@/content/projects/en/mach-markdown2aichat";
import { sdeckyProjectEn } from "@/content/projects/en/sdecky";
import { storyOfUsProjectEn } from "@/content/projects/en/story-of-us";
import { thuScooterProjectEn } from "@/content/projects/en/thu-scooter-101";

export const projectsEn: ResumeProject[] = [
  sdeckyProjectEn,
  storyOfUsProjectEn,
  machProjectEn,
  thuScooterProjectEn,
];
