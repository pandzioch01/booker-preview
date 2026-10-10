import type { Metadata } from "next";
import { LandingPage } from "@/components/server/landing-page";

export const metadata: Metadata = {
  title: "reBooked — bookings that work your way",
  description: "reBooked makes it easy to schedule appointments, sessions and training. Discover a simpler booking experience for your business.",
  openGraph: {
    title: "reBooked — bookings made simple",
    description: "Clients choose a time. You manage every booking request in one place.",
    locale: "en_US",
  },
};

export default function EnglishPage() {
  return <LandingPage locale="en" />;
}
