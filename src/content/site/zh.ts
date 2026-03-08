import { HomeIcon, NotebookIcon } from "lucide-react";
import { sharedSiteData } from "@/content/site/shared";
import type { ResumeBaseData } from "@/data/resume-types";

export const siteDataZh: ResumeBaseData = {
  ...sharedSiteData,
  description: "AI 产品与 Agent 方向实践者，关注技术、产品与商业的系统协同。",
  summary: `我叫 Alfred，来自台湾台北，目前在清华学习法律与计算机，长期专注 Agent 产品与系统工程。\n\n我在 Manus 做 Product & Agent，主要围绕用户研究、场景定义与能力迭代，把系统从“能用”推进到“稳定可交付”。\n\n我的专业方向是 Agent Eval、Agent System Design 和 Context Engineering，关注可评估、可迭代、可落地的工程化路径。\n\n我的关键词是 Emancipate：把重复劳动交给系统，把人的时间还给判断与创造。`,
  navbar: [
    { href: "/", icon: HomeIcon, label: "主页" },
    { href: "/blog", icon: NotebookIcon, label: "博客" },
  ],
  work: [
    {
      company: "Sdecky AI",
      href: "https://sdecky.ai/",
      badges: [],
      location: "Taiwan",
      title: "Founder",
      logoUrl: "/logos/sdecky.svg",
      start: "2026.03",
      end: "至今",
      description:
        "主导 Sdecky 从 0 到 1 的产品构建：将咨询顾问工作流工程化，通过 Agent Eval、Agent System Design 与 Context Engineering，交付咨询级演示方案生成体验。",
    },
    {
      company: "Manus AI",
      href: "#",
      badges: [],
      location: "China",
      title: "Product & Agent",
      logoUrl: "/logos/manus-glyph-black.png",
      start: "2025.03",
      end: "至今",
      description:
        "负责用户研究、关键应用场景定义、功能开发推进与 AI 性能优化，并搭建和实施 Agent Evals，系统化评估与提升能力表现。",
    },
    {
      company: "Aiyu Intelligent Technology",
      href: "#",
      badges: [],
      location: "China",
      title: "AI Product Engineer",
      logoUrl: "/logos/aiyu.jpg",
      start: "2023.11",
      end: "2024.04",
      description:
        "在金融科技场景参与内部创新项目，围绕不良资产管理构建生成式 AI Agent 产品方案，覆盖需求分析、方案设计与落地验证。",
    },
  ],
  education: [
    {
      school: "清华大学",
      href: "https://www.tsinghua.edu.cn",
      degree: "本科（法律与计算机）",
      logoUrl: "/logos/tsinghua-university-logo.png",
      start: "2022",
      end: "2026（预计）",
    },
  ],
};
