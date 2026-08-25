"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button";
import { ManifestTag } from "../ui/ManifestTag";

const STATS: { value: number; suffix: string; label: string; decimals?: number; text?: string }[] = [
  { value: 3, suffix: "", label: "Nigerian states active" },
  { value: 7, suffix: "", label: "Consultations & establishments delivered" },
  { value: 0, suffix: "", label: "Consultation reach", text: "Worldwide" },
  { value: 24, suffix: "/7", label: "Field support" },
];

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className="font-display text-4xl font-medium text-parchment sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section className="grain relative flex min-h-screen items-end overflow-hidden bg-canopy">
      {/* Layered field-at-dusk gradient backdrop, no external imagery required */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 0%, #2c4a34 0%, #1a2f24 45%, #12211a 75%), linear-gradient(180deg, transparent 40%, #0d1712 100%)",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-40"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
        style={{
          backgroundImage:
            "repeating-linear-gradient(100deg, rgba(201,162,39,0.05) 0px, rgba(201,162,39,0.05) 1px, transparent 1px, transparent 90px)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-10 lg:pb-24">
        <ManifestTag tone="active" dot className="!border-wheat/30 !text-wheat">
          Rooted in Nigeria. Open to the world.
        </ManifestTag>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.05] text-parchment sm:text-6xl lg:text-7xl">
          From first seed to full harvest — grown in Nigeria,{" "}
          <span className="italic text-wheat">guided anywhere</span>.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-parchment/70">
          Farmora Agro Services delivers hands-on farm establishment across
          Abeokuta, Lagos, and Ondo State — plus expert farm consultation
          available to growers anywhere in the world, by phone or WhatsApp.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button href="/consultation">Book a Consultation</Button>
          <Button
            href="https://wa.me/2349136287397?text=Hello%20Farmora%2C%20I%27d%20like%20to%20book%20a%20farm%20consultation."
            variant="ghost-dark"
          >
            Chat on WhatsApp
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line-dark pt-10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              {s.text ? (
                <span className="font-display text-4xl font-medium text-parchment sm:text-5xl">
                  {s.text}
                </span>
              ) : (
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              )}
              <p className="manifest-tag mt-1 text-parchment/45">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-bob absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-parchment/40">
        <div className="manifest-tag flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="h-8 w-px bg-parchment/40" />
        </div>
      </div>
    </section>
  );
}
