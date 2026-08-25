import clsx from "clsx";

const toneStyles: Record<string, string> = {
  active: "text-signal border-signal/40 bg-signal/10",
  progress: "text-wheat-dim border-wheat/40 bg-wheat/10",
  complete: "text-ink-soft border-line bg-husk",
  upcoming: "text-ink-soft/70 border-line bg-transparent",
  neutral: "text-ink-soft border-line bg-transparent",
};

export function ManifestTag({
  children,
  tone = "neutral",
  dot = false,
  className,
}: {
  children: React.ReactNode;
  tone?: "active" | "progress" | "complete" | "upcoming" | "neutral";
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "manifest-tag inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
        toneStyles[tone],
        className
      )}
    >
      {dot && (
        <span
          className={clsx(
            "h-1.5 w-1.5 rounded-full",
            tone === "active" ? "bg-signal pulse-dot" : "bg-current"
          )}
        />
      )}
      {children}
    </span>
  );
}
