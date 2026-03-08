import { Icons } from "@/components/icons";
import type { ResumeProject } from "@/data/resume-types";

export const thuScooterProjectZh: ResumeProject = {
  slug: "thu-scooter-101",
  title: "THU-电动车-101",
  href: "/projects/thu-scooter-101",
  dates: "2024/11",
  active: true,
  description: "清华电动车信息聚合平台：选车、充电、停车、维修与政策，一站式获取。",
  detail: `> 你的下一个代步工具，何必只能脚踏？

在清华，电动车是高频刚需，但相关信息长期碎片化：买什么、去哪充电、怎么维修、政策怎么变，很多时候只能靠群聊轰炸和口口相传。

我做 THU Scooter 101 的初衷，是把这些分散的信息做成一个可检索、可持续更新的公开入口，帮助有需求的同学更快、更准确地拿到答案；同时也让学校的最新政策能更有效地触达学生。

## 覆盖内容
- 选车建议与商家推荐
- 价格对比
- 充电导航
- 停车指南
- 维修攻略
- 24/7 在线 AI 助手答疑

## 我希望它达成的四个“省”
- 省时：一站式解决问题，不必到处打听
- 省心：信息及时可靠，决策有据可依
- 省力：AI 服务降低获取成本，使用更直观
- 省钱：价格透明，减少踩坑

## 这个项目对我个人的意义
这是我第一次从真实场景需求出发，完整做出一个 0-1 产品来解决实际问题。`,
  technologies: [
    "TypeScript",
    "Next.js",
    "React",
    "MongoDB",
    "SQLite",
    "Tailwind CSS",
    "Framer Motion",
  ],
  links: [
    {
      type: "Website",
      href: "https://www.thu-scooter-101.site/",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "Source",
      href: "https://github.com/humblebanana/thu-scooter-101-web",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/thu-scooter-101/cover.png",
  video: "/projects/thu-scooter-101/demo.mp4",
  gallery: [
    "/projects/thu-scooter-101/gallery/01.png",
    "/projects/thu-scooter-101/gallery/02.png",
    "/projects/thu-scooter-101/gallery/03.png",
    "/projects/thu-scooter-101/gallery/04.png",
    "/projects/thu-scooter-101/gallery/05.png",
  ],
};
