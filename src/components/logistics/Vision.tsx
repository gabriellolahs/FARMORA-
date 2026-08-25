import { Reveal } from "../ui/Reveal";

export function Vision() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
      <Reveal>
        <p className="manifest-tag text-rust">01 — Why We Built This</p>
        <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
          A supply chain built by farmers, for farmers.
        </h2>
        <p className="mt-8 font-display text-xl italic leading-relaxed text-ink-soft sm:text-2xl">
          Every season, brilliant harvests lose value in transit — delayed
          shipments, mishandled seed, equipment stuck at the wrong border at
          the wrong time.
        </p>
        <p className="mt-6 leading-relaxed text-ink-soft">
          We&apos;ve watched it happen to clients we&apos;ve spent years
          helping grow better crops. So we&apos;re solving it. Farmora
          Logistics is our answer: a dedicated division built to move what
          you grow — and what you need to grow it — with the same precision
          we bring to your fields.
        </p>
      </Reveal>
    </section>
  );
}
