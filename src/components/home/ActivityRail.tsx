"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import { ManifestTag } from "../ui/ManifestTag";
import { Reveal } from "../ui/Reveal";

type Activity = {
  region: string;
  flag: string;
  coords: string;
  category: "establishment" | "consultation";
  status: "Delivered";
  title: string;
  body: string;
  updated: string;
};

const ACTIVITIES: Activity[] = [
  {
    region: "Abeokuta, Ogun State",
    flag: "🇳🇬",
    coords: "7.15°N 3.35°E",
    category: "establishment",
    status: "Delivered",
    title: "Plantain Sucker Establishment",
    body: "Full plantain sucker establishment across 4 acres, from land prep through initial stand.",
    updated: "Delivered",
  },
  {
    region: "Lagos",
    flag: "🇳🇬",
    coords: "6.52°N 3.38°E",
    category: "establishment",
    status: "Delivered",
    title: "Banana Plantation Established",
    body: "One full plot of banana established and handed over to the client.",
    updated: "Delivered",
  },
  {
    region: "Ondo State",
    flag: "🇳🇬",
    coords: "7.25°N 5.20°E",
    category: "establishment",
    status: "Delivered",
    title: "Tomato Farm Establishment",
    body: "Four plots of tomato farm established, from bed prep to transplanting.",
    updated: "Delivered",
  },
  {
    region: "Abeokuta, Ogun State",
    flag: "🇳🇬",
    coords: "7.15°N 3.35°E",
    category: "consultation",
    status: "Delivered",
    title: "6-Acre Farm Consultation",
    body: "Full-cycle consultation across 6 acres — soil, planning, and field guidance.",
    updated: "Delivered",
  },
  {
    region: "Lagos / Ondo State",
    flag: "🇳🇬",
    coords: "6.52°N 3.38°E",
    category: "establishment",
    status: "Delivered",
    title: "Groundnuts Farm Establishment",
    body: "Groundnuts farm established from planting through to stand.",
    updated: "Delivered",
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "establishment", label: "Planting & Establishment" },
  { key: "consultation", label: "Consultation" },
] as const;

const toneForCategory = {
  establishment: "active",
  consultation: "progress",
  harvest: "complete",
  innovation: "progress",
} as const;

export function ActivityRail() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const [progress, setProgress] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  const visible = ACTIVITIES.filter((a) => filter === "all" || a.category === filter);

  const onScroll = () => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <section id="activity" className="border-y border-line bg-husk py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="manifest-tag text-rust">02 — Field Log</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
                What we&apos;re up to
              </h2>
              <p className="mt-3 max-w-xl text-ink-soft">
                Recent farm establishment and consultation work across
                Abeokuta, Lagos, and Ondo State.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={clsx(
                    "manifest-tag rounded-full border px-3.5 py-2 transition-colors",
                    filter === f.key
                      ? "border-canopy bg-canopy text-parchment"
                      : "border-line text-ink-soft hover:border-ink/40"
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Progress scrubber */}
        <div className="mt-10 h-px w-full bg-line">
          <div
            className="h-px bg-rust transition-[width] duration-150"
            style={{ width: `${Math.max(progress * 100, 4)}%` }}
          />
        </div>

        <div
          ref={railRef}
          onScroll={onScroll}
          className="rail snap-rail mt-8 flex gap-5 overflow-x-auto pb-4"
        >
          {visible.map((a) => (
            <article
              key={a.title}
              className="snap-card flex w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-line bg-parchment"
            >
              <div className="relative flex h-36 items-end bg-gradient-to-br from-canopy-2 to-canopy p-5">
                <span className="absolute right-4 top-4 text-2xl">{a.flag}</span>
                <ManifestTag tone={toneForCategory[a.category]}>
                  {a.status}
                </ManifestTag>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="manifest-tag text-ink-soft/50">{a.coords}</p>
                <h3 className="mt-2 font-display text-lg font-medium leading-snug text-ink">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {a.body}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs">
                  <span className="text-ink-soft/60">{a.region}</span>
                  <span className="manifest-tag text-ink-soft/50">{a.updated}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
