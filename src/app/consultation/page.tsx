import type { Metadata } from "next";
import { ConsultHero } from "@/components/consultation/ConsultHero";
import { InstantBooking } from "@/components/consultation/InstantBooking";
import { MapAndForm } from "@/components/consultation/MapAndForm";
import { ContactOptions } from "@/components/consultation/ContactOptions";
import { Faq } from "@/components/consultation/Faq";
import { TrustBand } from "@/components/consultation/TrustBand";

export const metadata: Metadata = {
  title: "Book a Consultation — Farmora Agro Services",
  description:
    "Tell us where you farm and what you need. A Farmora agronomist will follow up with a plan tailored to your soil, climate, and goals.",
};

export default function ConsultationPage() {
  return (
    <>
      <ConsultHero />
      <InstantBooking />
      <MapAndForm />
      <ContactOptions />
      <Faq />
      <TrustBand />
    </>
  );
}
