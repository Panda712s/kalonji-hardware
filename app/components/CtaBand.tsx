import Link from "next/link";
import { waLink } from "../data";
import { Arrow, Chat } from "./Icons";

export default function CtaBand({
  title = "Need a quote? Send us your list.",
  text = "Message your items and quantities on WhatsApp or bring the list to either branch. Bulk and contractor pricing on larger orders.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="acts">
          <a className="btn" href={waLink("Hi Kalonji Hardware, I need a quote.")} target="_blank" rel="noopener noreferrer">
            <Chat size={18} /> Quote on WhatsApp
          </a>
          <Link className="btn ghost-light" href="/contact">
            Find a branch <Arrow size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
