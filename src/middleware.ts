import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log(token);
  
  
  const pathname = req.nextUrl.pathname;
  console.log(pathname);

  // Define supported locales
  const locales = ["en", "ar", "fr"]; // add all supported locales

  // Get the first path segment
  const segments = pathname.split("/");
  const locale = locales.includes(segments[1]) ? segments[1] : "en"; // fallback to en

  // Protected paths (locale-agnostic)
  const protectedPaths = ["/chat"];

  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(`/${locale}${path}`)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
  }

  return NextResponse.next();
}
