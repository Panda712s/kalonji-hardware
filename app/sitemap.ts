import type { MetadataRoute } from "next";
import { SITE_URL } from "./data";

const pages = [
  { path: "", priority: 1 },
  { path: "/departments", priority: 0.9 },
  { path: "/products", priority: 0.9 },
  { path: "/services", priority: 0.8 },
  { path: "/jobs", priority: 0.8 },
  { path: "/specials", priority: 0.7 },
  { path: "/contractors", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map((p) => ({ url: `${SITE_URL}${p.path}`, lastModified, changeFrequency: "weekly", priority: p.priority }));
}
