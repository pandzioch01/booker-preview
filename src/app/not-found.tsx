"use client";

import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { Starburst } from "@/components/starburst";

const copy = {
  pl: {
    eyebrow: "NIE ZNALEZIONO STRONY",
    title: "Nie znaleziono",
    accent: "tej strony.",
    description: "Wygląda na to, że ten adres nie prowadzi już do żadnej strony. Wróć do Bookera i zobacz, jak może uprościć umawianie spotkań.",
    home: "Wróć na stronę główną",
    explore: "Poznaj możliwości",
    homeLabel: "Booker — strona główna",
    note: "Zgubiony adres. Dobry kierunek.",
  },
  en: {
    eyebrow: "PAGE NOT FOUND",
    title: "This page is",
    accent: "missing.",
    description: "It looks like this address no longer leads anywhere. Head back to Booker and see how it can make scheduling simpler.",
    home: "Back to homepage",
    explore: "Explore the features",
    homeLabel: "Booker — homepage",
    note: "Wrong turn. Right place.",
  },
} as const;

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pl";
  const text = copy[locale];
  const home = locale === "en" ? "/en" : "/";

  useEffect(() => {
    document.title = locale === "en" ? "Page not found — Booker" : "Nie znaleziono strony — Booker";
  }, [locale]);

  return (
    <div className="not-found-page" lang={locale}>
      <header className="not-found-header container">
        <a href={home} className="brand" aria-label={text.homeLabel}>
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
          <span>booker<span className="brand-dot">.</span></span>
        </a>
        <div className="not-found-languages" aria-label={locale === "pl" ? "Język strony" : "Page language"}>
          <a href="/" lang="pl" aria-current={locale === "pl" ? "page" : undefined}>PL</a>
          <span aria-hidden="true">/</span>
          <a href="/en" lang="en" aria-current={locale === "en" ? "page" : undefined}>EN</a>
        </div>
      </header>

      <main className="not-found-main container">
        <div className="not-found-copy">
          <p className="section-kicker"><span>404</span> {text.eyebrow}</p>
          <h1>{text.title}<br /><em>{text.accent}</em></h1>
          <p className="not-found-description">{text.description}</p>
          <div className="not-found-actions">
            <a className="contact-link" href={home}><ArrowLeft size={18} /><span>{text.home}</span></a>
            <a className="text-link" href={`${home}#mozliwosci`}>{text.explore} <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="not-found-visual" aria-hidden="true">
          <div className="not-found-ring not-found-ring-outer" />
          <div className="not-found-ring not-found-ring-inner" />
          <span className="not-found-number">404</span>
          <span className="not-found-star"><Starburst size={108} /></span>
          <span className="not-found-mini-card"><span className="eyebrow-dot" /> Booker <ArrowUpRight size={14} /></span>
        </div>
      </main>

      <footer className="not-found-footer container"><span>{text.note}</span><span>BOOKER / 404</span></footer>
    </div>
  );
}
