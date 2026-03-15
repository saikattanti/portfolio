import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "www.saikattanti.xyz";

export function middleware(request: NextRequest) {
  const { nextUrl, headers } = request;
  const host = headers.get("host") || "";

  // Do not redirect local development requests.
  if (host.startsWith("localhost") || host.startsWith("127.0.0.1")) {
    return NextResponse.next();
  }

  // Force canonical host with a permanent redirect.
  if (host === "saikattanti.xyz" || host === "saikattanti.vercel.app") {
    const redirectUrl = new URL(request.url);
    redirectUrl.host = CANONICAL_HOST;
    redirectUrl.protocol = "https:";
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
