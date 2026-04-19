import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function proxy(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isLoggedIn = !!token;
  const path = req.nextUrl.pathname;

  const isAuthPage =
    path === "/login" || path === "/signup";

  // Allow guests to stay on login/signup
  if (!isLoggedIn && isAuthPage) {
    return NextResponse.next();
  }

  // Protect everything else for guests
  if (!isLoggedIn && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Logged in users should not visit login/signup
  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/addaplication",
    "/analytics",
    "/applications/(.*)",
    "/calendar",
    "/interview-prep",
    "/profile",
  ],
};