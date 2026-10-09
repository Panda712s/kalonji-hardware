import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../components/PageHero";
import { Chat, Facebook } from "../components/Icons";
import { brands, FACEBOOK_URL, waLink } from "../data";

export const metadata: Metadata = {
  title: "Specials",
  description: "Ask what is on special this week at Kalonji Hardware. Message us on WhatsApp or follow our Facebook page.",
};

const steps = [
  { title: "Message us", text: "Tell us the item or department you are interested in on WhatsApp." },
  { title: "We confirm the price", text: "We reply with today's price and what is in stock." },
  { title: "Collect in store", text: "Pick up at Barclay Square Mall or Ancore Centre." },
];

export default function Specials() {
  return (
    <>
      <PageHero
        eyebrow="Specials"
        title={<>Ask what&rsquo;s <em>on special</em> this week</>}
        text="Current specials change with stock. Message us for today's prices or follow the Facebook page for updates."
      >
        <div className="acts">
          <a className="btn lg" href={waLink("Hi Kalonji Hardware, what specials do you have?")} target="_blank" rel="noopener noreferrer">
            <Chat size={20} /> Ask on WhatsApp
          </a>
          <a className="btn lg ghost-light" href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            <Facebook size={20} /> Follow on Facebook
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow dark">How it works</p>
              <h2>Three simple steps</h2>
            </div>
          </div>
          <div className="values">
            {steps.map((s, i) => (
              <div className="value" key={s.title}>
                <span className="num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow dark">Ask about these</p>
              <h2>Popular brands in store</h2>
            </div>
            <p className="sub">Tap a brand to ask whether there is a special on it.</p>
          </div>
          <ul className="brand-grid">
            {brands.map((b) => (
              <li key={b.name}>
                <a
                  href={waLink(`Hi Kalonji Hardware, do you have any specials on ${b.name}?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={b.src} alt={b.alt} width={480} height={480} sizes="(max-width: 620px) 45vw, (max-width: 980px) 30vw, 180px" quality={90} />
                  <b>{b.name}</b>
                  <span>Ask about {b.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
