import Image from "next/image";
import Link from "next/link";
import CtaBand from "./components/CtaBand";
import { Arrow, Chat, Layers, Pin, Tag, Zap } from "./components/Icons";
import { branches, brands, departments, HERO_IMAGE, mapUrl, storePhotos, waLink } from "./data";

const perks = [
  { icon: Layers, title: "Six departments, one trip", text: "Electrical, plumbing, building, tools, paint and automotive stocked together." },
  { icon: Zap, title: "Quick quotations", text: "Send your list on WhatsApp or bring it to the counter and get a price without the wait." },
  { icon: Tag, title: "Bulk and contractor pricing", text: "Larger orders qualify for better prices. Ask for a bulk quote." },
  { icon: Pin, title: "Two Sunnyside branches", text: "Barclay Square Mall and Ancore Centre, both in Sunnyside, Pretoria." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src={HERO_IMAGE} alt="" fill priority sizes="100vw" quality={85} className="cover" />
        <div className="shade" />
        <div className="container inner">
          <div className="copy">
            <p className="eyebrow">Sunnyside, Pretoria</p>
            <h1>
              Everything for the job, <em>one counter</em> away.
            </h1>
            <p className="lead">
              Electrical, plumbing, building materials, tools, paint and automotive supplies. Useful stock, helpful
              service and quick quotations for homeowners, contractors and businesses.
            </p>
            <div className="acts">
              <a className="btn lg" href={waLink("Hi Kalonji Hardware, I need a quote.")} target="_blank" rel="noopener noreferrer">
                <Chat size={20} /> Get a quote on WhatsApp
              </a>
              <Link className="btn lg ghost-light" href="/departments">
                Browse departments <Arrow size={20} />
              </Link>
            </div>
          </div>

          <aside className="visit" aria-label="Our branches">
            <h2>Visit a branch</h2>
            {branches.map((b) => (
              <div className="row" key={b.name}>
                <span className="pin"><Pin size={18} /></span>
                <div>
                  <b>{b.name}</b>
                  <span>{b.lines[0]}</span>
                  <a href={mapUrl(b.map)} target="_blank" rel="noopener noreferrer">Open in Maps</a>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="perks">
        <div className="container grid">
          {perks.map((p) => (
            <div className="perk" key={p.title}>
              <span className="ico"><p.icon size={22} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow dark">What we stock</p>
              <h2>Shop by department</h2>
            </div>
            <Link className="link-arrow" href="/departments">
              See all departments <Arrow size={18} />
            </Link>
          </div>
          <div className="cards">
            {departments.map((d) => (
              <Link className="card" key={d.slug} href={`/departments#${d.slug}`}>
                <div className="media">
                  <Image src={d.image} alt={d.alt} width={800} height={600} sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 380px" quality={90} />
                  <span className="badge">Aisle {d.code}</span>
                </div>
                <div className="body">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                  <span className="more">Explore {d.name.toLowerCase()} <Arrow size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div className="mosaic">
            {storePhotos.map((s, i) => (
              <Image key={s.src} src={s.src} alt={s.alt} width={600} height={800} sizes="(max-width: 980px) 45vw, 280px" quality={90} className={i % 2 ? "down" : ""} />
            ))}
          </div>
          <div>
            <p className="eyebrow dark">About Kalonji Hardware</p>
            <h2>Trusted hardware for your materials supply</h2>
            <p>
              Kalonji Hardware serves Sunnyside and the wider Pretoria area with the materials people actually need
              to finish a job. Homeowners, contractors and businesses all get the same thing: stock on the shelf,
              someone who knows where it is, and a quote without the wait.
            </p>
            <ul className="ticks">
              <li>Stock for repairs, renovations and new builds</li>
              <li>Helpful staff who know where everything is</li>
              <li>Quotes by WhatsApp or at the counter</li>
            </ul>
            <Link className="btn dark" href="/about">
              Learn more about us <Arrow size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow dark">Brands on our shelves</p>
              <h2>Trusted names, in stock</h2>
            </div>
            <Link className="link-arrow" href="/products">
              Browse products <Arrow size={18} />
            </Link>
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

      <CtaBand />
    </>
  );
}
