import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("@/components/pdf-viewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-24 text-muted-foreground text-sm">
      加载中...
    </div>
  ),
});

export const metadata: Metadata = {
  title: "简历 — Alfred Lin",
  description: "Alfred Lin 的简历",
  robots: {
    index: false,
    follow: false,
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function ZhResumePage() {
  return (
    <section id="resume">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">简历</h1>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-3 py-1.5"
          >
            <Download className="size-3.5" />
            下载 PDF
          </Link>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="w-full rounded-xl overflow-hidden border border-border shadow-sm">
          <PdfViewer url="/resume.pdf" />
        </div>
      </BlurFade>
    </section>
  );
}
