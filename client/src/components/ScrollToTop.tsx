import { useLocation } from "wouter";
import { useEffect } from "react";

/**
 * Scrolls to top of page on route change.
 * When navigating with a hash (e.g. /services#delivery-assurance),
 * scrolls to the target element after the page has rendered.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";

    if (hash) {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        const el = document.getElementById(decodeURIComponent(hash));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
