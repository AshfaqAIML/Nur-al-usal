"use client";

import { useEffect } from "react";
import { usePlatform, View } from "@/lib/store";
import { Navbar } from "@/components/platform/navbar";
import { Footer } from "@/components/platform/footer";
import { HomeView } from "@/components/platform/views/home";
import { KnowledgeView } from "@/components/platform/views/knowledge";
import { MisconceptionsView } from "@/components/platform/views/misconceptions";
import { ClaimsView } from "@/components/platform/views/claims";
import { ObjectionsView } from "@/components/platform/views/objections";
import { ComparisonView } from "@/components/platform/views/comparison";
import { SourcesView } from "@/components/platform/views/sources";
import { QuranHadithView } from "@/components/platform/views/quran-hadith";
import { SearchView } from "@/components/platform/views/search";
import { AskView } from "@/components/platform/views/ask";
import { QuestionsView } from "@/components/platform/views/qa";
import { AdminView } from "@/components/platform/views/admin";
import { BackToTop } from "@/components/platform/detail-chrome";
import { ServiceWorkerRegister } from "@/components/platform/sw-register";

function CurrentView() {
  const view = usePlatform((s) => s.view);
  const param = usePlatform((s) => s.param);

  switch (view) {
    case "knowledge": return <KnowledgeView slug={param} />;
    case "misconceptions": return <MisconceptionsView slug={param} />;
    case "claims": return <ClaimsView />;
    case "objections": return <ObjectionsView id={param} />;
    case "compare": return <ComparisonView focusId={param} />;
    case "sources": return <SourcesView param={param} />;
    case "quran": return <QuranHadithView />;
    case "search": return <SearchView param={param} />;
    case "ask": return <AskView />;
    case "qa": return <QuestionsView id={param} />;
    case "admin": return <AdminView />;
    case "home":
    default: return <HomeView />;
  }
}

export default function Page() {
  const hydrateFromHash = usePlatform((s) => s.hydrateFromHash);
  const view = usePlatform((s) => s.view);

  useEffect(() => {
    hydrateFromHash();
    const onHash = () => {
      hydrateFromHash();
      // Back/forward or manual hash edits: start the new view at the top,
      // mirroring in-app setView behavior.
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [hydrateFromHash]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-emerald-700 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Keyed by view → subtle fade+rise transition between views (CSS .view-enter).
            Param changes within a view keep state (no remount), preserving list caches. */}
        <div key={view} className="view-enter">
          <CurrentView />
        </div>
      </main>
      <Footer />
      <BackToTop />
      <ServiceWorkerRegister />
    </div>
  );
}
