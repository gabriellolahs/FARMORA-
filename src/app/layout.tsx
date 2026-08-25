import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Farmora Agro Services — Global Farm Consultation, Planting & Seed Supply",
  description:
    "Farmora Agro Services delivers hands-on farm establishment across Abeokuta, Lagos, and Ondo State, plus expert farm consultation available worldwide by phone or WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-parchment text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
