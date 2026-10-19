"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EXPORT_MESSAGE, exportCountries, nav, PHONE, PHONE_DISPLAY, waLink } from "../data";
import { Arrow, Chat, Close, Menu, Phone } from "./Icons";
import OpenNow from "./OpenNow";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="announce" role="region" aria-label="Export notice">
        <div className="container">
          <span>
            <b>We export to</b> {exportCountries.join(" · ")}
          </span>
          <a href={waLink(EXPORT_MESSAGE)} target="_blank" rel="noopener noreferrer">
            Get an export quote <Arrow size={14} />
          </a>
        </div>
      </div>
      <div className="topbar">
        <div className="container">
          <span className="left">Sunnyside, Pretoria · Two branches <OpenNow /></span>
          <a href={`tel:${PHONE}`}>
            <Phone size={14} /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container bar">
          <Link className="logo" href="/" aria-label="Kalonji Hardware, home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="on-light" src="/brand/logo.svg" alt="Kalonji Hardware" width={340} height={100} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="on-dark" src="/brand/logo-light.svg" alt="" aria-hidden="true" width={340} height={100} />
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

          <ThemeToggle />
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
