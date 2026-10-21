import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "../components/CtaBand";
import Gallery from "../components/Gallery";
import PageHero from "../components/PageHero";
import { appliances, autoParts, bathroom, batteries, brands, bulbs, compressionFittings, gasSupplies, generators, hardware, plasconRange, powerTools, promacRange, range, repair, safety, steelFittings, terminals, tilesCement, valves, waLink, wheelCovers } from "../data";

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
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Brands</p>
              <h2>Trusted names, in stock</h2>
            </div>
            <p className="sub">A selection of the brands we carry. Ask in store for the full range.</p>
          </div>
          <ul className="brand-grid">
            {brands.map((b) => (
              <li key={b.src} data-reveal>
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
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Promac paints</p>
              <h2>Promac paint range</h2>
            </div>
            <p className="sub">Part of the Promac range. Ask us what is in stock.</p>
          </div>
          <ul className="range-grid promac">
            {promacRange.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name}? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Plascon paints</p>
              <h2>Plascon paint range</h2>
            </div>
            <p className="sub">Paints, primers and wood care from Plascon. Ask us what is in stock.</p>
          </div>
          <ul className="range-grid plascon">
            {plasconRange.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have Plascon ${r.name}? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={500} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Plumbing</p>
              <h2>Plumbing and fittings</h2>
            </div>
            <p className="sub">A selection of fittings and plumbing items. Ask us for sizes and prices.</p>
          </div>
          <ul className="range-grid">
            {range.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name}? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Valves and taps</p>
              <h2>Valves, taps and spares</h2>
            </div>
            <p className="sub">Valves, taps and replacement parts. Ask us for sizes and prices.</p>
          </div>
          <ul className="range-grid">
            {valves.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name}? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Bathroom</p>
              <h2>Bathroom and sanitaryware</h2>
            </div>
            <p className="sub">Toilets, basins and cistern fittings. Ask us for sizes, colours and prices.</p>
          </div>
          <ul className="range-grid">
            {bathroom.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have a ${r.name.toLowerCase()} (${r.note.toLowerCase()})? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Hardware</p>
              <h2>Hardware and tools</h2>
            </div>
            <p className="sub">A selection of everyday hardware. Ask us for sizes and prices.</p>
          </div>
          <ul className="range-grid">
            {hardware.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name}? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Batteries</p>
              <h2>Car and motorcycle batteries</h2>
            </div>
            <p className="sub">Ask us for sizes, availability and prices.</p>
          </div>
          <ul className="range-grid batteries">
            {batteries.map((b) => (
              <li key={b.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have the ${b.name} battery? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={b.src} alt={b.alt} width={400} height={240} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 24vw, 160px" quality={90} />
                  <b>{b.name}</b>
                  <span>{b.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Glues and repair</p>
              <h2>Adhesives, fillers and degreasers</h2>
            </div>
            <p className="sub">Ask us what suits your repair, and for sizes and prices.</p>
          </div>
          <ul className="range-grid repair">
            {repair.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name}? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={r.w} height={r.h} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Auto spares</p>
              <h2>Car spares and accessories</h2>
            </div>
            <p className="sub">Brakes, clutch, carburettors, electrical and body parts. Tell us the make, model and year when you ask.</p>
          </div>
          <ul className="range-grid">
            {autoParts.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name}? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Bulbs</p>
              <h2>Vehicle bulbs</h2>
            </div>
            <p className="sub">Single and double contact bulbs. Ask us for the wattage and fitting you need.</p>
          </div>
          <ul className="range-grid">
            {bulbs.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name}? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Terminals</p>
              <h2>Electrical terminals</h2>
            </div>
            <p className="sub">Insulated and brass crimp terminals. Ask us for sizes and prices.</p>
          </div>
          <ul className="range-grid">
            {terminals.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name}? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Wheel covers</p>
              <h2>Wheel covers</h2>
            </div>
            <p className="sub">Silver and black wheel covers with a choice of designs. Ask us for your size.</p>
          </div>
          <ul className="range-grid">
            {wheelCovers.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name}? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Power tools</p>
              <h2>Power tools and garden machines</h2>
            </div>
            <p className="sub">Drills, grinders, saws, welders and lawnmowers. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {powerTools.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have the ${r.name} (${r.note.toLowerCase()})? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Generators</p>
              <h2>Generators and backup power</h2>
            </div>
            <p className="sub">Petrol and inverter generators, power stations and battery backup. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {generators.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have the ${r.name} (${r.note.toLowerCase()})? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Appliances</p>
              <h2>Appliances and refrigerant gas</h2>
            </div>
            <p className="sub">Cooking, cooling, laundry and small appliances, plus R600a gas. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {appliances.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have the ${r.name} (${r.note.toLowerCase()})? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Safety</p>
              <h2>Safety gear and workwear</h2>
            </div>
            <p className="sub">Gloves, boots, face shields, rain suits and hi-vis. Ask us for sizes and prices.</p>
          </div>
          <ul className="range-grid">
            {safety.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have the ${r.name} (${r.note.toLowerCase()})? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Compression fittings</p>
              <h2>Brass compression fittings</h2>
            </div>
            <p className="sub">Couplings, tees, elbows and connectors. Ask us for the pipe size you need.</p>
          </div>
          <ul className="range-grid">
            {compressionFittings.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name} (${r.note.toLowerCase()})? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Pipe fittings</p>
              <h2>Galvanised and steel fittings</h2>
            </div>
            <p className="sub">Nipples, elbows, tees, unions, sockets and clamps. Ask us for sizes and prices.</p>
          </div>
          <ul className="range-grid">
            {steelFittings.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name} (${r.note.toLowerCase()})? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Gas</p>
              <h2>Gas supplies</h2>
            </div>
            <p className="sub">Gas cartridges, refills, regulators and fittings. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {gasSupplies.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name} (${r.note.toLowerCase()})? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Tiles and cement</p>
              <h2>Cement, tile adhesive and grout</h2>
            </div>
            <p className="sub">Mortar, cement, tile adhesives, grouts and waterproofing. Ask us for sizes and prices.</p>
          </div>
          <ul className="range-grid">
            {tilesCement.map((r) => (
              <li key={r.src} data-reveal>
                <a href={waLink(`Hi Kalonji Hardware, do you have ${r.name} (${r.note.toLowerCase()})? Price please.`)} target="_blank" rel="noopener noreferrer">
                  <Image src={r.src} alt={r.alt} width={400} height={400} sizes="(max-width: 620px) 45vw, (max-width: 1020px) 30vw, 180px" quality={90} />
                  <b>{r.name}</b>
                  <span>{r.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head" data-reveal>
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
