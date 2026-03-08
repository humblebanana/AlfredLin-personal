import { Icons } from "@/components/icons";
import type { ResumeProject } from "@/data/resume-types";

export const machProjectZh: ResumeProject = {
  slug: "mach-markdown2aichat",
  title: "MACH Markdown2AIchat",
  href: "/projects/mach-markdown2aichat",
  dates: "2024/11",
  active: true,
  description: "将 Markdown 一键渲染成高保真移动端 AI Chat 界面，支持流式模拟和导出。",
  detail: `> MACH 可以一键把 Markdown 渲染成高保真移动端 AI Chat 界面：所见即所得、支持流式生成模拟、支持一键导出。

作为 AI 产品经理，我经常需要定义“理想回复策略”。但每次要看 Markdown 回复在移动端到底长什么样，或者要给老板做直观演示，往往都得开 Figma 手工拼界面，效率很低。

所以我和 CC 做了 MACH。  
这个工具只解决一件事：让你用最简单的方式，看到 AI 回复被真实渲染后的样子。

## 关键能力
- 标准 Markdown 输入后即刻渲染移动端 AI Chat 界面
- 支持单屏 / 全屏展示模式
- 支持不同回复样式切换
- 支持流式输出模拟，展示更接近真实对话
- 一键导出预览图，可直接放进 PRD 或汇报材料

## 为什么做它
对我来说，它最大的价值是把人从重复、繁琐的体力劳动中解放出来，让时间回到真正重要的事：思考、创造、迭代。`,
  technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Markdown"],
  links: [
    {
      type: "Website",
      href: "https://markdown2-ai-chat-product.vercel.app/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/humblebanana/Markdown2AIChat",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/mach/cover.png",
  video: "/projects/mach/demo.mp4",
  gallery: [
    "/projects/mach/gallery/01.png",
    "/projects/mach/gallery/02.png",
    "/projects/mach/gallery/03.png",
  ],
};
