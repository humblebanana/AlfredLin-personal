export type Locale = "zh" | "en";

export function isExternalHref(href: string): boolean {
  return /^(https?:\/\/|mailto:|tel:|#)/.test(href);
}

export function withLocalePrefix(href: string, locale: Locale): string {
  if (isExternalHref(href) || !href.startsWith("/")) {
    return href;
  }

  if (locale === "zh") {
    if (href === "/zh" || href.startsWith("/zh/")) {
      return href;
    }
    return href === "/" ? "/zh" : `/zh${href}`;
  }

  if (href === "/zh") {
    return "/";
  }
  if (href.startsWith("/zh/")) {
    return href.replace(/^\/zh/, "") || "/";
  }
  return href;
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
}

export function getPathnameForLocale(pathname: string, locale: Locale): string {
  return withLocalePrefix(pathname, locale);
}
