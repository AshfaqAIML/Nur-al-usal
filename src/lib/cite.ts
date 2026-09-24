/**
 * Citation-first helpers — every answer can be cited, linked, printed.
 * Format follows a lightweight scholarly convention:
 *   Nur al-Usul, "Title", Section. <short-url>. Accessed YYYY-MM-DD.
 */

export function buildCitation(opts: {
  title: string;
  section: string;
  path?: string;
  sourceRef?: string | null;
}): string {
  const date = new Date().toISOString().slice(0, 10);
  const url = typeof window !== "undefined" && opts.path ? `${window.location.origin}/${opts.path}` : "Nur al-Usul";
  const parts = [
    "Nur al-Usul — Hanafi Research Platform",
    `“${opts.title}”`,
    opts.section,
    opts.sourceRef ? `Primary source ref: ${opts.sourceRef}` : null,
    url,
    `Accessed ${date}.`,
  ];
  return parts.filter(Boolean).join(", ");
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch { /* fall through to legacy path */ }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export function currentHashPath(): string {
  if (typeof window === "undefined") return "";
  return window.location.hash.replace(/^#/, "") || "/";
}
