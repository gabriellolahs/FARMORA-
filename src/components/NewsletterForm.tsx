"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export function NewsletterForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mt-4 flex items-center gap-2 text-sm text-wheat">
        <Check size={16} /> You&apos;re on the list.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="mt-4 flex overflow-hidden rounded-full border border-parchment/25 focus-within:border-wheat"
    >
      <input
        type="email"
        required
        placeholder="you@farm.com"
        className="w-full bg-transparent px-4 py-2.5 text-sm text-parchment placeholder:text-parchment/40 outline-none"
      />
      <button
        type="submit"
        className="manifest-tag shrink-0 bg-wheat px-4 text-canopy transition-colors hover:bg-wheat-dim"
      >
        Join
      </button>
    </form>
  );
}
