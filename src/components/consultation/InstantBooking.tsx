import { ScheduleButton } from "../ScheduleButton";
import { Reveal } from "../ui/Reveal";
import { ManifestTag } from "../ui/ManifestTag";

export function InstantBooking() {
  return (
    <section className="border-b border-line bg-husk py-14">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <ManifestTag tone="active" dot>
          Fastest way in
        </ManifestTag>
        <h2 className="mt-4 font-display text-2xl font-medium text-ink sm:text-3xl">
          Pick a time that works for you.
        </h2>
        <p className="mt-2 max-w-md text-sm text-ink-soft">
          Skip the form — grab an open slot directly on our calendar and
          we&apos;ll call you at the time you choose.
        </p>
        <div className="mt-6">
          <ScheduleButton />
        </div>
      </Reveal>
    </section>
  );
}
