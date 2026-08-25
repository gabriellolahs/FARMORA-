"use client";

import { Sprout, Compass, Wheat } from "lucide-react";
import { Reveal, RevealGroup, revealItem } from "../ui/Reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    icon: Compass,
    title: "Expert Farm Consultation",
    body: "Soil analysis, crop planning, and yield guidance — available worldwide by phone or WhatsApp.",
    geo: "NIGERIA + WORLDWIDE REMOTE",
  },
  {
    icon: Sprout,
    title: "Plantain, Banana & Crop Establishment",
    body: "Hands-on planting and establishment for plantain, banana, tomato, and groundnuts.",
    geo: "ABEOKUTA · LAGOS · ONDO",
  },
  {
    icon: Wheat,
    title: "Field Management",
    body: "From land prep to stand establishment, managed on the ground by our field teams.",
    geo: "ON-THE-GROUND, NIGERIA",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <Reveal>
        <p className="manifest-tag text-rust">01 — Core Disciplines</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
          Three disciplines. One standard of excellence.
        </h2>
        <p className="mt-4 max-w-xl text-ink-soft">
          Whether you&apos;re breaking ground on a new estate or optimizing a
          century-old farm, our teams bring the same rigor — backed by
          agronomic science and decades of field experience.
        </p>
      </Reveal>

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {SERVICES.map((s) => (
          <motion.div
            key={s.title}
            variants={revealItem}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col rounded-2xl border border-line bg-husk p-8 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] transition-shadow hover:shadow-xl hover:shadow-loam/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-canopy text-wheat transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <s.icon size={20} strokeWidth={1.75} />
              </div>
              <span className="manifest-tag text-ink-soft/50">{s.geo}</span>
            </div>
            <h3 className="mt-6 font-display text-xl font-medium text-ink">
              {s.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
              {s.body}
            </p>
            <Link
              href="/consultation"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-rust"
            >
              Learn more
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
