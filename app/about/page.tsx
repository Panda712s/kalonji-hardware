import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import { Arrow, Pin } from "../components/Icons";
import { branches, mapUrl, storePhotos } from "../data";

export const metadata: Metadata = {
  title: "About",
  description: "Kalonji Hardware serves Sunnyside and the wider Pretoria area from two branches, with stock on the shelf and quick quotes.",
};

const values = [
  { title: "Stock on the shelf", text: "Useful, everyday stock for the jobs people actually do, so you leave with what you came for." },
  { title: "Someone who knows where it is", text: "Helpful service at the counter. Tell us the job and we will point you to the right items." },
  { title: "A quote without the wait", text: "Send your list on WhatsApp or bring it in. Larger orders qualify for bulk and contractor pricing." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Trusted hardware for your <em>materials supply</em></>}
        text="Serving homeowners, contractors and businesses across Sunnyside and the wider Pretoria area."
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow dark">Who we are</p>
            <h2>One counter for most of the job</h2>
            <p>
              Kalonji Hardware serves Sunnyside and the wider Pretoria area with the materials people actually need
              to finish a job. Homeowners, contractors and businesses all get the same thing: stock on the shelf,
              someone who knows where it is, and a quote without the wait.
            </p>
            <p>
              We stock six departments side by side, electrical, plumbing, building, tools, paint and automotive, so
              a single trip covers most repairs, renovations and small builds.
            </p>
            <div className="stats" data-reveal>
              <div><b>6</b><span>departments under one roof</span></div>
              <div><b>2</b><span>branches in Sunnyside</span></div>
              <div><b>Quick</b><span>quotes by WhatsApp or in store</span></div>
              <div><b>Bulk</b><span>contractor pricing on request</span></div>
            </div>
          </div>
          <div className="mosaic" data-reveal>
            {storePhotos.map((s, i) => (
              <Image key={s.src} src={s.src} alt={s.alt} width={600} height={800} sizes="(max-width: 980px) 45vw, 280px" quality={90} className={i % 2 ? "down" : ""} />
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">How we work</p>
              <h2>What you can expect</h2>
            </div>
          </div>
          <div className="values">
            {values.map((v, i) => (
              <div className="value" data-reveal key={v.title}>
                <span className="num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Our branches</p>
              <h2>Two places to find us</h2>
            </div>
            <Link className="link-arrow" href="/contact">
              Contact details <Arrow size={18} />
            </Link>
          </div>
          <div className="branches">
            {branches.map((b) => (
              <article className="branch" data-reveal key={b.name}>
                <Image src={b.image} alt={b.imageAlt} width={800} height={450} sizes="(max-width: 620px) 100vw, 560px" quality={90} />
                <div className="body">
                  <span className="eyebrow dark">{b.label}</span>
                  <h3>{b.name}</h3>
                  <address>
                    {b.lines[0]}
                    <br />
                    {b.lines[1]}
                  </address>
                  <a className="btn ghost" href={mapUrl(b.map)} target="_blank" rel="noopener noreferrer">
                    <Pin size={18} /> Open in Maps
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
