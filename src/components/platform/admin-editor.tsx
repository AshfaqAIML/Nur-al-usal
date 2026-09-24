"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useT } from "@/lib/store";
import { apiAdmin, apiGet } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

/* ─── Entity field schemas (drives the generic form) ─── */
type FieldType = "text" | "textarea" | "checkbox" | "select";
interface FieldDef { key: string; label: string; type: FieldType; options?: string[]; required?: boolean }

const CLASSIFICATIONS = ["CLASSICAL_HANAFI", "LATER_HANAFI", "SOUTH_ASIAN_HANAFI", "FATAWA_COLLECTION", "AQEEDAH", "TAFSIR", "HADITH", "OTHER_SUNNI", "REFERENCE"];
const SCHOLAR_CLASSIFICATIONS = ["CLASSICAL_HANAFI", "LATER_HANAFI", "SOUTH_ASIAN_HANAFI", "BARELVI", "DEOBANDI", "AHL_E_HADITH", "SALAFI", "OTHER_SUNNI", "COMPANION"];
const VERIFICATION = ["VERIFIED", "PARTIALLY_VERIFIED", "OCR_NEEDS_REVIEW", "UNVERIFIED", "DISPUTED", "INSUFFICIENT_EVIDENCE"];
const MISC_STATUS = ["CORRECTLY_ATTRIBUTED", "PARTIALLY_CORRECT", "MISLEADING", "INCORRECTLY_ATTRIBUTED", "DISPUTED", "UNSUPPORTED", "INSUFFICIENTLY_DOCUMENTED"];

const ENTITIES: { value: string; label: string; labelKey: string; fields: FieldDef[]; titleKey: string; statusKey?: string }[] = [
  {
    value: "misconception", label: "Misconception", labelKey: "misconceptionsLabel", titleKey: "claim", statusKey: "verificationStatus",
    fields: [
      { key: "claim", label: "Claim", type: "text", required: true },
      { key: "claimUr", label: "Claim (Urdu)", type: "text" },
      { key: "verificationStatus", label: "Verification status", type: "select", options: MISC_STATUS },
      { key: "actualPosition", label: "Actual Hanafi position", type: "textarea" },
      { key: "scholarlyResponse", label: "Scholarly response", type: "textarea" },
      { key: "conclusion", label: "Conclusion", type: "textarea" },
      { key: "featured", label: "Featured", type: "checkbox" },
    ],
  },
  {
    value: "objection", label: "Objection", labelKey: "objectionsLabel", titleKey: "question", statusKey: undefined,
    fields: [
      { key: "question", label: "Objection question", type: "text", required: true },
      { key: "answer", label: "Answer", type: "textarea", required: true },
      { key: "hanafiPosition", label: "Hanafi position", type: "textarea" },
      { key: "disputed", label: "What is actually disputed", type: "textarea" },
      { key: "isAqeedah", label: "Aqeedah matter", type: "checkbox" },
    ],
  },
  {
    value: "book", label: "Book", labelKey: "books", titleKey: "titleEn", statusKey: "classification",
    fields: [
      { key: "titleEn", label: "Title (English)", type: "text", required: true },
      { key: "titleAr", label: "Title (Arabic)", type: "text" },
      { key: "titleUr", label: "Title (Urdu)", type: "text" },
      { key: "classification", label: "Classification", type: "select", options: CLASSIFICATIONS },
      { key: "descriptionEn", label: "Description", type: "textarea" },
      { key: "verified", label: "Verified", type: "checkbox" },
      { key: "featured", label: "Featured", type: "checkbox" },
    ],
  },
  {
    value: "scholar", label: "Scholar", labelKey: "scholarsLabel", titleKey: "nameEn", statusKey: "classification",
    fields: [
      { key: "nameEn", label: "Name (English)", type: "text", required: true },
      { key: "nameAr", label: "Name (Arabic)", type: "text" },
      { key: "classification", label: "Classification", type: "select", options: SCHOLAR_CLASSIFICATIONS },
      { key: "biographyEn", label: "Biography", type: "textarea" },
      { key: "isHanafi", label: "Hanafi", type: "checkbox" },
    ],
  },
  {
    value: "fatwa", label: "Fatwa", labelKey: "fatwas", titleKey: "question", statusKey: "verificationStatus",
    fields: [
      { key: "question", label: "Question", type: "text", required: true },
      { key: "answer", label: "Answer", type: "textarea", required: true },
      { key: "volume", label: "Volume", type: "text" },
      { key: "page", label: "Page", type: "text" },
      { key: "verificationStatus", label: "Verification status", type: "select", options: VERIFICATION },
    ],
  },
];

const PAGE_SIZE = 15;

type Rec = Record<string, unknown> & { id: string };

export function EntityEditor() {
  const t = useT();
  const { toast } = useToast();
  const [entity, setEntity] = useState(ENTITIES[0]);
  const [records, setRecords] = useState<Rec[] | null>(null);
  const [total, setTotal] = useState(0);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState<{ mode: "create" | "edit"; rec?: Rec } | null>(null);
  const [deleting, setDeleting] = useState<Rec | null>(null);
  const [bulkConfirm, setBulkConfirm] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    setRecords(null);
    try {
      const d = await apiGet<{ records: Rec[]; total?: number }>(`/api/admin/resource?entity=${entity.value}`);
      setRecords(d.records);
      setTotal(d.total ?? d.records.length);
    } catch {
      setRecords([]);
      setTotal(0);
    }
  }, [entity]);

  useEffect(() => { load(); }, [load]);

  // Reset selection when switching entities.
  useEffect(() => { setSelected(new Set()); }, [entity]);

  const filtered = useMemo(() => {
    if (!records) return null;
    const needle = q.trim().toLowerCase();
    if (!needle) return records;
    return records.filter((r) => JSON.stringify(r).toLowerCase().includes(needle));
  }, [records, q]);

  const pageCount = Math.max(1, Math.ceil((filtered?.length ?? 0) / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const pageRecords = useMemo(
    () => filtered?.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE) ?? null,
    [filtered, safePage]
  );

  // Reset to first page whenever entity or query changes.
  useEffect(() => { setPage(1); }, [entity, q]);

  const onDelete = async () => {
    if (!deleting) return;
    setBusy(true);
    try {
      await apiAdmin("/api/admin/resource", { entity: entity.value, id: deleting.id }, "DELETE");
      toast({ title: `${entity.label} deleted` });
      setDeleting(null);
      await load();
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : "Delete failed", variant: "destructive" });
    } finally { setBusy(false); }
  };

  const toggleSelect = (id: string, on: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (on) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const allPageSelected = !!pageRecords && pageRecords.length > 0 && pageRecords.every((r) => selected.has(r.id));
  const toggleSelectPage = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (pageRecords && !allPageSelected) pageRecords.forEach((r) => next.add(r.id));
      else if (pageRecords) pageRecords.forEach((r) => next.delete(r.id));
      return next;
    });
  };

  const onBulkDelete = async () => {
    if (selected.size === 0) return;
    setBusy(true);
    let done = 0;
    let failed = 0;
    for (const id of selected) {
      try {
        await apiAdmin("/api/admin/resource", { entity: entity.value, id }, "DELETE");
        done += 1;
      } catch {
        failed += 1;
      }
    }
    setBulkConfirm(false);
    setSelected(new Set());
    toast({
      title: failed === 0 ? `${done} ${entity.label} records deleted` : `${done} deleted · ${failed} failed`,
      variant: failed === 0 ? "default" : "destructive",
    });
    await load();
    setBusy(false);
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle className="text-base">{t("entityEditor")}</CardTitle>
          <div className="flex flex-wrap items-center gap-2">
            <Select value={entity.value} onValueChange={(v) => setEntity(ENTITIES.find((e) => e.value === v) ?? ENTITIES[0])}>
              <SelectTrigger className="h-9 w-44 text-xs" aria-label="Entity">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ENTITIES.map((e) => (
                  <SelectItem key={e.value} value={e.value}>{e.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="relative">
              <Search className="absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("search") + "…"} className="h-9 w-40 ps-8 text-xs" />
            </div>
            <Button size="sm" className="h-9 gap-1.5 bg-emerald-700 text-white hover:bg-emerald-800" onClick={() => setEditing({ mode: "create" })}>
              <Plus className="h-4 w-4" /> {t("createNew")}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {!pageRecords && (
          <div className="space-y-2">{[...Array(5)].map((_, i) => <Skeleton key={i} className="h-12 rounded-lg" />)}</div>
        )}
        {pageRecords && pageRecords.length === 0 && (
          <p className="py-8 text-center text-sm text-muted-foreground">{t("noResults")}</p>
        )}
        {pageRecords && pageRecords.length > 0 && (
          <div
            className={cn(
              "mb-2 flex min-h-9 flex-wrap items-center justify-between gap-2 rounded-lg border px-3 py-1.5 text-xs transition-colors",
              selected.size > 0
                ? "border-emerald-300 bg-emerald-50/70 dark:border-emerald-800 dark:bg-emerald-950/40"
                : "bg-muted/40"
            )}
          >
            <label className="flex cursor-pointer items-center gap-2 font-medium">
              <Checkbox checked={allPageSelected} onCheckedChange={() => toggleSelectPage()} aria-label="Select page" />
              {selected.size > 0
                ? t("bulkSelected").replace("{n}", String(selected.size))
                : "Select page"}
            </label>
            {selected.size > 0 && (
              <div className="flex items-center gap-1.5">
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-7 px-2 text-[11px] text-muted-foreground"
                  onClick={() => setSelected(new Set())}
                >
                  {t("clearSelection")}
                </Button>
                <Button
                  size="sm"
                  className="h-7 gap-1.5 bg-red-700 px-2.5 text-[11px] text-white hover:bg-red-800"
                  onClick={() => setBulkConfirm(true)}
                >
                  <Trash2 className="h-3 w-3" /> {t("bulkDelete")}
                </Button>
              </div>
            )}
          </div>
        )}
        {pageRecords && pageRecords.length > 0 && (
          <div className="max-h-[28rem] divide-y overflow-y-auto rounded-lg border">
            {pageRecords.map((r) => {
              const status = entity.statusKey ? String(r[entity.statusKey] ?? "") : null;
              const isSelected = selected.has(r.id);
              return (
                <div
                  key={r.id}
                  className={cn(
                    "flex items-center gap-3 p-3 transition-colors",
                    isSelected ? "bg-emerald-50/60 dark:bg-emerald-950/30" : "hover:bg-accent/40"
                  )}
                >
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={(c) => toggleSelect(r.id, c === true)}
                    aria-label={`Select ${String(r[entity.titleKey] ?? r.id)}`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{String(r[entity.titleKey] ?? r.id)}</p>
                    <p className="mt-0.5 line-clamp-1 text-[11px] text-muted-foreground">
                      {String(r[entity.fields.find((f) => f.type === "textarea")?.key ?? ""] ?? "")}
                    </p>
                  </div>
                  {status && (
                    <Badge variant="outline" className="shrink-0 text-[9px]">{status.replaceAll("_", " ")}</Badge>
                  )}
                  <div className="flex shrink-0 gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditing({ mode: "edit", rec: r })} aria-label="Edit">
                      <Pencil className="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-700 hover:text-red-800 dark:text-red-400" onClick={() => setDeleting(r)} aria-label="Delete">
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {pageRecords && pageRecords.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>
              {t("recordsTotal")}: <strong className="font-semibold text-foreground">{total}</strong>
              {q.trim() && <> · {t("matching")}: {filtered?.length}</>}
            </span>
            <div className="flex items-center gap-1.5">
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                disabled={safePage <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                aria-label={t("prev")}
              >
                <ChevronLeft className="h-3.5 w-3.5 rtl:rotate-180" />
              </Button>
              <span className="px-1 tabular-nums">
                {t("pageLabel")} {safePage} / {pageCount}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                disabled={safePage >= pageCount}
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                aria-label={t("next")}
              >
                <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>

      {/* Create / Edit dialog */}
      {editing && (
        <EntityForm
          entity={entity}
          rec={editing.mode === "edit" ? editing.rec : undefined}
          onClose={() => setEditing(null)}
          onSaved={async () => { setEditing(null); await load(); }}
        />
      )}

      {/* Delete confirm */}
      <AlertDialog open={!!deleting} onOpenChange={(o) => !o && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("deleteConfirmTitle")}</AlertDialogTitle>
            <AlertDialogDescription>
              {deleting ? String(deleting[entity.titleKey] ?? deleting.id) : ""} — {t("deleteConfirmBody")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
            <AlertDialogAction
              className={cn("bg-red-700 text-white hover:bg-red-800")}
              disabled={busy}
              onClick={(e) => { e.preventDefault(); onDelete(); }}
            >
              {t("delete")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Bulk delete confirm */}
      <AlertDialog open={bulkConfirm} onOpenChange={setBulkConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {t("bulkSelected").replace("{n}", String(selected.size))} — {t("deleteConfirmTitle")}
            </AlertDialogTitle>
            <AlertDialogDescription>{t("deleteConfirmBody")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-700 text-white hover:bg-red-800"
              disabled={busy}
              onClick={(e) => { e.preventDefault(); onBulkDelete(); }}
            >
              {busy ? t("saving") : t("bulkDelete")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}

/* ─── Dynamic create/edit form ─── */
function EntityForm({
  entity, rec, onClose, onSaved,
}: {
  entity: (typeof ENTITIES)[number];
  rec?: Rec;
  onClose: () => void;
  onSaved: () => Promise<void>;
}) {
  const t = useT();
  const { toast } = useToast();
  const [values, setValues] = useState<Record<string, unknown>>(() => {
    const init: Record<string, unknown> = {};
    for (const f of entity.fields) {
      init[f.key] = rec ? (rec[f.key] ?? (f.type === "checkbox" ? false : "")) : (f.type === "checkbox" ? false : "");
    }
    return init;
  });
  const [busy, setBusy] = useState(false);

  const set = (k: string, v: unknown) => setValues((p) => ({ ...p, [k]: v }));

  const save = async () => {
    for (const f of entity.fields) {
      if (f.required && !String(values[f.key] ?? "").trim()) {
        toast({ title: `${f.label} is required`, variant: "destructive" });
        return;
      }
    }
    // Only send changed/own fields; strip relational noise
    const data: Record<string, unknown> = {};
    for (const f of entity.fields) data[f.key] = values[f.key];
    setBusy(true);
    try {
      if (rec) {
        await apiAdmin("/api/admin/resource", { entity: entity.value, id: rec.id, data }, "PATCH");
        toast({ title: `${entity.label} updated` });
      } else {
        await apiAdmin("/api/admin/resource", { entity: entity.value, data }, "POST");
        toast({ title: `${entity.label} created` });
      }
      await onSaved();
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : "Save failed", variant: "destructive" });
    } finally { setBusy(false); }
  };

  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{rec ? t("editRecord") : t("createNew")} — {entity.label}</DialogTitle>
          <DialogDescription>
            {rec ? t("editRecordHint") : t("createNewHint")}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3.5 py-1">
          {entity.fields.map((f) => (
            <div key={f.key}>
              {f.type === "checkbox" ? (
                <label className="flex cursor-pointer items-center gap-2 text-sm">
                  <Checkbox checked={!!values[f.key]} onCheckedChange={(c) => set(f.key, c === true)} />
                  {f.label}
                </label>
              ) : f.type === "select" ? (
                <div>
                  <p className="mb-1.5 text-xs font-medium text-muted-foreground">{f.label}</p>
                  <Select value={String(values[f.key] ?? "")} onValueChange={(v) => set(f.key, v)}>
                    <SelectTrigger className="text-sm"><SelectValue placeholder={f.label} /></SelectTrigger>
                    <SelectContent>
                      {(f.options ?? []).map((o) => (
                        <SelectItem key={o} value={o}>{o.replaceAll("_", " ")}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div>
                  <p className="mb-1.5 text-xs font-medium text-muted-foreground">
                    {f.label}{f.required && <span className="text-red-600"> *</span>}
                  </p>
                  {f.type === "textarea" ? (
                    <Textarea value={String(values[f.key] ?? "")} onChange={(e) => set(f.key, e.target.value)} rows={4} className="text-sm" />
                  ) : (
                    <Input value={String(values[f.key] ?? "")} onChange={(e) => set(f.key, e.target.value)} className="text-sm" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose} disabled={busy}>{t("cancel")}</Button>
          <Button className="bg-emerald-700 text-white hover:bg-emerald-800" onClick={save} disabled={busy}>
            {busy ? t("saving") : t("save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
