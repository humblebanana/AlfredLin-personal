import { Icons } from "@/components/icons";
import type { ResumeProject } from "@/data/resume-types";

export const openRecordReplayProjectEn: ResumeProject = {
  slug: "open-record-replay",
  title: "Open Record/Replay",
  href: "/projects/open-record-replay",
  dates: "Jun 2026",
  active: true,
  description: "An open-source port of Codex's Record & Replay capability — letting any agent learn and replay macOS desktop workflows from a single user demonstration.",
  detail: `Codex's Record & Replay plugin is one of the most impressive recent advances in Computer Use — it shifts how AI agents handle complex desktop tasks from "humans writing skills by hand" to "demonstrate once, agent learns automatically." It's remarkably powerful in practice. The only catch: it's locked to the Codex ecosystem.

So I open-sourced it as **open-record-replay**.

## The Problem It Solves

Today's AI agents can operate a computer, but they can't learn from a user's real demonstration and reuse that workflow later.

open-record-replay changes that. You perform a workflow on your Mac once. The recorder captures every action as structured trace data (\`session.json\` + \`events.jsonl\`). An agent can then read those traces directly to generate a reusable Skill — dramatically improving completion rates on complex, multi-step tasks.

## Demo

In the video demo, I used Claude Code with open-record-replay to complete a full end-to-end workflow:

> Copy an article from Obsidian → upload to Substack → complete publish configuration

Notably, I deliberately used Haiku 4.5 — Claude's lightest available model — and it still completed the task reliably.

## Status and Direction

The project is currently in beta, but the core pipeline is working end-to-end.

Next steps are pushing toward greater generality: refining the data format and interaction details. The long-term goal is to enable agents to reliably complete long-horizon Computer Use tasks at controlled cost — making open-record-replay not just a recorder, but a true **Workflow Learning Layer for Agents**.`,
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
