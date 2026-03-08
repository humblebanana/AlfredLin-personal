import type { ComponentType, ReactNode, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type Skill = {
  name: string;
  icon?: IconComponent;
};

export type HackathonLink = {
  title: string;
  icon: ReactNode;
  href: string;
};

export type Hackathon = {
  title: string;
  dates?: string;
  location?: string;
  description?: string;
  image?: string;
  links?: HackathonLink[];
};

export type ResumeProject = {
  slug: string;
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  detail: string;
  technologies: string[];
  links: {
    type: string;
    href: string;
    icon: ReactNode;
  }[];
  image: string;
  video: string;
  gallery: string[];
};

export type ResumeData = {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: Skill[];
  navbar: {
    href: string;
    icon: ComponentType<any>;
    label: string;
  }[];
  contact: {
    email: string;
    tel: string;
    social: Record<
      string,
      {
        name: string;
        url: string;
        icon: ComponentType<any>;
        navbar: boolean;
      }
    >;
  };
  work: {
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end?: string;
    description: string;
  }[];
  education: {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }[];
  projects: ResumeProject[];
  hackathons: Hackathon[];
};

export type ResumeBaseData = Omit<ResumeData, "projects">;
