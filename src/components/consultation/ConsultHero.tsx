import { ManifestTag } from "../ui/ManifestTag";

export function ConsultHero() {
  return (
    <section className="bg-canopy pb-16 pt-36 lg:pb-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <ManifestTag tone="active" dot className="!border-wheat/30 !text-wheat">
          Let&apos;s talk about your land
        </ManifestTag>
        <h1 className="mt-6 font-display text-4xl font-medium leading-tight text-parchment sm:text-5xl">
          Get a consultation built around your farm — not a template.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-parchment/65">
          Tell us where you farm and what you need. A Farmora agronomist
          will follow up with a plan tailored to your soil, climate, and
          goals.
        </p>
      </div>
    </section>
  );
}
