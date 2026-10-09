"use client";

import { Check, Plus } from "./Icons";
import { useQuote } from "./QuoteProvider";

/** A list of product categories. Each one toggles in or out of the quote basket. */
export function ItemList({ items }: { items: string[] }) {
  const q = useQuote();
  return (
    <ul className="item-chips">
      {items.map((it) => {
        const on = q.has(it);
        return (
          <li key={it}>
            <button type="button" aria-pressed={on} onClick={() => q.toggle(it)}>
              {on ? <Check size={16} /> : <Plus size={16} />}
              {it}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function AddAllButton({ items, label = "Add all to quote" }: { items: string[]; label?: string }) {
  const q = useQuote();
  const all = items.every((i) => q.has(i));
  return (
    <button
      type="button"
      className="btn ghost"
      onClick={() => {
        q.addMany(items);
        q.setOpen(true);
      }}
    >
      {all ? <Check size={18} /> : <Plus size={18} />} {all ? "Added, view basket" : label}
    </button>
  );
}
