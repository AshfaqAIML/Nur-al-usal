"use client";

import { useEffect } from "react";

const BASE_TITLE = "Nur al-Usul — Hanafi Research Platform";

/**
 * SPA per-view document title + meta description (SEO + history/UX).
 * The original meta description is remembered and restored on unmount.
 */
export function useDocTitle(title: string | null | undefined, description?: string | null) {
  useEffect(() => {
    document.title = title ? `${title} · ${BASE_TITLE}` : BASE_TITLE;

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    let defaultDesc: string | null = null;
    if (meta && description && description.trim()) {
      defaultDesc = meta.getAttribute("data-default-description");
      if (defaultDesc === null) {
        defaultDesc = meta.getAttribute("content") ?? "";
        meta.setAttribute("data-default-description", defaultDesc);
      }
      meta.setAttribute("content", description.trim().slice(0, 160));
    }

    return () => {
      document.title = BASE_TITLE;
      if (meta && defaultDesc !== null) meta.setAttribute("content", defaultDesc);
    };
  }, [title, description]);
}
