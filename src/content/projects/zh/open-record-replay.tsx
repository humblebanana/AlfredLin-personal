import { Icons } from "@/components/icons";
import type { ResumeProject } from "@/data/resume-types";

export const openRecordReplayProjectZh: ResumeProject = {
  slug: "open-record-replay",
  title: "Open Record/Replay",
  href: "/projects/open-record-replay",
  dates: "2026.06",
  active: true,
  description: "把 Codex Record & Replay 的能力开源，让任意 Agent 都能从用户的真实演示中学习并复用 macOS 桌面工作流。",
  detail: `Codex 最近更新的 Record & Replay 插件非常惊艳——它让 AI 解决复杂 Computer Use 任务的方式，从人类"手写 Skill"变成了"演示工作流并自动沉淀 Skill"。实测下来极其强大，但遗憾的是，它仅限于 Codex 生态。

于是，我把这项能力开源了，项目名叫 **open-record-replay**。

## 它解决什么问题

现在的 AI Agent 虽然会用电脑，但还不会从"用户的真实演示"中学习并复用 workflow。

open-record-replay 改变了这一点：你只需在 Mac 上操作一遍，它就会把演示过程落盘成结构化的轨迹数据（\`session.json\` + \`events.jsonl\`）。Agent 可以直接通过这些轨迹去生成 Skill，大幅提升复杂任务的完成度。

## Demo

在视频 Demo 中，我用 Claude Code 结合 open-record-replay，完成了一套完整工作流：

> 从 Obsidian 复制文章 → 上传到 Substack → 完成发布配置

值得一提的是，我故意选了 Haiku 4.5（Claude 目前最轻量的模型），但它依然能稳定完成任务。

## 现状与方向

目前项目还处于 Beta 阶段，但核心链路已经跑通。

接下来会继续往更通用的方向推进，优化数据格式和交互细节。未来的目标是：在成本可控的前提下，让 Agent 真正稳定地完成长流程 Computer Use 任务——让它不仅是一个 Recorder，而是一个真正为 Agents 打造的 **Workflow Learning Layer**。`,
  technologies: [
    "Node.js",
    "Swift",
    "macOS Accessibility API",
    "Computer Use",
    "Claude Code",
    "Agent Skill Design",
    "Context Engineering",
  ],
  links: [
    {
      type: "GitHub",
      href: "https://github.com/humblebanana/open-record-replay",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/projects/open-record-replay/cover.png",
  video: "",
  gallery: [],
};
