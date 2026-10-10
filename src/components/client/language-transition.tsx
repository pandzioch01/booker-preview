"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useReducedMotion } from "motion/react";
import type { Locale } from "@/lib/i18n";
import { appPath } from "@/lib/paths";

const LanguageContext = createContext<(locale: Locale) => void>(() => {});
const SkipEntranceContext = createContext(false);
const FADE_DURATION_MS = 140;

export function useLanguageTransition() {
  return useContext(LanguageContext);
}

export function useSkipEntranceAnimation() {
  return useContext(SkipEntranceContext);
}

export function LanguageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = appPath(pathname);
  const reducedMotion = useReducedMotion();
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const [skipEntranceAnimation, setSkipEntranceAnimation] = useState(false);

  useEffect(() => {
    document.documentElement.lang = currentPath === "/en" || currentPath.startsWith("/en/") ? "en" : "pl";
    router.prefetch(currentPath === "/en" ? "/" : "/en");
    if (!targetPath || currentPath !== targetPath) return;
    setTargetPath(null);
  }, [currentPath, router, targetPath]);

  useEffect(() => {
    if (!targetPath) return;
    const fallback = window.setTimeout(() => {
      setTargetPath(null);
    }, 3000);
    return () => window.clearTimeout(fallback);
  }, [targetPath]);

  const changeLanguage = useCallback((locale: Locale) => {
    const destination = locale === "pl" ? "/" : "/en";
    if (currentPath === destination || targetPath) return;
    const href = `${destination}${window.location.hash}`;
    if (reducedMotion) {
      setSkipEntranceAnimation(true);
      router.push(href);
      return;
    }
    setSkipEntranceAnimation(true);
    setTargetPath(destination);
    window.setTimeout(() => router.push(href), FADE_DURATION_MS);
  }, [currentPath, reducedMotion, router, targetPath]);

  return <LanguageContext.Provider value={changeLanguage}>
    <SkipEntranceContext.Provider value={skipEntranceAnimation}>
      <div className={`language-page${targetPath && !reducedMotion ? " is-switching" : ""}`}>{children}</div>
    </SkipEntranceContext.Provider>
  </LanguageContext.Provider>;
}
