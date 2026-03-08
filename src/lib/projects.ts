import { DATA, DATA_EN, type ResumeData } from "@/data/resume";
import type { Locale } from "@/lib/locale";

export type ResumeProject = ResumeData["projects"][number];

export function getProjectsByLocale(locale: Locale): ResumeProject[] {
  return locale === "en" ? DATA_EN.projects : DATA.projects;
}

export function getProjectBySlug(
  locale: Locale,
  slug: string
): ResumeProject | undefined {
  return getProjectsByLocale(locale).find((project) => project.slug === slug);
}

export function getProjectStaticParams() {
  return DATA.projects.map((project) => ({ slug: project.slug }));
}
