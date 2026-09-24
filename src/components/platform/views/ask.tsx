"use client";

import { useState } from "react";
import { AlertTriangle, Loader2, Send } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { usePlatform, useT } from "@/lib/store";
import { apiPost, Question } from "@/lib/api";

const SENSITIVE_TOPICS = "talaq · nikah · inheritance · financial contracts · oaths · kaffarah · custody";

export function AskView() {
  const t = useT();
  const { toast } = useToast();
  const { setView } = usePlatform();
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("EN");
  const [claim, setClaim] = useState("");
  const [context, setContext] = useState("");
  const [busy, setBusy] = useState(false);
  const [sensitive, setSensitive] = useState(false);
  const [submitted, setSubmitted] = useState<Question | null>(null);

  async function submit() {
    if (text.trim().length < 10) {
      toast({ title: "Please write a complete question.", variant: "destructive" });
      return;
    }
    setBusy(true);
    try {
      const res = await apiPost<{ question: Question; fatwaWarning: boolean; message: string }>("/api/questions", {
        text, language, claim: claim || null, context: context || null,
      });
      setSubmitted(res.question);
      setSensitive(res.fatwaWarning);
      setText(""); setClaim(""); setContext("");
      toast({ title: "Question submitted", description: res.message });
    } catch (e) {
      toast({ title: e instanceof Error ? e.message : t("error"), variant: "destructive" });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <h1 className="font-scholarly text-3xl font-bold">{t("askQuestion")}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Ask about Hanafi aqeedah or fiqh. The system processes any attached claim before generating a
          citation-checked draft — sensitive personal matters always receive the fatwa warning below.
        </p>
      </header>

      <Alert className="mb-6 border-amber-300 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/40">
        <AlertTriangle className="h-4 w-4 text-amber-700 dark:text-amber-400" aria-hidden />
        <AlertTitle className="text-sm font-semibold text-amber-900 dark:text-amber-300">Personal Fatwa Warning</AlertTitle>
        <AlertDescription className="text-xs leading-relaxed text-amber-900/90 dark:text-amber-200/90">
          {t("personalFatwaWarning")} Sensitive matters include: {SENSITIVE_TOPICS}.
        </AlertDescription>
      </Alert>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <label htmlFor="q-text" className="text-sm font-semibold">Your question</label>
            <Textarea
              id="q-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={t("questionPlaceholder")}
              rows={4}
              className="mt-1.5 resize-none"
              maxLength={3000}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium text-muted-foreground">Language</label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="EN">English</SelectItem>
                  <SelectItem value="UR">اردو (Urdu)</SelectItem>
                  <SelectItem value="AR">العربية (Arabic)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="q-claim" className="text-xs font-medium text-muted-foreground">{t("optionalClaim")}</label>
              <Input id="q-claim" value={claim} onChange={(e) => setClaim(e.target.value)} className="mt-1" placeholder='e.g. "Hanafis reject hadith"' maxLength={500} />
            </div>
          </div>
          <div>
            <label htmlFor="q-context" className="text-xs font-medium text-muted-foreground">{t("optionalContext")}</label>
            <Input id="q-context" value={context} onChange={(e) => setContext(e.target.value)} className="mt-1" placeholder="book, URL, screenshot reference…" maxLength={500} />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={submit} disabled={busy} className="bg-emerald-700 hover:bg-emerald-800 text-white">
              {busy ? <Loader2 className="me-2 h-4 w-4 animate-spin" /> : <Send className="me-2 h-4 w-4 rtl-flip" />}
              {t("submitQuestion")}
            </Button>
            <Button variant="outline" onClick={() => setView("qa")}>{t("navQA")} →</Button>
          </div>
        </CardContent>
      </Card>

      {submitted && (
        <Card className={`mt-6 border-2 ${sensitive ? "border-amber-400 dark:border-amber-800" : "border-emerald-300 dark:border-emerald-800"}`}>
          <CardContent className="p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Submitted</p>
            <p className="mt-1 text-sm font-medium">{submitted.text}</p>
            {sensitive && (
              <p className="mt-2 rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-900 dark:bg-amber-950/50 dark:text-amber-200">
                {t("personalFatwaWarning")}
              </p>
            )}
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline" onClick={() => setView("qa", submitted.id)}>{t("navQA")} — track answer</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
