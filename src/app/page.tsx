import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ActivityRail } from "@/components/home/ActivityRail";
import { Testimonials } from "@/components/home/Testimonials";
import { ClosingCta } from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ActivityRail />
      <Testimonials />
      <ClosingCta />
    </>
  );
}
