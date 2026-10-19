import Image from "next/image";
import Link from "next/link";
import Counter from "./components/Counter";
import CtaBand from "./components/CtaBand";
import Faq from "./components/Faq";
import { Arrow, Chat, Check, Layers, Pin, Tag, Zap } from "./components/Icons";
import Reviews from "./components/Reviews";
import SearchBox from "./components/SearchBox";
import { branches, brands, categoryCount, EXPORT_MESSAGE, exportCountries, departments, HERO_IMAGE, jobs, mapUrl, services, waLink } from "./data";
import { getStorePhotos } from "./storefront";

const perks = [
  { icon: Layers, title: "Nine departments, one trip", text: "Electrical, plumbing, building, tools, paint, automotive, glass and key cutting, and tiles and cement." },
  { icon: Zap, title: "Quick quotations", text: "Send your list on WhatsApp or bring it to the counter and get a price without the wait." },
  { icon: Tag, title: "Bulk and contractor pricing", text: "Larger orders qualify for better prices. Ask for a bulk quote." },
  { icon: Pin, title: "Two Sunnyside branches", text: "Barclay Square Mall and Ancore Centre, both in Sunnyside, Pretoria." },
];

const steps = [
  { title: "Send your list", text: "Message your items and quantities on WhatsApp, or bring the list to either branch." },
  { title: "Get your quote", text: "We confirm stock and price quickly, with bulk and contractor pricing on larger orders." },
  { title: "Collect and go", text: "Pick everything up in one trip at Barclay Square Mall or Ancore Centre." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src={HERO_IMAGE} alt="" fill priority sizes="100vw" quality={85} className="cover" />
        <div className="shade" />
        <div className="container inner">
          <div className="hero-copy">
            <p className="eyebrow">Sunnyside, Pretoria</p>
            <h1>
              Everything for the job, <em>one counter</em> away.
            </h1>
            <p className="lead">
              Electrical, plumbing, building materials, tiles and cement, tools, paint and automotive supplies, plus glass
              and key cutting. Useful stock, helpful service and quick quotations for homeowners, contractors and businesses.
            </p>
            <div className="acts">
              <a className="btn lg" href={waLink("Hi Kalonji Hardware, I need a quote.")} target="_blank" rel="noopener noreferrer">
                <Chat size={20} /> Get a quote on WhatsApp
              </a>
              <Link className="btn lg ghost-light" href="/departments">
                Browse departments <Arrow size={20} />
              </Link>
            </div>
            <ul className="hero-points">
              <li><Check size={16} /> Stock on the shelf</li>
              <li><Check size={16} /> Quotes in minutes</li>
              <li><Check size={16} /> Bulk pricing</li>
            </ul>
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

      <div className="ticker" aria-hidden="true">
        <div className="track">
          {[0, 1].map((n) => (
            <ul key={n}>
              {departments.map((d) => (
                <li key={d.slug}>{d.name}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <section className="search-band">
        <div className="container">
          <div data-reveal>
            <p className="eyebrow dark">Find it fast</p>
            <h2>What do you need today?</h2>
          </div>
          <SearchBox />
        </div>
      </section>

      <section className="perks">
        <div className="container grid">
          {perks.map((p) => (
            <div className="perk" key={p.title} data-reveal>
              <span className="ico"><p.icon size={22} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="export-band" data-reveal>
        <div className="container inner">
          <div>
            <p className="eyebrow">Important</p>
            <h2>We export to</h2>
            <ul className="countries">
              {exportCountries.map((c) => (
                <li key={c}><Pin size={16} /> {c}</li>
              ))}
            </ul>
            <p>Send your list and the destination country and we will send you an export quote.</p>
          </div>
          <a className="btn lg" href={waLink(EXPORT_MESSAGE)} target="_blank" rel="noopener noreferrer">
            <Chat size={20} /> Request an export quote
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
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
              <Link className="card" key={d.slug} href={`/departments#${d.slug}`} data-reveal>
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
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Services</p>
              <h2>Need it fitted? Ask for a pro.</h2>
            </div>
            <Link className="link-arrow" href="/services">
              About our services <Arrow size={18} />
            </Link>
          </div>
          <div className="svc-grid">
            {services.map((s) => (
              <article className="svc" key={s.slug} data-reveal>
                <Image src={s.image} alt={s.alt} width={800} height={600} sizes="(max-width: 860px) 100vw, 560px" quality={90} />
                <div className="body">
                  <span className="tagline">Available on request</span>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <a className="btn" href={waLink(s.request)} target="_blank" rel="noopener noreferrer">
                    <Chat size={18} /> Request {s.name === "Plumber" ? "a plumber" : "an electrician"}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container grid">
          <div data-reveal><b><Counter to={departments.length} /></b><span>departments under one roof</span></div>
          <div data-reveal><b><Counter to={branches.length} /></b><span>branches in Sunnyside</span></div>
          <div data-reveal><b><Counter to={categoryCount} /></b><span>product categories to quote from</span></div>
          <div data-reveal><b><Counter to={jobs.length} /></b><span>ready-made job lists</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Shop by job</p>
              <h2>Know the job? We know the list.</h2>
            </div>
            <Link className="link-arrow" href="/jobs">
              See all jobs <Arrow size={18} />
            </Link>
          </div>
          <div className="job-grid">
            {jobs.slice(0, 4).map((j) => (
              <Link className="job-tile" key={j.slug} href={`/jobs#${j.slug}`} data-reveal>
                <Image src={j.image} alt={j.alt} width={600} height={450} sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 270px" quality={90} />
                <div className="over">
                  <h3>{j.title}</h3>
                  <span>{j.items.length} items <Arrow size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div className="mosaic" data-reveal>
            {getStorePhotos().map((s, i) => (
              <Image key={s.src} src={s.src} alt={s.alt} width={600} height={800} sizes="(max-width: 980px) 45vw, 280px" quality={90} className={i % 2 ? "down" : ""} />
            ))}
          </div>
          <div data-reveal>
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
          <div className="head" data-reveal>
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
              <li key={b.name} data-reveal>
                <Image src={b.src} alt={b.alt} width={480} height={480} sizes="(max-width: 620px) 45vw, (max-width: 980px) 30vw, 180px" quality={90} />
                <b>{b.name}</b>
                <span>{b.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="trade" data-reveal>
        <div className="container inner">
          <div>
            <p className="eyebrow">For contractors</p>
            <h2>Buying in bulk? Get trade pricing.</h2>
            <p>Tell us what you buy most and the quantities. Larger orders qualify for bulk and contractor pricing.</p>
          </div>
          <Link className="btn lg" href="/contractors">
            Request trade pricing <Arrow size={20} />
          </Link>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head center" data-reveal>
            <div>
              <p className="eyebrow dark">How it works</p>
              <h2>From list to counter in three steps</h2>
            </div>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} data-reveal>
                <span className="n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Reviews />

      <section className="section">
        <div className="container narrow">
          <div className="head center" data-reveal>
            <div>
              <p className="eyebrow dark">Questions</p>
              <h2>Good to know</h2>
            </div>
          </div>
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
