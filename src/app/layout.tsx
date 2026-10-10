import type { Metadata } from "next";
import { LanguageTransitionProvider } from "@/components/client/language-transition";
import { sitePath } from "@/lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  title: "reBooked — rezerwacje, które pasują do Twojej pracy",
  icons: { icon: sitePath("/favicon.svg") },
  description:
    "reBooked to elastyczna aplikacja do umawiania wizyt, sesji i treningów. Poznaj prostszy sposób na organizację spotkań dla Twojej firmy.",
  openGraph: {
    title: "reBooked — spotkania bez zbędnych kroków",
    description:
      "Klient wybiera termin, a Ty zarządzasz rezerwacjami w jednym miejscu.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body><LanguageTransitionProvider>{children}</LanguageTransitionProvider></body>
    </html>
  );
}
