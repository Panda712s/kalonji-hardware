import { faqs } from "../data";

export default function Faq() {
  return (
    <div className="faq" data-reveal>
      {faqs.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
