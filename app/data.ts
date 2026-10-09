export const WHATSAPP = "27791476258";
export const PHONE = "+27120066063";
export const PHONE_DISPLAY = "+27 12 006 6063";
export const WHATSAPP_DISPLAY = "+27 79 147 6258";
export const FACEBOOK_URL = "https://www.facebook.com/"; // TODO: replace with the real page link

export const waLink = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
export const mapUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export const mapEmbed = (q: string) => `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/departments", label: "Departments" },
  { href: "/jobs", label: "Jobs" },
  { href: "/products", label: "Products" },
  { href: "/specials", label: "Specials" },
  { href: "/contact", label: "Contact" },
];

export const departments = [
  {
    slug: "electrical", code: "E", name: "Electrical",
    text: "Cable, conduit, breakers, plugs, switches and lighting for repairs and new installs.",
    image: "/images/image-01.jpg", alt: "Electrical supplies: cable, breakers, switches, sockets and conduit",
    image2: "/images/image-02.jpg", alt2: "Electrician tools, wire and insulation tape",
    items: ["Cable and wire", "Conduit and trunking", "Breakers and DB boards", "Plugs, sockets and switches", "Lighting and globes", "Insulation tape and accessories"],
  },
  {
    slug: "plumbing", code: "P", name: "Plumbing",
    text: "Pipes, fittings, taps, valves and fixings for leaks, bathrooms and full runs.",
    image: "/images/image-05.jpg", alt: "Chrome taps and fittings",
    image2: "/images/image-40.jpg", alt2: "Plumbing fittings, silicone sealants and basin mixers",
    items: ["Pipes and fittings", "Taps and basin mixers", "Valves", "Geysers and parts", "Sealants and tapes", "Toilet suites and drainage"],
  },
  {
    slug: "building", code: "B", name: "Building",
    text: "Materials for construction, renovation and repair, with contractor pricing on bulk.",
    image: "/images/image-07.jpg", alt: "Bricks, blocks, timber and pipes",
    image2: "/images/image-08.jpg", alt2: "Cement bags, bricks, pipes and building materials",
    items: ["Cement", "Bricks and blocks", "Timber", "Steel reinforcing mesh", "Tile adhesive", "Bolts, hinges and screws"],
  },
  {
    slug: "tools", code: "T", name: "Tools",
    text: "Hand and power tools, plus the consumables that keep them working.",
    image: "/images/image-10.jpg", alt: "Hand tool set with hammer, pliers, spanner and screwdrivers",
    image2: "/images/image-11.jpg", alt2: "Power tools and measuring tools",
    items: ["Hand tools", "Power tools", "Measuring tools", "Garden tools", "Generators", "Brooms, mops and brushware"],
  },
  {
    slug: "paint", code: "C", name: "Paint",
    text: "Paint and finishing supplies for walls, woodwork and metal.",
    image: "/images/image-13.jpg", alt: "Plascon paint buckets stacked in the store",
    image2: "/images/image-14.jpg", alt2: "Paint brushes and rollers on a shop wall",
    items: ["Wall paint", "Enamel and varnish", "PVA and primers", "Rollers, brushes and trays", "Waterproofing", "Crack filler and sealants"],
  },
  {
    slug: "automotive", code: "A", name: "Automotive",
    text: "Everyday car and workshop supplies, kept in stock for quick pickups.",
    image: "/images/image-16.jpg", alt: "Car engine",
    image2: "/images/image-18.jpg", alt2: "Car battery",
    items: ["Engine oil", "Car batteries", "Motorbike batteries", "Car-care and shine", "Air fresheners", "Workshop consumables"],
  },
];

export const branches = [
  {
    label: "Branch 1 · Mall",
    name: "Barclay Square Mall",
    lines: ["Shop 15, 293 Rissik Street", "Sunnyside, Pretoria, 0002"],
    image: "/images/image-47.jpg",
    imageAlt: "Kalonji Hardware Supplies, Barclay Square Shop 15",
    map: "Barclay Square Mall 293 Rissik Street Sunnyside Pretoria",
  },
  {
    label: "Branch 2 · Centre",
    name: "Ancore Centre",
    lines: ["137 Robert Sobukwe Street", "Sunnyside, Pretoria, 0002"],
    image: "/images/image-44.jpg",
    imageAlt: "Store aisle: pipes, taps, tapes and household goods",
    map: "Ancore Centre 137 Robert Sobukwe Street Sunnyside Pretoria",
  },
];

export const brands = [
  { src: "/images/image-21.jpg", alt: "Plascon True Colour Fresh White", name: "Plascon", note: "Interior and exterior paint" },
  { src: "/images/image-26.jpg", alt: "Yuasa YTX20L battery", name: "Yuasa", note: "Motorbike and car batteries" },
  { src: "/images/image-29.jpg", alt: "Motul 8100 X-clean EFE 5W-30 engine oil", name: "Motul", note: "Engine oil" },
  { src: "/images/image-30.jpg", alt: "Shield car-care range: shampoo, tyre shine and air fresheners", name: "Shield", note: "Car-care range" },
  { src: "/images/image-32.jpg", alt: "EverSoft Kitchen Towels, 2 rolls", name: "EverSoft", note: "Tissue and kitchen towels" },
  { src: "/images/image-37.jpg", alt: "Sunlight Professional dishwashing liquid, 5 L", name: "Sunlight", note: "Cleaning supplies" },
];

export const storePhotos = [
  { src: "/images/image-42.jpg", alt: "Inside the store: tissue, fixings and hardware" },
  { src: "/images/image-43.jpg", alt: "Brooms, mops, rakes, dustbins and brushware" },
  { src: "/images/image-45.jpg", alt: "Cement, tile adhesive and building supplies" },
  { src: "/images/image-48.jpg", alt: "Toilet suites, drainage fittings, power tools and appliances" },
];

export const HERO_IMAGE = "/images/unsplash-tools.jpg";

/** Every product category across all departments, used by search and the quote basket. */
export const catalog = departments.flatMap((d) =>
  d.items.map((item) => ({ item, dept: d.name, slug: d.slug })),
);

export const jobs = [
  {
    slug: "fix-a-leak", title: "Fix a leak",
    blurb: "Stop drips and burst joints at the source, from taps to pipe runs.",
    image: "/images/image-40.jpg", alt: "Plumbing fittings, silicone sealants and basin mixers",
    items: ["Pipes and fittings", "Valves", "Sealants and tapes", "Taps and basin mixers"],
  },
  {
    slug: "paint-a-room", title: "Paint a room",
    blurb: "Everything to prep, fill, prime and finish walls and woodwork.",
    image: "/images/image-41.jpg", alt: "Paints, enamel, PVA, rollers and paint trays",
    items: ["Wall paint", "PVA and primers", "Rollers, brushes and trays", "Crack filler and sealants"],
  },
  {
    slug: "wire-a-plug-point", title: "Wire a plug point",
    blurb: "Cable, sockets and protection for adding or repairing power points.",
    image: "/images/image-03.jpg", alt: "Coils of electrical wire with hand tools",
    items: ["Cable and wire", "Plugs, sockets and switches", "Conduit and trunking", "Breakers and DB boards"],
  },
  {
    slug: "build-a-wall", title: "Build or repair a wall",
    blurb: "Materials for walls, slabs and general building and repair work.",
    image: "/images/image-08.jpg", alt: "Cement bags, bricks, pipes and building materials",
    items: ["Cement", "Bricks and blocks", "Steel reinforcing mesh", "Tile adhesive"],
  },
  {
    slug: "bathroom-refresh", title: "Bathroom refresh",
    blurb: "New taps, toilet, seals and a fresh coat for a tired bathroom.",
    image: "/images/image-48.jpg", alt: "Toilet suites, drainage fittings, power tools and appliances",
    items: ["Taps and basin mixers", "Toilet suites and drainage", "Sealants and tapes", "Tile adhesive", "Wall paint"],
  },
  {
    slug: "service-the-car", title: "Service the car",
    blurb: "Oil, battery and car-care basics for home and workshop servicing.",
    image: "/images/image-18.jpg", alt: "Car battery",
    items: ["Engine oil", "Car batteries", "Car-care and shine", "Workshop consumables"],
  },
  {
    slug: "garden-and-yard", title: "Garden and yard",
    blurb: "Tools and cleaning gear to keep the yard and driveway in shape.",
    image: "/images/image-12.jpg", alt: "Spades, rakes and brooms",
    items: ["Garden tools", "Brooms, mops and brushware", "Hand tools"],
  },
];

export const faqs = [
  { q: "How do I get a quote?", a: "Send your list of items and quantities on WhatsApp, use the quote basket on this site, or bring the list to either branch. We reply with price and availability." },
  { q: "Do you offer bulk or contractor pricing?", a: "Yes. Larger orders qualify for bulk and contractor pricing. Mention quantities in your message, or use the Contractors page." },
  { q: "Where are your branches?", a: "Barclay Square Mall (Shop 15, 293 Rissik Street) and Ancore Centre (137 Robert Sobukwe Street), both in Sunnyside, Pretoria." },
  { q: "Is everything on the website in stock?", a: "Stock changes through the week. Message us to confirm an item, size or quantity before you travel." },
  { q: "Can I ask about specials?", a: "Yes. Specials change with stock, so message us on WhatsApp for today's prices or follow our Facebook page." },
];

/**
 * Opening hours, keyed by weekday (0 = Sunday ... 6 = Saturday) as ["HH:MM", "HH:MM"], 24-hour, South African time.
 * Leave as null to hide the "Open now" badge. TODO: add the real hours, for example:
 * { 1: ["08:00", "17:00"], 2: ["08:00", "17:00"], ... }
 */
export type Hours = Partial<Record<number, [string, string]>>;
export const HOURS: Hours | null = null;

/** Real customer reviews only. The reviews section stays hidden while this is empty. */
export const reviews: { name: string; text: string }[] = [];
/** Link to the Google reviews page. TODO: add it to show a "Leave a review" card. */
export const GOOGLE_REVIEWS_URL = "";
