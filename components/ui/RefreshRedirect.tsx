"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function RefreshRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // We only want this logic to run on the client side
    if (typeof window === "undefined") return;

    const entries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    if (entries.length > 0 && entries[0].type === "reload") {
      // If the page was refreshed and we are not on the home page, redirect
      if (pathname !== "/") {
        router.replace("/");
      } else {
        // If they refresh on the homepage, forcefully scroll to the very top
        // because browsers sometimes try to restore scroll position
        window.scrollTo(0, 0);
        // Also reset Lenis scroll position if it exists
        // @ts-ignore
        if (window.lenis) {
          // @ts-ignore
          window.lenis.scrollTo(0, { immediate: true });
        }
      }
    }
  }, [pathname, router]);

  return null;
}
