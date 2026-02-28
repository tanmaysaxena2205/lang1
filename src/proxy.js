import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// 1. Define public routes
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/api/webhooks/clerk(.*)',
  '/', 
  '/pricing',
  '/my-words',
  '/privacy-policy',
]);

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;
  const isPublic = isPublicRoute(req);
  
  // STEP 1: The "Fast Lane" check (CPU Saver)
  // Checking a cookie string is nearly 0ms of Active CPU.
  const hasSessionCookie = req.cookies.has("Langstr_session");

  // If it's a public page and they already have a session cookie, 
  // skip the heavy Clerk auth check and let them through.
  if (isPublic && pathname !== '/' && hasSessionCookie) {
    return NextResponse.next();
  }

  // STEP 2: The "Heavy" check
  // We only reach this line if the cookie is missing OR it's a private route.
  const { userId } = await auth();
  const response = NextResponse.next();

  // STEP 3: Set the "Fast Lane" ticket
  // If they are logged in, give them the cookie so the NEXT request is instant.
  if (userId && !hasSessionCookie) {
    response.cookies.set("family_app_session", "true", {
      maxAge: 60 * 60 * 24, // valid for 24 hours
      path: '/',
      httpOnly: true, 
      secure: true,
      sameSite: 'lax',
    });
  }

  // Handle redirects for your Family unit
  if (userId && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (!userId && !isPublic) {
    return NextResponse.redirect(new URL('/sign-up', req.url));
  }

  return response;
});

export const config = {
  matcher: [
    // This regex tells Next.js to COMPLETELY ignore static files (images, css, etc.)
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};