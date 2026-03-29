import { NextRequest, NextResponse } from "next/server";

const RESERVED_SUBDOMAINS = new Set(["www", "app", "api", "admin", "mail", "smtp"]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // Extract subdomain: handle both [username].aibjj.com and localhost variants
  const hostname = host.split(":")[0]; // strip port
  let subdomain: string | null = null;

  // Production: *.aibjj.com
  if (hostname.endsWith(".aibjj.com")) {
    subdomain = hostname.replace(".aibjj.com", "");
  }
  // Local dev: *.localhost
  else if (hostname.endsWith(".localhost")) {
    subdomain = hostname.replace(".localhost", "");
  }

  // If no subdomain or reserved, pass through
  if (!subdomain || RESERVED_SUBDOMAINS.has(subdomain)) {
    return NextResponse.next();
  }

  // Rewrite to /s/[username] path internally
  // Preserve the original pathname for sub-routes
  const originalPath = url.pathname;
  url.pathname = `/s/${subdomain}${originalPath === "/" ? "" : originalPath}`;

  const response = NextResponse.rewrite(url);
  response.headers.set("x-subdomain", subdomain);
  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes that shouldn't be rewritten
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
