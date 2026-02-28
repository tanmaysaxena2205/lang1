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

  // 1. Lighter Public Route Check (No CPU-heavy auth yet)
  const isPublic = isPublicRoute(req);

  // 2. Optimization: If it's a public route and NOT the landing page, 
  // just return immediately. No need to know WHO the user is.
  if (isPublic && pathname !== '/') {
    return NextResponse.next();
  }

  // 3. ONLY NOW do we do the heavy lifting (parsing headers/JWT)
  const { userId } = await auth();

  // Redirect logged-in users away from landing page
  if (userId && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Protect private routes
  if (!userId && !isPublic) {
    return NextResponse.redirect(new URL('/sign-up', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Optimized Matcher: 
     * Skip all internal Next.js paths and static files entirely.
     * This prevents the middleware from even waking up for these files.
     */
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};