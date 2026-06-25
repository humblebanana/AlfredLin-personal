import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";
import Link from "next/link";
import { Download, ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("@/components/pdf-viewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-24 text-muted-foreground text-sm">
      Loading...
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Resume — Alfred Lin",
  description: "Alfred Lin's resume",
  robots: {
    index: false,
    follow: false,
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function ResumePage() {
  return (
    <section id="resume" className="flex flex-col gap-4">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="size-4" />
          Back to home
        </Link>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-3 py-1.5"
          >
            <Download className="size-3.5" />
            Download PDF
          </Link>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="w-full rounded-xl overflow-hidden border border-border shadow-sm dark:[&_canvas]:invert dark:[&_canvas]:brightness-90">
          <PdfViewer url="/resume.pdf" />
        </div>
      </BlurFade>
    </section>
  );
}
