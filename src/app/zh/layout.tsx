import HtmlLang from "@/components/html-lang";

export default function ChineseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HtmlLang lang="zh-CN" />
      {children}
    </>
  );
}
