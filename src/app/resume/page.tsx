import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Alfred Lin",
  description: "Alfred Lin's resume",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResumePage() {
  return (
    <div className="fixed inset-0 w-full h-full bg-background">
      <iframe
        src="/resume.pdf"
        className="w-full h-full border-0"
        title="Alfred Lin Resume"
      />
    </div>
  );
}
