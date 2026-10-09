"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, PHONE, PHONE_DISPLAY, waLink } from "../data";
import { Chat, Close, Menu, Phone } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Sunnyside, Pretoria · Two branches</span>
          <a href={`tel:${PHONE}`}>
            <Phone size={14} /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container bar">
          <Link className="logo" href="/" aria-label="Kalonji Hardware, home">
            <span className="mark" aria-hidden="true">K</span>
            <span>
              Kalonji
              <small>Hardware</small>
            </span>
          </Link>

          <nav id="main-nav" className={open ? "open" : ""} aria-label="Main">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
            <a className="btn sm nav-cta" href={waLink("Hi Kalonji Hardware, I need a quote.")} target="_blank" rel="noopener noreferrer">
              <Chat size={16} /> Get a quote
            </a>
          </nav>

          <button
            className="menu-btn"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
