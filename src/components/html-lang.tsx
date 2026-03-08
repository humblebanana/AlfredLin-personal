"use client";

import { useEffect } from "react";

type HtmlLangProps = {
  lang: string;
};

export default function HtmlLang({ lang }: HtmlLangProps) {
  useEffect(() => {
    const previousLang = document.documentElement.lang;
    document.documentElement.lang = lang;

    return () => {
      document.documentElement.lang = previousLang;
    };
  }, [lang]);

  return null;
}
