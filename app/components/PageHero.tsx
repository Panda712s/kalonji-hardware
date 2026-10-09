import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, text, image = "/images/unsplash-tools.jpg", imageAlt = "", children }: Props) {
  return (
    <section className="page-hero">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" quality={80} className="cover" />
      <div className="shade" />
      <div className="container inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span>{eyebrow}</span>
        </nav>
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}
