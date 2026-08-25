"use client";

import { motion } from "framer-motion";
import { Truck, Ship, Wrench } from "lucide-react";

const PILLARS = [
  {
    icon: Ship,
    tag: "PILLAR 01 — TRANSPORT",
    title: "Farm-to-Market Transport",
    body: "Get your harvest to buyers faster and fresher. Our transport network is being built around cold-chain-capable routes, real-time shipment tracking, and partnerships with regional carriers who understand perishable timelines — not just freight schedules.",
  },
  {
    icon: Wrench,
    tag: "PILLAR 02 — SEED SHIPPING",
    title: "International Seed Shipping",
    body: "Premium seed only performs if it arrives viable. We're establishing climate-controlled, customs-optimized shipping corridors so the seed varieties we recommend reach your soil at peak quality — no matter which border it crosses.",
  },
  {
    icon: Truck,
    tag: "PILLAR 03 — EQUIPMENT",
    title: "Equipment Handling & Logistics",
    body: "Heavy equipment shouldn't be your bottleneck. From import coordination to on-site delivery scheduling, our logistics team is designing a handling process that gets machinery to your fields exactly when your planting or harvest window demands it.",
  },
];

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8 lg:px-10 lg:py-16">
      <div className="flex flex-col gap-20">
        {PILLARS.map((p, i) => {
          const fromLeft = i % 2 === 0;
          return (
            <div
              key={p.title}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <motion.div
                initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={fromLeft ? "lg:order-1" : "lg:order-2"}
              >
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-loam to-canopy">
                  <p.icon size={64} strokeWidth={1} className="text-wheat/70" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: fromLeft ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={fromLeft ? "lg:order-2" : "lg:order-1"}
              >
                <p className="manifest-tag text-rust">{p.tag}</p>
                <h3 className="mt-3 font-display text-3xl font-medium text-ink">
                  {p.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-soft">{p.body}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
