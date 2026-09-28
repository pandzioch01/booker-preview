"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguageTransition } from "@/components/client/language-transition";
import { portfolioUrl } from "@/lib/content";
import { getCopy, type Locale } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const changeLanguage = useLanguageTransition();
  const copy = getCopy(locale).nav;
  const links = [
    { label: copy.features, href: "#mozliwosci" },
    { label: copy.how, href: "#jak-to-dziala" },
    { label: copy.audience, href: "#dla-kogo" },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label={copy.home} onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
          <span>booker<span className="brand-dot">.</span></span>
        </a>

        <nav id="mobile-navigation" className={`nav-links ${open ? "is-open" : ""}`} aria-label={copy.navigation}>
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a className="mobile-nav-contact" href={portfolioUrl} onClick={() => setOpen(false)}>{copy.contact} <ArrowUpRight size={16} /></a>
        </nav>

        <div className="language-switch" role="group" aria-label={locale === "pl" ? "Język strony" : "Page language"}>
          <a href="/" lang="pl" aria-current={locale === "pl" ? "page" : undefined} className={locale === "pl" ? "active" : ""} onClick={(event) => { event.preventDefault(); setOpen(false); changeLanguage("pl"); }}>PL</a>
          <a href="/en" lang="en" aria-current={locale === "en" ? "page" : undefined} className={locale === "en" ? "active" : ""} onClick={(event) => { event.preventDefault(); setOpen(false); changeLanguage("en"); }}>EN</a>
        </div>
        <a href={portfolioUrl} className="header-contact">{copy.contact} <ArrowUpRight size={16} strokeWidth={2.1} /></a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? copy.menuClose : copy.menuOpen}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
