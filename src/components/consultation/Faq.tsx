"use client";

import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const CATEGORIES = ["General", "Consultation", "Logistics"] as const;

const FAQS: Record<(typeof CATEGORIES)[number], { q: string; a: string }[]> = {
  General: [
    {
      q: "Which countries does Farmora currently operate in?",
      a: "Our field teams work on the ground across Abeokuta, Lagos, and Ondo State in Nigeria. Farm consultation is available worldwide by phone or WhatsApp.",
    },
    {
      q: "How quickly will someone respond to my consultation request?",
      a: "Most clients hear from us within one business day — or message us on WhatsApp for a faster response.",
    },
  ],
  Consultation: [
    {
      q: "Do you charge for the initial consultation?",
      a: "The first consultation call is free. Detailed on-site assessments and ongoing advisory plans are quoted based on farm size and scope.",
    },
    {
      q: "Do I need a minimum farm size to work with Farmora?",
      a: "No. We work with smallholders and larger operations alike — our recommendations scale to your farm.",
    },
    {
      q: "I'm outside Nigeria — can I still book a consultation?",
      a: "Yes. On-the-ground planting and establishment is currently Nigeria-only, but farm consultation is available worldwide by phone or WhatsApp.",
    },
  ],
  Logistics: [
    {
      q: "Is the logistics service available everywhere Farmora operates?",
      a: "Not yet — Farmora Logistics is rolling out corridor by corridor. Visit the Logistics page to see current status and request early access for your region.",
    },
  ],
};

export function Faq() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("General");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
      <Reveal className="text-center">
        <p className="manifest-tag text-rust">Frequently Asked</p>
        <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
          Questions, answered.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCat(c);
              setOpen(0);
            }}
            className={clsx(
              "manifest-tag rounded-full border px-3.5 py-2 transition-colors",
              cat === c ? "border-canopy bg-canopy text-parchment" : "border-line text-ink-soft hover:border-ink/40"
            )}
          >
            {c}
          </button>
        ))}
      </Reveal>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {FAQS[cat].map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base text-ink sm:text-lg">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={clsx(
                    "shrink-0 text-ink-soft transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
