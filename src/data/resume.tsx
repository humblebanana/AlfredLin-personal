import { projectsEn } from "@/content/projects/en";
import { projectsZh } from "@/content/projects/zh";
import { siteDataEn } from "@/content/site/en";
import { siteDataZh } from "@/content/site/zh";
import type { ResumeData } from "@/data/resume-types";

export type {
  Hackathon,
  HackathonLink,
  IconComponent,
  ResumeBaseData,
  ResumeData,
  ResumeProject,
  Skill,
} from "@/data/resume-types";

export const DATA: ResumeData = {
  ...siteDataZh,
  projects: projectsZh,
};

export const DATA_EN: ResumeData = {
  ...siteDataEn,
  projects: projectsEn,
};
