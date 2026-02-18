import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// 1. Define which routes are public
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/api/webhooks/clerk(.*)',
  '/', // Homepage is public
  '/pricing',
  '/my-words'
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // OPTIMIZATION: If user is logged in and hits the landing page, 
  // send them straight to the dashboard so they don't see the "Sign Up" pitch.
  if (userId && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // 2. If the user is NOT logged in and trying to access a PRIVATE route
  if (!userId && !isPublicRoute(req)) {
    return NextResponse.redirect(new URL('/sign-up', req.url));
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};