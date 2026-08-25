import type { Metadata } from "next";
import { LogisticsHero } from "@/components/logistics/LogisticsHero";
import { Vision } from "@/components/logistics/Vision";
import { Pillars } from "@/components/logistics/Pillars";
import { RolloutTimeline } from "@/components/logistics/RolloutTimeline";
import { RouteMap } from "@/components/logistics/RouteMap";
import { Benefits } from "@/components/logistics/Benefits";
import { EarlyAccessForm } from "@/components/logistics/EarlyAccessForm";

export const metadata: Metadata = {
  title: "Farmora Logistics — Farm-to-Market Transport & Seed Shipping",
  description:
    "Farmora's strategic expansion into agricultural logistics: farm-to-market transport, international seed shipping, and equipment handling.",
};

export default function LogisticsPage() {
  return (
    <>
      <LogisticsHero />
      <Vision />
      <Pillars />
      <RolloutTimeline />
      <RouteMap />
      <Benefits />
      <EarlyAccessForm />
    </>
  );
}
