import { HomeIcon, NotebookIcon } from "lucide-react";
import { sharedSiteData } from "@/content/site/shared";
import type { ResumeBaseData } from "@/data/resume-types";

export const siteDataZh: ResumeBaseData = {
  ...sharedSiteData,
  description: "AI 产品与 Agent 方向实践者，关注技术、产品与商业的系统协同。",
  summary: `我叫 Alfred，来自台湾台北，目前在清华学习法律与计算机，长期专注 Agent Harness Engineering。\n\n我在 Manus 做 Product & Agent，专注于评估与优化，把 Agent 系统从"偶尔能用"推进到"稳定可交付"。\n\n我的专业方向是 Agent Eval、Harness Engineering 与产品管理。\n\n我的关键词是 Emancipate：把重复劳动交给系统，把人的时间还给判断与创造。`,
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
      start: "2026",
      end: "至今",
      description:
        "主导 Sdecky 从 0 到 1 的产品构建：将咨询顾问工作流工程化，通过 Agent Eval 与 Context Engineering，交付咨询级演示方案生成体验。",
    },
    {
      company: "Manus AI",
      href: "#",
      badges: [],
      location: "China",
      title: "Product & Agent",
      logoUrl: "/logos/manus-glyph-black.png",
      start: "2025",
      end: "2026",
      description:
        "负责用户研究、关键应用场景定义、功能开发推进与 AI 性能优化，并搭建和实施 Agent Evals，系统化评估与提升能力表现。",
    },
    {
      company: "京东集团",
      href: "#",
      badges: [],
      location: "China",
      title: "AI Product Engineer",
      logoUrl: "/logos/jd.png",
      start: "2025",
      end: "2025",
      description:
        "负责电商导购场景下多智能体系统的产品设计与迭代：主导 Master Agent 调度节点重构，推动 Prompt Engineering 方案替代微调路线，调度错误率下降 38%；搭建多轮对话评测体系，量化证实多轮对话对 Session 转化率提升 119%。",
    },
    {
      company: "Aiyu Intelligent Technology",
      href: "#",
      badges: [],
      location: "China",
      title: "AI Product Engineer",
      logoUrl: "/logos/aiyu.jpg",
      start: "2023",
      end: "2024",
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
