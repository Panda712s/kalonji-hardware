"use client";

import Image from "next/image";
import { useState } from "react";
import { gallery, galleryCategories } from "../gallery";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? gallery : gallery.filter((g) => g.category === active);

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
        {shown.map((g) => (
          <figure key={g.src}>
            <Image
              src={g.src}
              alt={g.alt}
              width={g.w}
              height={g.h}
              sizes="(max-width: 620px) 50vw, (max-width: 980px) 33vw, 280px"
              quality={90}
            />
            <figcaption>{g.alt}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
