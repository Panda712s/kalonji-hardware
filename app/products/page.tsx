import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "../components/CtaBand";
import Gallery from "../components/Gallery";
import PageHero from "../components/PageHero";
import { airFresh, airScents, appliances, autoParts, bathroom, batteries, bleachToilet, bollards, brands, bulbs, carKeys, carShine, carWash, carWorkshop, ceilingLights, centurion, chandeliers, clamps, cleaners, compressionFittings, copperWire, cylinders, doorClosers, doorHandles, drainCleaners, fans, floodSolar, gardenSpots, gasSupplies, generators, hardware, household, lamps, latchesGates, laundry, mortiseLocks, outdoorWall, padlocks, plasconRange, powerTools, promacRange, range, repair, roofing, safety, sheenFloor, sheenKitchen, steelFittings, terminals, tiles, tilesCement, valves, waLink, wheelCovers, yaleAccess, yaleHandleSets, yaleHinges, yaleLocks, yalePadlocks, yaleSafes, yaleSliding, yaleSmart } from "../data";

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
              <p className="eyebrow dark">Fans</p>
              <h2>Fans and heaters</h2>
            </div>
            <p className="sub">Box, table, wall, ceiling and extractor fans. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {fans.map((r) => (
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
              <p className="eyebrow dark">Wire</p>
              <h2>Copper wire</h2>
            </div>
            <p className="sub">Enamelled winding wire on spools and reels. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {copperWire.map((r) => (
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
              <p className="eyebrow dark">Bulbs</p>
              <h2>Light bulbs</h2>
            </div>
            <p className="sub">LED, CFL, oven and heat lamps. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {lamps.map((r) => (
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
              <p className="eyebrow dark">Outdoor lighting</p>
              <h2>Floodlights, solar and string lights</h2>
            </div>
            <p className="sub">Floodlights, solar lights, lanterns and party string lights. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {floodSolar.map((r) => (
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
              <p className="eyebrow dark">Garden lighting</p>
              <h2>Lamp posts and bollards</h2>
            </div>
            <p className="sub">Garden and driveway posts, bollards and globe lights. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {bollards.map((r) => (
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
              <p className="eyebrow dark">Wall lights</p>
              <h2>Outdoor wall lights and bulkheads</h2>
            </div>
            <p className="sub">Bulkheads, wall lanterns and hanging lanterns. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {outdoorWall.map((r) => (
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
              <p className="eyebrow dark">Spotlights</p>
              <h2>Garden spike and in-ground lights</h2>
            </div>
            <p className="sub">Spike lights, in-ground lights and spotlights. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {gardenSpots.map((r) => (
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
              <p className="eyebrow dark">Ceiling lights</p>
              <h2>Ceiling lights and downlights</h2>
            </div>
            <p className="sub">Flush ceiling lights, LED battens and downlights. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {ceilingLights.map((r) => (
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
              <p className="eyebrow dark">Chandeliers</p>
              <h2>Chandeliers</h2>
            </div>
            <p className="sub">Crystal and candle-style chandeliers. Ask us for stock and prices.</p>
          </div>
          <ul className="range-grid">
            {chandeliers.map((r) => (
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
              <p className="eyebrow dark">Padlocks</p>
              <h2>Padlocks</h2>
            </div>
            <p className="sub">Brass, steel, stainless, weatherproof and combination padlocks. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {padlocks.map((r) => (
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
              <p className="eyebrow dark">Locks</p>
              <h2>Mortice locks, deadbolts and rim locks</h2>
            </div>
            <p className="sub">Mortice locks, rim locks, deadbolts and knob sets for house doors. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {mortiseLocks.map((r) => (
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
              <p className="eyebrow dark">Locks</p>
              <h2>Night latches and gate locks</h2>
            </div>
            <p className="sub">Night latches, gate locks and sliding bolt locks. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {latchesGates.map((r) => (
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
              <p className="eyebrow dark">Cylinders</p>
              <h2>Cylinders and keys</h2>
            </div>
            <p className="sub">Euro cylinders and key blanks. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {cylinders.map((r) => (
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
              <p className="eyebrow dark">Door handles</p>
              <h2>Door handles</h2>
            </div>
            <p className="sub">Lever handles on rose or plate, with or without lock sets. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {doorHandles.map((r) => (
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
              <p className="eyebrow dark">Door closers</p>
              <h2>Door closers</h2>
            </div>
            <p className="sub">Overhead door closers in different sizes. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {doorClosers.map((r) => (
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
              <p className="eyebrow dark">Car keys</p>
              <h2>Car keys and remote shells</h2>
            </div>
            <p className="sub">Flip keys, remote key shells and key blades. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {carKeys.map((r) => (
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
              <p className="eyebrow dark">Cleaning</p>
              <h2>Surface, kitchen and floor cleaners</h2>
            </div>
            <p className="sub">Cream cleaners, oven cleaners, polishes, dishwashing liquid and floor cleaners. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {cleaners.map((r) => (
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
              <p className="eyebrow dark">Bleach</p>
              <h2>Bleach and toilet care</h2>
            </div>
            <p className="sub">Multipurpose bleach, thick bleach and toilet cleaners. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {bleachToilet.map((r) => (
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
              <p className="eyebrow dark">Laundry</p>
              <h2>Laundry</h2>
            </div>
            <p className="sub">Washing powders, fabric conditioners, stain remover and soap. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {laundry.map((r) => (
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
              <p className="eyebrow dark">Air fresheners</p>
              <h2>Air fresheners and insect killer</h2>
            </div>
            <p className="sub">Aerosol air fresheners and multi-insect killer. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {airFresh.map((r) => (
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
              <p className="eyebrow dark">Household</p>
              <h2>Household supplies</h2>
            </div>
            <p className="sub">Batteries, refuse bags, gloves and a wheelie bin. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {household.map((r) => (
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
              <p className="eyebrow dark">Car wash</p>
              <h2>Car wash and microfibre cloths</h2>
            </div>
            <p className="sub">Shield snow foam, car shampoos, wash mitts and microfibre cloths. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {carWash.map((r) => (
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
              <p className="eyebrow dark">Car shine</p>
              <h2>Car polish, tyre shine and interior care</h2>
            </div>
            <p className="sub">Tyre shine, dashboard care, ceramic sprays and compounding liquid. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {carShine.map((r) => (
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
              <p className="eyebrow dark">Workshop</p>
              <h2>Engine care and workshop chemicals</h2>
            </div>
            <p className="sub">Degreasers, engine and fuel treatments, carb and brake cleaner, lubricant. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {carWorkshop.map((r) => (
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
              <p className="eyebrow dark">Mr Sheen</p>
              <h2>Mr Sheen kitchen and surface cleaners</h2>
            </div>
            <p className="sub">Daily surface, kitchen, mould and oven cleaners, dishwashing liquid and rinse aid. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {sheenKitchen.map((r) => (
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
              <p className="eyebrow dark">Mr Sheen</p>
              <h2>Mr Sheen pine gel, floor cleaner and value packs</h2>
            </div>
            <p className="sub">Pine gel, tile cleaner, disinfecting fluid and bundle packs. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {sheenFloor.map((r) => (
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
              <p className="eyebrow dark">Drains</p>
              <h2>Drain unblockers</h2>
            </div>
            <p className="sub">Mr Plumber granules, liquid and power blast. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {drainCleaners.map((r) => (
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
              <p className="eyebrow dark">Air fresheners</p>
              <h2>Air Scents air fresheners</h2>
            </div>
            <p className="sub">Automatic sprays, plug-in style holders, refills and reed diffusers. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {airScents.map((r) => (
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
              <p className="eyebrow dark">Padlocks</p>
              <h2>Yale padlocks</h2>
            </div>
            <p className="sub">Brass, steel, laminated, closed shackle, weatherproof, shutter, disc and combination padlocks. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {yalePadlocks.map((r) => (
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
              <p className="eyebrow dark">Safes</p>
              <h2>Yale safes and key cabinets</h2>
            </div>
            <p className="sub">Digital and fingerprint safes, laptop and deposit safes, key safes and key cabinets. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {yaleSafes.map((r) => (
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
              <p className="eyebrow dark">Smart locks</p>
              <h2>Yale smart locks and alarms</h2>
            </div>
            <p className="sub">Keypad and app-controlled door locks, door sensors and smart home parts. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {yaleSmart.map((r) => (
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
              <p className="eyebrow dark">Handle sets</p>
              <h2>Yale lock and handle sets</h2>
            </div>
            <p className="sub">Door handles on plates with mortice locks, keys and strike plates. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {yaleHandleSets.map((r) => (
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
              <p className="eyebrow dark">Door locks</p>
              <h2>Yale mortice locks, night latches and deadbolts</h2>
            </div>
            <p className="sub">Mortice locks, deadlocks, night latches, knob sets, deadbolts and push-button locks. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {yaleLocks.map((r) => (
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
              <p className="eyebrow dark">Sliding and gate</p>
              <h2>Yale sliding door, window and gate locks</h2>
            </div>
            <p className="sub">Hook locks, sliding window locks, gate locks and sliding door parts. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {yaleSliding.map((r) => (
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
              <p className="eyebrow dark">Hinges</p>
              <h2>Yale hinges and door fittings</h2>
            </div>
            <p className="sub">Flush and ball bearing hinges, door stops, toilet indicator bolts and lock lubricant. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {yaleHinges.map((r) => (
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
              <p className="eyebrow dark">Access</p>
              <h2>Yale door closers, magnetic locks and doorbells</h2>
            </div>
            <p className="sub">Door closers, electric and magnetic locks, strikes and wireless doorbells. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {yaleAccess.map((r) => (
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
              <p className="eyebrow dark">Gate automation</p>
              <h2>Gate motors, remotes and accessories</h2>
            </div>
            <p className="sub">Centurion and Gemini gate motors, garage door operators, remotes, traffic barriers, safety beams, gate locks and spares. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {centurion.map((r) => (
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
              <p className="eyebrow dark">Tiles</p>
              <h2>Floor and wall tiles</h2>
            </div>
            <p className="sub">Marble-look, concrete-look, stone-look and plain tiles, self-adhesive marble tiles and interlocking PVC floor tiles. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {tiles.map((r) => (
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
              <p className="eyebrow dark">Clamps</p>
              <h2>Clamps</h2>
            </div>
            <p className="sub">Spring clamps, G-clamps, corner clamps, bar clamps and F-clamps. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {clamps.map((r) => (
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
              <p className="eyebrow dark">Roof fixings</p>
              <h2>Roof fixings and building boards</h2>
            </div>
            <p className="sub">SafeTop roof screws, washers and coach screws, steel studs and building boards. Ask us for sizes, stock and prices.</p>
          </div>
          <ul className="range-grid">
            {roofing.map((r) => (
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
