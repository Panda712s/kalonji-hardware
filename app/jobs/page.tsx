import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "../components/CtaBand";
import { AddAllButton, ItemList } from "../components/ItemList";
import { Chat } from "../components/Icons";
import PageHero from "../components/PageHero";
import { jobs, waLink } from "../data";

export const metadata: Metadata = {
  title: "Shop by Job",
  description: "Ready-made item lists for common jobs: fix a leak, paint a room, wire a plug point, build a wall and more. Add them to a quote in one tap.",
};

export default function Jobs() {
  return (
    <>
      <PageHero
        eyebrow="Jobs"
        title={<>Know the job? <em>We know the list.</em></>}
        text="Pick a job, tick what you need and send one quote on WhatsApp. Quantities are confirmed with you."
      >
        <ul className="pills">
          {jobs.map((j) => (
            <li key={j.slug}><a href={`#${j.slug}`}>{j.title}</a></li>
          ))}
        </ul>
      </PageHero>

      {jobs.map((j, i) => (
        <section className={`section job-row${i % 2 ? " alt" : ""}`} id={j.slug} key={j.slug}>
          <div className={`container split${i % 2 ? " flip" : ""}`}>
            <div className="job-photo" data-reveal>
              <Image src={j.image} alt={j.alt} width={800} height={600} sizes="(max-width: 980px) 90vw, 480px" quality={90} />
            </div>
            <div data-reveal>
              <p className="eyebrow dark">Job {String(i + 1).padStart(2, "0")}</p>
              <h2>{j.title}</h2>
              <p>{j.blurb}</p>
              <ItemList items={j.items} />
              <div className="acts tight">
                <AddAllButton items={j.items} />
                <a
                  className="btn"
                  href={waLink(`Hi Kalonji Hardware, I need a quote for this job: ${j.title}.\nItems:\n${j.items.map((x) => `- ${x}`).join("\n")}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Chat size={18} /> Quote this job
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaBand title="Job not on the list?" text="Describe it on WhatsApp and we will point you to the right items." />
    </>
  );
}
