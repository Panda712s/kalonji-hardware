"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gallery, galleryCategories } from "../gallery";
import { Close, Left, Right } from "./Icons";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const shown = active === "All" ? gallery : gallery.filter((g) => g.category === active);

  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, step]);

  const current = index === null ? null : shown[index];

  return (
    <>
      <div className="filters" role="group" aria-label="Filter photos by category">
        {["All", ...galleryCategories].map((c) => (
          <button key={c} type="button" aria-pressed={active === c} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="masonry">
        {shown.map((g, i) => (
          <figure key={g.src}>
            <button type="button" className="zoom" aria-label={`View larger: ${g.alt}`} onClick={() => setIndex(i)}>
              <Image
                src={g.src}
                alt={g.alt}
                width={g.w}
                height={g.h}
                sizes="(max-width: 620px) 50vw, (max-width: 980px) 33vw, 280px"
                quality={90}
              />
            </button>
            <figcaption>{g.alt}</figcaption>
          </figure>
        ))}
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
          <div className="scrim" onClick={() => setIndex(null)} />
          <button ref={closeRef} type="button" className="lb-btn close" aria-label="Close viewer" onClick={() => setIndex(null)}>
            <Close size={22} />
          </button>
          <button type="button" className="lb-btn prev" aria-label="Previous photo" onClick={() => step(-1)}>
            <Left size={24} />
          </button>
          <figure className="stage">
            <Image src={current.src} alt={current.alt} width={current.w} height={current.h} sizes="90vw" quality={90} priority />
            <figcaption>
              {current.alt} <span>{(index ?? 0) + 1} / {shown.length}</span>
            </figcaption>
          </figure>
          <button type="button" className="lb-btn next" aria-label="Next photo" onClick={() => step(1)}>
            <Right size={24} />
          </button>
        </div>
      )}
    </>
  );
}
