import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "../components/CtaBand";
import Gallery from "../components/Gallery";
import PageHero from "../components/PageHero";
import { brands } from "../data";

export const metadata: Metadata = {
  title: "Products",
  description: "Brands and products on the shelves at Kalonji Hardware: paint, batteries, oil, tools, plumbing, electrical and household supplies.",
};

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Real stock, <em>real shelves</em></>}
        text="A look at what is on the shelves, from paint and batteries to tools, plumbing and household supplies."
      />

      <section className="section">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow dark">Brands</p>
              <h2>Trusted names, in stock</h2>
            </div>
            <p className="sub">A selection of the brands we carry. Ask in store for the full range.</p>
          </div>
          <ul className="brand-grid">
            {brands.map((b) => (
              <li key={b.name}>
                <Image src={b.src} alt={b.alt} width={480} height={480} sizes="(max-width: 620px) 45vw, (max-width: 980px) 30vw, 180px" quality={90} />
                <b>{b.name}</b>
                <span>{b.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow dark">Gallery</p>
              <h2>Browse the shelves</h2>
            </div>
            <p className="sub">Filter by category. Stock and prices change, so message us to confirm availability.</p>
          </div>
          <Gallery />
        </div>
      </section>

      <CtaBand title="Looking for something specific?" text="Tell us what you need and we will confirm stock and price on WhatsApp." />
    </>
  );
}
