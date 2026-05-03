"use client";

import { useState } from "react";

export default function ContactButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked — mailto will still attempt */
    }
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={onClick}
      className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-[#0a1628] text-white font-semibold hover:bg-[#1a3a6b] transition-colors"
    >
      {copied ? "Copied to clipboard ✓" : email}
    </a>
  );
}
