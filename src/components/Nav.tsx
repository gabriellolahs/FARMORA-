"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "./ui/Button";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#activity", label: "What We're Up To" },
  { href: "/logistics", label: "Logistics" },
  { href: "/consultation", label: "Consultation" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-out",
        scrolled
          ? "bg-canopy/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-2 text-parchment">
          <span className="font-display text-xl font-semibold tracking-tight">
            Farmora
          </span>
          <span className="manifest-tag hidden text-wheat sm:inline">
            Agro Services
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-active={pathname === l.href.split("#")[0] && !l.href.includes("#")}
              className="nav-link text-sm text-parchment/85 hover:text-parchment"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            aria-label="Change region and language"
            className="flex items-center gap-1.5 text-sm text-parchment/70 hover:text-parchment"
          >
            <Globe size={15} />
            <span className="manifest-tag">EN</span>
          </button>
          <Button href="/consultation" arrow={false} className="!px-5 !py-2.5">
            Book a Consultation
          </Button>
        </div>

        <button
          className="text-parchment lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line-dark bg-canopy px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-parchment/85"
              >
                {l.label}
              </Link>
            ))}
            <Button href="/consultation" arrow={false} className="mt-2 w-full justify-center">
              Book a Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
