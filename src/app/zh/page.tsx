import HomePage from "@/components/home-page";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: DATA.name,
  description: DATA.description,
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    locale: "zh_CN",
    url: `${DATA.url}/zh`,
  },
  alternates: {
    canonical: "/zh",
    languages: {
      "zh-CN": "/zh",
      "en-US": "/",
    },
  },
};

export default function Page() {
  return <HomePage data={DATA} locale="zh" />;
}
