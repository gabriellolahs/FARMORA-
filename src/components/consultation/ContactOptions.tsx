"use client";

import { Phone, MessageCircle, Globe } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const WA_LINK =
  "https://wa.me/2349136287397?text=" +
  encodeURIComponent("Hi Farmora, I'd like to schedule a consultation call.");

export function ContactOptions() {
  return (
    <section className="border-y border-line bg-husk py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-line bg-parchment p-7">
            <Phone size={20} className="text-rust" />
            <h3 className="mt-4 font-display text-lg text-ink">Call Us</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Speak directly with our team.
            </p>
            <p className="mt-4 font-mono-tag text-base text-ink">
              +234 913 628 7397
            </p>
            <p className="font-mono-tag text-base text-ink">
              +234 906 522 5124
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-parchment p-7">
            <MessageCircle size={20} className="text-signal" />
            <h3 className="mt-4 font-display text-lg text-ink">
              Schedule via WhatsApp
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              Tap to message us directly and book a call — usually the
              fastest way to reach us.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-signal"
            >
              Open WhatsApp →
            </a>
          </div>

          <div className="rounded-2xl border border-line bg-parchment p-7">
            <Globe size={20} className="text-wheat-dim" />
            <h3 className="mt-4 font-display text-lg text-ink">
              Outside Nigeria?
            </h3>
            <p className="mt-2 text-sm text-ink-soft">
              Consultation is available worldwide by phone call or WhatsApp
              — no site visit needed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
