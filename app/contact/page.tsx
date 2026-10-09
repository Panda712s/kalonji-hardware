import type { Metadata } from "next";
import Image from "next/image";
import CopyButton from "../components/CopyButton";
import PageHero from "../components/PageHero";
import QuoteForm from "../components/QuoteForm";
import { Chat, Phone, Pin } from "../components/Icons";
import { branches, mapEmbed, mapUrl, PHONE, PHONE_DISPLAY, WHATSAPP, WHATSAPP_DISPLAY } from "../data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get a quote on WhatsApp, call us, or visit Kalonji Hardware at Barclay Square Mall or Ancore Centre in Sunnyside, Pretoria.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Get a quote or <em>find a branch</em></>}
        text="List what you need and we reply on WhatsApp. Or call, or walk in at either Sunnyside branch."
      />

      <section className="section">
        <div className="container contact-grid">
          <QuoteForm />

          <div className="contact-side">
            <div className="line">
              <span className="ico"><Phone size={22} /></span>
              <div>
                <span className="label">Phone</span>
                <b><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></b>
              </div>
              <CopyButton value={PHONE_DISPLAY} />
            </div>
            <div className="line">
              <span className="ico"><Chat size={22} /></span>
              <div>
                <span className="label">WhatsApp</span>
                <b><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a></b>
              </div>
              <CopyButton value={WHATSAPP_DISPLAY} />
            </div>
            <p className="hint">
              Bulk and contractor pricing is available on larger orders. Mention the quantities in your message.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow dark">Branches</p>
              <h2>Two branches in Sunnyside</h2>
            </div>
            <p className="sub">Call, message or walk in.</p>
          </div>
          <div className="branches">
            {branches.map((b) => (
              <article className="branch" key={b.name}>
                <Image src={b.image} alt={b.imageAlt} width={800} height={450} sizes="(max-width: 620px) 100vw, 560px" quality={90} />
                <div className="body">
                  <span className="eyebrow dark">{b.label}</span>
                  <h3>{b.name}</h3>
                  <address>
                    {b.lines[0]}
                    <br />
                    {b.lines[1]}
                  </address>
                  <iframe
                    title={`Map of ${b.name}`}
                    src={mapEmbed(b.map)}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <a className="btn ghost" href={mapUrl(b.map)} target="_blank" rel="noopener noreferrer">
                    <Pin size={18} /> Open in Maps
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
