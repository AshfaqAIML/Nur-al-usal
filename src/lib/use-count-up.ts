"use client";

import { useEffect, useState } from "react";

/**
 * Animate a number 0 → target with cubic ease-out (requestAnimationFrame).
 * Respects prefers-reduced-motion (jumps straight to the target).
 */
export function useCountUp(target: number, duration = 900): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    let timeout = 0;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      // Reduced motion: jump straight to the target (deferred to avoid setState-in-effect).
      timeout = window.setTimeout(() => setValue(target), 0);
      return () => window.clearTimeout(timeout);
    }
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}
