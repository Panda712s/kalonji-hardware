"use client";

import { useMemo, useState } from "react";
import { departments, waLink } from "../data";
import { Chat } from "./Icons";

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [items, setItems] = useState("");
  const [picked, setPicked] = useState<string[]>([]);

  const href = useMemo(() => {
    let t = "Hi Kalonji Hardware, I need a quote.";
    if (name.trim()) t += `\nName: ${name.trim()}`;
    if (picked.length) t += `\nDepartments: ${picked.join(", ")}`;
    if (items.trim()) t += `\n\nItems:\n${items.trim()}`;
    return waLink(t);
  }, [name, items, picked]);

  const toggle = (d: string) =>
    setPicked((p) => (p.includes(d) ? p.filter((x) => x !== d) : [...p, d]));

  return (
    <form className="quote" id="quote" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <h2>Quick quote</h2>
      <small>List what you need. We reply on WhatsApp.</small>

      <label className="f" htmlFor="q-name">
        <span>Your name</span>
        <input type="text" id="q-name" placeholder="e.g. Thabo" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <fieldset className="f">
        <legend>Departments</legend>
        <div className="chips">
          {departments.map((d) => (
            <label key={d.name}>
              <input type="checkbox" checked={picked.includes(d.name)} onChange={() => toggle(d.name)} />
              <span>{d.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="f" htmlFor="q-items">
        <span>Items and quantities</span>
        <textarea
          id="q-items"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          placeholder={"20 x 15mm copper elbows\n2 x 20L white wall paint\n1 x 2.5mm twin and earth, 100m"}
        />
      </label>

      <a className="btn lg" href={href} target="_blank" rel="noopener noreferrer">
        <Chat size={20} /> Send on WhatsApp
      </a>
      <p className="alt">Or bring your list to the counter. Bulk and contractor pricing available.</p>
    </form>
  );
}
