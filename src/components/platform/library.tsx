"use client";

/**
 * My Library UI:
 *  - BookmarkButton: toggle-save affordance placed on detail pages, answers,
 *    comparison cards and claim verdicts.
 *  - LibraryDialog: personal reference shelf opened from the navbar.
 *  - LibraryNavButton: navbar trigger with a live saved-count badge.
 */

import { useCallback, useEffect, useState } from "react";
import { Bookmark, BookmarkCheck, BookMarked, CheckCircle2, GitCompare, ScrollText, MessageSquareText, ScanSearch, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { usePlatform, useT } from "@/lib/store";
import {
  clearLibrary, isBookmarked, libraryRoute, LIBRARY_EVENT,
  LibraryItem, LibraryKind, loadLibrary, removeBookmark, toggleBookmark,
} from "@/lib/bookmarks";
import { timeAgo } from "@/lib/reading-history";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

/** Shared subscription: re-read localStorage whenever anything toggles. */
function useLibrarySync(): LibraryItem[] {
  const [items, setItems] = useState<LibraryItem[]>([]);
  const refresh = useCallback(() => setItems(loadLibrary()), []);
  useEffect(() => {
    // Lazy read avoids setState-in-effect (same pattern as home reading history).
    const id = setTimeout(refresh, 0);
    window.addEventListener(LIBRARY_EVENT, refresh);
    window.addEventListener("focus", refresh);
    return () => {
      clearTimeout(id);
      window.removeEventListener(LIBRARY_EVENT, refresh);
      window.removeEventListener("focus", refresh);
    };
  }, [refresh]);
  return items;
}

const KIND_ICON: Record<LibraryKind, typeof CheckCircle2> = {
  misconception: CheckCircle2,
  objection: ScrollText,
  comparison: GitCompare,
  question: MessageSquareText,
  claim: ScanSearch,
};

const KIND_CHIP: Record<LibraryKind, string> = {
  misconception: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  objection: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  comparison: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
  question: "bg-stone-100 text-stone-700 dark:bg-stone-900 dark:text-stone-300",
  claim: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
};

const KIND_LABEL: Record<LibraryKind, string> = {
  misconception: "misconceptionsLabel",
  objection: "objectionsLabel",
  comparison: "comparisonsLabel",
  question: "navQA",
  claim: "navClaims",
};

/* ─── Bookmark toggle button ─── */
export function BookmarkButton({
  kind,
  keyId,
  title,
  withLabel = false,
}: {
  kind: LibraryKind;
  keyId: string;
  title: string;
  /** Show a text label next to the icon (detail footers). */
  withLabel?: boolean;
}) {
  const t = useT();
  const { toast } = useToast();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const sync = () => setSaved(isBookmarked(kind, keyId));
    sync();
    window.addEventListener(LIBRARY_EVENT, sync);
    return () => window.removeEventListener(LIBRARY_EVENT, sync);
  }, [kind, keyId]);

  const onToggle = () => {
    const nowSaved = toggleBookmark({ kind, key: keyId, title });
    setSaved(nowSaved);
    toast({ title: nowSaved ? t("savedToLibrary") : t("removedFromLibrary") });
  };

  const label = saved ? t("savedInLibrary") : t("saveToLibrary");

  if (!withLabel) {
    return (
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "no-print h-8 w-8 shrink-0 transition-all active:scale-90 focus-visible:ring-emerald-600",
          saved
            ? "border-amber-400 bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-300 dark:hover:bg-amber-900"
            : "text-muted-foreground hover:text-amber-700 dark:hover:text-amber-300"
        )}
        aria-pressed={saved}
        aria-label={label}
        title={label}
        onClick={onToggle}
      >
        {saved ? <BookmarkCheck className="h-4 w-4 fill-current" aria-hidden /> : <Bookmark className="h-4 w-4" aria-hidden />}
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        "no-print h-8 gap-1.5 text-xs transition-all active:scale-[0.97] focus-visible:ring-emerald-600",
        saved
          ? "border-amber-400 bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-300 dark:hover:bg-amber-900"
          : "text-muted-foreground hover:text-amber-700 dark:hover:text-amber-300"
      )}
      aria-pressed={saved}
      onClick={onToggle}
    >
      {saved ? <BookmarkCheck className="h-3.5 w-3.5 fill-current" aria-hidden /> : <Bookmark className="h-3.5 w-3.5" aria-hidden />}
      {saved ? t("saved") : t("saveToLibrary")}
    </Button>
  );
}

/* ─── Personal reference shelf ─── */
export function LibraryDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const t = useT();
  const { setView } = usePlatform();
  const { toast } = useToast();
  const items = useLibrarySync();

  const openItem = (item: LibraryItem) => {
    const route = libraryRoute(item);
    setView(route.view, route.param);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0" dir={undefined}>
        <DialogHeader className="border-b px-5 pb-3 pt-5">
          <DialogTitle className="flex items-center gap-2 font-scholarly">
            <BookMarked className="h-4.5 w-4.5 text-amber-600 dark:text-amber-400" aria-hidden />
            {t("myLibrary")}
            <span className="ms-auto rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold tabular-nums text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              {t("libraryCount").replace("{n}", String(items.length))}
            </span>
          </DialogTitle>
          <DialogDescription className="text-xs">{t("libraryHint")}</DialogDescription>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-2 px-6 py-10 text-center">
            <Bookmark className="h-8 w-8 text-muted-foreground/40" aria-hidden />
            <p className="text-sm font-medium">{t("libraryEmpty")}</p>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">{t("libraryEmptyHint")}</p>
          </div>
        ) : (
          <>
            <div className="max-h-[55vh] overflow-y-auto px-2 py-2 [scrollbar-width:thin]">
              {items.map((item) => {
                const Icon = KIND_ICON[item.kind];
                return (
                  <div
                    key={`${item.kind}-${item.key}`}
                    className="group flex items-start gap-2.5 rounded-lg p-2.5 transition-colors hover:bg-accent/60"
                  >
                    <button
                      onClick={() => openItem(item)}
                      className="flex min-w-0 flex-1 items-start gap-2.5 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                    >
                      <span className={cn("mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full", KIND_CHIP[item.kind])}>
                        <Icon className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span className="line-clamp-2 text-xs font-medium leading-snug">{item.title}</span>
                        <span className="mt-0.5 block text-[10px] text-muted-foreground">
                          {timeAgo(item.ts, t)} · {t(KIND_LABEL[item.kind])}
                        </span>
                      </span>
                    </button>
                    <button
                      onClick={() => { removeBookmark(item.kind, item.key); toast({ title: t("removedFromLibrary") }); }}
                      aria-label={t("removeFromLibrary")}
                      className="mt-1 rounded p-1 text-muted-foreground/50 opacity-0 transition-all hover:bg-destructive/10 hover:text-destructive focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 group-hover:opacity-100"
                    >
                      <Trash2 className="h-3.5 w-3.5" aria-hidden />
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="border-t px-4 py-2.5">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 gap-1 px-2 text-[11px] text-muted-foreground hover:text-destructive"
                onClick={() => { clearLibrary(); toast({ title: t("libraryCleared") }); }}
              >
                <Trash2 className="h-3 w-3" aria-hidden /> {t("clearLibrary")}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

/* ─── Navbar trigger with saved-count badge ─── */
export function LibraryNavButton() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const items = useLibrarySync();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="relative h-9 w-9"
        aria-label={t("myLibrary")}
        title={t("myLibrary")}
        onClick={() => setOpen(true)}
      >
        <BookMarked className="h-4 w-4" aria-hidden />
        {items.length > 0 && (
          <span
            className="absolute -end-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-700 px-1 text-[9px] font-bold tabular-nums text-white"
            aria-hidden
          >
            {items.length > 9 ? "9+" : items.length}
          </span>
        )}
      </Button>
      <LibraryDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
