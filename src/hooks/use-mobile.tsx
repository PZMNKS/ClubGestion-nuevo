import * as React from "react";

const MOBILE_BREAKPOINT = 768;

function checkIsMobile() {
  if (typeof window === "undefined") return true;
  const docEl = document.documentElement;
  if (
    docEl.getAttribute("data-mobile-device") === "true" ||
    docEl.getAttribute("data-mobile-forced-viewport") === "true"
  ) {
    return true;
  }
  return window.innerWidth < MOBILE_BREAKPOINT;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() =>
    checkIsMobile(),
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(checkIsMobile());
    };
    mql.addEventListener("change", onChange);
    window.addEventListener("resize", onChange, { passive: true });
    window.addEventListener("orientationchange", onChange, { passive: true });
    onChange();
    return () => {
      mql.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
      window.removeEventListener("orientationchange", onChange);
    };
  }, []);

  return isMobile;
}
