import { GOOGLE_REVIEWS_URL, reviews } from "../data";

/** Real reviews only. Renders nothing until reviews or GOOGLE_REVIEWS_URL are added in data.ts. */
export default function Reviews() {
  if (reviews.length === 0 && !GOOGLE_REVIEWS_URL) return null;
  return (
    <section className="section alt">
      <div className="container">
        <div className="head" data-reveal>
          <div>
            <p className="eyebrow dark">Customers</p>
            <h2>What people say</h2>
          </div>
          {GOOGLE_REVIEWS_URL && (
            <a className="link-arrow" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Leave us a review
            </a>
          )}
        </div>
        {reviews.length > 0 && (
          <div className="values">
            {reviews.map((r) => (
              <figure className="value review" key={r.name} data-reveal>
                <blockquote>“{r.text}”</blockquote>
                <figcaption>{r.name}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
