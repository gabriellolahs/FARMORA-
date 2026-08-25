import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

export function ClosingCta() {
  return (
    <section className="bg-wheat px-6 py-24 lg:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-medium leading-tight text-canopy sm:text-5xl">
          Ready to grow smarter, wherever you farm?
        </h2>
        <p className="mt-4 text-canopy/75">
          Talk to a Farmora agronomist about your land, your goals, and
          what&apos;s possible this season.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            href="/consultation"
            className="!bg-canopy !text-parchment hover:!bg-canopy-2"
          >
            Book Your Free Consultation
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
