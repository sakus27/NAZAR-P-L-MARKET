import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Common suspicious / vulnerability scanner probe paths
const BLOCKED_PATTERNS = [
  /(\/|^)\.(env|git|svn|htaccess|aws|ssh)/i,
  /(\/|^)(wp-admin|wp-login|xmlrpc|phpmyadmin|pma|eval-stdin|setup\.php|config\.php)/i,
  /(\.\.|\%2e\%2e)/i, // Path traversal
  /(<script|%3Cscript|javascript:|data:text\/html)/i, // Basic XSS vectors in URL
];

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const fullPath = `${pathname}${search}`;

  // Check for malicious paths or query string patterns
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(fullPath)) {
      return new NextResponse("Access Denied: Request blocked by security policy.", {
        status: 403,
        headers: {
          "Content-Type": "text/plain",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }
  }

  // Continue with normal response
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files, Next.js internal files, and public images
     */
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:jpg|jpeg|gif|png|webp|svg|ico)$).*)",
  ],
};
