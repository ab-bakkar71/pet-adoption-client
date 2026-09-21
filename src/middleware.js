import { getSessionCookie } from "better-auth/cookies";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    const callbackUrl = encodeURIComponent(
      request.nextUrl.pathname + request.nextUrl.search
    );
    return NextResponse.redirect(
      new URL(`/signin?callbackUrl=${callbackUrl}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard"],
};
