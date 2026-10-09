"use client";

import { useMemo, useState } from "react";
import { catalog, waLink } from "../data";
import { Check, Chat, Plus, Search } from "./Icons";
import { useQuote } from "./QuoteProvider";

export default function SearchBox() {
  const [term, setTerm] = useState("");
  const q = useQuote();

  const results = useMemo(() => {
    const words = term.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return catalog.filter((c) => words.every((w) => `${c.item} ${c.dept}`.toLowerCase().includes(w))).slice(0, 8);
  }, [term]);

  const trimmed = term.trim();

  return (
    <div className="search">
      <label htmlFor="stock-search" className="sr">Search what we stock</label>
      <div className="field">
        <Search size={20} />
        <input
          id="stock-search"
          type="search"
          placeholder="Do you stock…? Try “paint”, “taps” or “battery”"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          autoComplete="off"
        />
      </div>

      {trimmed && (
        <ul className="results" aria-live="polite">
          {results.map((r) => {
            const on = q.has(r.item);
            return (
              <li key={r.item}>
                <div>
                  <b>{r.item}</b>
                  <span>{r.dept}</span>
                </div>
                <button type="button" className="mini" aria-pressed={on} onClick={() => q.toggle(r.item)}>
                  {on ? <Check size={16} /> : <Plus size={16} />} {on ? "Added" : "Add to quote"}
                </button>
              </li>
            );
          })}
          {results.length === 0 && (
            <li className="none">
              <div>
                <b>No category called “{trimmed}”</b>
                <span>We may still have it. Ask us and we will check.</span>
              </div>
              <a
                className="mini solid"
                href={waLink(`Hi Kalonji Hardware, do you stock ${trimmed}?`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Chat size={16} /> Ask on WhatsApp
              </a>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
