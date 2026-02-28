// components/CookieCleaner.js
'use client';

import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function CookieCleaner() {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    // If the Clerk state changes to "not signed in"
    if (isSignedIn === false) {
      // Wipe the middleware bypass cookie
      document.cookie = "Langstr_session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  }, [isSignedIn]);

  return null; // This component renders nothing
}