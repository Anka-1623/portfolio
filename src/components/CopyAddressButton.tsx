"use client";

import { useState } from "react";

export default function CopyAddressButton({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-px active:scale-[0.98]"
    >
      {copied ? "Copied" : "Copy address"}
    </button>
  );
}
