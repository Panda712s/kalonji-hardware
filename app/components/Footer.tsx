import Link from "next/link";
import { branches, departments, exportCountries, FACEBOOK_URL, nav, PHONE, PHONE_DISPLAY, waLink, WHATSAPP_DISPLAY } from "../data";
import { Facebook } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <div>
          <Link className="logo" href="/" aria-label="Kalonji Hardware, home">
            <span className="mark" aria-hidden="true">K</span>
            <span>
              Kalonji
              <small>Hardware</small>
            </span>
          </Link>
          <p className="blurb">
            Electrical, plumbing, building materials, tiles and cement, tools, paint, automotive supplies, glass and
            key cutting for Sunnyside and the wider Pretoria area.
          </p>
          <p className="exporting"><b>Exporting to</b> {exportCountries.join(", ")}</p>
          <a className="social" href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            <Facebook size={18} /> Follow us on Facebook
          </a>
        </div>

        <div>
          <h4>Pages</h4>
          <ul>
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
            ))}
            <li><Link href="/contractors">Contractors</Link></li>
          </ul>
        </div>

        <div>
          <h4>Departments</h4>
          <ul>
            {departments.map((d) => (
              <li key={d.slug}><Link href={`/departments#${d.slug}`}>{d.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Visit or call</h4>
          <ul>
            {branches.map((b) => (
              <li key={b.name}>
                <b>{b.name}</b>
                <br />
                {b.lines[0]}
              </li>
            ))}
            <li><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></li>
            <li><a href={waLink("Hi Kalonji Hardware")} target="_blank" rel="noopener noreferrer">WhatsApp {WHATSAPP_DISPLAY}</a></li>
          </ul>
        </div>
      </div>
      <div className="container legal">
        <span>© {new Date().getFullYear()} Kalonji Hardware, Sunnyside, Pretoria</span>
        <span>
          Stock photos from{" "}
          <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
          {" "}· hero photo by Anton Savinov
        </span>
      </div>
    </footer>
  );
}
