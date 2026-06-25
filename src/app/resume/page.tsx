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
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="w-full"
            style={{ height: "calc(100vh - 200px)", minHeight: "600px" }}
          >
            {/* Fallback for browsers that don't support inline PDF */}
            <div className="flex flex-col items-center justify-center py-16 gap-4 text-muted-foreground">
              <p>Your browser does not support inline PDF viewing.</p>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-foreground border border-border rounded-lg px-4 py-2 hover:bg-accent/50 transition-colors"
              >
                <Download className="size-4" />
                Open PDF
              </Link>
            </div>
          </object>
        </div>
      </BlurFade>
    </section>
  );
}
