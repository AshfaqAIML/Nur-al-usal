"use client";

import { useEffect } from "react";

/** SPA per-view document title (SEO + history/UX). */
export function useDocTitle(title: string | null | undefined) {
  useEffect(() => {
    const base = "Nur al-Usul — Hanafi Research Platform";
    document.title = title ? `${title} · ${base}` : base;
    return () => { document.title = base; };
  }, [title]);
}
