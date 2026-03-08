import { Icons } from "@/components/icons";
import type { ResumeProject } from "@/data/resume-types";

export const sdeckyProjectZh: ResumeProject = {
  slug: "sdecky",
  title: "Sdecky",
  href: "/projects/sdecky",
  dates: "2026/03",
  active: true,
  description: "咨询级演示方案 AI Agent：把灵感自动转为结构化、数据驱动的专业 Deck。",
  detail: `> Every great idea deserves a professional presentation.

Sdecky 是我主导打造的 AI Agent 产品，目标是把“顶级咨询顾问做 Deck 的工作流”工程化，降低专业表达门槛。

它不是模板填充工具，而是完整的端到端流程：从问题定义、信息搜集、逻辑结构化，到视觉呈现与版本迭代。

## 核心能力
- 深度研究：整合多源信息，提炼可追溯证据
- 结构化叙事：按咨询式逻辑组织观点与论据
- 智能设计：自动匹配版式、配色与图表表达
- 过程可视化：生成过程透明，可追溯、可管理

## 我负责的部分
- 产品定位与价值主张定义
- Agent System Design 与 Context Engineering
- 评估体系（Agent Eval）设计与迭代
- 从 0 到 1 的产品开发与上线`,
  technologies: [
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind CSS",
    "LLM API",
    "RAG",
    "Agent System Design",
    "Agent Eval",
    "Context Engineering",
  ],
  links: [
    {
      type: "Website",
      href: "https://sdecky.ai/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Presentation 1",
      href: "https://www.sdecky.ai/presentations/3152d07f-2538-4253-8ed9-9b7ae3fff724",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Presentation 2",
      href: "https://www.sdecky.ai/presentations/e4f37597-7df4-4666-a45a-06649ceb70e3",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Presentation 3",
      href: "https://www.sdecky.ai/presentations/03994319-82ce-42c4-a32b-5f56f211e917",
      icon: <Icons.globe className="size-3" />,
    },
  ],
  image: "/projects/sdecky/cover.svg",
  video: "",
  gallery: ["/projects/sdecky/gallery/01.jpg", "/projects/sdecky/gallery/02.jpg"],
};
