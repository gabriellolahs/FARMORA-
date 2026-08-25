"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export function EarlyAccessForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="early-access" className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid grid-cols-1 gap-12 rounded-3xl border border-line bg-husk p-8 lg:grid-cols-2 lg:p-14">
        <Reveal>
          <p className="manifest-tag text-rust">05 — Early Access</p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Be among the first to ship with Farmora Logistics.
          </h2>
          <p className="mt-4 text-ink-soft">
            We&apos;re onboarding early partners as each corridor goes live.
            Tell us where you farm and what you move — we&apos;ll reach out
            as soon as your region is active.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-signal/30 bg-signal/5 p-10 text-center">
              <Check size={28} className="text-signal" />
              <p className="mt-3 font-display text-lg text-ink">
                Request received.
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                We&apos;ll be in touch as soon as your corridor opens.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full name" placeholder="Jane Osei" />
                <Field label="Company / Farm" placeholder="Osei Family Farms" />
              </div>
              <Field label="Region" placeholder="e.g. West Africa" />
              <div>
                <label className="manifest-tag text-ink-soft/60">
                  Primary interest
                </label>
                <select
                  required
                  className="mt-2 w-full rounded-lg border border-line bg-parchment px-4 py-3 text-sm text-ink outline-none focus:border-wheat"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select what you&apos;d move first
                  </option>
                  <option>Farm-to-market transport</option>
                  <option>International seed shipping</option>
                  <option>Equipment handling</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-2 rounded-full bg-wheat px-6 py-3 text-sm font-medium text-canopy transition-all hover:bg-wheat-dim hover:-translate-y-0.5"
              >
                Request Early Access
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="manifest-tag text-ink-soft/60">{label}</label>
      <input
        required
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-line bg-parchment px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/35 focus:border-wheat"
      />
    </div>
  );
}
