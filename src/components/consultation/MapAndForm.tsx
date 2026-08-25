"use client";

import { useState } from "react";
import { WorldMap, Region } from "./WorldMap";
import { ConsultationForm } from "./ConsultationForm";
import { Reveal } from "../ui/Reveal";

export function MapAndForm() {
  const [region, setRegion] = useState<Region | null>(null);

  const handleSelect = (r: Region) => {
    setRegion(r);
    requestAnimationFrame(() => {
      document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <WorldMap onSelect={handleSelect} />
      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-10 lg:pb-32">
        <Reveal>
          <ConsultationForm prefill={region} />
        </Reveal>
      </section>
    </>
  );
}
