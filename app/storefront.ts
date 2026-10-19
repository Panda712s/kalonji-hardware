import fs from "node:fs";
import path from "node:path";
import { storePhotos } from "./data";

/**
 * Store photos for the home and About mosaics. When a photo of the shop front is saved as
 * public/images/store-front.jpg it is shown first; until then the existing store photos are used.
 */
export function getStorePhotos() {
  const file = path.join(process.cwd(), "public", "images", "store-front.jpg");
  if (!fs.existsSync(file)) return storePhotos;
  return [
    {
      src: "/images/store-front.jpg",
      alt: "The Kalonji Hardware shop front, with glass and key cutting services advertised in the window",
    },
    ...storePhotos.slice(0, 3),
  ];
}
