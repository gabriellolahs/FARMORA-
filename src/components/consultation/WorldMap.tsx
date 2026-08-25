"use client";

import { useState } from "react";
import { MapPin, Globe } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export type Region = {
  id: string;
  name: string;
};

const REGIONS: (Region & { note: string })[] = [
  { id: "abeokuta", name: "Abeokuta, Ogun State", note: "On-the-ground service" },
  { id: "lagos", name: "Lagos", note: "On-the-ground service" },
  { id: "ondo", name: "Ondo State", note: "On-the-ground service" },
];

export function WorldMap({ onSelect }: { onSelect: (region: Region) => void }) {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section id="map" className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
      <Reveal className="text-center">
        <p className="manifest-tag text-rust">Where We Operate</p>
        <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
          On the ground in Nigeria. Available for consultation worldwide.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-ink-soft">
          Click your location to start your request — or if you&apos;re
          outside Nigeria, jump straight to WhatsApp for remote
          consultation.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {REGIONS.map((r) => (
          <button
            key={r.id}
            onMouseEnter={() => setHover(r.id)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onSelect({ id: r.id, name: r.name })}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-husk p-8 text-center transition-all hover:-translate-y-1 hover:border-signal/50 hover:shadow-lg"
          >
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-signal/10 text-signal">
              <MapPin size={18} />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-signal shadow-[0_0_0_3px_rgba(62,122,74,0.18)]" />
            </span>
            <p className="font-display text-lg text-ink">{r.name}</p>
            <p className="manifest-tag text-signal">{r.note}</p>
            {hover === r.id && (
              <span className="manifest-tag text-rust">Click to select →</span>
            )}
          </button>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mt-6">
        <button
          onClick={() =>
            onSelect({ id: "remote", name: "Outside Nigeria — remote consultation" })
          }
          className="mx-auto flex w-full max-w-xl items-center gap-4 rounded-2xl border border-dashed border-line bg-parchment p-6 text-left transition-colors hover:border-ink/40"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-canopy text-wheat">
            <Globe size={18} />
          </span>
          <span>
            <span className="block font-display text-base text-ink">
              Outside Nigeria?
            </span>
            <span className="block text-sm text-ink-soft">
              Consultation is available worldwide by phone or WhatsApp — no
              site visit needed.
            </span>
          </span>
        </button>
      </Reveal>
    </section>
  );
}
