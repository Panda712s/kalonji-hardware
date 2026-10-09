"use client";

import { useMemo, useState } from "react";
import { departments, waLink } from "../data";
import { Chat } from "./Icons";

export default function ContractorForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [items, setItems] = useState("");

  const href = useMemo(() => {
    let t = "Hi Kalonji Hardware, I would like contractor / bulk pricing.";
    if (name.trim()) t += `\nName: ${name.trim()}`;
    if (company.trim()) t += `\nCompany: ${company.trim()}`;
    if (picked.length) t += `\nDepartments: ${picked.join(", ")}`;
    if (items.trim()) t += `\n\nItems and quantities:\n${items.trim()}`;
    return waLink(t);
  }, [name, company, picked, items]);

  const toggle = (d: string) => setPicked((p) => (p.includes(d) ? p.filter((x) => x !== d) : [...p, d]));

  return (
    <form className="quote" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <h2>Request trade pricing</h2>
      <small>Tell us what you buy. We reply on WhatsApp.</small>

      <label className="f" htmlFor="c-name">
        <span>Your name</span>
        <input type="text" id="c-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Sipho" />
      </label>
      <label className="f" htmlFor="c-company">
        <span>Company or trade (optional)</span>
        <input type="text" id="c-company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="e.g. Sipho Electrical" />
      </label>

      <fieldset className="f">
        <legend>What do you buy most?</legend>
        <div className="chips">
          {departments.map((d) => (
            <label key={d.name}>
              <input type="checkbox" checked={picked.includes(d.name)} onChange={() => toggle(d.name)} />
              <span>{d.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="f" htmlFor="c-items">
        <span>Typical items and quantities</span>
        <textarea
          id="c-items"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          placeholder={"50 x 6m lengths of 20mm conduit\n40 x 50kg bags of cement"}
        />
      </label>

      <a className="btn lg" href={href} target="_blank" rel="noopener noreferrer">
        <Chat size={20} /> Send on WhatsApp
      </a>
      <p className="alt">Larger orders qualify for bulk and contractor pricing.</p>
    </form>
  );
}
