"use client";

import { useState } from "react";

export default function CopyButton({ value }: { value: string }) {
  const [label, setLabel] = useState("Copy");

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setLabel("Copied");
      setTimeout(() => setLabel("Copy"), 1500);
    } catch {
      setLabel(value);
    }
  }

  return (
    <button className="copy" type="button" onClick={copy} aria-live="polite">
      {label}
    </button>
  );
}
