import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import { Chat, Check } from "../components/Icons";
import { departments, waLink } from "../data";

export const metadata: Metadata = {
  title: "Departments",
  description: "Electrical, plumbing, building, tools, paint and automotive supplies, all under one roof in Sunnyside, Pretoria.",
};

export default function Departments() {
  return (
    <>
      <PageHero
        eyebrow="Departments"
        title={<>Six departments, <em>one trip</em></>}
        text="The core of most jobs, stocked in one place so you make one trip instead of three."
      >
        <ul className="pills">
          {departments.map((d) => (
            <li key={d.slug}><a href={`#${d.slug}`}>{d.name}</a></li>
          ))}
        </ul>
      </PageHero>

      {departments.map((d, i) => (
        <section className={`section dept-row${i % 2 ? " alt" : ""}`} id={d.slug} key={d.slug}>
          <div className={`container split${i % 2 ? " flip" : ""}`}>
            <div className="pair">
              <Image src={d.image} alt={d.alt} width={800} height={600} sizes="(max-width: 980px) 90vw, 360px" quality={90} />
              <Image src={d.image2} alt={d.alt2} width={800} height={600} sizes="(max-width: 980px) 90vw, 360px" quality={90} />
            </div>
            <div>
              <p className="eyebrow dark">Aisle {d.code}</p>
              <h2>{d.name}</h2>
              <p>{d.text}</p>
              <ul className="ticks two">
                {d.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <a
                className="btn"
                href={waLink(`Hi Kalonji Hardware, I need a quote for ${d.name.toLowerCase()} supplies.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Chat size={18} /> Quote {d.name.toLowerCase()}
              </a>
            </div>
          </div>
        </section>
      ))}

      <section className="note">
        <div className="container">
          <Check size={20} />
          <p>
            Stock changes through the week. Message us to confirm an item, size or quantity before you travel.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
