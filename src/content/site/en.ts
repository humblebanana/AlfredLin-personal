import { HomeIcon, NotebookIcon } from "lucide-react";
import { sharedSiteData } from "@/content/site/shared";
import type { ResumeBaseData } from "@/data/resume-types";

export const siteDataEn: ResumeBaseData = {
  ...sharedSiteData,
  description:
    "AI product and Agent practitioner focused on the system-level collaboration between technology, product, and business.",
  summary: `I'm Alfred, from Taipei, Taiwan. I study Law and Computer Science at Tsinghua, focused on agent harness engineering.\n\nAt Manus, I worked on Product & Agent — specifically on evaluation and optimization, pushing agent systems from "works sometimes" toward reliable, shippable delivery.\n\nMy specialization is agent eval, harness engineering, and product management.\n\nMy guiding word is Emancipate: let systems absorb repetitive work, so people can focus on judgment and creation.`,
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  work: [
    {
      company: "Sdecky AI",
      href: "https://sdecky.ai/",
      badges: [],
      location: "Taiwan",
      title: "Founder",
      logoUrl: "/logos/sdecky.svg",
      start: "Mar 2026",
      end: "Present",
      description:
        "Built Sdecky from 0 to 1 by engineering a consulting-style presentation workflow into an AI agent, with strong focus on agent eval, agent system design, and context engineering.",
    },
    {
      company: "Manus AI",
      href: "#",
      badges: [],
      location: "China",
      title: "Product & Agent",
      logoUrl: "/logos/manus-glyph-black.png",
      start: "Mar 2025",
      end: "Present",
      description:
        "Led user research, scenario definition, feature execution, and AI performance optimization; built and implemented agent evals to systematically improve product capability and reliability.",
    },
    {
      company: "Aiyu Intelligent Technology",
      href: "#",
      badges: [],
      location: "China",
      title: "AI Product Engineer",
      logoUrl: "/logos/aiyu.jpg",
      start: "Nov 2023",
      end: "Apr 2024",
      description:
        "Worked on an internal FinTech innovation initiative to build a GenAI-powered agent solution for non-performing asset (NPA) management, from product definition to validation.",
    },
  ],
  education: [
    {
      school: "Tsinghua University",
      href: "https://www.tsinghua.edu.cn",
      degree: "Bachelor's Degree, Law and Computer Science",
      logoUrl: "/logos/tsinghua-university-logo.png",
      start: "2022",
      end: "2026 (Expected)",
    },
  ],
};
