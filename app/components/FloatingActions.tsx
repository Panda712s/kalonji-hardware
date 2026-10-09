"use client";

import { useEffect, useRef, useState } from "react";
import { waLink } from "../data";
import { ArrowUp, Basket, Chat, Close, Minus, Plus, Trash } from "./Icons";
import { useQuote } from "./QuoteProvider";

export default function FloatingActions() {
  const q = useQuote();
  const [showTop, setShowTop] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!q.open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && q.setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q.open]);

  return (
    <>
      <div className="fabs">
        <button
          type="button"
          className={`fab top${showTop ? " show" : ""}`}
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp size={20} />
        </button>
        {q.count > 0 && (
          <button type="button" className="fab basket" aria-label={`Open quote basket, ${q.count} items`} onClick={() => q.setOpen(true)}>
            <Basket size={22} />
            <span className="count">{q.count}</span>
          </button>
        )}
        <a
          className="fab wa"
          href={waLink("Hi Kalonji Hardware, I need a quote.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <Chat size={26} />
        </a>
      </div>

      {q.open && (
        <div className="drawer-wrap" role="dialog" aria-modal="true" aria-label="Your quote basket">
          <div className="scrim" onClick={() => q.setOpen(false)} />
          <aside className="drawer">
            <header>
              <h2>Your quote</h2>
              <button ref={closeRef} type="button" className="icon-btn" aria-label="Close basket" onClick={() => q.setOpen(false)}>
                <Close size={20} />
              </button>
            </header>

            {q.count === 0 ? (
              <p className="empty">Your basket is empty. Add items from the Departments or Jobs pages.</p>
            ) : (
              <ul className="lines-list">
                {q.items.map(([name, qty]) => (
                  <li key={name}>
                    <span className="nm">{name}</span>
                    <span className="qty">
                      <button type="button" aria-label={`Fewer ${name}`} onClick={() => q.setQty(name, qty - 1)}><Minus size={14} /></button>
                      <b aria-live="polite">{qty}</b>
                      <button type="button" aria-label={`More ${name}`} onClick={() => q.setQty(name, qty + 1)}><Plus size={14} /></button>
                    </span>
                    <button type="button" className="icon-btn" aria-label={`Remove ${name}`} onClick={() => q.remove(name)}>
                      <Trash size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <footer>
              <a className={`btn lg${q.count === 0 ? " disabled" : ""}`} href={q.href} target="_blank" rel="noopener noreferrer" aria-disabled={q.count === 0}>
                <Chat size={20} /> Send quote on WhatsApp
              </a>
              {q.count > 0 && (
                <button type="button" className="clear" onClick={q.clear}>Clear basket</button>
              )}
              <p>Quantities are a guide. We confirm price and availability on WhatsApp.</p>
            </footer>
          </aside>
        </div>
      )}
    </>
  );
}
