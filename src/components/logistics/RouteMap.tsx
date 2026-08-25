"use client";

import { useState } from "react";
import { Reveal } from "../ui/Reveal";

const ROUTES = [
  {
    id: "sa-eu",
    label: "South America ↔ Europe",
    cargo: "Grain & oilseed transport",
    d: "M180 300 Q 350 150 520 130",
  },
  {
    id: "af-as",
    label: "Africa ↔ Asia",
    cargo: "Seed shipping corridor",
    d: "M470 280 Q 600 220 760 200",
  },
];

export function RouteMap() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal className="text-center">
        <p className="manifest-tag text-rust">03 — Active Pilot Corridors</p>
        <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
          Two corridors moving today.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="relative mt-14 aspect-[16/9] w-full rounded-2xl border border-line bg-husk">
        <svg viewBox="0 0 900 420" className="h-full w-full">
          <rect width="900" height="420" fill="none" />
          {/* faint dot grid continents suggestion */}
          <g opacity="0.25">
            {Array.from({ length: 32 }).map((_, i) => (
              <circle key={i} cx={40 + (i % 8) * 100} cy={60 + Math.floor(i / 8) * 90} r="1.4" fill="#4a3423" />
            ))}
          </g>

          {ROUTES.map((r) => (
            <g key={r.id}>
              <path
                d={r.d}
                fill="none"
                stroke={hover === r.id ? "#a1502c" : "#c9a227"}
                strokeWidth={hover === r.id ? 2 : 1.5}
                strokeOpacity={hover === r.id ? 0.8 : 0.45}
                className="route-dash transition-all duration-300"
              />
              <circle r="5" fill={hover === r.id ? "#a1502c" : "#c9a227"}>
                <animateMotion dur="7s" repeatCount="indefinite" path={r.d} />
              </circle>
              {/* invisible wider hit-path for hover */}
              <path
                d={r.d}
                fill="none"
                stroke="transparent"
                strokeWidth="24"
                onMouseEnter={() => setHover(r.id)}
                onMouseLeave={() => setHover(null)}
                className="cursor-pointer"
              />
            </g>
          ))}
        </svg>

        {hover && (
          <div className="pointer-events-none absolute left-6 top-6 rounded-lg border border-line bg-parchment px-4 py-3 shadow-lg">
            <p className="font-display text-sm font-medium text-ink">
              {ROUTES.find((r) => r.id === hover)?.label}
            </p>
            <p className="manifest-tag mt-1 text-ink-soft/60">
              {ROUTES.find((r) => r.id === hover)?.cargo}
            </p>
          </div>
        )}
      </Reveal>
    </section>
  );
}
