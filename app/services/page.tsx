import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "../components/CtaBand";
import Faq from "../components/Faq";
import { Chat } from "../components/Icons";
import PageHero from "../components/PageHero";
import { services, waLink } from "../data";

export const metadata: Metadata = {
  title: "Services",
  description: "A plumber and an electrician are available on request from Kalonji Hardware. Message us with the job and where it is.",
};

const inHouse = [
  { title: "Glass cutting", tag: "In store", text: "Need glass for a window, shelf, tabletop or mirror? Send us the measurements for a quote.", request: "Hi Kalonji Hardware, I need glass cut. The size is:" },
  { title: "Key cutting", tag: "In store", text: "Get a spare key cut for a door, padlock or cupboard. Bring the original key into the store.", request: "Hi Kalonji Hardware, I need a key cut. The key is:" },
];

const comingSoon = [
  { title: "Paint manufacturing", tag: "Coming soon", text: "Yes, we will manufacture our own paint in the future as well. Ask us for updates.", request: "Hi Kalonji Hardware, I would like to know more about your paint manufacturing." },
];

const steps = [
  { title: "Message us", text: "Tell us on WhatsApp what work you need and where the job is." },
  { title: "We arrange it", text: "We help arrange a plumber or electrician for your job." },
  { title: "Get it fixed", text: "Pick up any materials you need from either branch." },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>A plumber or electrician, <em>on request</em></>}
        text="Need the job done as well as the materials? Ask us and we will arrange a plumber or an electrician."
      />

      <section className="section">
        <div className="container">
          <div className="svc-grid big">
            {services.map((s) => (
              <article className="svc" key={s.slug} id={s.slug} data-reveal>
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
            {inHouse.map((s) => (
              <article className="svc svc-text" key={s.title} data-reveal>
                <div className="body">
                  <span className="tagline">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <a className="btn" href={waLink(s.request)} target="_blank" rel="noopener noreferrer">
                    <Chat size={18} /> Ask about {s.title.toLowerCase()}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">Coming soon</p>
              <h2>Paint manufacturing</h2>
            </div>
          </div>
          <div className="values">
            {comingSoon.map((s) => (
              <div className="value" data-reveal key={s.title}>
                <span className="tagline">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a className="btn" href={waLink(s.request)} target="_blank" rel="noopener noreferrer">
                  <Chat size={18} /> Ask on WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head" data-reveal>
            <div>
              <p className="eyebrow dark">How it works</p>
              <h2>Three simple steps</h2>
            </div>
          </div>
          <div className="values">
            {steps.map((s, i) => (
              <div className="value" data-reveal key={s.title}>
                <span className="num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <CtaBand title="Need materials for the job too?" text="Send your list and we will quote it with your service request." />
    </>
  );
}
