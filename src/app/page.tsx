import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { DATA_EN } from "@/data/resume";

export const metadata: Metadata = {
  title: DATA_EN.name,
  description: DATA_EN.description,
  openGraph: {
    title: DATA_EN.name,
    description: DATA_EN.description,
    locale: "en_US",
    url: `${DATA_EN.url}/`,
  },
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/zh",
      "en-US": "/",
    },
  },
};

export default function EnglishPage() {
  return <HomePage data={DATA_EN} locale="en" />;
}
