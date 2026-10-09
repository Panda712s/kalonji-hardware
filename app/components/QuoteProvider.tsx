"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { waLink } from "../data";

type Basket = Record<string, number>;

type QuoteCtx = {
  items: [string, number][];
  count: number;
  has: (name: string) => boolean;
  toggle: (name: string) => void;
  addMany: (names: string[]) => void;
  setQty: (name: string, qty: number) => void;
  remove: (name: string) => void;
  clear: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  href: string;
};

const Ctx = createContext<QuoteCtx | null>(null);
const KEY = "kh-quote-basket";

export function useQuote() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useQuote must be used inside QuoteProvider");
  return c;
}

export default function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [basket, setBasket] = useState<Basket>({});
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setBasket(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(basket));
    } catch {}
  }, [basket, loaded]);

  const toggle = useCallback((name: string) => {
    setBasket((b) => {
      const next = { ...b };
      if (name in next) delete next[name];
      else next[name] = 1;
      return next;
    });
  }, []);

  const addMany = useCallback((names: string[]) => {
    setBasket((b) => {
      const next = { ...b };
      names.forEach((n) => {
        if (!(n in next)) next[n] = 1;
      });
      return next;
    });
  }, []);

  const setQty = useCallback((name: string, qty: number) => {
    setBasket((b) => {
      const next = { ...b };
      if (qty < 1) delete next[name];
      else next[name] = Math.min(qty, 999);
      return next;
    });
  }, []);

  const remove = useCallback((name: string) => {
    setBasket((b) => {
      const next = { ...b };
      delete next[name];
      return next;
    });
  }, []);

  const clear = useCallback(() => setBasket({}), []);

  const value = useMemo<QuoteCtx>(() => {
    const items = Object.entries(basket);
    const lines = items.map(([n, q]) => `- ${n} x${q}`).join("\n");
    const text = items.length
      ? `Hi Kalonji Hardware, I need a quote for:\n${lines}`
      : "Hi Kalonji Hardware, I need a quote.";
    return {
      items,
      count: items.length,
      has: (n) => n in basket,
      toggle,
      addMany,
      setQty,
      remove,
      clear,
      open,
      setOpen,
      href: waLink(text),
    };
  }, [basket, open, toggle, addMany, setQty, remove, clear]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
