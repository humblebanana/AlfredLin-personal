import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const targetPath = pathname === "/en" ? "/" : pathname.replace(/^\/en/, "");
    const url = request.nextUrl.clone();
    url.pathname = targetPath || "/";
    url.search = search;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/en/:path*", "/en"],
};
