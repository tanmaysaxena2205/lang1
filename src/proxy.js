import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 1. Define strictly PRIVATE routes that need the Middleware to run
// We ONLY want the middleware to run for the dashboard and units.
const isPrivateRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/unit/(.*)',
  '/api/user/(.*)' // Protect your internal data APIs
]);

export default clerkMiddleware(async (auth, req) => {
  // If the route is private, enforce authentication
  if (isPrivateRoute(req)) {
    await auth.protect();
  }
  // For all other routes (Home, Pricing, My Words), 
  // the middleware does NOTHING and exits immediately.
});

export const config = {
  matcher: [
    /*
     * This matcher is much more specific. 
     * It ONLY triggers the middleware for your protected app areas.
     * This prevents any 'hover' on the homepage from hitting the Edge function.
     */
    '/dashboard/:path*',
    '/unit/:path*',
    '/api/:path*',
    // We explicitly EXCLUDE static files and public pages like pricing/my-words
    '/((?!_next/static|_next/image|favicon.ico|pricing|my-words|$).*)',
  ],
};