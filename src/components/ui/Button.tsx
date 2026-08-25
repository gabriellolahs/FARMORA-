import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "ghost" | "ghost-dark";
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  arrow = true,
  className,
  type = "button",
}: Props) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-out";
  const styles = {
    primary: "bg-wheat text-canopy hover:bg-wheat-dim hover:-translate-y-0.5 hover:shadow-lg hover:shadow-wheat/20",
    ghost:
      "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-parchment",
    "ghost-dark":
      "border border-parchment/30 text-parchment hover:border-parchment hover:bg-parchment hover:text-canopy",
  };

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  const cls = clsx(base, styles[variant], className);

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
