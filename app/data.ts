/**
 * The public web address of the site, with no trailing slash. Used for the sharing preview,
 * the canonical address, robots.txt and the sitemap.
 * TODO: change this to the real domain (for example https://www.kalonjihardware.co.za) once it points here.
 */
export const SITE_URL = "https://kalonji-hardware.vercel.app";

export const WHATSAPP = "27791476258";
export const PHONE = "+27120066063";
export const PHONE_DISPLAY = "+27 12 006 6063";
export const WHATSAPP_DISPLAY = "+27 79 147 6258";
/** Postal address of the business, shown on the Contact page and in the footer. */
export const ADDRESS = "Sunnyside, Pretoria 0002, Gauteng, South Africa";
export const FACEBOOK_URL = "https://www.facebook.com/share/1J1QhbSXaP/";
/** Opening hours as shown to visitors. Keep in step with HOURS further down. */
export const HOURS_LINES = ["Monday to Saturday: 8:00am to 7:00pm", "Sunday: 8:00am to 3:00pm"];

export const waLink = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
export const mapUrl = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export const mapEmbed = (q: string) => `https://maps.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/departments", label: "Departments" },
  { href: "/services", label: "Services" },
  { href: "/jobs", label: "Jobs" },
  { href: "/products", label: "Products" },
  { href: "/specials", label: "Specials" },
  { href: "/contact", label: "Contact" },
];

export const departments = [
  {
    slug: "electrical", code: "E", name: "Electrical",
    text: "Cable, conduit, breakers, plugs, switches and lighting for repairs and new installs.",
    image: "/images/electrical-breaker.jpg", alt: "Circuit breakers and wiring in a distribution board",
    image2: "/images/electrical-sockets.jpg", alt2: "Wall sockets and a light switch",
    items: ["Cable and wire", "Conduit and trunking", "Breakers and DB boards", "Plugs, sockets and switches", "Lighting and globes", "Insulation tape and accessories"],
  },
  {
    slug: "plumbing", code: "P", name: "Plumbing",
    text: "Pipes, fittings, taps, valves and fixings for leaks, bathrooms and full runs.",
    image: "/images/plumbing-faucet.jpg", alt: "A chrome tap over a basin",
    image2: "/images/image-40.jpg", alt2: "Plumbing fittings, silicone sealants and basin mixers",
    items: ["Pipes and fittings", "Taps and basin mixers", "Valves", "Geysers and parts", "Sealants and tapes", "Toilet suites and drainage"],
  },
  {
    slug: "building", code: "B", name: "Building",
    text: "Materials for construction, renovation and repair, with contractor pricing on bulk.",
    image: "/images/building-bricks.jpg", alt: "Stacked clay bricks",
    image2: "/images/building-blocks.jpg", alt2: "Laying cement blocks with a trowel",
    items: ["Bricks and blocks", "Timber", "Steel reinforcing mesh", "Bolts, hinges and screws"],
  },
  {
    slug: "tools", code: "T", name: "Tools",
    text: "Hand and power tools, plus the consumables that keep them working.",
    image: "/images/tools-pliers-hammer.jpg", alt: "Pliers, a hammer and a tape measure on a wooden table",
    image2: "/images/tools-pegboard.jpg", alt2: "Hammers hanging on a pegboard",
    items: ["Hand tools", "Power tools", "Measuring tools", "Garden tools", "Generators", "Brooms, mops and brushware"],
  },
  {
    slug: "paint", code: "C", name: "Paint",
    text: "Paint and finishing supplies for walls, woodwork and metal.",
    image: "/images/paint-roller.jpg", alt: "A paint roller applying blue paint to a wall",
    image2: "/images/paint-promac.jpg", alt2: "Promac Easycoat silk acrylic paint tin with a paint brush",
    items: ["Wall paint", "Enamel and varnish", "PVA and primers", "Rollers, brushes and trays", "Waterproofing", "Crack filler and sealants"],
  },
  {
    slug: "automotive", code: "A", name: "Automotive",
    text: "Everyday car and workshop supplies, kept in stock for quick pickups.",
    image: "/images/auto-oil.jpg", alt: "Pouring engine oil into a car engine",
    image2: "/images/auto-battery.jpg", alt2: "Car battery terminals under the bonnet",
    items: ["Engine oil", "Car batteries", "Motorbike batteries", "Car-care and shine", "Air fresheners", "Workshop consumables"],
  },
  {
    slug: "glass-cutting", code: "G", name: "Glass cutting",
    text: "Glass cut to your measurements for windows, shelves, tables and mirrors.",
    image: "/images/dept-glass.jpg", alt: "Glass window panes in a steel frame",
    image2: "/images/dept-glass-2.jpg", alt2: "A frosted glass panel with plants behind it",
    items: ["Glass cut to size", "Mirrors cut to size", "Shelf and table-top glass", "Window and door glass"],
  },
  {
    slug: "key-cutting", code: "K", name: "Key cutting",
    text: "Spare keys cut for doors, padlocks and cupboards.",
    image: "/images/dept-keys.jpg", alt: "Rows of key blanks",
    image2: "/images/dept-keys-2.jpg", alt2: "A bunch of keys on a wooden table",
    items: ["House and door keys", "Padlock keys", "Cabinet and cupboard keys", "Key rings"],
  },
  {
    slug: "tiles-and-cement", code: "L", name: "Tiles and cement",
    text: "Floor and wall tiles, tile adhesive, grout and cement for floors, walls and repairs.",
    image: "/images/dept-tiles.jpg", alt: "A hand pressing a white tile into tile adhesive on a wall",
    image2: "/images/image-45.jpg", alt2: "Cement, tile adhesive and building supplies",
    items: ["Floor tiles", "Wall tiles", "Tile adhesive", "Grout", "Cement", "Tile spacers and trims"],
  },
];

export const services = [
  {
    slug: "plumber", name: "Plumber",
    text: "A plumber is available on request. Tell us the job and where it is, and we will arrange it.",
    image: "/images/svc-plumber.jpg", alt: "A plumber repairing pipes under a sink",
    request: "Hi Kalonji Hardware, I need a plumber. The job is:",
  },
  {
    slug: "electrician", name: "Electrician",
    text: "An electrician is available on request. Tell us the job and where it is, and we will arrange it.",
    image: "/images/svc-electrician.jpg", alt: "An electrician testing a distribution board",
    request: "Hi Kalonji Hardware, I need an electrician. The job is:",
  },
];

/** Glues, fillers and degreasers, shown on the Products page. */
export const repair = [
  { src: "/images/repair-oneshot.jpg", alt: "One Shot heavy-duty industrial degreaser, 1 litre", name: "One Shot degreaser", note: "Heavy-duty degreaser, 1 L", w: 196, h: 210 },
  { src: "/images/repair-pratley-quickset.jpg", alt: "Pratley 1-2-3 Quickset adhesive pack", name: "Pratley Quickset", note: "Repair adhesive", w: 303, h: 332 },
  { src: "/images/repair-pratley-steel-putty.jpg", alt: "Pratley Steel Putty 100 g pack", name: "Pratley Steel Putty", note: "Repair putty, 100 g", w: 304, h: 352 },
  { src: "/images/repair-qbond.jpg", alt: "Q-Bond adhesive and reinforcing powder kit", name: "Q-Bond", note: "Adhesive and filling powders", w: 434, h: 416 },
];

/** Car and motorcycle batteries, shown on the Products page. */
export const batteries = [
  { src: "/images/battery-willard-efb.jpg", alt: "Willard EFB+ car battery", name: "Willard EFB", note: "Car battery" },
  { src: "/images/battery-willard-agm.jpg", alt: "Willard AGM car battery", name: "Willard AGM", note: "Car battery" },
  { src: "/images/battery-varta-sli.jpg", alt: "Varta Dynamic SLI D15 car battery", name: "Varta Dynamic SLI", note: "Car battery" },
  { src: "/images/battery-varta-efb.jpg", alt: "Varta Dynamic EFB D54 car battery", name: "Varta Dynamic EFB", note: "Car battery" },
  { src: "/images/battery-varta-agm.jpg", alt: "Varta Dynamic AGM A6 car battery", name: "Varta Dynamic AGM", note: "Car battery" },
  { src: "/images/battery-yuasa-ytx7l.jpg", alt: "Yuasa YTX7L-BS powersports battery box", name: "Yuasa YTX7L-BS", note: "Motorcycle battery" },
  { src: "/images/battery-toplite.jpg", alt: "Toplite motorcycle battery box", name: "Toplite", note: "Motorcycle battery" },
];

/** Plumbing and fittings, shown on the Products page. */
export const range = [
  { src: "/images/range-hose.jpg", alt: "Braided flexible hose connector", name: "Braided hose connector", note: "Flexible tap connector" },
  { src: "/images/range-elbow.jpg", alt: "Brass compression elbow", name: "Compression elbow", note: "Brass fitting" },
  { src: "/images/range-socket.jpg", alt: "Galvanised reducing socket", name: "Reducing socket", note: "Galvanised fitting" },
  { src: "/images/range-basin.jpg", alt: "White wall-hung basin", name: "Wall basin", note: "White ceramic" },
  { src: "/images/range-angle-valve.jpg", alt: "Chrome angle valve", name: "Angle valve", note: "Chrome angle valve" },
  { src: "/images/range-bib-tap.jpg", alt: "Chrome bib tap", name: "Bib tap", note: "Chrome bib tap" },
  { src: "/images/range-gate-valve.jpg", alt: "Brass gate valve", name: "Gate valve", note: "Brass gate valve" },
  { src: "/images/range-ball-valve.jpg", alt: "Brass lever ball valve", name: "Ball valve", note: "Brass lever ball valve" },
  { src: "/images/range-bath-spout.jpg", alt: "Chrome bath spout with diverter", name: "Bath spout", note: "Chrome bath spout with diverter" },
  { src: "/images/range-flush-valve.jpg", alt: "Toilet flush valve", name: "Flush valve", note: "Toilet flush valve" },
  { src: "/images/range-silicone.jpg", alt: "Silicone sealant cartridge", name: "Silicone sealant", note: "General purpose sealant" },
  { src: "/images/range-acrylic.jpg", alt: "Acrylic sealant cartridge", name: "Acrylic sealant", note: "Paintable white sealant" },
  { src: "/images/range-sink-mixer.jpg", alt: "Chrome sink mixer tap with a swan neck", name: "Sink mixer", note: "Chrome sink mixer tap" },
  { src: "/images/range-hosebib.jpg", alt: "Brass hose bib tap", name: "Hose bib", note: "Brass hose bib tap" },
  { src: "/images/range-stop-tap.jpg", alt: "Brass stop tap", name: "Stop tap", note: "Brass stop tap" },
  { src: "/images/range-bath-mixer.jpg", alt: "Chrome wall bath mixer with a hand shower", name: "Bath mixer", note: "Wall mixer with hand shower" },
  { src: "/images/range-pillar-tap.jpg", alt: "Chrome pillar tap", name: "Pillar tap", note: "Chrome pillar tap" },
  { src: "/images/range-sewer-snake.jpg", alt: "Coiled drain-cleaning snake", name: "Drain snake", note: "Coiled drain cleaner" },
  { src: "/images/range-bidet.jpg", alt: "Bidet hose set in its pack", name: "Bidet set", note: "Hose and fittings" },
];

/** Hardware and tools, shown on the Products page. */
export const hardware = [
  { src: "/images/range-caulk.jpg", alt: "Blue caulking gun", name: "Caulking gun", note: "For sealants" },
  { src: "/images/range-chain.jpg", alt: "Galvanised chain on a reel", name: "Galvanised chain", note: "Sold by the metre" },
  { src: "/images/range-padlock.jpg", alt: "Iron padlocks in different sizes", name: "Padlocks", note: "Iron padlocks" },
  { src: "/images/range-brush.jpg", alt: "Paint brush with a red handle", name: "Paint brush", note: "Synthetic bristle" },
  { src: "/images/range-pliers.jpg", alt: "Waterpump pliers", name: "Waterpump pliers", note: "250 mm" },
  { src: "/images/range-claw-hammer.jpg", alt: "Claw hammer with a wooden handle", name: "Claw hammer", note: "Wooden handle" },
  { src: "/images/range-club-hammer.jpg", alt: "Club hammer", name: "Club hammer", note: "Steel head, 1.25 kg" },
  { src: "/images/range-led-bulb.jpg", alt: "Warm white LED bulb", name: "LED bulb", note: "Warm white" },
  { src: "/images/range-blowtorch.jpg", alt: "Blue clip-on gas blowtorch", name: "Blowtorch", note: "Clip-on gas torch" },
  { src: "/images/range-chisel.jpg", alt: "Flat cold chisel with an orange hand guard", name: "Flat chisel", note: "20 × 200 mm" },
  { src: "/images/range-drill-bits.jpg", alt: "Set of six flat wood drill bits", name: "Flat drill bit set", note: "12 to 25 mm, 6 pieces" },
  { src: "/images/range-hacksaw.jpg", alt: "Steel hacksaw", name: "Hacksaw", note: "Complete steel hacksaw" },
  { src: "/images/range-pipe-wrench.jpg", alt: "Yellow heavy-duty pipe wrench", name: "Pipe wrench", note: "350 mm" },
  { src: "/images/range-stubby-driver.jpg", alt: "Stubby reversible screwdriver with a bit", name: "Stubby screwdriver", note: "Reversible bits" },
  { src: "/images/range-trim-knife.jpg", alt: "Red snap-off trimming knife", name: "Trimming knife", note: "Snap-off blade" },
  { src: "/images/range-pointing-trowel.jpg", alt: "Pointing trowel with a wooden handle", name: "Pointing trowel", note: "150 mm" },
  { src: "/images/range-hasp.jpg", alt: "Hasp and staple", name: "Hasp and staple", note: "For padlocks" },
  { src: "/images/range-door-bolt.jpg", alt: "Galvanised straight door bolt", name: "Door bolt", note: "Galvanised" },
  { src: "/images/range-sprayer.jpg", alt: "Five litre pressure garden sprayer", name: "Garden sprayer", note: "5 litre" },
  { src: "/images/range-plunger.jpg", alt: "Red rubber drain plunger with a wooden handle", name: "Drain plunger", note: "100 mm, wooden handle" },
  { src: "/images/range-scrub-brush.jpg", alt: "Scrubbing brush with yellow handle", name: "Scrubbing brush", note: "Stiff bristles" },
  { src: "/images/range-gas-torch.jpg", alt: "Blue gas blowtorch with a brass nozzle and black handle", name: "Gas blowtorch", note: "With handle and brass nozzle" },
];

/** Promac paint range, shown on the Products page. */
export const promacRange = [
  { src: "/images/promac-easycoat.jpg", alt: "Promac Easycoat Silk Acrylic 5 L tin", name: "Easycoat Silk Acrylic", note: "Paint" },
  { src: "/images/promac-ecoat.jpg", alt: "Promac E-Coat PVA Coating 5 L tin", name: "E-Coat PVA Coating", note: "PVA coating" },
  { src: "/images/promac-dimensions.jpg", alt: "Promac Dimensions Silk 5 L tin", name: "Dimensions Silk", note: "Paint" },
  { src: "/images/promac-rubber.jpg", alt: "Promac Rubber Duck Liquid Rubber 5 L tin", name: "Rubber Duck Liquid Rubber", note: "Liquid rubber" },
  { src: "/images/promac-varnish.jpg", alt: "Promac Yes Wood Interior Varnish 5 L tin", name: "Yes Wood Interior Varnish", note: "Varnish" },
  { src: "/images/promac-matt.jpg", alt: "Promac Easycoat Matt Walls & Ceilings 5 L tin", name: "Easycoat Matt Walls & Ceilings", note: "Paint" },
  { src: "/images/promac-washable.jpg", alt: "Promac Easycoat Washable Matt 5 L tin", name: "Easycoat Washable Matt", note: "Paint" },
  { src: "/images/promac-undercoat.jpg", alt: "Promac Easycoat Universal Undercoat 5 L tin", name: "Easycoat Universal Undercoat", note: "Undercoat" },
  { src: "/images/promac-plaster-primer.jpg", alt: "Promac Easycoat Plaster Primer 5 L tin", name: "Easycoat Plaster Primer", note: "Primer" },
  { src: "/images/promac-adhesion-primer.jpg", alt: "Promac Easycoat Adhesion Primer 5 L tin", name: "Easycoat Adhesion Primer", note: "Primer" },
  { src: "/images/promac-roofcote.jpg", alt: "Promac Easycoat Roofcote Acrylic 5 L tin", name: "Easycoat Roofcote Acrylic", note: "Roof paint" },
  { src: "/images/promac-textured.jpg", alt: "Promac Easycoat Textured Acrylic 5 L tin", name: "Easycoat Textured Acrylic", note: "Textured coating" },
  { src: "/images/promac-gloss-enamel.jpg", alt: "Promac Easycoat Gloss Enamel 5 L tin", name: "Easycoat Gloss Enamel", note: "Enamel" },
  { src: "/images/promac-nondrip.jpg", alt: "Promac Easycoat Non-Drip Enamel 5 L tin", name: "Easycoat Non-Drip Enamel", note: "Enamel" },
  { src: "/images/promac-etch-primer.jpg", alt: "Promac Metal Etch Primer 5 L tin", name: "Metal Etch Primer", note: "Primer" },
  { src: "/images/promac-bonding.jpg", alt: "Promac Bonding Liquid 5 L tin", name: "Bonding Liquid", note: "Bonding liquid" },
  { src: "/images/promac-micaguard.jpg", alt: "Promac Micaguard Textured 5 L tin", name: "Micaguard Textured", note: "Textured coating" },
  { src: "/images/promac-pu-gloss.jpg", alt: "Promac Yes Wood PU Gloss Varnish 5 L tin", name: "Yes Wood PU Gloss Varnish", note: "Varnish" },
  { src: "/images/promac-suede.jpg", alt: "Promac Yes Wood PU Suede Varnish tin", name: "Yes Wood PU Suede Varnish", note: "Varnish" },
  { src: "/images/promac-preservative.jpg", alt: "Promac Yes Wood Preservative tin", name: "Yes Wood Preservative", note: "Wood preservative" },
  { src: "/images/promac-deck.jpg", alt: "Promac Yes Wood Deck Dressing tin", name: "Yes Wood Deck Dressing", note: "Deck dressing" },
  { src: "/images/promac-marine.jpg", alt: "Promac Yes Wood Marine Varnish tin", name: "Yes Wood Marine Varnish", note: "Varnish" },
  { src: "/images/promac-stain.jpg", alt: "Promac Yes Wood Stain & Seal tin", name: "Yes Wood Stain & Seal", note: "Wood stain, 1 L" },
  { src: "/images/promac-furniture-wax.jpg", alt: "Promac Yes Wood Furniture Wax tin", name: "Yes Wood Furniture Wax", note: "Furniture wax, 1 L" },
  { src: "/images/promac-weather-wax.jpg", alt: "Promac Yes Wood Weatherproofing Wax tin", name: "Yes Wood Weatherproofing Wax", note: "Weatherproofing wax, 1 L" },
  { src: "/images/promac-eggshell.jpg", alt: "Promac Easycoat Eggshell Enamel tin", name: "Easycoat Eggshell Enamel", note: "Enamel" },
];

export const branches = [
  {
    label: "Branch 1 · Mall",
    name: "Barclay Square Mall",
    lines: ["Shop 15,", "293 Rissik Street", ADDRESS],
    image: "/images/image-47.jpg",
    imageAlt: "Kalonji Hardware Supplies, Barclay Square Shop 15",
    map: "Barclay Square Mall 293 Rissik Street Sunnyside Pretoria",
  },
  {
    label: "Branch 2 · Centre",
    name: "Ancore Centre",
    lines: ["137 Robert Sobukwe Street", ADDRESS],
    image: "/images/image-44.jpg",
    imageAlt: "Store aisle: pipes, taps, tapes and household goods",
    map: "Ancore Centre 137 Robert Sobukwe Street Sunnyside Pretoria",
  },
];

export const brands = [
  { src: "/images/promac-rubber.jpg", alt: "Promac Rubber Duck liquid rubber 5L tin", name: "Promac", note: "Paint, PVA and liquid rubber" },
  { src: "/images/image-21.jpg", alt: "Plascon True Colour Fresh White", name: "Plascon", note: "Interior and exterior paint" },
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

/** Countries we export to. */
export const exportCountries = ["DRC", "Zimbabwe", "Cameroon", "Ghana"];
export const EXPORT_MESSAGE = "Hi Kalonji Hardware, I would like an export quote. Destination country:";

/** Every product category across all departments. */
export const categories = departments.flatMap((d) =>
  d.items.map((item) => ({ item, dept: d.name, slug: d.slug })),
);
export const categoryCount = categories.length;

/** Everything searchable and addable to the quote basket: categories plus on-request services. */
export const catalog = [
  ...categories,
  ...services.map((s) => ({ item: `${s.name} (on request)`, dept: "Services", slug: s.slug })),
];

export const jobs = [
  {
    slug: "fix-a-leak", title: "Fix a leak",
    blurb: "Stop drips and burst joints at the source, from taps to pipe runs.",
    image: "/images/job-leak.jpg", alt: "Grey plumbing pipes and elbow joints along a wall",
    items: ["Pipes and fittings", "Valves", "Sealants and tapes", "Taps and basin mixers"],
  },
  {
    slug: "paint-a-room", title: "Paint a room",
    blurb: "Everything to prep, fill, prime and finish walls and woodwork.",
    image: "/images/job-paint.jpg", alt: "Painting a white wall with a roller",
    items: ["Wall paint", "PVA and primers", "Rollers, brushes and trays", "Crack filler and sealants"],
  },
  {
    slug: "wire-a-plug-point", title: "Wire a plug point",
    blurb: "Cable, sockets and protection for adding or repairing power points.",
    image: "/images/job-plug.jpg", alt: "A wall socket with a plug in it",
    items: ["Cable and wire", "Plugs, sockets and switches", "Conduit and trunking", "Breakers and DB boards"],
  },
  {
    slug: "build-a-wall", title: "Build or repair a wall",
    blurb: "Materials for walls, slabs and general building and repair work.",
    image: "/images/job-wall.jpg", alt: "A trowel with cement for laying bricks",
    items: ["Cement", "Bricks and blocks", "Steel reinforcing mesh", "Tile adhesive"],
  },
  {
    slug: "bathroom-refresh", title: "Bathroom refresh",
    blurb: "New taps, toilet, seals and a fresh coat for a tired bathroom.",
    image: "/images/job-bathroom.jpg", alt: "A white basin with a black wall-mounted tap",
    items: ["Taps and basin mixers", "Toilet suites and drainage", "Sealants and tapes", "Tile adhesive", "Wall paint"],
  },
  {
    slug: "garden-and-yard", title: "Garden and yard",
    blurb: "Tools and cleaning gear to keep the yard and driveway in shape.",
    image: "/images/job-garden.jpg", alt: "Garden tools: rakes, a spade, a fork and a broom",
    items: ["Garden tools", "Brooms, mops and brushware", "Hand tools"],
  },
];

export const faqs = [
  { q: "How do I get a quote?", a: "Send your list of items and quantities on WhatsApp, use the quote basket on this site, or bring the list to either branch. We reply with price and availability." },
  { q: "Do you offer bulk or contractor pricing?", a: "Yes. Larger orders qualify for bulk and contractor pricing. Mention quantities in your message, or use the Contractors page." },
  { q: "What are your opening hours?", a: `We are open Monday to Saturday from 8:00am to 7:00pm and on Sundays from 8:00am to 3:00pm. Message us on WhatsApp if you need to check before you travel.` },
  { q: "Where are your branches?", a: "Barclay Square Mall (Shop 15, 293 Rissik Street) and Ancore Centre (137 Robert Sobukwe Street), both in Sunnyside, Pretoria." },
  { q: "Do you export?", a: "Yes. We export to DRC, Zimbabwe, Cameroon and Ghana. Message us your list and the destination country on WhatsApp and we will send an export quote." },
  { q: "Can you send a plumber or an electrician?", a: "Yes. A plumber and an electrician are available on request. Message us on WhatsApp with the job and where it is, and we will arrange it." },
  { q: "Is everything on the website in stock?", a: "Stock changes through the week. Message us to confirm an item, size or quantity before you travel." },
  { q: "Can I ask about specials?", a: "Yes. Specials change with stock, so message us on WhatsApp for today's prices or follow our Facebook page." },
];

/**
 * Opening hours, keyed by weekday (0 = Sunday ... 6 = Saturday) as ["HH:MM", "HH:MM"], 24-hour, South African time.
 * Leave as null to hide the "Open now" badge. TODO: add the real hours, for example:
 * { 1: ["08:00", "17:00"], 2: ["08:00", "17:00"], ... }
 */
export type Hours = Partial<Record<number, [string, string]>>;
export const HOURS: Hours | null = {
  0: ["08:00", "15:00"],
  1: ["08:00", "19:00"],
  2: ["08:00", "19:00"],
  3: ["08:00", "19:00"],
  4: ["08:00", "19:00"],
  5: ["08:00", "19:00"],
  6: ["08:00", "19:00"],
};


/** Real customer reviews only. The reviews section stays hidden while this is empty. */
export const reviews: { name: string; text: string }[] = [];
/** Link to the Google reviews page. TODO: add it to show a "Leave a review" card. */
export const GOOGLE_REVIEWS_URL = "";
