"use client";

import { motion } from "framer-motion";
import { Layers, Snowflake, Timer, Users } from "lucide-react";
import { Reveal } from "../ui/Reveal";

const BENEFITS = [
  {
    icon: Layers,
    title: "Fewer Middlemen",
    body: "Coordinated logistics under one roof means fewer handoffs and fewer points of failure.",
  },
  {
    icon: Snowflake,
    title: "Fresher Delivery",
    body: "Cold-chain-aware routing preserves quality from harvest to buyer.",
  },
  {
    icon: Timer,
    title: "Faster Customs Clearance",
    body: "Purpose-built documentation and customs relationships reduce border delays.",
  },
  {
    icon: Users,
    title: "One Point of Contact",
    body: "Your consultation team and your logistics team, finally talking to each other.",
  },
];

export function Benefits() {
  return (
    <section className="bg-canopy py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-lg">
          <p className="manifest-tag text-wheat">04 — Why It Matters</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-parchment sm:text-4xl">
            Built to remove friction, not add reports.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <b.icon size={26} strokeWidth={1.5} className="text-wheat" />
              <h3 className="mt-4 font-display text-lg font-medium text-parchment">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-parchment/60">
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
