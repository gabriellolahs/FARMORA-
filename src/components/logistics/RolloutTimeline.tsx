"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, Circle } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { ManifestTag } from "../ui/ManifestTag";

type Milestone = {
  code: string;
  title: string;
  status: "complete" | "progress" | "upcoming";
  detail: string;
  target: string;
};

const MILESTONES: Milestone[] = [
  {
    code: "RT-01",
    title: "Logistics division established; route mapping begins",
    status: "complete",
    detail:
      "We stood up the Farmora Logistics division and began mapping viable corridors against our existing consultation and seed-supply footprint.",
    target: "Completed",
  },
  {
    code: "RT-02",
    title: "Pilot farm-to-market corridors launch",
    status: "complete",
    detail:
      "First live corridors between South America and Europe, run in parallel with our existing consultation clients to validate transit times end-to-end.",
    target: "Completed",
  },
  {
    code: "RT-03",
    title: "Cold-chain transport partnerships secured",
    status: "progress",
    detail:
      "Finalizing agreements with regional carriers equipped for temperature-sensitive cargo, ensuring perishable harvests maintain quality from field to final destination. Rolling out first across our South American and European corridors.",
    target: "Target: Q1 next year",
  },
  {
    code: "RT-04",
    title: "International seed shipping corridors go live",
    status: "progress",
    detail:
      "Customs-optimized, climate-controlled shipping lanes connecting Africa and Asia, purpose-built for the viability windows of premium seed stock.",
    target: "Target: Q1 next year",
  },
  {
    code: "RT-05",
    title: "Equipment handling network expands to 15 countries",
    status: "upcoming",
    detail:
      "Import coordination and on-site delivery scheduling for heavy equipment, timed to planting and harvest windows rather than generic freight slots.",
    target: "Target: Q2–Q3 next year",
  },
  {
    code: "RT-06",
    title: "Full-fleet, real-time tracking dashboard for clients",
    status: "upcoming",
    detail:
      "A client-facing dashboard showing live shipment status across transport, seed, and equipment logistics — one point of visibility for everything moving on your behalf.",
    target: "Target: Q4 next year",
  },
];

const statusIcon = {
  complete: Check,
  progress: Loader2,
  upcoming: Circle,
};

export function RolloutTimeline() {
  const [openIndex, setOpenIndex] = useState<number>(2);
  const completeCount = MILESTONES.filter((m) => m.status === "complete").length;
  const fillPercent =
    ((completeCount + MILESTONES.filter((m) => m.status === "progress").length * 0.5) /
      MILESTONES.length) *
    100;

  return (
    <section id="rollout" className="border-y border-line bg-husk py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <p className="manifest-tag text-rust">02 — Rollout Manifest</p>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Where the fleet stands today.
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            Farmora Logistics is rolling out corridor by corridor. Tap a
            milestone below for the full detail on what&apos;s shipped and
            what&apos;s next.
          </p>
        </Reveal>

        {/* progress fill */}
        <div className="mt-12 h-1 w-full rounded-full bg-line">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${fillPercent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-1 rounded-full bg-rust"
          />
        </div>

        <ol className="mt-4 flex flex-col divide-y divide-line">
          {MILESTONES.map((m, i) => {
            const Icon = statusIcon[m.status];
            const open = openIndex === i;
            return (
              <li key={m.code}>
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full items-center gap-4 py-5 text-left"
                  aria-expanded={open}
                >
                  <span
                    className={clsx(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
                      m.status === "complete" && "border-signal bg-signal/10 text-signal",
                      m.status === "progress" && "border-wheat bg-wheat/10 text-wheat-dim",
                      m.status === "upcoming" && "border-line text-ink-soft/40"
                    )}
                  >
                    <Icon size={14} className={m.status === "progress" ? "animate-spin" : ""} />
                  </span>

                  <span className="manifest-tag hidden text-ink-soft/40 sm:inline">
                    {m.code}
                  </span>

                  <span className="flex-1 font-display text-lg text-ink">{m.title}</span>

                  <ManifestTag
                    tone={m.status === "complete" ? "complete" : m.status === "progress" ? "progress" : "upcoming"}
                    dot={m.status === "progress"}
                  >
                    {m.status === "complete" ? "Complete" : m.status === "progress" ? "In Progress" : "Upcoming"}
                  </ManifestTag>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="ml-12 max-w-2xl pb-6 pr-4">
                        <p className="text-sm leading-relaxed text-ink-soft">
                          {m.detail}
                        </p>
                        <p className="manifest-tag mt-3 text-rust">{m.target}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
