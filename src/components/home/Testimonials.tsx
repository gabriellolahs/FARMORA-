"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import clsx from "clsx";

const QUOTES = [
  {
    quote:
      "Farmora handled our plantain sucker establishment from start to finish across 4 acres. Every stage was on schedule and the stand came in strong.",
    name: "Client, Abeokuta",
    role: "Plantain Sucker Establishment, Ogun State",
  },
  {
    quote:
      "The tomato plots they set up for us across Ondo State were well laid out and properly guided from bed prep to transplanting.",
    name: "Client, Ondo State",
    role: "Tomato Farm Establishment",
  },
  {
    quote:
      "Their consultation team walked our 6 acres with us and gave guidance we could actually act on — not just a report.",
    name: "Client, Abeokuta",
    role: "6-Acre Farm Consultation",
  },
];

const DURATION = 6000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const raf = useRef<number | null>(null);
  const start = useRef<number>(0);

  useEffect(() => {
    if (paused) {
      if (raf.current) cancelAnimationFrame(raf.current);
      return;
    }
    start.current = performance.now() - progress * DURATION;
    const tick = (t: number) => {
      const elapsed = t - start.current;
      const p = Math.min(elapsed / DURATION, 1);
      setProgress(p);
      if (p >= 1) {
        setIndex((i) => (i + 1) % QUOTES.length);
        start.current = t;
        setProgress(0);
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, index]);

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 lg:py-32">
      <Reveal>
        <p className="manifest-tag text-center text-rust">04 — From the Field</p>
      </Reveal>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="mt-8 min-h-[240px]"
      >
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="font-display text-2xl font-normal italic leading-relaxed text-ink sm:text-3xl">
              &ldquo;{QUOTES[index].quote}&rdquo;
            </p>
            <footer className="mt-6">
              <p className="font-medium text-ink">{QUOTES[index].name}</p>
              <p className="manifest-tag mt-1 text-ink-soft/60">
                {QUOTES[index].role}
              </p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mx-auto mt-10 flex max-w-xs gap-2">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => {
                setIndex(i);
                setProgress(0);
              }}
              className="h-1 flex-1 overflow-hidden rounded-full bg-line"
            >
              <span
                className={clsx(
                  "block h-full bg-rust",
                  i !== index && "w-0"
                )}
                style={i === index ? { width: `${progress * 100}%` } : undefined}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
