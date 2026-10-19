import type { Metadata } from "next";
import ContractorForm from "../components/ContractorForm";
import { Layers, Tag, Zap } from "../components/Icons";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Contractors",
  description: "Bulk and contractor pricing at Kalonji Hardware. Tell us what you buy and we reply on WhatsApp.",
};

const benefits = [
  { icon: Tag, title: "Bulk and contractor pricing", text: "Larger orders qualify for better prices. Tell us the quantities and we quote." },
  { icon: Layers, title: "Nine departments, one stop", text: "Electrical, plumbing, building, tiles and cement, tools, paint, automotive and more, so one order covers the site." },
  { icon: Zap, title: "Quotes without the wait", text: "Send your list on WhatsApp and we reply with price and availability." },
];

export default function Contractors() {
  return (
    <>
      <PageHero
        eyebrow="Contractors"
        title={<>Trade pricing for <em>bigger orders</em></>}
        text="Electricians, plumbers, builders and businesses. Tell us what you buy and we will quote bulk and contractor pricing."
      />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="head" data-reveal>
              <div>
                <p className="eyebrow dark">Why order with us</p>
                <h2>Built for repeat buyers</h2>
              </div>
            </div>
            <div className="benefits">
              {benefits.map((b) => (
                <div className="benefit" key={b.title} data-reveal>
                  <span className="ico"><b.icon size={22} /></span>
                  <div>
                    <h3>{b.title}</h3>
                    <p>{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContractorForm />
        </div>
      </section>
    </>
  );
}
