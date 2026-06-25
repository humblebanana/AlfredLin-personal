import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";

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
    <section id="resume">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex items-center justify-between mb-6">
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

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="w-full rounded-xl overflow-hidden border border-border shadow-sm">
          <iframe
            src="/resume.pdf"
            className="w-full border-0"
            style={{ height: "calc(100vh - 200px)", minHeight: "600px" }}
            title="Alfred Lin Resume"
          />
        </div>
      </BlurFade>
    </section>
  );
}
