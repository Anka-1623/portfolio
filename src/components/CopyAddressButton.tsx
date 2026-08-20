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
      className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
    >
      {copied ? "Copied" : "Copy address"}
    </button>
  );
}
