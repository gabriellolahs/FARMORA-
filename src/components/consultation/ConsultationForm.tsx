"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Check, ChevronLeft, ChevronRight, MapPin, Sprout, Compass, Wheat, Truck } from "lucide-react";
import { Region } from "./WorldMap";

const CROP_OPTIONS = ["Maize", "Soy", "Wheat", "Coffee", "Rice", "Cotton", "Fruit orchard", "Other"];

const SERVICE_OPTIONS = [
  { id: "consultation", label: "Farm Consultation", icon: Compass },
  { id: "planting", label: "Planting Services", icon: Sprout },
  { id: "seed", label: "Seed Supply", icon: Wheat },
  { id: "logistics", label: "Logistics & Shipping", icon: Truck },
] as const;

type FormState = {
  farmName: string;
  location: string;
  sizeValue: number;
  sizeUnit: "ha" | "ac";
  crops: string[];
  services: string[];
  logisticsCargo: string;
  timing: string;
  notes: string;
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  language: string;
};

const initialState: FormState = {
  farmName: "",
  location: "",
  sizeValue: 250,
  sizeUnit: "ha",
  crops: [],
  services: [],
  logisticsCargo: "",
  timing: "",
  notes: "",
  name: "",
  email: "",
  phone: "",
  contactMethod: "Email",
  language: "English",
};

const STEP_LABELS = ["Your Farm", "Your Needs", "Timing", "Contact"];

export function ConsultationForm({ prefill }: { prefill: Region | null }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);

  // Sync the map's region selection into form state without an effect
  // (React's "adjust state during render" pattern for prop -> state sync).
  const [syncedRegionId, setSyncedRegionId] = useState<string | null>(null);
  if (prefill && prefill.id !== syncedRegionId) {
    setSyncedRegionId(prefill.id);
    setData((d) => ({ ...d, location: prefill.name }));
  }

  const update = (patch: Partial<FormState>) => setData((d) => ({ ...d, ...patch }));

  const toggleCrop = (crop: string) =>
    update({
      crops: data.crops.includes(crop)
        ? data.crops.filter((c) => c !== crop)
        : [...data.crops, crop],
    });

  const toggleService = (id: string) =>
    update({
      services: data.services.includes(id)
        ? data.services.filter((s) => s !== id)
        : [...data.services, id],
    });

  const canProceed = () => {
    if (step === 0) return data.farmName.trim() && data.location.trim();
    if (step === 1) return data.services.length > 0;
    if (step === 2) return data.timing.length > 0;
    return true;
  };

  const goNext = () => {
    if (step < 3) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  };
  const goBack = () => {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-signal/30 bg-signal/5 p-10 text-center sm:p-14">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-signal/15 text-signal">
          <Check size={26} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-medium text-ink">
          Your request is on its way.
        </h3>
        <p className="mx-auto mt-2 max-w-md text-ink-soft">
          Thank you — your request has been sent to our regional team. A
          Farmora agronomist typically responds within 1 business day.
        </p>

        <div className="mx-auto mt-8 max-w-sm rounded-xl border border-line bg-husk p-5 text-left text-sm">
          <p className="manifest-tag text-ink-soft/50">Request Summary</p>
          <dl className="mt-3 space-y-1.5 text-ink-soft">
            <Row label="Farm" value={data.farmName} />
            <Row label="Location" value={data.location} />
            <Row
              label="Size"
              value={`${data.sizeValue.toLocaleString()} ${data.sizeUnit === "ha" ? "hectares" : "acres"}`}
            />
            <Row label="Services" value={data.services.join(", ") || "—"} />
            <Row label="Timing" value={data.timing} />
          </dl>
        </div>

        <a
          href="/logistics"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-rust"
        >
          Explore our Logistics venture while you wait <ChevronRight size={15} />
        </a>
      </div>
    );
  }

  return (
    <div id="form" className="rounded-3xl border border-line bg-husk p-6 sm:p-10">
      {/* progress */}
      <div className="flex items-center justify-between">
        <p className="manifest-tag text-ink-soft/50">
          Step {step + 1} of 4 — {STEP_LABELS[step]}
        </p>
        <p className="manifest-tag text-ink-soft/50">Free · No obligation</p>
      </div>
      <div className="mt-4 flex gap-1.5">
        {STEP_LABELS.map((_, i) => (
          <div key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-line">
            <motion.div
              className="h-1 rounded-full bg-rust"
              initial={false}
              animate={{ width: i <= step ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        ))}
      </div>

      <form onSubmit={submit} className="mt-8 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            initial={{ x: direction * 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -60, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {step === 0 && (
              <div className="flex flex-col gap-5">
                <TextField
                  label="Farm / Operation Name"
                  value={data.farmName}
                  onChange={(v) => update({ farmName: v })}
                  placeholder="Osei Family Farms"
                />
                <div>
                  <label className="manifest-tag text-ink-soft/60">Farm Location</label>
                  <div className="relative mt-2">
                    <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft/40" />
                    <input
                      value={data.location}
                      onChange={(e) => update({ location: e.target.value })}
                      placeholder="Country / region"
                      className="w-full rounded-lg border border-line bg-parchment py-3 pl-10 pr-4 text-sm text-ink outline-none placeholder:text-ink-soft/35 focus:border-wheat"
                    />
                  </div>
                  {prefill && data.location === prefill.name && (
                    <p className="manifest-tag mt-1.5 text-signal">
                      Pre-filled from map selection
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="manifest-tag text-ink-soft/60">Farm Size</label>
                    <div className="flex overflow-hidden rounded-full border border-line text-xs">
                      <button
                        type="button"
                        onClick={() => update({ sizeUnit: "ha" })}
                        className={clsx("px-3 py-1", data.sizeUnit === "ha" ? "bg-canopy text-parchment" : "text-ink-soft")}
                      >
                        ha
                      </button>
                      <button
                        type="button"
                        onClick={() => update({ sizeUnit: "ac" })}
                        className={clsx("px-3 py-1", data.sizeUnit === "ac" ? "bg-canopy text-parchment" : "text-ink-soft")}
                      >
                        ac
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 font-display text-3xl text-ink">
                    {data.sizeValue.toLocaleString()}{" "}
                    <span className="text-base text-ink-soft">
                      {data.sizeUnit === "ha" ? "hectares" : "acres"}
                    </span>
                  </p>
                  <input
                    type="range"
                    min={0}
                    max={5000}
                    step={10}
                    value={data.sizeValue}
                    onChange={(e) => update({ sizeValue: Number(e.target.value) })}
                    className="mt-3 w-full accent-rust"
                  />
                  <div className="flex justify-between">
                    <span className="manifest-tag text-ink-soft/40">0</span>
                    <span className="manifest-tag text-ink-soft/40">5,000+</span>
                  </div>
                </div>

                <div>
                  <label className="manifest-tag text-ink-soft/60">Primary Crop(s)</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {CROP_OPTIONS.map((crop) => (
                      <button
                        type="button"
                        key={crop}
                        onClick={() => toggleCrop(crop)}
                        className={clsx(
                          "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                          data.crops.includes(crop)
                            ? "border-canopy bg-canopy text-parchment"
                            : "border-line text-ink-soft hover:border-ink/40"
                        )}
                      >
                        {crop}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="flex flex-col gap-6">
                <div>
                  <label className="manifest-tag text-ink-soft/60">What do you need?</label>
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {SERVICE_OPTIONS.map((s) => {
                      const active = data.services.includes(s.id);
                      return (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => toggleService(s.id)}
                          className={clsx(
                            "flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all",
                            active
                              ? "border-canopy bg-canopy text-parchment"
                              : "border-line bg-parchment text-ink-soft hover:border-ink/40"
                          )}
                        >
                          <s.icon size={20} strokeWidth={1.75} />
                          <span className="text-xs font-medium leading-tight">{s.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <AnimatePresence>
                  {data.services.includes("logistics") && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <label className="manifest-tag text-ink-soft/60">
                        What are you looking to move?
                      </label>
                      <select
                        value={data.logisticsCargo}
                        onChange={(e) => update({ logisticsCargo: e.target.value })}
                        className="mt-2 w-full rounded-lg border border-line bg-parchment px-4 py-3 text-sm text-ink outline-none focus:border-wheat"
                      >
                        <option value="">Select an option</option>
                        <option>Harvest</option>
                        <option>Seed</option>
                        <option>Equipment</option>
                        <option>Multiple</option>
                      </select>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-6">
                <div>
                  <label className="manifest-tag text-ink-soft/60">When do you need to start?</label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["This Season", "Next Season", "Just Exploring"].map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => update({ timing: t })}
                        className={clsx(
                          "rounded-full border px-4 py-2 text-sm transition-colors",
                          data.timing === t
                            ? "border-canopy bg-canopy text-parchment"
                            : "border-line text-ink-soft hover:border-ink/40"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="manifest-tag text-ink-soft/60">
                    Anything specific we should know?
                  </label>
                  <textarea
                    value={data.notes}
                    onChange={(e) => update({ notes: e.target.value })}
                    rows={4}
                    placeholder="e.g. soil concerns, past yield issues, specific certifications needed..."
                    className="mt-2 w-full rounded-lg border border-line bg-parchment px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/35 focus:border-wheat"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <TextField label="Full Name" value={data.name} onChange={(v) => update({ name: v })} placeholder="Jane Osei" />
                  <TextField label="Email" value={data.email} onChange={(v) => update({ email: v })} placeholder="jane@farm.com" type="email" />
                </div>
                <TextField label="Phone" value={data.phone} onChange={(v) => update({ phone: v })} placeholder="+234 800 000 0000" type="tel" />
                <div>
                  <label className="manifest-tag text-ink-soft/60">Preferred contact method</label>
                  <div className="mt-2 flex gap-2">
                    {["Email", "Phone", "WhatsApp"].map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => update({ contactMethod: m })}
                        className={clsx(
                          "rounded-full border px-4 py-2 text-sm transition-colors",
                          data.contactMethod === m
                            ? "border-canopy bg-canopy text-parchment"
                            : "border-line text-ink-soft hover:border-ink/40"
                        )}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="manifest-tag text-ink-soft/60">Preferred language</label>
                  <select
                    value={data.language}
                    onChange={(e) => update({ language: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-line bg-parchment px-4 py-3 text-sm text-ink outline-none focus:border-wheat sm:w-64"
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Portuguese</option>
                    <option>French</option>
                    <option>Swahili</option>
                  </select>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-9 flex items-center justify-between border-t border-line pt-6">
          <button
            type="button"
            onClick={goBack}
            className={clsx(
              "flex items-center gap-1 text-sm text-ink-soft transition-opacity",
              step === 0 && "pointer-events-none opacity-0"
            )}
          >
            <ChevronLeft size={16} /> Back
          </button>

          {step < 3 ? (
            <button
              type="button"
              onClick={goNext}
              disabled={!canProceed()}
              className="flex items-center gap-1.5 rounded-full bg-canopy px-6 py-3 text-sm font-medium text-parchment transition-all disabled:cursor-not-allowed disabled:opacity-30 enabled:hover:-translate-y-0.5 enabled:hover:bg-canopy-2"
            >
              Next <ChevronRight size={16} />
            </button>
          ) : (
            <button
              type="submit"
              className="rounded-full bg-wheat px-6 py-3 text-sm font-medium text-canopy transition-all hover:-translate-y-0.5 hover:bg-wheat-dim"
            >
              Send My Consultation Request →
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="manifest-tag text-ink-soft/60">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-line bg-parchment px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/35 focus:border-wheat"
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-ink-soft/60">{label}</dt>
      <dd className="text-right font-medium text-ink">{value || "—"}</dd>
    </div>
  );
}
