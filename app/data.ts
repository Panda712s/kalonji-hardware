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
    image2: "/images/building-site.jpg", alt2: "A building site seen from above, with timber, formwork and scaffolding",
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
    slug: "paint-manufacturing", code: "M", name: "Paint manufacturing",
    text: "Coming soon: we will manufacture our own paint in the future as well.",
    image: "/images/promac-easycoat.jpg", alt: "Easycoat silk acrylic paint tin",
    image2: "/images/paint-roller.jpg", alt2: "A paint roller applying blue paint to a wall",
    items: ["Our own paint, coming soon", "Ask us for updates"],
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
    text: "Need help with a plumbing job? Tell us what needs fixing and where, and we will help arrange a plumber.",
    image: "/images/svc-plumber.jpg", alt: "A plumber repairing pipes under a sink",
    request: "Hi Kalonji Hardware, I need a plumber. The job is:",
  },
  {
    slug: "electrician", name: "Electrician",
    text: "Need help with an electrical job? Tell us what needs attention and where, and we will help arrange an electrician.",
    image: "/images/svc-electrician.jpg", alt: "An electrician testing a distribution board",
    request: "Hi Kalonji Hardware, I need an electrician. The job is:",
  },
];

/** Glues, fillers and degreasers, shown on the Products page. */
export const repair = [
  { src: "/images/repair-plascon-keybond.jpg", alt: "Plascon Plaster KeyBond bonding liquid, 5 litre", name: "Plascon Plaster KeyBond", note: "Bonding liquid for plaster", w: 529, h: 806 },
  { src: "/images/repair-oneshot.jpg", alt: "One Shot heavy-duty industrial degreaser, 1 litre", name: "One Shot degreaser", note: "Heavy-duty degreaser, 1 L", w: 196, h: 210 },
  { src: "/images/repair-pratley-quickset.jpg", alt: "Pratley 1-2-3 Quickset adhesive pack", name: "Pratley Quickset", note: "Repair adhesive", w: 303, h: 332 },
  { src: "/images/repair-pratley-steel-putty.jpg", alt: "Pratley Steel Putty 100 g pack", name: "Pratley Steel Putty", note: "Repair putty, 100 g", w: 304, h: 352 },
  { src: "/images/repair-qbond.jpg", alt: "Q-Bond adhesive and reinforcing powder kit", name: "Q-Bond", note: "Adhesive and filling powders", w: 434, h: 416 },
  { src: "/images/repair-polyfilla.jpg", alt: "Polycell Polyfilla Exterior Crack Filler, 12 kg bag", name: "Polycell Polyfilla Exterior", note: "Crack filler, 12 kg", w: 414, h: 515 },
  { src: "/images/repair-cornice.jpg", alt: "Edgefix Premium Cornice Adhesive, 5 kg bucket", name: "Edgefix cornice adhesive", note: "Premium, 5 kg", w: 275, h: 290 },
  { src: "/images/repair-wood-glue.jpg", alt: "GDC GW1000 wood glue, 1 litre bottle", name: "GDC wood glue", note: "GW1000, 1 L", w: 299, h: 834 },
  { src: "/images/repair-contact.jpg", alt: "GDC CA2000 contact adhesive tin", name: "GDC contact adhesive", note: "All-purpose", w: 233, h: 294 },
  { src: "/images/repair-elec-cleaner.jpg", alt: "Lida electronic contact cleaner spray can", name: "Lida electronic cleaner", note: "Contact cleaner spray", w: 183, h: 502 },
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
  { src: "/images/range-ball-valve-blue.jpg", alt: "Nickel-plated ball valve with a blue lever handle", name: "Nickel ball valve", note: "Blue lever handle" },
  { src: "/images/geyser-supahot-200l.jpg", alt: "Supahot 200 litre galvanised geyser", name: "Supahot geyser", note: "200 L" },
  { src: "/images/Plumbing-pipe-clamps.jpeg", alt: "Pair of adjustable pipe clamps", name: "Pipe clamps", note: "Adjustable pipe supports" },
  { src: "/images/Plumbing-trap-1.jpeg", alt: "Black tubular plumbing trap fitting", name: "Tubular trap", note: "Black plumbing fitting" },
  { src: "/images/Plumbing-bottle-trap-1.jpeg", alt: "Black bottle trap for a basin", name: "Basin bottle trap", note: "Black plumbing fitting" },
  { src: "/images/Plumbing-trap-2.jpeg", alt: "Grey tubular plumbing trap", name: "Tubular trap", note: "Grey plumbing fitting" },
  { src: "/images/Plumbing-trap-3.jpeg", alt: "Black curved plumbing trap fitting", name: "Curved trap fitting", note: "Black plumbing fitting" },
  { src: "/images/Plumbing-basin-waste-kit.jpeg", alt: "Basin waste and plumbing trap assembly", name: "Basin waste kit", note: "Waste and trap assembly" },
  { src: "/images/Plumbing-white-basin-waste.jpeg", alt: "White plastic basin waste fitting", name: "Basin waste", note: "White plastic fitting" },
  { src: "/images/Plumbing-trap-4.jpeg", alt: "Grey basin P-trap with a floor grate", name: "Basin P-trap", note: "With floor grate" },
  { src: "/images/Plumbing-bottle-trap-2.jpeg", alt: "Dark bottle trap fitting", name: "Bottle trap", note: "Dark plumbing fitting" },
];

/** Valves, taps and plumbing spares, shown on the Products page. */
export const valves = [
  { src: "/images/valve-wall-spout.jpg", alt: "Chrome wall bath spout with a diverter knob", name: "Wall bath spout", note: "Chrome, with diverter" },
  { src: "/images/valve-wall-bib.jpg", alt: "Chrome wall bib tap with a blue ring on the handle", name: "Wall bib tap", note: "Chrome, blue ring" },
  { src: "/images/valve-cross-bib.jpg", alt: "Chrome cross-head bib tap", name: "Cross-head bib tap", note: "Chrome" },
  { src: "/images/valve-gate-green.jpg", alt: "Brass gate valve with a green handwheel", name: "Brass gate valve", note: "Green handwheel, 20 mm" },
  { src: "/images/valve-ball-cobra.jpg", alt: "Ball valve with a green lever handle", name: "Cobra ball valve", note: "Green lever handle" },
  { src: "/images/valve-angle-blue.jpg", alt: "Chrome angle ball valve with a blue handle", name: "Angle ball valve", note: "Blue handle" },
  { src: "/images/valve-mini-black.jpg", alt: "Chrome mini ball valve with a black handle", name: "Mini ball valve", note: "Black handle, chrome" },
  { src: "/images/valve-push-flush.jpg", alt: "Chrome push-button flush valve", name: "Push flush valve", note: "Chrome" },
  { src: "/images/valve-reducing-bush.jpg", alt: "Stainless steel hex reducing bush", name: "Reducing bush", note: "Stainless steel" },
  { src: "/images/valve-tap-handle.jpg", alt: "Chrome tap handle", name: "Tap handle", note: "Chrome" },
  { src: "/images/valve-brass-insert.jpg", alt: "Brass tap valve insert", name: "Brass valve insert", note: "Tap spare part" },
  { src: "/images/valve-cross-top.jpg", alt: "Cross-head tap top with its spindle and washer", name: "Cross-head tap top", note: "Spindle assembly" },
  { src: "/images/valve-tap-spindle.jpg", alt: "Brass tap spindle head", name: "Brass tap spindle", note: "Replacement head" },
  { src: "/images/valve-cistern.jpg", alt: "Cistern dual-flush valve parts", name: "Cistern flush valve", note: "Dual-flush mechanism" },
  { src: "/images/valve-pressure-400.jpg", alt: "Black pressure control and relief valve marked 400 kPa", name: "Pressure control valve", note: "400 kPa, with relief" },
  { src: "/images/valve-pressure-vb.jpg", alt: "Pressure valve with two vacuum breakers", name: "Pressure valve with vacuum breakers", note: "Geyser protection" },
  { src: "/images/valve-gate-brass.jpg", alt: "Brass gate valve with a red handwheel, 3/4 inch", name: "Brass gate valve", note: "3/4 inch, red handwheel" },
  { src: "/images/valve-gate-pn16.jpg", alt: "Black PN16 gate valve with a red handwheel, 1 inch", name: "Gate valve", note: "1 inch, PN16" },
];

/** Toilets, basins and bathroom fittings, shown on the Products page. */
export const bathroom = [
  { src: "/images/bath-suite-round.jpg", alt: "White close-coupled toilet suite with a round seat", name: "Toilet suite", note: "Close-coupled, round seat" },
  { src: "/images/bath-suite-square.jpg", alt: "White close-coupled toilet suite with a square seat", name: "Toilet suite", note: "Close-coupled, square seat" },
  { src: "/images/bath-wall-hung.jpg", alt: "White wall-hung toilet with a seat", name: "Wall-hung toilet", note: "With seat" },
  { src: "/images/bath-toilet-pan.jpg", alt: "White floor-standing toilet pan", name: "Toilet pan", note: "Floor standing" },
  { src: "/images/bath-cistern.jpg", alt: "White ceramic toilet cistern", name: "Toilet cistern", note: "White ceramic" },
  { src: "/images/bath-seat.jpg", alt: "Cream toilet seat with the lid open", name: "Toilet seat", note: "Cream" },
  { src: "/images/bath-flush-valve.jpg", alt: "Dual-flush valve for a toilet cistern", name: "Dual-flush valve", note: "For concealed cisterns" },
  { src: "/images/bath-cistern-kit.jpg", alt: "Cistern fill valve and fitting kit", name: "Cistern fittings kit", note: "Fill valve and parts" },
  { src: "/images/bath-basin-mixer.jpg", alt: "White counter-top basin with a chrome cross-head tap", name: "Basin with tap", note: "Counter-top, cross-head tap" },
  { src: "/images/bath-basin-oval.jpg", alt: "Large white oval counter-top basin with a tap", name: "Oval basin", note: "Counter-top, with tap" },
  { src: "/images/bath-basin-round.jpg", alt: "White round counter-top basin", name: "Counter-top basin", note: "White ceramic" },
];

/** Hair products and salon equipment, shown on the Products page. */
export const salonSupplies = [
  { src: "/images/Salon-x10-shampoo-1.jpeg", alt: "X10 hair-care bottle", name: "X10 hair care", note: "Hair-care product" },
  { src: "/images/Salon-x10-shampoo-2.jpeg", alt: "X10 hair-care bottle", name: "X10 hair care", note: "Hair-care product" },
  { src: "/images/Salon-shampoo-basin-stand.jpeg", alt: "Freestanding salon shampoo basin", name: "Shampoo basin stand", note: "Salon wash basin" },
  { src: "/images/Salon-mks-curl-cream.jpeg", alt: "MKS curl cream hair product", name: "MKS curl cream", note: "Curl cream" },
  { src: "/images/Salon-kaypro-keratin-treatment.jpeg", alt: "KayPro Keratin Filler hair treatment", name: "KayPro Keratin Filler", note: "Hair treatment" },
  { src: "/images/Salon-backwash-unit-1.jpeg", alt: "Black salon backwash chair and basin", name: "Salon backwash unit", note: "Chair and basin" },
  { src: "/images/Salon-loma-shampoo.jpeg", alt: "Loma hair-care bottle", name: "Loma hair care", note: "Hair-care product" },
  { src: "/images/Salon-fresh-hair-product.jpeg", alt: "Fresh-branded salon hair product", name: "Fresh hair product", note: "Salon hair care" },
  { src: "/images/Salon-mks-hair-product.jpeg", alt: "MKS salon hair-care product", name: "MKS hair care", note: "Hair-care product" },
  { src: "/images/Salon-backwash-unit-2.jpeg", alt: "Black salon wash chair with basin", name: "Salon wash chair", note: "Backwash chair" },
  { src: "/images/Salon-organics-hair-product.jpeg", alt: "Organics hair-care bottle", name: "Organics hair care", note: "Hair-care product" },
  { src: "/images/Salon-basin-sprayer.jpeg", alt: "Chrome salon basin sprayer and tap fitting", name: "Basin sprayer", note: "Salon basin fitting" },
  { src: "/images/Salon-barber-hair-product.jpeg", alt: "Barber-branded hair-care bottle", name: "Barber hair care", note: "Hair-care product" },
  { src: "/images/Salon-chair-1.jpeg", alt: "Black reclining salon chair", name: "Salon chair", note: "Reclining chair" },
  { src: "/images/Salon-chair-2.jpeg", alt: "Black salon chair with footrest", name: "Salon chair with footrest", note: "Reclining chair" },
  { src: "/images/Salon-chair-blue.jpeg", alt: "Blue salon chair with a headrest", name: "Blue salon chair", note: "Chair with headrest" },
  { src: "/images/Salon-hair-dryer.jpeg", alt: "Handheld salon hair dryer", name: "Salon hair dryer", note: "Handheld dryer" },
  { src: "/images/Salon-shower-hose.jpeg", alt: "Flexible salon wash-basin hose", name: "Basin hose", note: "Flexible hose" },
  { src: "/images/Salon-flexible-hose.jpeg", alt: "Flexible shower hose with fittings", name: "Flexible shower hose", note: "Hose with fittings" },
  { src: "/images/Salon-styling-stool.jpeg", alt: "Black salon styling stool", name: "Styling stool", note: "Salon stool" },
  { src: "/images/Salon-shampoo-basin.jpeg", alt: "White salon shampoo basin with black fittings", name: "Salon shampoo basin", note: "Basin and fittings" },
  { src: "/images/Salon-hair-clipper.jpeg", alt: "Electric hair clipper", name: "Hair clipper", note: "Electric clipper" },
  { src: "/images/Salon-chair-cream.jpeg", alt: "Cream salon styling chair", name: "Salon styling chair", note: "Cream chair" },
  { src: "/images/Salon-barber-chair.jpeg", alt: "Black barber chair with footrest", name: "Barber chair", note: "Reclining chair" },
  { src: "/images/Salon-basin-neck-rest.jpeg", alt: "Black neck rest for a salon shampoo basin", name: "Basin neck rest", note: "Salon basin accessory" },
  { src: "/images/Salon-round-hairbrush.jpeg", alt: "Round salon hairbrush", name: "Round hairbrush", note: "Styling brush" },
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
  { src: "/images/tool-pipe-wrench.jpg", alt: "Yellow 14 inch heavy-duty pipe wrench", name: "Pipe wrench", note: "14 inch" },
  { src: "/images/tool-pliers-long.jpg", alt: "Wanda long-nose pliers with blue handles", name: "Long-nose pliers", note: "Blue handles" },
  { src: "/images/tool-locking-pliers.jpg", alt: "Curved-jaw locking pliers", name: "Locking pliers", note: "Curved jaw" },
  { src: "/images/tool-rope.jpg", alt: "Coil of red and white twisted rope", name: "Twisted rope", note: "Red and white" },
  { src: "/images/elec-box-double.jpg", alt: "White double surface-mount electrical box", name: "Double surface box", note: "White, 2-gang" },
  { src: "/images/elec-box-single.jpg", alt: "White single surface-mount electrical box", name: "Single surface box", note: "White, 1-gang" },
  { src: "/images/Hardware-wall-plugs-screws.jpeg", alt: "Assorted wall plugs and screws", name: "Wall plugs and screws", note: "Wall-fixing set" },
];

/** Car spares and accessories, shown on the Products page. */
export const autoParts = [
  { src: "/images/auto-brake-shoes.jpg", alt: "Set of four drum brake shoes", name: "Brake shoes", note: "Drum brake set" },
  { src: "/images/auto-brake-drum.jpg", alt: "Rear brake drum marked Etios", name: "Brake drum", note: "Rear drum" },
  { src: "/images/auto-brake-disc.jpg", alt: "Ventilated front brake disc", name: "Brake disc", note: "Ventilated front disc" },
  { src: "/images/auto-brake-adjuster-kit.jpg", alt: "Drum brake adjuster, springs and pin kit", name: "Brake adjuster kit", note: "Springs, pins and adjuster" },
  { src: "/images/auto-caliper-kit.jpg", alt: "Brake caliper rubber seal repair kit", name: "Caliper repair kit", note: "Seals, boots and dust covers" },
  { src: "/images/auto-caliper-pin.jpg", alt: "Brake caliper guide pin", name: "Caliper guide pin", note: "Slider pin" },
  { src: "/images/auto-bleed-screw.jpg", alt: "Brake bleed screw", name: "Brake bleed screw", note: "Bleeder nipple" },
  { src: "/images/auto-clutch-master.jpg", alt: "Clutch master cylinder with a fluid reservoir", name: "Clutch master cylinder", note: "With reservoir" },
  { src: "/images/auto-clutch-bearing-ford.jpg", alt: "Hydraulic clutch release bearing with its housing", name: "Clutch release bearing", note: "Hydraulic, with housing" },
  { src: "/images/auto-clutch-bearing-csc.jpg", alt: "Hydraulic concentric clutch slave cylinder", name: "Concentric slave cylinder", note: "Hydraulic clutch bearing" },
  { src: "/images/auto-carb-nissan.jpg", alt: "Complete carburettor with linkage and springs", name: "Carburettor", note: "Complete unit" },
  { src: "/images/auto-carb-toyota.jpg", alt: "Complete carburettor with wiring plug", name: "Carburettor", note: "Complete unit with plug" },
  { src: "/images/auto-carb-pump-kit.jpg", alt: "Carburettor accelerator pump repair kit", name: "Accelerator pump kit", note: "Carburettor repair" },
  { src: "/images/auto-carb-gasket-kit.jpg", alt: "Carburettor gasket and spacer set", name: "Carburettor gasket set", note: "Gaskets and sleeve" },
  { src: "/images/auto-alternator-pulley.jpg", alt: "Two alternator freewheel pulleys", name: "Alternator pulley", note: "Overrunning / freewheel" },
  { src: "/images/auto-alternator-bits.jpg", alt: "Alternator pulley bit set in a blue case", name: "Alternator pulley tool set", note: "Spline bits, M5 to M12" },
  { src: "/images/auto-starter-brushes.jpg", alt: "Starter motor carbon brushes and two bearings", name: "Starter brushes and bearings", note: "Starter motor spares" },
  { src: "/images/auto-clock-spring.jpg", alt: "Steering wheel clock spring with connectors", name: "Clock spring", note: "Steering wheel airbag coil" },
  { src: "/images/auto-air-filter.jpg", alt: "Blue cone performance air filter with a clamp", name: "Cone air filter", note: "Performance filter, with clamp" },
  { src: "/images/auto-bonnet-hinge.jpg", alt: "Steel bonnet hinge", name: "Bonnet hinge", note: "Steel hinge" },
  { src: "/images/auto-bonnet-pins.jpg", alt: "Blue bonnet pin kit with fixings", name: "Bonnet pin kit", note: "Pins, nuts and rivets" },
  { src: "/images/auto-taillamp-lens.jpg", alt: "Red, clear and amber tail lamp lens", name: "Tail lamp lens", note: "Red, clear and amber" },
  { src: "/images/auto-alligator-clips.jpg", alt: "Boxed set of alligator and battery charging clips", name: "Alligator clip set", note: "Mini, 40 mm, 50 mm and charging clips" },
  { src: "/images/auto-spring-tool.jpg", alt: "Spring-handled wire loop tool", name: "Spring tool", note: "Wire loop with spring handle" },
  { src: "/images/auto-tweeter.jpg", alt: "Carco 400 watt car tweeter in its box", name: "Carco tweeter", note: "400 W" },
];

/** Vehicle bulbs, shown on the Products page. */
export const bulbs = [
  { src: "/images/bulb-clear-single.jpg", alt: "Clear single-contact car bulb", name: "Single-contact bulb", note: "Clear, 12 V" },
  { src: "/images/bulb-clear-single-2.jpg", alt: "Clear single-contact car bulb", name: "Single-contact bulb", note: "Clear, 12 V" },
  { src: "/images/bulb-amber.jpg", alt: "Amber single-contact indicator bulb", name: "Indicator bulb", note: "Amber, single contact" },
  { src: "/images/bulb-r5w.jpg", alt: "Small 12 V 5 W R5W car bulb", name: "R5W bulb", note: "12 V 5 W" },
  { src: "/images/bulb-double.jpg", alt: "Clear double-contact brake light bulb", name: "Double-contact bulb", note: "Stop / tail" },
  { src: "/images/bulb-double-2.jpg", alt: "Clear double-contact brake light bulb", name: "Double-contact bulb", note: "Stop / tail" },
];

/** Electrical terminals, shown on the Products page. */
export const terminals = [
  { src: "/images/elec-ring-terminal.jpg", alt: "Blue insulated ring terminal", name: "Ring terminal", note: "Blue, insulated" },
  { src: "/images/elec-fork-terminal.jpg", alt: "Blue insulated fork terminal", name: "Fork terminal", note: "Blue, insulated" },
  { src: "/images/elec-piggyback-terminal.jpg", alt: "Blue insulated piggyback female terminal", name: "Piggyback terminal", note: "Blue, female" },
  { src: "/images/elec-male-terminal.jpg", alt: "Brass male spade terminal", name: "Male spade terminal", note: "Brass" },
  { src: "/images/elec-multi-adaptor.jpg", alt: "White Eurolux multi-plug adaptor", name: "Multi-plug adaptor", note: "Eurolux, white" },
];

/** Wheel covers, shown on the Products page. */
export const wheelCovers = [
  { src: "/images/hubcap-silver-12.jpg", alt: "Silver wheel cover with twelve cut-outs", name: "Wheel cover", note: "Silver, 12 vents" },
  { src: "/images/hubcap-silver-8.jpg", alt: "Silver wheel cover with eight vents", name: "Wheel cover", note: "Silver, 8 vents" },
  { src: "/images/hubcap-silver-oval.jpg", alt: "Silver wheel cover with oval vents", name: "Wheel cover", note: "Silver, oval vents" },
  { src: "/images/hubcap-silver-y.jpg", alt: "Silver wheel cover with a Y-spoke design", name: "Wheel cover", note: "Silver, Y-spoke" },
  { src: "/images/hubcap-silver-star.jpg", alt: "Silver wheel cover with a star design", name: "Wheel cover", note: "Silver, star" },
  { src: "/images/hubcap-carbon.jpg", alt: "Silver wheel cover with carbon-look black spokes", name: "Wheel cover", note: "Silver and carbon-look black" },
  { src: "/images/hubcap-small-black.jpg", alt: "Silver and black wheel cover with chrome nuts", name: "Wheel cover", note: "Silver and black" },
  { src: "/images/hubcap-silver-spoke.jpg", alt: "Silver multi-spoke wheel cover with a chrome centre", name: "Wheel cover", note: "Silver, multi-spoke" },
  { src: "/images/hubcap-black-spoke.jpg", alt: "Black multi-spoke wheel cover with a chrome centre", name: "Wheel cover", note: "Black, multi-spoke" },
];

/** Power tools and garden machines, shown on the Products page. */
export const powerTools = [
  { src: "/images/pt-drill-cordless.jpg", alt: "Ryobi 18 V cordless drill with a battery", name: "Ryobi cordless drill", note: "18 V" },
  { src: "/images/pt-impact-drill-green.jpg", alt: "Green Ryobi impact drill with a side handle", name: "Ryobi impact drill", note: "Corded, with side handle" },
  { src: "/images/pt-impact-drill-blue.jpg", alt: "Blue Ryobi 13 mm impact drill", name: "Ryobi impact drill", note: "13 mm, corded" },
  { src: "/images/pt-rotary-hammer.jpg", alt: "Ryobi rotary hammer drill with a side handle", name: "Ryobi rotary hammer", note: "Corded" },
  { src: "/images/pt-sds-hammer.jpg", alt: "Ryobi SDS rotary hammer drill", name: "Ryobi SDS hammer drill", note: "Corded" },
  { src: "/images/pt-grinder-115.jpg", alt: "Green Ryobi angle grinder", name: "Ryobi angle grinder", note: "Small, corded" },
  { src: "/images/pt-grinder-blue.jpg", alt: "Blue Ryobi angle grinder with a guard", name: "Ryobi angle grinder", note: "With guard" },
  { src: "/images/pt-grinder-large.jpg", alt: "Large Ryobi angle grinder", name: "Ryobi angle grinder", note: "Large, corded" },
  { src: "/images/pt-sander.jpg", alt: "Ryobi sheet sander with a dust bag", name: "Ryobi sander", note: "With dust bag" },
  { src: "/images/pt-jigsaw.jpg", alt: "Ryobi jig saw", name: "Ryobi jig saw", note: "Corded" },
  { src: "/images/pt-pressure-gun.jpg", alt: "Ryobi cordless pressure washer gun", name: "Ryobi pressure washer", note: "Cordless gun" },
  { src: "/images/pt-welder-red.jpg", alt: "Red Ryobi inverter arc welder", name: "Ryobi welder", note: "Inverter arc welder" },
  { src: "/images/pt-welder-small.jpg", alt: "Compact red Ryobi inverter arc welder", name: "Ryobi welder", note: "Compact inverter" },
  { src: "/images/pt-chainsaw.jpg", alt: "Ryobi petrol chainsaw with its accessories", name: "Ryobi chainsaw", note: "Petrol, with accessories" },
  { src: "/images/pt-mower-petrol.jpg", alt: "Red Ryobi petrol lawnmower", name: "Ryobi petrol lawnmower", note: "Push, with grass box" },
  { src: "/images/pt-mower-electric.jpg", alt: "Ryobi electric lawnmower", name: "Ryobi electric lawnmower", note: "2400 W" },
  { src: "/images/bosch-cordless-drill.jpg", alt: "Bosch Professional 18 V cordless combi drill with a ProCORE battery", name: "Bosch cordless drill", note: "18 V, ProCORE battery" },
  { src: "/images/bosch-impact-drill.jpg", alt: "Bosch Professional blue impact drill with a side handle", name: "Bosch impact drill", note: "Professional, corded" },
  { src: "/images/bosch-rotary-hammer.jpg", alt: "Bosch Professional rotary hammer drill", name: "Bosch rotary hammer", note: "Professional, corded" },
  { src: "/images/bosch-circular-saw-190.jpg", alt: "Bosch GKS 190 Professional circular saw", name: "Bosch GKS 190 circular saw", note: "Professional" },
  { src: "/images/bosch-circular-saw.jpg", alt: "Bosch Professional circular saw", name: "Bosch circular saw", note: "Professional, corded" },
  { src: "/images/bosch-jigsaw.jpg", alt: "Bosch Professional jig saw", name: "Bosch jig saw", note: "Professional, corded" },
  { src: "/images/bosch-grinder-kit.jpg", alt: "Bosch angle grinder with cutting discs and spare carbon brushes", name: "Bosch angle grinder", note: "With discs and spare brushes" },
  { src: "/images/bosch-sander.jpg", alt: "Bosch GEX 125-1 AE Professional random orbit sander", name: "Bosch GEX 125-1 AE sander", note: "Random orbit" },
  { src: "/images/bosch-blower.jpg", alt: "Bosch blue electric blower", name: "Bosch blower", note: "Electric" },
  { src: "/images/bosch-bit-set.jpg", alt: "Bosch screwdriver bit and socket set in a case", name: "Bosch bit and socket set", note: "With ratchet screwdriver" },
];

/** Generators and backup power, shown on the Products page. */
export const generators = [
  { src: "/images/gen-rg950.jpg", alt: "Ryobi RG-950 950 watt generator", name: "Ryobi RG-950", note: "950 W generator" },
  { src: "/images/gen-rg1200.jpg", alt: "Ryobi RG-1200 4-stroke generator", name: "Ryobi RG-1200", note: "1200 W, 4-stroke" },
  { src: "/images/gen-rg2700a.jpg", alt: "Ryobi RG2700A generator", name: "Ryobi RG2700A", note: "Generator" },
  { src: "/images/gen-inverter-3000.jpg", alt: "Ryobi RG-3000 inverter generator", name: "Ryobi RG-3000", note: "Inverter generator" },
  { src: "/images/gen-inverter-small.jpg", alt: "Small red Ryobi inverter generator with accessories", name: "Ryobi inverter generator", note: "Compact, with accessories" },
  { src: "/images/gen-inverter-2200.jpg", alt: "Ryobi RG-2200 inverter generator with accessories", name: "Ryobi RG-2200", note: "Inverter generator" },
  { src: "/images/gen-inverter-red.jpg", alt: "Red Ryobi inverter generator with accessories", name: "Ryobi inverter generator", note: "Quiet, compact" },
  { src: "/images/gen-inverter-wheeled.jpg", alt: "Ryobi inverter generator on wheels with a handle", name: "Ryobi inverter generator", note: "On wheels" },
  { src: "/images/gen-steco-7500.jpg", alt: "Steco SG-7000K 7500 watt generator on wheels", name: "Steco SG-7000K", note: "7500 W, on wheels" },
  { src: "/images/gen-steco-power-station.jpg", alt: "Steco portable power station", name: "Steco power station", note: "Portable, AC and USB outputs" },
  { src: "/images/power-apex-ups.jpg", alt: "Apex 600S battery backup unit", name: "Apex 600S UPS", note: "Battery backup" },
];

/** Home appliances and refrigerant gas, shown on the Products page. */
export const appliances = [
  { src: "/images/app-hob.jpg", alt: "Defy stainless steel four-plate electric hob", name: "Defy electric hob", note: "Four solid plates" },
  { src: "/images/app-stove-tall.jpg", alt: "Black Defy electric stove with an oven", name: "Defy electric stove", note: "Black, with oven" },
  { src: "/images/app-stove-50.jpg", alt: "Black Defy 50 cm electric stove with an oven", name: "Defy electric stove", note: "Black, compact" },
  { src: "/images/app-stove-angled.jpg", alt: "Black freestanding electric stove with an oven", name: "Electric stove", note: "Black, freestanding" },
  { src: "/images/app-microwave-manual.jpg", alt: "Silver Defy microwave with two dials", name: "Defy microwave", note: "Silver, manual dials" },
  { src: "/images/app-microwave-silver.jpg", alt: "Silver Defy microwave with a digital keypad", name: "Defy microwave", note: "Silver, digital" },
  { src: "/images/app-microwave-grey.jpg", alt: "Grey Defy microwave with a digital display", name: "Defy microwave", note: "Grey, digital" },
  { src: "/images/app-fridge-dispenser.jpg", alt: "Steel-look fridge-freezer with a water dispenser", name: "Fridge-freezer", note: "With water dispenser" },
  { src: "/images/app-fridge-backup.jpg", alt: "Fridge-freezer with a battery backup unit", name: "Fridge-freezer", note: "With backup unit" },
  { src: "/images/app-fridge-grey.jpg", alt: "Grey fridge-freezer with the freezer at the bottom", name: "Fridge-freezer", note: "Bottom freezer" },
  { src: "/images/app-chest-freezer-small.jpg", alt: "Small dark chest freezer with the lid open", name: "Chest freezer", note: "Small" },
  { src: "/images/app-chest-freezer.jpg", alt: "Silver chest freezer", name: "Chest freezer", note: "Silver" },
  { src: "/images/app-washer-top.jpg", alt: "Grey top-loading washing machine", name: "Top-loader washing machine", note: "Grey" },
  { src: "/images/app-washer-top-2.jpg", alt: "Grey top-loading washing machine with a glass lid", name: "Top-loader washing machine", note: "Glass lid" },
  { src: "/images/app-washer-twin.jpg", alt: "White twin-tub washing machine", name: "Twin-tub washing machine", note: "White" },
  { src: "/images/app-washer-front.jpg", alt: "Defy front-loading washing machine", name: "Defy front-loader", note: "Washing machine" },
  { src: "/images/app-washer-front-2.jpg", alt: "Defy grey front-loading washing machine", name: "Defy front-loader", note: "Washing machine, grey" },
  { src: "/images/app-dishwasher.jpg", alt: "Defy freestanding dishwasher", name: "Defy dishwasher", note: "Freestanding" },
  { src: "/images/app-iron-black.jpg", alt: "Defy black steam iron", name: "Defy steam iron", note: "Black" },
  { src: "/images/app-iron-purple.jpg", alt: "Defy purple steam iron, 1750 W", name: "Defy steam iron", note: "Purple, 1750 W" },
  { src: "/images/app-steam-iron.jpg", alt: "Defy steam generator iron with a base unit", name: "Defy steam generator iron", note: "With base unit" },
  { src: "/images/app-kettle.jpg", alt: "Defy dark cordless kettle", name: "Defy kettle", note: "Cordless" },
  { src: "/images/app-air-fryer.jpg", alt: "Defy black air fryer with a digital panel", name: "Defy air fryer", note: "Digital controls" },
  { src: "/images/app-gas-r600a-420.jpg", alt: "R600a isobutane refrigerant gas can, 420 g", name: "R600a refrigerant gas", note: "Isobutane, 420 g" },
  { src: "/images/app-gas-r600a-120.jpg", alt: "R600a isobutane refrigerant gas can, 120 g", name: "R600a refrigerant gas", note: "Isobutane, 120 g" },
];

/** Safety gear and workwear, shown on the Products page. */
export const safety = [
  { src: "/images/ppe-face-shield.jpg", alt: "White hard hat with a clear face shield on a display head", name: "Hard hat with face shield", note: "Clear visor" },
  { src: "/images/ppe-gloves-nitrile.jpg", alt: "Green nitrile chemical-resistant gloves", name: "Nitrile gloves", note: "Green, chemical resistant" },
  { src: "/images/ppe-gloves-coated.jpg", alt: "Blue work gloves with a black coated palm", name: "Coated work gloves", note: "Blue, palm coated" },
  { src: "/images/ppe-gloves-arc.jpg", alt: "Cream leather ARC welding gloves", name: "Leather ARC gloves", note: "Long cuff" },
  { src: "/images/ppe-gloves-leather.jpg", alt: "Brown leather heat-resistant gloves with a knitted cuff", name: "Heavy leather gloves", note: "Knitted cuff" },
  { src: "/images/ppe-boots-white.jpg", alt: "White gumboots with orange soles", name: "White gumboots", note: "Orange sole" },
  { src: "/images/ppe-boots-black.jpg", alt: "Black rubber gumboots", name: "Black gumboots", note: "Rubber" },
  { src: "/images/ppe-rain-suit.jpg", alt: "Yellow waterproof rain suit with a hood", name: "Rain suit", note: "Yellow, jacket and pants" },
  { src: "/images/ppe-hivis-vest.jpg", alt: "Yellow high-visibility vest with reflective strips and an ID pocket", name: "Hi-vis vest", note: "Reflective strips, ID pocket" },
];

/** Brass compression fittings, shown on the Products page. */
export const compressionFittings = [
  { src: "/images/cf-nut.jpg", alt: "Brass compression nut", name: "Compression nut", note: "Brass" },
  { src: "/images/cf-coupling.jpg", alt: "Brass compression straight coupling", name: "Straight coupling", note: "Brass compression" },
  { src: "/images/cf-male.jpg", alt: "Brass compression male connector", name: "Male connector", note: "Brass compression" },
  { src: "/images/cf-female.jpg", alt: "Brass compression female connector", name: "Female connector", note: "Brass compression" },
  { src: "/images/cf-female-adaptor.jpg", alt: "Brass compression female adaptor", name: "Female adaptor", note: "Brass compression" },
  { src: "/images/cf-tee.jpg", alt: "Brass compression tee", name: "Tee", note: "Brass compression" },
  { src: "/images/cf-tee-2.jpg", alt: "Brass compression equal tee", name: "Equal tee", note: "Brass compression" },
  { src: "/images/cf-female-tee.jpg", alt: "Brass compression tee with a female branch", name: "Female tee", note: "Brass compression" },
  { src: "/images/cf-elbow.jpg", alt: "Brass compression elbow", name: "Elbow", note: "Brass compression" },
  { src: "/images/cf-elbow-small.jpg", alt: "Small brass compression elbow", name: "Small elbow", note: "Brass compression" },
  { src: "/images/cf-male-elbow.jpg", alt: "Brass compression male elbow", name: "Male elbow", note: "Brass compression" },
  { src: "/images/cf-female-elbow.jpg", alt: "Brass compression female elbow", name: "Female elbow", note: "Brass compression" },
  { src: "/images/cf-wall-elbow.jpg", alt: "Brass compression wall plate elbow", name: "Wall plate elbow", note: "Brass, female" },
  { src: "/images/cf-stop-end.jpg", alt: "Brass compression stop end", name: "Stop end", note: "Brass compression" },
  { src: "/images/cf-olive.jpg", alt: "Brass compression olive ring", name: "Olive", note: "Brass compression ring" },
];

/** Galvanised and steel fittings, shown on the Products page. */
export const steelFittings = [
  { src: "/images/gv-nipple-steel.jpg", alt: "Stainless steel barrel nipple", name: "Barrel nipple", note: "Stainless steel" },
  { src: "/images/gv-hex-nipple.jpg", alt: "Galvanised hexagon nipple", name: "Hex nipple", note: "Galvanised" },
  { src: "/images/gv-elbow.jpg", alt: "Galvanised elbow with female threads", name: "Elbow", note: "Galvanised, female" },
  { src: "/images/gv-bend.jpg", alt: "Galvanised bend with female threads", name: "Bend", note: "Galvanised, female" },
  { src: "/images/gv-tee.jpg", alt: "Galvanised tee", name: "Tee", note: "Galvanised" },
  { src: "/images/gv-cross.jpg", alt: "Stainless steel cross fitting", name: "Cross", note: "Stainless steel" },
  { src: "/images/gv-socket.jpg", alt: "Galvanised socket", name: "Socket", note: "Galvanised" },
  { src: "/images/gv-reducing-socket.jpg", alt: "Galvanised reducing socket", name: "Reducing socket", note: "Galvanised" },
  { src: "/images/gv-extension.jpg", alt: "Galvanised male and female extension piece", name: "Extension piece", note: "Galvanised" },
  { src: "/images/gv-union.jpg", alt: "Galvanised union", name: "Union", note: "Galvanised" },
  { src: "/images/gv-hose-tail.jpg", alt: "Galvanised hose tail", name: "Hose tail", note: "Galvanised" },
  { src: "/images/gv-comp-coupling.jpg", alt: "Galvanised compression coupling", name: "Compression coupling", note: "Galvanised" },
  { src: "/images/gv-comp-tee.jpg", alt: "Galvanised compression tee", name: "Compression tee", note: "Galvanised" },
  { src: "/images/gv-comp-tees.jpg", alt: "Three galvanised compression tees", name: "Compression tees", note: "Galvanised" },
  { src: "/images/gv-repair-clamp.jpg", alt: "Galvanised pipe repair clamp with a threaded outlet", name: "Repair clamp", note: "Galvanised" },
  { src: "/images/gv-holderbat.jpg", alt: "Pipe holderbat with a wall plug end", name: "Pipe holderbat", note: "Wall clip" },
];

/** Gas supplies, shown on the Products page. */
export const gasSupplies = [
  { src: "/images/gas-cartridge.jpg", alt: "Blue butane-propane gas cartridge, 190 g", name: "Gas cartridge", note: "Butane-propane, 190 g" },
  { src: "/images/gas-lighter-refill.jpg", alt: "Eurogas lighter gas refill can", name: "Eurogas lighter gas", note: "Refill can" },
  { src: "/images/gas-regulator.jpg", alt: "Blue LPG gas regulator", name: "LPG regulator", note: "Blue" },
  { src: "/images/gas-fitting.jpg", alt: "Brass gas fitting with a black tip", name: "Brass gas fitting", note: "Gas" },
  { src: "/images/gas-nozzles.jpg", alt: "Four brass burner tubes", name: "Brass burner tubes", note: "Set of four" },
];

/** Cement, tile adhesive, grout and waterproofing, shown on the Products page. */
export const tilesCement = [
  { src: "/images/tc-quickmix.jpg", alt: "Quick-Mix D.I.Y. ready-to-mix mortar bag, 20 kg", name: "Quick-Mix mortar mix", note: "Ready to mix, 20 kg" },
  { src: "/images/tc-ppc-surebuild.jpg", alt: "PPC Surebuild cement bags", name: "PPC Surebuild cement", note: "General building and civil" },
  { src: "/images/tc-grout-gp-5.jpg", alt: "Tyl-Pro General Purpose Grout, 5 kg bag", name: "Tyl-Pro general purpose grout", note: "5 kg" },
  { src: "/images/tc-grout-gp-20.jpg", alt: "Tyl-Pro General Purpose Grout, 20 kg bag", name: "Tyl-Pro general purpose grout", note: "20 kg" },
  { src: "/images/tc-grout-waterproof.jpg", alt: "Tyl-Pro Waterproof Grout, 20 kg bag", name: "Tyl-Pro waterproof grout", note: "20 kg" },
  { src: "/images/tc-grout-stainfree.jpg", alt: "Tyl-Pro Tile Stain Free Grout, 20 kg bag", name: "Tyl-Pro stain-free grout", note: "20 kg" },
  { src: "/images/tc-adh-ifix.jpg", alt: "Tyl-Pro Light Weight iFix tile adhesive bag", name: "Tyl-Pro iFix tile adhesive", note: "Light weight" },
  { src: "/images/tc-adh-mosaic.jpg", alt: "Tyl-Pro Grey Mosaic Profix tile adhesive, 5 kg bag", name: "Tyl-Pro Mosaic Profix", note: "Grey tile adhesive, 5 kg" },
  { src: "/images/tc-adh-flowable6.jpg", alt: "Tyl-Pro Flowable Porcelain 6 tile adhesive, 20 kg bag", name: "Tyl-Pro Flowable Porcelain 6", note: "Tile adhesive, 20 kg" },
  { src: "/images/tc-adh-profix2.jpg", alt: "Tyl-Pro Porcelain Profix 2 tile adhesive, 20 kg bag", name: "Tyl-Pro Porcelain Profix 2", note: "Tile adhesive, 20 kg" },
  { src: "/images/tc-adh-profix12.jpg", alt: "Tyl-Pro Porcelain Profix 12 tile adhesive, 20 kg bag", name: "Tyl-Pro Porcelain Profix 12", note: "Tile adhesive, 20 kg" },
  { src: "/images/tc-adh-profix24.jpg", alt: "Tyl-Pro Porcelain Profix 24 tile adhesive, 20 kg bag", name: "Tyl-Pro Porcelain Profix 24", note: "Tile adhesive, 20 kg" },
  { src: "/images/tc-adh-lightweight24.jpg", alt: "Tyl-Pro Light Weight Porcelain Profix 24 tile adhesive bag", name: "Tyl-Pro Light Weight Profix 24", note: "Porcelain tile adhesive" },
  { src: "/images/tc-paste-proflex.jpg", alt: "Tyl-Pro Proflex paste adhesive in 1, 2 and 5 kg tubs", name: "Tyl-Pro Proflex paste adhesive", note: "1, 2 and 5 kg tubs" },
  { src: "/images/tc-cornice.jpg", alt: "Tyl-Pro cornice adhesive in 1, 2 and 5 kg tubs", name: "Tyl-Pro cornice adhesive", note: "1, 2 and 5 kg tubs" },
  { src: "/images/tc-bonding-agent.jpg", alt: "Tyl-Pro bonding agent concentrate in three bottle sizes", name: "Tyl-Pro bonding agent", note: "Concentrate" },
  { src: "/images/tc-keying-agent.jpg", alt: "Tyl-Pro keying agent in three container sizes", name: "Tyl-Pro keying agent", note: "1, 5 and 20 litre" },
  { src: "/images/tc-membrane.jpg", alt: "Tyl-Pro waterproofing membrane roll, 200 mm by 10 m", name: "Tyl-Pro waterproofing membrane", note: "200 mm x 10 m roll" },
  { src: "/images/tc-iseal.jpg", alt: "Tyl-Pro iSeal waterproofing, 20 kg bag", name: "Tyl-Pro iSeal waterproofing", note: "2-part cement system, 20 kg" },
  { src: "/images/tc-rapid-repair.jpg", alt: "Tyl-Pro Rapid Repair and Anchoring Cement, 20 kg bag", name: "Tyl-Pro rapid repair cement", note: "Repair and anchoring, 20 kg" },
  { src: "/images/tc-pool-plaster.jpg", alt: "Tyl-Pro Proskim Pool Plaster, 40 kg bag", name: "Tyl-Pro Proskim pool plaster", note: "Marble skimming plaster, 40 kg" },
  { src: "/images/cem-766.jpg", alt: "PPC Surebuild cement, premium multipurpose, general building and civil", name: "PPC Surebuild cement", note: "Premium multipurpose, general building and civil" },
  { src: "/images/cem-768.jpg", alt: "PPC Surebuild 42,5 N cement, for concrete, mortar and plaster", name: "PPC Surebuild 42,5 N cement", note: "For concrete, mortar and plaster" },
  { src: "/images/cem-767.jpg", alt: "PPC Surecem cement, early strength, concrete, mortar, plaster and bricks", name: "PPC Surecem cement", note: "Early strength, concrete, mortar, plaster and bricks" },
];

/** Fans and heaters, shown on the Products page. */
export const fans = [
  { src: "/images/fan-229.jpg", alt: "Box fan, eurolux, speed and timer dials", name: "Box fan", note: "Eurolux, speed and timer dials" },
  { src: "/images/fan-231.jpg", alt: "Ceiling fan with light, white, remote control", name: "Ceiling fan with light", note: "White, remote control" },
  { src: "/images/fan-233.jpg", alt: "Wall fan, eurolux, industrial chrome", name: "Wall fan", note: "Eurolux, industrial chrome" },
  { src: "/images/fan-237.jpg", alt: "Rechargeable desk fan, eurolux f105", name: "Rechargeable desk fan", note: "Eurolux F105" },
  { src: "/images/fan-239.jpg", alt: "Table fan, eurolux, white", name: "Table fan", note: "Eurolux, white" },
  { src: "/images/fan-241.jpg", alt: "Ceiling extractor fan, eurolux f30w, 40 w", name: "Ceiling extractor fan", note: "Eurolux F30W, 40 W" },
];

/** Copper wire, shown on the Products page. */
export const copperWire = [
  { src: "/images/wire-243.jpg", alt: "Enamelled copper wire, block cul, 1.00 mm spool", name: "Enamelled copper wire", note: "Block CUL, 1.00 mm spool" },
  { src: "/images/wire-245.jpg", alt: "Copper winding wire, large spool", name: "Copper winding wire", note: "Large spool" },
  { src: "/images/wire-247.jpg", alt: "Flat copper wire, enamelled, on a reel", name: "Flat copper wire", note: "Enamelled, on a reel" },
  { src: "/images/wire-249.jpg", alt: "Copper wire spools, stacked reels", name: "Copper wire spools", note: "Stacked reels" },
  { src: "/images/wire-251.jpg", alt: "Copper wire, small spool", name: "Copper wire", note: "Small spool" },
];

/** Light bulbs, shown on the Products page. */
export const lamps = [
  { src: "/images/bulb-253.jpg", alt: "Oven bulb, eurolux 25 w, clear golfball", name: "Oven bulb", note: "Eurolux 25 W, clear golfball" },
  { src: "/images/bulb-254.jpg", alt: "Rechargeable LED bulb, eurolux 6 w, daylight", name: "Rechargeable LED bulb", note: "Eurolux 6 W, daylight" },
  { src: "/images/bulb-258.jpg", alt: "Infrared heat lamp, red", name: "Infrared heat lamp", note: "Red" },
  { src: "/images/bulb-260.jpg", alt: "Dusk-to-dawn CFL bulb, eurolux 15 w, cool white", name: "Dusk-to-dawn CFL bulb", note: "Eurolux 15 W, cool white" },
  { src: "/images/bulb-261.jpg", alt: "MR16 LED lamp, eurolux 5 w, cool white", name: "MR16 LED lamp", note: "Eurolux 5 W, cool white" },
  { src: "/images/bulb-263.jpg", alt: "LED globe bulb, eurolux 15 w a60, daylight", name: "LED globe bulb", note: "Eurolux 15 W A60, daylight" },
  { src: "/images/bulb-264.jpg", alt: "LED globe bulb, eurolux 6 w, warm white", name: "LED globe bulb", note: "Eurolux 6 W, warm white" },
  { src: "/images/bulb-265.jpg", alt: "LED candle bulbs, eurolux 5 w, twin pack, warm white", name: "LED candle bulbs", note: "Eurolux 5 W, twin pack, warm white" },
];

/** Floodlights, solar and string lights, shown on the Products page. */
export const floodSolar = [
  { src: "/images/flood-257.jpg", alt: "LED twin-pack floodlight, eurolux 10 w", name: "LED twin-pack floodlight", note: "Eurolux 10 W" },
  { src: "/images/flood-294.jpg", alt: "LED floodlight on tripod, eurolux 2 x 20 w, yellow tripod", name: "LED floodlight on tripod", note: "Eurolux 2 x 20 W, yellow tripod" },
  { src: "/images/flood-295.jpg", alt: "LED floodlight with motion sensor, eurolux 50 w", name: "LED floodlight with motion sensor", note: "Eurolux 50 W" },
  { src: "/images/flood-296.jpg", alt: "Premium LED floodlight, eurolux 50 w, grey", name: "Premium LED floodlight", note: "Eurolux 50 W, grey" },
  { src: "/images/flood-297.jpg", alt: "LED floodlight, eurolux 10 w", name: "LED floodlight", note: "Eurolux 10 W" },
  { src: "/images/flood-314.jpg", alt: "Solar wall light, eurolux 10 w, motion sensor", name: "Solar wall light", note: "Eurolux 10 W, motion sensor" },
  { src: "/images/flood-315.jpg", alt: "Solar garden spotlight, eurolux, switchable colour temperature", name: "Solar garden spotlight", note: "Eurolux, switchable colour temperature" },
  { src: "/images/flood-318.jpg", alt: "Solar spotlight, eurolux 8 w, spike or wall mount", name: "Solar spotlight", note: "Eurolux 8 W, spike or wall mount" },
  { src: "/images/flood-319.jpg", alt: "Solar spotlight, eurolux 4 w, spike or wall mount", name: "Solar spotlight", note: "Eurolux 4 W, spike or wall mount" },
  { src: "/images/flood-320.jpg", alt: "Solar motion wall light, eurolux, rechargeable", name: "Solar motion wall light", note: "Eurolux, rechargeable" },
  { src: "/images/flood-321.jpg", alt: "Solar lantern and torch, eurolux 5 w, with solar panel", name: "Solar lantern and torch", note: "Eurolux 5 W, with solar panel" },
  { src: "/images/flood-322.jpg", alt: "Solar 3-in-1 light, eurolux, stainless steel", name: "Solar 3-in-1 light", note: "Eurolux, stainless steel" },
  { src: "/images/flood-323.jpg", alt: "Solar garden spike light, eurolux, crackle glass", name: "Solar garden spike light", note: "Eurolux, crackle glass" },
  { src: "/images/flood-316.jpg", alt: "Rechargeable LED lantern, eurolux, usb output", name: "Rechargeable LED lantern", note: "Eurolux, USB output" },
  { src: "/images/flood-235.jpg", alt: "LED string lights, eurolux, 500 warm white, 50 m", name: "LED string lights", note: "Eurolux, 500 warm white, 50 m" },
  { src: "/images/flood-305.jpg", alt: "Party string lights, eurolux, 10 warm white lamps, 7 m", name: "Party string lights", note: "Eurolux, 10 warm white lamps, 7 m" },
  { src: "/images/flood-306.jpg", alt: "LED string lights, eurolux, 10 warm white lamps", name: "LED string lights", note: "Eurolux, 10 warm white lamps" },
  { src: "/images/flood-310.jpg", alt: "Multi-colour party lights, eurolux, 10 lamps, 5 colours", name: "Multi-colour party lights", note: "Eurolux, 10 lamps, 5 colours" },
];

/** Lamp posts and bollards, shown on the Products page. */
export const bollards = [
  { src: "/images/post-267.jpg", alt: "Double lantern lamp post, black", name: "Double lantern lamp post", note: "Black" },
  { src: "/images/post-268.jpg", alt: "Globe bollard light, opal globe, black base", name: "Globe bollard light", note: "Opal globe, black base" },
  { src: "/images/post-269.jpg", alt: "Clear globe light, black base, filament lamp", name: "Clear globe light", note: "Black base, filament lamp" },
  { src: "/images/post-270.jpg", alt: "Lantern bollard light, black, tall", name: "Lantern bollard light", note: "Black, tall" },
  { src: "/images/post-271.jpg", alt: "Clear globe bollard light, black base, with lamp", name: "Clear globe bollard light", note: "Black base, with lamp" },
  { src: "/images/post-272.jpg", alt: "Opal globe light, black base", name: "Opal globe light", note: "Black base" },
  { src: "/images/post-273.jpg", alt: "Lantern pedestal light, white", name: "Lantern pedestal light", note: "White" },
  { src: "/images/post-274.jpg", alt: "Square bollard light, black, glass cage", name: "Square bollard light", note: "Black, glass cage" },
  { src: "/images/post-275.jpg", alt: "Cylinder bollard light, black, opal top", name: "Cylinder bollard light", note: "Black, opal top" },
  { src: "/images/post-278.jpg", alt: "Cylinder garden light, black, short", name: "Cylinder garden light", note: "Black, short" },
  { src: "/images/post-279.jpg", alt: "Pyramid-top bollard light, black, led", name: "Pyramid-top bollard light", note: "Black, LED" },
];

/** Outdoor wall lights and bulkheads, shown on the Products page. */
export const outdoorWall = [
  { src: "/images/wall-276.jpg", alt: "Round bulkhead light, black", name: "Round bulkhead light", note: "Black" },
  { src: "/images/wall-277.jpg", alt: "Round bulkhead light, white", name: "Round bulkhead light", note: "White" },
  { src: "/images/wall-282.jpg", alt: "Round bulkhead light, black, clear, led compatible", name: "Round bulkhead light", note: "Black, clear, LED compatible" },
  { src: "/images/wall-290.jpg", alt: "Round bulkhead light, white, clear cover", name: "Round bulkhead light", note: "White, clear cover" },
  { src: "/images/wall-286.jpg", alt: "Rectangular bulkhead light, clear ribbed cover", name: "Rectangular bulkhead light", note: "Clear ribbed cover" },
  { src: "/images/wall-280.jpg", alt: "Wall light, black, angled", name: "Wall light", note: "Black, angled" },
  { src: "/images/wall-281.jpg", alt: "Up and down wall light, dark grey", name: "Up and down wall light", note: "Dark grey" },
  { src: "/images/wall-283.jpg", alt: "Curved wall light, black", name: "Curved wall light", note: "Black" },
  { src: "/images/wall-284.jpg", alt: "Eyelid wall light, white, round", name: "Eyelid wall light", note: "White, round" },
  { src: "/images/wall-285.jpg", alt: "Square wall light, white", name: "Square wall light", note: "White" },
  { src: "/images/wall-287.jpg", alt: "Square wall light, black", name: "Square wall light", note: "Black" },
  { src: "/images/wall-289.jpg", alt: "Round wall light, black", name: "Round wall light", note: "Black" },
  { src: "/images/wall-288.jpg", alt: "Surface cylinder light, white", name: "Surface cylinder light", note: "White" },
  { src: "/images/wall-292.jpg", alt: "Surface cylinder light, grey", name: "Surface cylinder light", note: "Grey" },
  { src: "/images/wall-293.jpg", alt: "Surface cylinder light, black", name: "Surface cylinder light", note: "Black" },
  { src: "/images/wall-326.jpg", alt: "Globe wall light, clear globe, black bracket", name: "Globe wall light", note: "Clear globe, black bracket" },
  { src: "/images/wall-327.jpg", alt: "Lantern wall light, black, half lantern", name: "Lantern wall light", note: "Black, half lantern" },
  { src: "/images/wall-311.jpg", alt: "Hanging lantern, white, chain", name: "Hanging lantern", note: "White, chain" },
  { src: "/images/wall-312.jpg", alt: "Hanging lantern, black", name: "Hanging lantern", note: "Black" },
];

/** Garden spike and in-ground lights, shown on the Products page. */
export const gardenSpots = [
  { src: "/images/spot-298.jpg", alt: "Garden spike light, black, round head", name: "Garden spike light", note: "Black, round head" },
  { src: "/images/spot-299.jpg", alt: "Garden spike spotlight, dark grey", name: "Garden spike spotlight", note: "Dark grey" },
  { src: "/images/spot-300.jpg", alt: "Garden spike spotlight, black, compact", name: "Garden spike spotlight", note: "Black, compact" },
  { src: "/images/spot-303.jpg", alt: "Garden spike spotlight, eurolux, halogen", name: "Garden spike spotlight", note: "Eurolux, halogen" },
  { src: "/images/spot-304.jpg", alt: "Double garden spike spotlight, black", name: "Double garden spike spotlight", note: "Black" },
  { src: "/images/spot-301.jpg", alt: "In-ground light, grey, round", name: "In-ground light", note: "Grey, round" },
  { src: "/images/spot-302.jpg", alt: "In-ground light, black, round", name: "In-ground light", note: "Black, round" },
  { src: "/images/spot-307.jpg", alt: "In-ground light, grey, two-way", name: "In-ground light", note: "Grey, two-way" },
  { src: "/images/spot-308.jpg", alt: "In-ground light, black, three-way", name: "In-ground light", note: "Black, three-way" },
  { src: "/images/spot-313.jpg", alt: "Garden spotlight, black, adjustable", name: "Garden spotlight", note: "Black, adjustable" },
  { src: "/images/spot-317.jpg", alt: "Garden spotlight, black, halogen", name: "Garden spotlight", note: "Black, halogen" },
  { src: "/images/spot-324.jpg", alt: "Wall spotlight, white", name: "Wall spotlight", note: "White" },
  { src: "/images/spot-325.jpg", alt: "Wall spotlight, black", name: "Wall spotlight", note: "Black" },
];

/** Ceiling lights and downlights, shown on the Products page. */
export const ceilingLights = [
  { src: "/images/ceil-255.jpg", alt: "Switchable LED downlight, eurolux", name: "Switchable LED downlight", note: "Eurolux" },
  { src: "/images/ceil-369.jpg", alt: "Downlight, eurolux d176w, white", name: "Downlight", note: "Eurolux D176W, white" },
  { src: "/images/ceil-370.jpg", alt: "Downlight, eurolux d176b, black", name: "Downlight", note: "Eurolux D176B, black" },
  { src: "/images/ceil-259.jpg", alt: "Three-spot ceiling light, black chrome", name: "Three-spot ceiling light", note: "Black chrome" },
  { src: "/images/ceil-262.jpg", alt: "Two-spot ceiling light, white", name: "Two-spot ceiling light", note: "White" },
  { src: "/images/ceil-331.jpg", alt: "Multi-arm ceiling light, black, filament bulbs", name: "Multi-arm ceiling light", note: "Black, filament bulbs" },
  { src: "/images/ceil-328.jpg", alt: "Glass ceiling light, alabaster, brass trim", name: "Glass ceiling light", note: "Alabaster, brass trim" },
  { src: "/images/ceil-339.jpg", alt: "Glass ceiling light, line pattern", name: "Glass ceiling light", note: "Line pattern" },
  { src: "/images/ceil-341.jpg", alt: "Glass ceiling light, swirl pattern", name: "Glass ceiling light", note: "Swirl pattern" },
  { src: "/images/ceil-343.jpg", alt: "Glass ceiling light, triangle pattern", name: "Glass ceiling light", note: "Triangle pattern" },
  { src: "/images/ceil-356.jpg", alt: "Glass ceiling light, leaf pattern", name: "Glass ceiling light", note: "Leaf pattern" },
  { src: "/images/ceil-342.jpg", alt: "Crystal ceiling light, chrome, flush", name: "Crystal ceiling light", note: "Chrome, flush" },
  { src: "/images/ceil-346.jpg", alt: "Glass ball ceiling light, textured clear", name: "Glass ball ceiling light", note: "Textured clear" },
  { src: "/images/ceil-329.jpg", alt: "LED batten light, black", name: "LED batten light", note: "Black" },
  { src: "/images/ceil-330.jpg", alt: "LED batten light, white", name: "LED batten light", note: "White" },
  { src: "/images/ceil-347.jpg", alt: "LED batten light, white, curved", name: "LED batten light", note: "White, curved" },
  { src: "/images/ceil-332.jpg", alt: "Round LED ceiling light, eurolux 24 w, 3 colour temperatures", name: "Round LED ceiling light", note: "Eurolux 24 W, 3 colour temperatures" },
  { src: "/images/ceil-333.jpg", alt: "Round ceiling light, white", name: "Round ceiling light", note: "White" },
  { src: "/images/ceil-334.jpg", alt: "Round ceiling light, black rim", name: "Round ceiling light", note: "Black rim" },
  { src: "/images/ceil-350.jpg", alt: "Round LED ceiling light, aluminium rim", name: "Round LED ceiling light", note: "Aluminium rim" },
  { src: "/images/ceil-351.jpg", alt: "Round LED ceiling light, white", name: "Round LED ceiling light", note: "White" },
  { src: "/images/ceil-337.jpg", alt: "Round LED surface light, white", name: "Round LED surface light", note: "White" },
  { src: "/images/ceil-338.jpg", alt: "Square LED surface light, white", name: "Square LED surface light", note: "White" },
  { src: "/images/ceil-352.jpg", alt: "Square LED ceiling light, white", name: "Square LED ceiling light", note: "White" },
  { src: "/images/ceil-335.jpg", alt: "Flush ceiling light, satin nickel rim", name: "Flush ceiling light", note: "Satin nickel rim" },
  { src: "/images/ceil-336.jpg", alt: "Flush ceiling light, white rim", name: "Flush ceiling light", note: "White rim" },
  { src: "/images/ceil-354.jpg", alt: "Flush ceiling light, satin nickel, round", name: "Flush ceiling light", note: "Satin nickel, round" },
  { src: "/images/ceil-355.jpg", alt: "Dome ceiling light, brushed nickel", name: "Dome ceiling light", note: "Brushed nickel" },
  { src: "/images/ceil-348.jpg", alt: "Frosted bowl ceiling light, white", name: "Frosted bowl ceiling light", note: "White" },
  { src: "/images/ceil-349.jpg", alt: "Opal ceiling light, white, round", name: "Opal ceiling light", note: "White, round" },
  { src: "/images/ceil-353.jpg", alt: "Bathroom ceiling light, chrome rim", name: "Bathroom ceiling light", note: "Chrome rim" },
];

/** Chandeliers, shown on the Products page. */
export const chandeliers = [
  { src: "/images/chand-357.jpg", alt: "Crystal tiered chandelier, chrome", name: "Crystal tiered chandelier", note: "Chrome" },
  { src: "/images/chand-358.jpg", alt: "Three-arm chandelier, chrome, crystal drops", name: "Three-arm chandelier", note: "Chrome, crystal drops" },
  { src: "/images/chand-359.jpg", alt: "Three-arm chandelier, black", name: "Three-arm chandelier", note: "Black" },
  { src: "/images/chand-363.jpg", alt: "Three-arm chandelier, white", name: "Three-arm chandelier", note: "White" },
  { src: "/images/chand-367.jpg", alt: "Three-arm chandelier, bronze, amber drops", name: "Three-arm chandelier", note: "Bronze, amber drops" },
  { src: "/images/chand-362.jpg", alt: "Five-arm chandelier, chrome, crystal drops", name: "Five-arm chandelier", note: "Chrome, crystal drops" },
  { src: "/images/chand-364.jpg", alt: "Five-arm chandelier, white", name: "Five-arm chandelier", note: "White" },
  { src: "/images/chand-365.jpg", alt: "Five-arm chandelier, chrome, glass arms", name: "Five-arm chandelier", note: "Chrome, glass arms" },
  { src: "/images/chand-368.jpg", alt: "Five-arm chandelier, satin nickel", name: "Five-arm chandelier", note: "Satin nickel" },
  { src: "/images/chand-361.jpg", alt: "Six-arm chandelier, black, acrylic drops", name: "Six-arm chandelier", note: "Black, acrylic drops" },
  { src: "/images/chand-366.jpg", alt: "Drum-shade chandelier, chrome shade, crystal drops", name: "Drum-shade chandelier", note: "Chrome shade, crystal drops" },
];

/** Padlocks, shown on the Products page. */
export const padlocks = [
  { src: "/images/lock-396.jpg", alt: "Disc padlock, stainless steel", name: "Disc padlock", note: "Stainless steel" },
  { src: "/images/lock-399.jpg", alt: "Brass padlock, hardened shackle", name: "Brass padlock", note: "Hardened shackle" },
  { src: "/images/lock-414.jpg", alt: "Brass padlock, with spare pins and keys", name: "Brass padlock", note: "With spare pins and keys" },
  { src: "/images/lock-403.jpg", alt: "Closed-shackle padlock, brass", name: "Closed-shackle padlock", note: "Brass" },
  { src: "/images/lock-410.jpg", alt: "Shutter padlock, brass, sliding bar", name: "Shutter padlock", note: "Brass, sliding bar" },
  { src: "/images/lock-400.jpg", alt: "Abus Granit padlock, black, hardened shackle", name: "Abus Granit padlock", note: "Black, hardened shackle" },
  { src: "/images/lock-407.jpg", alt: "Heavy-duty padlock, steel, rubber-capped", name: "Heavy-duty padlock", note: "Steel, rubber-capped" },
  { src: "/images/lock-404.jpg", alt: "Iron padlock, brass name plate", name: "Iron padlock", note: "Brass name plate" },
  { src: "/images/lock-411.jpg", alt: "Stainless steel padlock, satin finish", name: "Stainless steel padlock", note: "Satin finish" },
  { src: "/images/lock-415.jpg", alt: "Titalium padlock, hardened shackle", name: "Titalium padlock", note: "Hardened shackle" },
  { src: "/images/lock-409.jpg", alt: "Weatherproof padlock, blue cover", name: "Weatherproof padlock", note: "Blue cover" },
  { src: "/images/lock-420.jpg", alt: "Weatherproof padlock, blue, black shackle", name: "Weatherproof padlock", note: "Blue, black shackle" },
  { src: "/images/lock-408.jpg", alt: "Combination padlock, brass, 3 dials", name: "Combination padlock", note: "Brass, 3 dials" },
  { src: "/images/lock-416.jpg", alt: "Cable combination padlock, 3 dials, steel cable", name: "Cable combination padlock", note: "3 dials, steel cable" },
  { src: "/images/lock-402.jpg", alt: "Abus fingerprint padlock, touch padlock", name: "Abus fingerprint padlock", note: "Touch padlock" },
  { src: "/images/lock-405.jpg", alt: "Abus fingerprint padlock, touch padlock, silver", name: "Abus fingerprint padlock", note: "Touch padlock, silver" },
  { src: "/images/lock-406.jpg", alt: "Smart padlock, silver, cylinder base", name: "Smart padlock", note: "Silver, cylinder base" },
  { src: "/images/lock-412.jpg", alt: "Safety lockout padlock, red, danger label", name: "Safety lockout padlock", note: "Red, danger label" },
  { src: "/images/lock-413.jpg", alt: "Plastic padlock, red body", name: "Plastic padlock", note: "Red body" },
];

/** Mortice locks, deadbolts and rim locks, shown on the Products page. */
export const mortiseLocks = [
  { src: "/images/lock-417.jpg", alt: "Mortice lock, 4 lever, brass, with keys and screws", name: "Mortice lock, 4 lever", note: "Brass, with keys and screws" },
  { src: "/images/lock-421.jpg", alt: "Mortice lock, 4 lever, chrome, with keys and screws", name: "Mortice lock, 4 lever", note: "Chrome, with keys and screws" },
  { src: "/images/lock-427.jpg", alt: "Mortice lock, 3 lever, brass", name: "Mortice lock", note: "3 lever, brass" },
  { src: "/images/lock-428.jpg", alt: "Mortice lock, 3 lever, chrome", name: "Mortice lock", note: "3 lever, chrome" },
  { src: "/images/lock-418.jpg", alt: "Euro profile mortice lock, bronze faceplate", name: "Euro profile mortice lock", note: "Bronze faceplate" },
  { src: "/images/lock-419.jpg", alt: "Euro profile mortice lock, narrow, stainless", name: "Euro profile mortice lock", note: "Narrow, stainless" },
  { src: "/images/lock-423.jpg", alt: "Euro profile mortice lock, stainless faceplate", name: "Euro profile mortice lock", note: "Stainless faceplate" },
  { src: "/images/lock-424.jpg", alt: "Euro profile mortice lock, brass faceplate", name: "Euro profile mortice lock", note: "Brass faceplate" },
  { src: "/images/lock-422.jpg", alt: "Cylinder mortice deadlock, brass faceplate", name: "Cylinder mortice deadlock", note: "Brass faceplate" },
  { src: "/images/lock-425.jpg", alt: "Deadbolt, satin stainless, keyed", name: "Deadbolt", note: "Satin stainless, keyed" },
  { src: "/images/lock-426.jpg", alt: "Entrance knob set, satin stainless, keyed", name: "Entrance knob set", note: "Satin stainless, keyed" },
  { src: "/images/lock-429.jpg", alt: "Rim lock with knobs, black case, brass-finish knobs", name: "Rim lock with knobs", note: "Black case, brass-finish knobs" },
  { src: "/images/lock-430.jpg", alt: "Rim lock with knobs, black, black knobs", name: "Rim lock with knobs", note: "Black, black knobs" },
  { src: "/images/lock-431.jpg", alt: "Rim lock with knobs, black case, brown knobs", name: "Rim lock with knobs", note: "Black case, brown knobs" },
];

/** Night latches and gate locks, shown on the Products page. */
export const latchesGates = [
  { src: "/images/lock-461.jpg", alt: "Night latch, brass-finish oval knob", name: "Night latch", note: "Brass-finish oval knob" },
  { src: "/images/lock-467.jpg", alt: "Yale night latch, brass-finish oval knob", name: "Yale night latch", note: "Brass-finish oval knob" },
  { src: "/images/lock-462.jpg", alt: "CISA rim lock, grey, square knob", name: "CISA rim lock", note: "Grey, square knob" },
  { src: "/images/lock-463.jpg", alt: "Night latch, bronze, chrome knob", name: "Night latch", note: "Bronze, chrome knob" },
  { src: "/images/lock-468.jpg", alt: "Union night latch, bronze, chrome knob", name: "Union night latch", note: "Bronze, chrome knob" },
  { src: "/images/lock-472.jpg", alt: "Gate lock, brass-plated, keyhole", name: "Gate lock", note: "Brass-plated, keyhole" },
  { src: "/images/lock-473.jpg", alt: "Gate lock, cylinder, stainless faceplate", name: "Gate lock", note: "Cylinder, stainless faceplate" },
  { src: "/images/lock-476.jpg", alt: "Double-bolt gate lock, grey, two pins", name: "Double-bolt gate lock", note: "Grey, two pins" },
  { src: "/images/lock-474.jpg", alt: "Ultra gate lock, steel box, with keys", name: "Ultra gate lock", note: "Steel box, with keys" },
  { src: "/images/lock-475.jpg", alt: "Gate box lock, plain steel", name: "Gate box lock", note: "Plain steel" },
  { src: "/images/lock-478.jpg", alt: "Ultra gate bolt lock, steel box", name: "Ultra gate bolt lock", note: "Steel box" },
  { src: "/images/lock-479.jpg", alt: "Ultra gate bolt lock, takes a padlock", name: "Ultra gate bolt lock", note: "Takes a padlock" },
  { src: "/images/lock-480.jpg", alt: "Ultra gate lock, double bolt, with keys", name: "Ultra gate lock", note: "Double bolt, with keys" },
];

/** Cylinders and keys, shown on the Products page. */
export const cylinders = [
  { src: "/images/lock-465.jpg", alt: "Euro cylinder, brass, with 3 keys", name: "Euro cylinder", note: "Brass, with 3 keys" },
  { src: "/images/lock-469.jpg", alt: "Euro cylinder, chrome, with 3 keys", name: "Euro cylinder", note: "Chrome, with 3 keys" },
  { src: "/images/lock-466.jpg", alt: "Euro cylinder, nickel, with 3 keys", name: "Euro cylinder", note: "Nickel, with 3 keys" },
  { src: "/images/lock-470.jpg", alt: "Euro cylinder, satin nickel, with key", name: "Euro cylinder", note: "Satin nickel, with key" },
  { src: "/images/lock-471.jpg", alt: "CISA key, nickel, made in italy", name: "CISA key", note: "Nickel, made in Italy" },
  { src: "/images/yale-781.jpg", alt: "Yale euro cylinder, nickel, with 3 keys", name: "Yale euro cylinder", note: "Nickel, with 3 keys" },
  { src: "/images/yale-776.jpg", alt: "Yale euro cylinder, satin nickel, with 3 keys and screw", name: "Yale euro cylinder", note: "Satin nickel, with 3 keys and screw" },
  { src: "/images/yale-780.jpg", alt: "Yale euro cylinders, nickel, pair with 4 keys", name: "Yale euro cylinders", note: "Nickel, pair with 4 keys" },
  { src: "/images/yale-783.jpg", alt: "Yale euro cylinder, brass, with 3 keys", name: "Yale euro cylinder", note: "Brass, with 3 keys" },
  { src: "/images/yale-784.jpg", alt: "Yale euro cylinders, brass, pair with keys and screws", name: "Yale euro cylinders", note: "Brass, pair with keys and screws" },
  { src: "/images/yale-779.jpg", alt: "Yale euro cylinders, brass, pair with 4 keys", name: "Yale euro cylinders", note: "Brass, pair with 4 keys" },
  { src: "/images/yale-785.jpg", alt: "Yale euro cylinder, black, with 3 keys", name: "Yale euro cylinder", note: "Black, with 3 keys" },
  { src: "/images/yale-786.jpg", alt: "Yale euro cylinder, black, with keys and screw", name: "Yale euro cylinder", note: "Black, with keys and screw" },
  { src: "/images/yale-774.jpg", alt: "Yale euro cylinders, black, pair with 4 keys", name: "Yale euro cylinders", note: "Black, pair with 4 keys" },
  { src: "/images/yale-782.jpg", alt: "Yale thumbturn cylinder, black, with 3 keys and screw", name: "Yale thumbturn cylinder", note: "Black, with 3 keys and screw" },
  { src: "/images/yale-787.jpg", alt: "Yale thumbturn cylinder, brass, with 3 keys and screw", name: "Yale thumbturn cylinder", note: "Brass, with 3 keys and screw" },
  { src: "/images/yale-788.jpg", alt: "Yale oval cylinder, nickel, with keys and screw", name: "Yale oval cylinder", note: "Nickel, with keys and screw" },
  { src: "/images/yale-775.jpg", alt: "Yale bullet cylinder, brass, with keys", name: "Yale bullet cylinder", note: "Brass, with keys" },
  { src: "/images/yale-778.jpg", alt: "Yale barrel cylinder, satin, brass core, with keys", name: "Yale barrel cylinder", note: "Satin, brass core, with keys" },
];

/** Door handles, shown on the Products page. */
export const doorHandles = [
  { src: "/images/lock-445.jpg", alt: "Lever handle on rose, satin chrome, with escutcheons", name: "Lever handle on rose", note: "Satin chrome, with escutcheons" },
  { src: "/images/lock-447.jpg", alt: "Lever handle on rose, satin steel, with escutcheons", name: "Lever handle on rose", note: "Satin steel, with escutcheons" },
  { src: "/images/lock-446.jpg", alt: "Lever handle on plate, satin chrome, keyhole", name: "Lever handle on plate", note: "Satin chrome, keyhole" },
  { src: "/images/lock-448.jpg", alt: "Lever handle on plate, chrome, keyhole", name: "Lever handle on plate", note: "Chrome, keyhole" },
  { src: "/images/lock-452.jpg", alt: "Aluminium door handle, narrow plate, euro cylinder", name: "Aluminium door handle", note: "Narrow plate, euro cylinder" },
  { src: "/images/lock-451.jpg", alt: "Door lock set, square rose handles, 3 lever lock", name: "Door lock set", note: "Square rose handles, 3 lever lock" },
  { src: "/images/lock-449.jpg", alt: "Door lock set, dark chrome plate handles, 3 lever lock", name: "Door lock set", note: "Dark chrome plate handles, 3 lever lock" },
  { src: "/images/lock-450.jpg", alt: "Door lock set, brass plate handles, 3 lever lock", name: "Door lock set", note: "Brass plate handles, 3 lever lock" },
  { src: "/images/lock-453.jpg", alt: "Door lock set, chrome handles, euro lock", name: "Door lock set", note: "Chrome handles, euro lock" },
  { src: "/images/lock-454.jpg", alt: "Door lock set, chrome handles, 2 lever lock", name: "Door lock set", note: "Chrome handles, 2 lever lock" },
  { src: "/images/lock-455.jpg", alt: "Door lock set, chrome handles, 2 lever lock, black case", name: "Door lock set", note: "Chrome handles, 2 lever lock, black case" },
  { src: "/images/clamp-851.jpg", alt: "Lockworx lever handle on plate, satin steel, keyhole, with screws and spindle", name: "Lockworx lever handle on plate", note: "Satin steel, keyhole, with screws and spindle" },
  { src: "/images/clamp-852.jpg", alt: "BBL curved lever handle on plate, satin steel, keyhole, with screws and spindle", name: "BBL curved lever handle on plate", note: "Satin steel, keyhole, with screws and spindle" },
];

/** Door closers, shown on the Products page. */
export const doorClosers = [
  { src: "/images/lock-456.jpg", alt: "Door closer, bbl, silver", name: "Door closer", note: "BBL, silver" },
  { src: "/images/lock-457.jpg", alt: "CISA door closer, silver", name: "CISA door closer", note: "Silver" },
  { src: "/images/lock-458.jpg", alt: "Door closer, silver, arm closed", name: "Door closer", note: "Silver, arm closed" },
  { src: "/images/lock-459.jpg", alt: "Dortec door closer, silver", name: "Dortec door closer", note: "Silver" },
  { src: "/images/lock-460.jpg", alt: "Yale door closer, silver, arm separate", name: "Yale door closer", note: "Silver, arm separate" },
  { src: "/images/lock-464.jpg", alt: "Union door closer, grey, with arm", name: "Union door closer", note: "Grey, with arm" },
];

/** Car keys and remote shells, shown on the Products page. */
export const carKeys = [
  { src: "/images/lock-435.jpg", alt: "Flip key, 3 button, black, chrome edge", name: "Flip key, 3 button", note: "Black, chrome edge" },
  { src: "/images/lock-439.jpg", alt: "Flip key, 3 button, silca", name: "Flip key, 3 button", note: "Silca" },
  { src: "/images/lock-440.jpg", alt: "Flip key with blades, silca, 3 button, spare blades", name: "Flip key with blades", note: "Silca, 3 button, spare blades" },
  { src: "/images/lock-441.jpg", alt: "Flip key, 2 button, keydiy, water resistant", name: "Flip key, 2 button", note: "Keydiy, water resistant" },
  { src: "/images/lock-433.jpg", alt: "Remote key shell, 4 button, honda style", name: "Remote key shell", note: "4 button, Honda style" },
  { src: "/images/lock-443.jpg", alt: "Remote key shell, 3 button, honda style", name: "Remote key shell", note: "3 button, Honda style" },
  { src: "/images/lock-444.jpg", alt: "Transponder key shell, silca, black head", name: "Transponder key shell", note: "Silca, black head" },
  { src: "/images/lock-438.jpg", alt: "Flip key blades, set of 5 different blades", name: "Flip key blades", note: "Set of 5 different blades" },
];

/** Surface, kitchen and floor cleaners, shown on the Products page. */
export const cleaners = [
  { src: "/images/hh-505.jpg", alt: "Handy Andy cream cleaner, lemon, 750 ml", name: "Handy Andy cream cleaner", note: "Lemon, 750 ml" },
  { src: "/images/hh-519.jpg", alt: "Handy Andy cream cleaner, lavender, 750 ml", name: "Handy Andy cream cleaner", note: "Lavender, 750 ml" },
  { src: "/images/hh-482.jpg", alt: "Handy Andy multipurpose cream, professional, 5 l", name: "Handy Andy multipurpose cream", note: "Professional, 5 L" },
  { src: "/images/hh-481.jpg", alt: "Handy Andy oven and grill cleaner, professional, 5 l refill", name: "Handy Andy oven and grill cleaner", note: "Professional, 5 L refill" },
  { src: "/images/hh-495.jpg", alt: "Handy Andy oven and grill cleaner, professional, 500 ml spray", name: "Handy Andy oven and grill cleaner", note: "Professional, 500 ml spray" },
  { src: "/images/hh-493.jpg", alt: "Handy Andy degreaser, professional, 500 ml spray", name: "Handy Andy degreaser", note: "Professional, 500 ml spray" },
  { src: "/images/hh-501.jpg", alt: "Mr Muscle oven cleaner, aerosol", name: "Mr Muscle oven cleaner", note: "Aerosol" },
  { src: "/images/hh-504.jpg", alt: "Mr Muscle tile cleaner, lavender, 750 ml", name: "Mr Muscle tile cleaner", note: "Lavender, 750 ml" },
  { src: "/images/hh-502.jpg", alt: "Mr Min multi-surface polish, pot pourri, 300 ml can", name: "Mr Min multi-surface polish", note: "Pot pourri, 300 ml can" },
  { src: "/images/hh-497.jpg", alt: "Pledge multisurface cleaner, pink petals", name: "Pledge multisurface cleaner", note: "Pink petals" },
  { src: "/images/hh-496.jpg", alt: "Pledge wood polish, aerosol", name: "Pledge wood polish", note: "Aerosol" },
  { src: "/images/hh-498.jpg", alt: "Pledge wood polish, lavender", name: "Pledge wood polish", note: "Lavender" },
  { src: "/images/hh-512.jpg", alt: "Cobra floor cleaner, wood and laminate, citrus shine", name: "Cobra floor cleaner", note: "Wood and laminate, citrus shine" },
  { src: "/images/hh-515.jpg", alt: "Windolene glass cleaner, 750 ml spray", name: "Windolene glass cleaner", note: "750 ml spray" },
  { src: "/images/hh-503.jpg", alt: "Sunlight Platinum dishwashing liquid, antibacterial, 750 ml", name: "Sunlight Platinum dishwashing liquid", note: "Antibacterial, 750 ml" },
  { src: "/images/hh-513.jpg", alt: "Sunlight dishwashing liquid, 1.5 l", name: "Sunlight dishwashing liquid", note: "1.5 L" },
  { src: "/images/hh-531.jpg", alt: "Sunlight dishwashing liquid, 400 ml", name: "Sunlight dishwashing liquid", note: "400 ml" },
  { src: "/images/hh-529.jpg", alt: "Sunlight dishwashing liquid refill, 750 ml pouch", name: "Sunlight dishwashing liquid refill", note: "750 ml pouch" },
  { src: "/images/hh-537.jpg", alt: "Trigger spray bottle, empty, refillable", name: "Trigger spray bottle", note: "Empty, refillable" },
];

/** Bleach and toilet care, shown on the Products page. */
export const bleachToilet = [
  { src: "/images/hh-509.jpg", alt: "Jik multipurpose bleach, regular", name: "Jik multipurpose bleach", note: "Regular" },
  { src: "/images/hh-511.jpg", alt: "Jik multipurpose bleach, lemon fresh, 2 l", name: "Jik multipurpose bleach", note: "Lemon fresh, 2 L" },
  { src: "/images/hh-517.jpg", alt: "Jik multipurpose bleach, regular, 3 l value pack", name: "Jik multipurpose bleach", note: "Regular, 3 L value pack" },
  { src: "/images/hh-514.jpg", alt: "Domestos thick bleach, lemon fresh, 750 ml", name: "Domestos thick bleach", note: "Lemon fresh, 750 ml" },
  { src: "/images/hh-516.jpg", alt: "Domestos thick bleach, lavender blast, 750 ml", name: "Domestos thick bleach", note: "Lavender blast, 750 ml" },
  { src: "/images/hh-492.jpg", alt: "Jeyes Home Guard bleach, thick bleach, 750 ml", name: "Jeyes Home Guard bleach", note: "Thick bleach, 750 ml" },
  { src: "/images/hh-508.jpg", alt: "Duck deep action gel, toilet cleaner, ocean fresh", name: "Duck deep action gel", note: "Toilet cleaner, ocean fresh" },
  { src: "/images/hh-518.jpg", alt: "Duck stick-on toilet strips, 3 strips, fresh", name: "Duck stick-on toilet strips", note: "3 strips, fresh" },
];

/** Laundry, shown on the Products page. */
export const laundry = [
  { src: "/images/hh-485.jpg", alt: "OMO auto washing powder, superlift, 2 kg", name: "OMO auto washing powder", note: "Superlift, 2 kg" },
  { src: "/images/hh-528.jpg", alt: "OMO hand washing powder, supersoak, 2 kg", name: "OMO hand washing powder", note: "Supersoak, 2 kg" },
  { src: "/images/hh-507.jpg", alt: "OMO hand washing powder, 5 kg", name: "OMO hand washing powder", note: "5 kg" },
  { src: "/images/hh-521.jpg", alt: "MAQ washing powder, hand wash, 1 kg", name: "MAQ washing powder", note: "Hand wash, 1 kg" },
  { src: "/images/hh-522.jpg", alt: "MAQ washing powder, hand wash, 2 kg", name: "MAQ washing powder", note: "Hand wash, 2 kg" },
  { src: "/images/hh-525.jpg", alt: "Surf hand washing powder, 1 kg", name: "Surf hand washing powder", note: "1 kg" },
  { src: "/images/hh-523.jpg", alt: "Surf hand washing powder, 2 kg", name: "Surf hand washing powder", note: "2 kg" },
  { src: "/images/hh-527.jpg", alt: "Sunlight 5in1 handwash powder, spring sensations, 1 kg", name: "Sunlight 5in1 handwash powder", note: "Spring sensations, 1 kg" },
  { src: "/images/hh-524.jpg", alt: "Sunlight 5in1 auto washing powder, summer sensations, 2 kg", name: "Sunlight 5in1 auto washing powder", note: "Summer sensations, 2 kg" },
  { src: "/images/hh-506.jpg", alt: "Vanish multiuse liquid, chlorine bleach free, 2 l", name: "Vanish multiuse liquid", note: "Chlorine bleach free, 2 L" },
  { src: "/images/hh-483.jpg", alt: "Comfort fabric conditioner, professional, uplifting, 3 l", name: "Comfort fabric conditioner", note: "Professional, uplifting, 3 L" },
  { src: "/images/hh-484.jpg", alt: "Comfort fabric conditioner, professional, elegance, 3 l", name: "Comfort fabric conditioner", note: "Professional, elegance, 3 L" },
  { src: "/images/hh-499.jpg", alt: "Comfort fabric conditioner refill, uplifting, value pack", name: "Comfort fabric conditioner refill", note: "Uplifting, value pack" },
  { src: "/images/hh-526.jpg", alt: "Sta-soft fabric conditioner, lavender fresh, 500 ml", name: "Sta-soft fabric conditioner", note: "Lavender fresh, 500 ml" },
  { src: "/images/hh-510.jpg", alt: "Sta-soft baby fabric conditioner, hypo-allergenic", name: "Sta-soft baby fabric conditioner", note: "Hypo-allergenic" },
  { src: "/images/hh-532.jpg", alt: "Sunlight soap, original, 500 g", name: "Sunlight soap", note: "Original, 500 g" },
  { src: "/images/hh-533.jpg", alt: "Sunlight soap, original, 250 g", name: "Sunlight soap", note: "Original, 250 g" },
];

/** Air fresheners and insect killer, shown on the Products page. */
export const airFresh = [
  { src: "/images/hh-486.jpg", alt: "Airoma air freshener, potpourri petals", name: "Airoma air freshener", note: "Potpourri petals" },
  { src: "/images/hh-487.jpg", alt: "Airoma air freshener, linen breeze", name: "Airoma air freshener", note: "Linen breeze" },
  { src: "/images/hh-488.jpg", alt: "Airoma air freshener, strawberry fields", name: "Airoma air freshener", note: "Strawberry fields" },
  { src: "/images/hh-489.jpg", alt: "Airoma air freshener, floral fusion", name: "Airoma air freshener", note: "Floral fusion" },
  { src: "/images/hh-490.jpg", alt: "Airoma air freshener, lavender garden", name: "Airoma air freshener", note: "Lavender garden" },
  { src: "/images/hh-491.jpg", alt: "Airoma air freshener, summer rose", name: "Airoma air freshener", note: "Summer rose" },
  { src: "/images/hh-500.jpg", alt: "Glade air freshener, ocean escape", name: "Glade air freshener", note: "Ocean escape" },
  { src: "/images/hh-534.jpg", alt: "Raid multi insect killer, lavender scent, 300 ml", name: "Raid multi insect killer", note: "Lavender scent, 300 ml" },
];

/** Household supplies, shown on the Products page. */
export const household = [
  { src: "/images/hh-494.jpg", alt: "Energizer Max AA batteries, pack of 12", name: "Energizer Max AA batteries", note: "Pack of 12" },
  { src: "/images/hh-530.jpg", alt: "Garbie refuse bags, super saver, 20 bags", name: "Garbie refuse bags", note: "Super saver, 20 bags" },
  { src: "/images/hh-535.jpg", alt: "Latex gloves, cotton lined, large", name: "Latex gloves", note: "Cotton lined, large" },
  { src: "/images/hh-538.jpg", alt: "Leather work gloves, red, long cuff", name: "Leather work gloves", note: "Red, long cuff" },
  { src: "/images/hh-536.jpg", alt: "Wheelie bin, black, with wheels", name: "Wheelie bin", note: "Black, with wheels" },
];

/** Car wash and microfibre cloths, shown on the Products page. */
export const carWash = [
  { src: "/images/chem-547.jpg", alt: "Shield Snow Foam, bubblegum, 1 l", name: "Shield Snow Foam", note: "Bubblegum, 1 L" },
  { src: "/images/chem-552.jpg", alt: "Shield Snow Foam, bubblegum, 5 l", name: "Shield Snow Foam", note: "Bubblegum, 5 L" },
  { src: "/images/chem-580.jpg", alt: "Shield High Foam car shampoo, 5 l, with tyre shine", name: "Shield High Foam car shampoo", note: "5 L, with Tyre Shine" },
  { src: "/images/chem-591.jpg", alt: "Shield Splash wash and wax, car shampoo, 1 l", name: "Shield Splash wash and wax", note: "Car shampoo, 1 L" },
  { src: "/images/chem-608.jpg", alt: "Shield Splash wash and wax, car shampoo, 5 l", name: "Shield Splash wash and wax", note: "Car shampoo, 5 L" },
  { src: "/images/chem-607.jpg", alt: "Shield X-treme wash and wax, 3 in 1 car shampoo", name: "Shield X-treme wash and wax", note: "3 in 1 car shampoo" },
  { src: "/images/chem-539.jpg", alt: "Shield wash and shine mitt, microfibre, 2 in 1", name: "Shield wash and shine mitt", note: "Microfibre, 2 in 1" },
  { src: "/images/chem-541.jpg", alt: "Shield wash and dry value pack, microfibre mitt and drying towel", name: "Shield wash and dry value pack", note: "Microfibre mitt and drying towel" },
  { src: "/images/chem-550.jpg", alt: "Shield 3 in 1 microfibre pack, sponge, drying towel and glass cloth", name: "Shield 3 in 1 microfibre pack", note: "Sponge, drying towel and glass cloth" },
  { src: "/images/chem-545.jpg", alt: "Shield chenille wash pad, microfibre, with mesh scrubber", name: "Shield chenille wash pad", note: "Microfibre, with mesh scrubber" },
  { src: "/images/chem-543.jpg", alt: "Microfibre glass cloth, blue", name: "Microfibre glass cloth", note: "Blue" },
  { src: "/images/chem-551.jpg", alt: "Shield mutton cloth, 250 g roll", name: "Shield mutton cloth", note: "250 g roll" },
];

/** Car polish, tyre shine and interior care, shown on the Products page. */
export const carShine = [
  { src: "/images/chem-589.jpg", alt: "Shield Tyre Shine, rich wet gloss", name: "Shield Tyre Shine", note: "Rich wet gloss" },
  { src: "/images/chem-588.jpg", alt: "Shield Tyre Polish, 400 ml tub", name: "Shield Tyre Polish", note: "400 ml tub" },
  { src: "/images/chem-592.jpg", alt: "Shield Tyre Gloss, wet look finish, aerosol", name: "Shield Tyre Gloss", note: "Wet look finish, aerosol" },
  { src: "/images/chem-605.jpg", alt: "Shield Sheen Natural, vinyl, plastic and rubber care, fresh start", name: "Shield Sheen Natural", note: "Vinyl, plastic and rubber care, fresh start" },
  { src: "/images/chem-610.jpg", alt: "Shield Sheen Natural, vinyl, plastic and rubber care, cherry", name: "Shield Sheen Natural", note: "Vinyl, plastic and rubber care, cherry" },
  { src: "/images/chem-606.jpg", alt: "Shield Sheen Cockpit, interior detailer spray", name: "Shield Sheen Cockpit", note: "Interior detailer spray" },
  { src: "/images/chem-581.jpg", alt: "Shield Ceramic Infused sprays, tyre shine, vinyl dressing and spray wax", name: "Shield Ceramic Infused sprays", note: "Tyre shine, vinyl dressing and spray wax" },
  { src: "/images/chem-598.jpg", alt: "Shield SP2+ compounding liquid, extra fast, 1 l", name: "Shield SP2+ compounding liquid", note: "Extra fast, 1 L" },
];

/** Engine care and workshop chemicals, shown on the Products page. */
export const carWorkshop = [
  { src: "/images/chem-593.jpg", alt: "Shield Power Force degreaser, heavy duty cleaner, trigger spray", name: "Shield Power Force degreaser", note: "Heavy duty cleaner, trigger spray" },
  { src: "/images/chem-609.jpg", alt: "Shield Power Force degreaser, heavy duty cleaner, 20 l", name: "Shield Power Force degreaser", note: "Heavy duty cleaner, 20 L" },
  { src: "/images/chem-594.jpg", alt: "Shield engine cleaner, solvent based, 500 ml", name: "Shield engine cleaner", note: "Solvent based, 500 ml" },
  { src: "/images/chem-595.jpg", alt: "Shield diesel injector cleaner, 350 ml", name: "Shield diesel injector cleaner", note: "350 ml" },
  { src: "/images/chem-604.jpg", alt: "Shield engine flush, 350 ml", name: "Shield engine flush", note: "350 ml" },
  { src: "/images/chem-585.jpg", alt: "Shield carb cleaner and brake cleaner, 500 ml aerosols", name: "Shield carb cleaner and brake cleaner", note: "500 ml aerosols" },
  { src: "/images/chem-599.jpg", alt: "Shield Tool In-A-Can, multi-purpose lubricant", name: "Shield Tool In-A-Can", note: "Multi-purpose lubricant" },
];

/** Mr Sheen kitchen and surface cleaners, shown on the Products page. */
export const sheenKitchen = [
  { src: "/images/chem-557.jpg", alt: "Mr Sheen daily surface cleaner, cleaner and disinfectant, 1 l", name: "Mr Sheen daily surface cleaner", note: "Cleaner and disinfectant, 1 L" },
  { src: "/images/chem-561.jpg", alt: "Mr Sheen kitchen cleaner, cleaner and disinfectant, lemon", name: "Mr Sheen kitchen cleaner", note: "Cleaner and disinfectant, lemon" },
  { src: "/images/chem-562.jpg", alt: "Mr Sheen mould and mildew cleaner, cleaner and disinfectant", name: "Mr Sheen mould and mildew cleaner", note: "Cleaner and disinfectant" },
  { src: "/images/chem-560.jpg", alt: "Mr Sheen disinfectant spray, 70% alcohol, surface and air", name: "Mr Sheen disinfectant spray", note: "70% alcohol, surface and air" },
  { src: "/images/chem-553.jpg", alt: "Mr Sheen multi surface cleaner, 5 in 1 daily cleaner, spring fresh, 300 ml", name: "Mr Sheen multi surface cleaner", note: "5 in 1 daily cleaner, spring fresh, 300 ml" },
  { src: "/images/chem-558.jpg", alt: "Mr Sheen 3 in 1 oven cleaner, with microwave and braai, 300 ml", name: "Mr Sheen 3 in 1 oven cleaner", note: "With microwave and braai, 300 ml" },
  { src: "/images/chem-559.jpg", alt: "Mr Sheen fast acting oven cleaner, lemon fresh, 300 ml", name: "Mr Sheen fast acting oven cleaner", note: "Lemon fresh, 300 ml" },
  { src: "/images/chem-554.jpg", alt: "Mr Sheen dishwashing liquid, fresh lemon, 400 ml", name: "Mr Sheen dishwashing liquid", note: "Fresh lemon, 400 ml" },
  { src: "/images/chem-565.jpg", alt: "Mr Sheen dishwashing liquid, fresh lemon, 750 ml", name: "Mr Sheen dishwashing liquid", note: "Fresh lemon, 750 ml" },
  { src: "/images/chem-555.jpg", alt: "Mr Sheen dishwashing liquid, fresh lemon, 1.5 l", name: "Mr Sheen dishwashing liquid", note: "Fresh lemon, 1.5 L" },
  { src: "/images/chem-556.jpg", alt: "Mr Sheen dishwasher rinse aid, lemon, 500 ml", name: "Mr Sheen dishwasher rinse aid", note: "Lemon, 500 ml" },
  { src: "/images/chem-549.jpg", alt: "Mr Sheen Oxi Ultra Wash, fabric stain remover, 1 l", name: "Mr Sheen Oxi Ultra Wash", note: "Fabric stain remover, 1 L" },
];

/** Mr Sheen pine gel, floor cleaner and value packs, shown on the Products page. */
export const sheenFloor = [
  { src: "/images/chem-614.jpg", alt: "Mr Sheen pine gel, easy squeeze, 750 ml", name: "Mr Sheen pine gel", note: "Easy squeeze, 750 ml" },
  { src: "/images/chem-612.jpg", alt: "Mr Sheen pine gel, multi-surface cleaner, 500 ml", name: "Mr Sheen pine gel", note: "Multi-surface cleaner, 500 ml" },
  { src: "/images/chem-564.jpg", alt: "Mr Sheen pine gel, multi-surface cleaner, 1 l", name: "Mr Sheen pine gel", note: "Multi-surface cleaner, 1 L" },
  { src: "/images/chem-566.jpg", alt: "Mr Sheen pine gel, multi-surface cleaner, 5 l", name: "Mr Sheen pine gel", note: "Multi-surface cleaner, 5 L" },
  { src: "/images/chem-563.jpg", alt: "Mr Sheen tile cleaner, mountain fresh, 1 l", name: "Mr Sheen tile cleaner", note: "Mountain fresh, 1 L" },
  { src: "/images/chem-567.jpg", alt: "Mr Sheen disinfecting fluid, outdoor disinfectant, 500 ml", name: "Mr Sheen disinfecting fluid", note: "Outdoor disinfectant, 500 ml" },
  { src: "/images/chem-582.jpg", alt: "Mr Sheen Clear View glass cleaner, 1 l spray with two refills", name: "Mr Sheen Clear View glass cleaner", note: "1 L spray with two refills" },
  { src: "/images/chem-583.jpg", alt: "Mr Sheen complete cleaning kit, bucket, cloth, cleaners and scourers", name: "Mr Sheen complete cleaning kit", note: "Bucket, cloth, cleaners and scourers" },
  { src: "/images/chem-584.jpg", alt: "Mr Sheen bathroom, kitchen and daily sprays, 1 l trio", name: "Mr Sheen bathroom, kitchen and daily sprays", note: "1 L trio" },
  { src: "/images/chem-586.jpg", alt: "Mr Sheen dishwashing liquid, 750 ml with two refills", name: "Mr Sheen dishwashing liquid", note: "750 ml with two refills" },
  { src: "/images/chem-587.jpg", alt: "Mr Sheen aerosol trio, multi surface, oven cleaner and wood polish", name: "Mr Sheen aerosol trio", note: "Multi surface, oven cleaner and wood polish" },
];

/** Drain unblockers, shown on the Products page. */
export const drainCleaners = [
  { src: "/images/chem-568.jpg", alt: "Mr Plumber drain unblocker granules, single dose, 75 g", name: "Mr Plumber drain unblocker granules", note: "Single dose, 75 g" },
  { src: "/images/chem-569.jpg", alt: "Mr Plumber drain unblocker, power blast, compressed gas", name: "Mr Plumber drain unblocker", note: "Power blast, compressed gas" },
  { src: "/images/chem-570.jpg", alt: "Mr Plumber drain unblocker liquid, 750 ml", name: "Mr Plumber drain unblocker liquid", note: "750 ml" },
];

/** Air Scents air fresheners, shown on the Products page. */
export const airScents = [
  { src: "/images/chem-572.jpg", alt: "Air Scents Autofresh automatic spray, spring fresh, machine and 2 refills", name: "Air Scents Autofresh automatic spray", note: "Spring fresh, machine and 2 refills" },
  { src: "/images/chem-576.jpg", alt: "Air Scents Autofresh refill, cotton fresh", name: "Air Scents Autofresh refill", note: "Cotton fresh" },
  { src: "/images/chem-577.jpg", alt: "Air Scents Autofresh refill, lavender fields", name: "Air Scents Autofresh refill", note: "Lavender fields" },
  { src: "/images/chem-571.jpg", alt: "Air Scents Touch of Scents holder, spring fresh, with 100 ml refill", name: "Air Scents Touch of Scents holder", note: "Spring fresh, with 100 ml refill" },
  { src: "/images/chem-575.jpg", alt: "Air Scents Touch of Scents holder, lavender and vanilla, with 100 ml refill", name: "Air Scents Touch of Scents holder", note: "Lavender and vanilla, with 100 ml refill" },
  { src: "/images/chem-574.jpg", alt: "Air Scents Touch of Scents refill, spring fresh", name: "Air Scents Touch of Scents refill", note: "Spring fresh" },
  { src: "/images/chem-573.jpg", alt: "Air Scents Touch of Scents refill, lavender and vanilla", name: "Air Scents Touch of Scents refill", note: "Lavender and vanilla" },
  { src: "/images/chem-578.jpg", alt: "Air Scents reed diffuser, sandalwood, 50 ml", name: "Air Scents reed diffuser", note: "Sandalwood, 50 ml" },
  { src: "/images/chem-579.jpg", alt: "Air Scents reed diffuser, lavender, 50 ml", name: "Air Scents reed diffuser", note: "Lavender, 50 ml" },
  { src: "/images/chem-613.jpg", alt: "Shield Fresh 24 gel air freshener, vanilla pineapple", name: "Shield Fresh 24 gel air freshener", note: "Vanilla pineapple" },
];

/** Yale padlocks, shown on the Products page. */
export const yalePadlocks = [
  { src: "/images/yale-662.jpg", alt: "Yale chrome padlock, hardened shackle", name: "Yale chrome padlock", note: "Hardened shackle" },
  { src: "/images/yale-660.jpg", alt: "Yale chrome padlock, boron shackle", name: "Yale chrome padlock", note: "Boron shackle" },
  { src: "/images/yale-655.jpg", alt: "Yale chrome padlock, long shackle", name: "Yale chrome padlock", note: "Long shackle" },
  { src: "/images/yale-661.jpg", alt: "Yale brass padlock, hardened shackle", name: "Yale brass padlock", note: "Hardened shackle" },
  { src: "/images/yale-653.jpg", alt: "Yale laminated padlock, hardened shackle", name: "Yale laminated padlock", note: "Hardened shackle" },
  { src: "/images/yale-654.jpg", alt: "Yale laminated padlocks, pack of 3", name: "Yale laminated padlocks", note: "Pack of 3" },
  { src: "/images/yale-644.jpg", alt: "Yale black padlock, hardened shackle, large", name: "Yale black padlock", note: "Hardened shackle, large" },
  { src: "/images/yale-642.jpg", alt: "Yale black padlocks, twin pack", name: "Yale black padlocks", note: "Twin pack" },
  { src: "/images/yale-640.jpg", alt: "Yale black padlock, long shackle", name: "Yale black padlock", note: "Long shackle" },
  { src: "/images/yale-650.jpg", alt: "Yale closed shackle padlock, black", name: "Yale closed shackle padlock", note: "Black" },
  { src: "/images/yale-651.jpg", alt: "Yale closed shackle padlock, black, compact", name: "Yale closed shackle padlock", note: "Black, compact" },
  { src: "/images/yale-652.jpg", alt: "Yale closed shackle padlock, black, boron shackle", name: "Yale closed shackle padlock", note: "Black, Boron shackle" },
  { src: "/images/yale-648.jpg", alt: "Yale weatherproof padlock, black, with cover", name: "Yale weatherproof padlock", note: "Black, with cover" },
  { src: "/images/yale-647.jpg", alt: "Yale weatherproof padlocks, black, pack of 3", name: "Yale weatherproof padlocks", note: "Black, pack of 3" },
  { src: "/images/yale-649.jpg", alt: "Yale weatherproof padlock, black, shrouded shackle", name: "Yale weatherproof padlock", note: "Black, shrouded shackle" },
  { src: "/images/yale-656.jpg", alt: "Yale brass shutter padlock, hardened bolt", name: "Yale brass shutter padlock", note: "Hardened bolt" },
  { src: "/images/yale-657.jpg", alt: "Yale brass shutter padlock, hardened bolt, wide", name: "Yale brass shutter padlock", note: "Hardened bolt, wide" },
  { src: "/images/yale-659.jpg", alt: "Yale brass shutter padlock, hardened bolt, side keyway", name: "Yale brass shutter padlock", note: "Hardened bolt, side keyway" },
  { src: "/images/yale-643.jpg", alt: "Yale shutter padlock, chrome, hardened bolt", name: "Yale shutter padlock", note: "Chrome, hardened bolt" },
  { src: "/images/yale-646.jpg", alt: "Yale shutter padlock, black, hardened bolt", name: "Yale shutter padlock", note: "Black, hardened bolt" },
  { src: "/images/yale-641.jpg", alt: "Yale disc padlocks, twin pack with keys", name: "Yale disc padlocks", note: "Twin pack with keys" },
  { src: "/images/yale-645.jpg", alt: "Yale combination padlock, blue, 4 dials", name: "Yale combination padlock", note: "Blue, 4 dials" },
];

/** Yale safes and key cabinets, shown on the Products page. */
export const yaleSafes = [
  { src: "/images/yale-702.jpg", alt: "Yale large digital safe, black, keypad", name: "Yale large digital safe", note: "Black, keypad" },
  { src: "/images/yale-701.jpg", alt: "Large digital safe, black, keypad", name: "Large digital safe", note: "Black, keypad" },
  { src: "/images/yale-707.jpg", alt: "Yale large safe, light grey, digital keypad", name: "Yale large safe", note: "Light grey, digital keypad" },
  { src: "/images/yale-708.jpg", alt: "Yale medium safe, light grey, digital keypad", name: "Yale medium safe", note: "Light grey, digital keypad" },
  { src: "/images/yale-706.jpg", alt: "Yale compact digital safe, black, keypad", name: "Yale compact digital safe", note: "Black, keypad" },
  { src: "/images/yale-705.jpg", alt: "Yale smart safe, keypad, yale home app", name: "Yale smart safe", note: "Keypad, Yale Home app" },
  { src: "/images/yale-710.jpg", alt: "Yale fingerprint safe, black, keypad and fingerprint", name: "Yale fingerprint safe", note: "Black, keypad and fingerprint" },
  { src: "/images/yale-712.jpg", alt: "Yale digital safe, cream, keypad", name: "Yale digital safe", note: "Cream, keypad" },
  { src: "/images/yale-713.jpg", alt: "Yale deposit safe, drop slot, digital keypad", name: "Yale deposit safe", note: "Drop slot, digital keypad" },
  { src: "/images/yale-709.jpg", alt: "Yale laptop safe, black, digital keypad", name: "Yale laptop safe", note: "Black, digital keypad" },
  { src: "/images/yale-718.jpg", alt: "Yale laptop safe, light grey, digital keypad", name: "Yale laptop safe", note: "Light grey, digital keypad" },
  { src: "/images/yale-639.jpg", alt: "Yale key safe, combination, wall mount", name: "Yale key safe", note: "Combination, wall mount" },
  { src: "/images/yale-664.jpg", alt: "Yale key cabinet, black, keyed", name: "Yale key cabinet", note: "Black, keyed" },
  { src: "/images/yale-715.jpg", alt: "Yale key cabinet, black, keyed", name: "Yale key cabinet", note: "Black, keyed" },
  { src: "/images/yale-716.jpg", alt: "Key cabinet, black, hooks inside", name: "Key cabinet", note: "Black, hooks inside" },
];

/** Yale smart locks and alarms, shown on the Products page. */
export const yaleSmart = [
  { src: "/images/yale-693.jpg", alt: "Yale keypad smart lock, satin, keypad and card", name: "Yale keypad smart lock", note: "Satin, keypad and card" },
  { src: "/images/yale-694.jpg", alt: "Yale smart door lock, black, keypad and handle", name: "Yale smart door lock", note: "Black, keypad and handle" },
  { src: "/images/yale-696.jpg", alt: "Yale smart lock, matter compatible, app control", name: "Yale smart lock", note: "Matter compatible, app control" },
  { src: "/images/yale-697.jpg", alt: "Yale smart lock, black, fitted to a door", name: "Yale smart lock", note: "Black, fitted to a door" },
  { src: "/images/yale-698.jpg", alt: "Yale smart lock, unlock from the phone app", name: "Yale smart lock", note: "Unlock from the phone app" },
  { src: "/images/yale-700.jpg", alt: "Yale door sensor, white, for smart alarms", name: "Yale door sensor", note: "White, for smart alarms" },
  { src: "/images/yale-704.jpg", alt: "Yale smart home devices, lock, hub and sensors", name: "Yale smart home devices", note: "Lock, hub and sensors" },
  { src: "/images/yale-717.jpg", alt: "Yale keypad, white, wall mounted", name: "Yale keypad", note: "White, wall mounted" },
  { src: "/images/yale-773.jpg", alt: "Yale smart lock, silver, fits over your existing cylinder", name: "Yale smart lock", note: "Silver, fits over your existing cylinder" },
  { src: "/images/yale-777.jpg", alt: "Yale digital door lock, black, keypad and handle", name: "Yale digital door lock", note: "Black, keypad and handle" },
];

/** Yale lock and handle sets, shown on the Products page. */
export const yaleHandleSets = [
  { src: "/images/yale-720.jpg", alt: "Yale lock and handle set, gunmetal, with keys", name: "Yale lock and handle set", note: "Gunmetal, with keys" },
  { src: "/images/yale-748.jpg", alt: "Yale lock and handle set, gunmetal, with strike plate", name: "Yale lock and handle set", note: "Gunmetal, with strike plate" },
  { src: "/images/yale-758.jpg", alt: "Yale lock and handle set, gunmetal, with cylinder and keys", name: "Yale lock and handle set", note: "Gunmetal, with cylinder and keys" },
  { src: "/images/yale-721.jpg", alt: "Yale lock and handle set, black, with keys", name: "Yale lock and handle set", note: "Black, with keys" },
  { src: "/images/yale-749.jpg", alt: "Yale lock and handle set, black, with strike plate and screws", name: "Yale lock and handle set", note: "Black, with strike plate and screws" },
  { src: "/images/yale-760.jpg", alt: "Yale lock and handle set, rose gold, with keys", name: "Yale lock and handle set", note: "Rose gold, with keys" },
  { src: "/images/yale-729.jpg", alt: "Yale lock and handle set, chrome, with keys", name: "Yale lock and handle set", note: "Chrome, with keys" },
  { src: "/images/yale-754.jpg", alt: "Yale lock and handle set, chrome, with keys", name: "Yale lock and handle set", note: "Chrome, with keys" },
  { src: "/images/yale-755.jpg", alt: "Yale lock and handle set, chrome, with strike plate and screws", name: "Yale lock and handle set", note: "Chrome, with strike plate and screws" },
  { src: "/images/yale-738.jpg", alt: "Yale lock and handle set, satin chrome, keyhole plates", name: "Yale lock and handle set", note: "Satin chrome, keyhole plates" },
  { src: "/images/yale-725.jpg", alt: "Yale lock and handle set, satin chrome, euro cylinder", name: "Yale lock and handle set", note: "Satin chrome, euro cylinder" },
];

/** Yale mortice locks, night latches and deadbolts, shown on the Products page. */
export const yaleLocks = [
  { src: "/images/yale-732.jpg", alt: "Yale mortice lock, brass cylinder", name: "Yale mortice lock", note: "Brass cylinder" },
  { src: "/images/yale-733.jpg", alt: "Yale mortice lock, nickel cylinder", name: "Yale mortice lock", note: "Nickel cylinder" },
  { src: "/images/yale-734.jpg", alt: "Yale mortice lock, euro cylinder", name: "Yale mortice lock", note: "Euro cylinder" },
  { src: "/images/yale-740.jpg", alt: "Yale mortice lock, brass, with key and strike plate", name: "Yale mortice lock", note: "Brass, with key and strike plate" },
  { src: "/images/yale-759.jpg", alt: "Yale mortice deadlock, brass, with cylinder, keys and rings", name: "Yale mortice deadlock", note: "Brass, with cylinder, keys and rings" },
  { src: "/images/yale-737.jpg", alt: "Yale deadlock, brass-plated, with keys", name: "Yale deadlock", note: "Brass-plated, with keys" },
  { src: "/images/yale-723.jpg", alt: "Yale cupboard deadlock, black case, with key", name: "Yale cupboard deadlock", note: "Black case, with key" },
  { src: "/images/yale-724.jpg", alt: "Yale narrow mortice lock, euro profile, for slim doors", name: "Yale narrow mortice lock", note: "Euro profile, for slim doors" },
  { src: "/images/yale-730.jpg", alt: "Yale narrow mortice lock, euro profile, for slim doors", name: "Yale narrow mortice lock", note: "Euro profile, for slim doors" },
  { src: "/images/yale-731.jpg", alt: "Yale narrow mortice lock, euro profile, for slim doors", name: "Yale narrow mortice lock", note: "Euro profile, for slim doors" },
  { src: "/images/yale-722.jpg", alt: "Yale night latch, black, with cylinder and keys", name: "Yale night latch", note: "Black, with cylinder and keys" },
  { src: "/images/yale-739.jpg", alt: "Yale night latch, satin, with cylinder and keys", name: "Yale night latch", note: "Satin, with cylinder and keys" },
  { src: "/images/yale-742.jpg", alt: "Yale deadbolt, satin, with keys", name: "Yale deadbolt", note: "Satin, with keys" },
  { src: "/images/yale-744.jpg", alt: "Yale deadbolt, antique brass, with keys", name: "Yale deadbolt", note: "Antique brass, with keys" },
  { src: "/images/yale-743.jpg", alt: "Yale knob set, satin, keyed", name: "Yale knob set", note: "Satin, keyed" },
  { src: "/images/yale-741.jpg", alt: "Yale knob set, antique brass, keyed", name: "Yale knob set", note: "Antique brass, keyed" },
  { src: "/images/yale-745.jpg", alt: "Yale knob set, polished brass, keyed", name: "Yale knob set", note: "Polished brass, keyed" },
  { src: "/images/yale-747.jpg", alt: "Yale cylinder, brass, long tail, with keys", name: "Yale cylinder", note: "Brass, long tail, with keys" },
  { src: "/images/yale-756.jpg", alt: "Yale push-button lock, black, digital code", name: "Yale push-button lock", note: "Black, digital code" },
  { src: "/images/yale-761.jpg", alt: "Yale push-button lock, satin, digital code", name: "Yale push-button lock", note: "Satin, digital code" },
];

/** Yale sliding door, window and gate locks, shown on the Products page. */
export const yaleSliding = [
  { src: "/images/yale-735.jpg", alt: "Yale hook lock, sliding gate, with keys", name: "Yale hook lock", note: "Sliding gate, with keys" },
  { src: "/images/yale-736.jpg", alt: "Yale hook lock, sliding gate, with keys", name: "Yale hook lock", note: "Sliding gate, with keys" },
  { src: "/images/yale-757.jpg", alt: "Yale gate box lock, brass-plated, with keys", name: "Yale gate box lock", note: "Brass-plated, with keys" },
  { src: "/images/yale-746.jpg", alt: "Yale sliding door lock, satin, hook bolt", name: "Yale sliding door lock", note: "Satin, hook bolt" },
  { src: "/images/yale-751.jpg", alt: "Sliding door handle set, black, with lock", name: "Sliding door handle set", note: "Black, with lock" },
  { src: "/images/yale-750.jpg", alt: "Sliding door rollers, pair, nylon wheels", name: "Sliding door rollers", note: "Pair, nylon wheels" },
  { src: "/images/yale-726.jpg", alt: "Yale sliding window lock, brown, with keys", name: "Yale sliding window lock", note: "Brown, with keys" },
  { src: "/images/yale-727.jpg", alt: "Yale sliding window lock, grey, with keys", name: "Yale sliding window lock", note: "Grey, with keys" },
  { src: "/images/yale-728.jpg", alt: "Yale sliding window lock, white, with keys", name: "Yale sliding window lock", note: "White, with keys" },
  { src: "/images/yale-620.jpg", alt: "Yale cupboard lock, brass, 2 lever", name: "Yale cupboard lock", note: "Brass, 2 lever" },
];

/** Yale hinges and door fittings, shown on the Products page. */
export const yaleHinges = [
  { src: "/images/yale-615.jpg", alt: "Yale flush hinges, satin, pair with screws", name: "Yale flush hinges", note: "Satin, pair with screws" },
  { src: "/images/yale-616.jpg", alt: "Yale flush hinges, black, pair with screws", name: "Yale flush hinges", note: "Black, pair with screws" },
  { src: "/images/yale-663.jpg", alt: "Yale flush hinges, brown, pair with screws", name: "Yale flush hinges", note: "Brown, pair with screws" },
  { src: "/images/yale-627.jpg", alt: "Yale flush hinges, stainless, pair", name: "Yale flush hinges", note: "Stainless, pair" },
  { src: "/images/yale-634.jpg", alt: "Yale flush hinges, gold finish, pair", name: "Yale flush hinges", note: "Gold finish, pair" },
  { src: "/images/yale-632.jpg", alt: "Yale ball bearing hinges, stainless, pair", name: "Yale ball bearing hinges", note: "Stainless, pair" },
  { src: "/images/yale-633.jpg", alt: "Yale ball bearing hinges, gold finish, pair", name: "Yale ball bearing hinges", note: "Gold finish, pair" },
  { src: "/images/yale-629.jpg", alt: "Yale door stop, satin, floor mount", name: "Yale door stop", note: "Satin, floor mount" },
  { src: "/images/yale-617.jpg", alt: "Toilet indicator bolt, polished chrome", name: "Toilet indicator bolt", note: "Polished chrome" },
  { src: "/images/yale-618.jpg", alt: "Yale toilet indicator bolt, satin chrome", name: "Yale toilet indicator bolt", note: "Satin chrome" },
  { src: "/images/yale-635.jpg", alt: "Yale Un-Jam-It graphite powder, dry lock lubricant, pack of 2", name: "Yale Un-Jam-It graphite powder", note: "Dry lock lubricant, pack of 2" },
];

/** Yale door closers, magnetic locks and doorbells, shown on the Products page. */
export const yaleAccess = [
  { src: "/images/yale-619.jpg", alt: "Yale door closer, black", name: "Yale door closer", note: "Black" },
  { src: "/images/yale-636.jpg", alt: "Yale door closer, silver", name: "Yale door closer", note: "Silver" },
  { src: "/images/yale-623.jpg", alt: "Electric drop bolt lock, brushed, with strike plates", name: "Electric drop bolt lock", note: "Brushed, with strike plates" },
  { src: "/images/yale-637.jpg", alt: "Yale electric strike kit, with power supply, cylinder and keys", name: "Yale electric strike kit", note: "With power supply, cylinder and keys" },
  { src: "/images/yale-626.jpg", alt: "Yale magnetic lock, with armature plate", name: "Yale magnetic lock", note: "With armature plate" },
  { src: "/images/yale-624.jpg", alt: "Magnetic lock, with armature plate", name: "Magnetic lock", note: "With armature plate" },
  { src: "/images/yale-625.jpg", alt: "Magnetic lock, slim, with armature plate", name: "Magnetic lock", note: "Slim, with armature plate" },
  { src: "/images/yale-630.jpg", alt: "Magnetic lock, compact, with armature plate", name: "Magnetic lock", note: "Compact, with armature plate" },
  { src: "/images/yale-631.jpg", alt: "Yale wireless doorbell, push button and chime", name: "Yale wireless doorbell", note: "Push button and chime" },
  { src: "/images/yale-638.jpg", alt: "Yale wireless doorbell, motion sensor and chime", name: "Yale wireless doorbell", note: "Motion sensor and chime" },
  { src: "/images/yale-628.jpg", alt: "Yale hands-free door pull, stainless steel, with fixings", name: "Yale hands-free door pull", note: "Stainless steel, with fixings" },
  { src: "/images/yale-622.jpg", alt: "Rebate kit, satin, for mortice locks", name: "Rebate kit", note: "Satin, for mortice locks" },
  { src: "/images/yale-769.jpg", alt: "Yale rechargeable battery, 12 v 7 ah, sealed lead acid", name: "Yale rechargeable battery", note: "12 V 7 Ah, sealed lead acid" },
  { src: "/images/yale-770.jpg", alt: "Yale rechargeable battery, 6 v 4 ah, sealed lead acid", name: "Yale rechargeable battery", note: "6 V 4 Ah, sealed lead acid" },
  { src: "/images/yale-771.jpg", alt: "Yale rechargeable battery, 12 v 8 ah, gel", name: "Yale rechargeable battery", note: "12 V 8 Ah, gel" },
  { src: "/images/yale-772.jpg", alt: "Yale rechargeable battery, 12 v 18 ah, gel", name: "Yale rechargeable battery", note: "12 V 18 Ah, gel" },
];

/** Centurion gate and garage automation, shown on the Products page. */
export const centurion = [
  { src: "/images/cent-811.jpg", alt: "Centurion D10 Smart gate motor, commercial sliding gate operator", name: "Centurion D10 Smart gate motor", note: "Commercial sliding gate operator" },
  { src: "/images/cent-812.jpg", alt: "Centurion D10 Turbo Smart gate motor, commercial sliding gate operator", name: "Centurion D10 Turbo Smart gate motor", note: "Commercial sliding gate operator" },
  { src: "/images/cent-813.jpg", alt: "Centurion D6 Smart gate motor, light commercial sliding gate operator", name: "Centurion D6 Smart gate motor", note: "Light commercial sliding gate operator" },
  { src: "/images/cent-814.jpg", alt: "Centurion D5 Smart gate motor, light residential sliding gate operator", name: "Centurion D5 Smart gate motor", note: "Light residential sliding gate operator" },
  { src: "/images/cent-815.jpg", alt: "Centurion D20 Smart gate motor, heavy-duty industrial sliding gate operator", name: "Centurion D20 Smart gate motor", note: "Heavy-duty industrial sliding gate operator" },
  { src: "/images/cent-816.jpg", alt: "Centurion garage door operator, residential and commercial, app control", name: "Centurion garage door operator", note: "Residential and commercial, app control" },
  { src: "/images/cent-794.jpg", alt: "Centurion Sector traffic barrier operator, yellow housing, striped boom", name: "Centurion Sector traffic barrier operator", note: "Yellow housing, striped boom" },
  { src: "/images/cent-790.jpg", alt: "Centurion manual traffic barrier, hand-operated boom", name: "Centurion manual traffic barrier", note: "Hand-operated boom" },
  { src: "/images/cent-798.jpg", alt: "Centurion Trapex system, for traffic barrier", name: "Centurion Trapex system", note: "For traffic barrier" },
  { src: "/images/cent-800.jpg", alt: "Centurion traffic light, red and green, traffic control", name: "Centurion traffic light", note: "Red and green, traffic control" },
  { src: "/images/cent-802.jpg", alt: "Centurion GLX900 gate lock, electronic gate lock", name: "Centurion GLX900 gate lock", note: "Electronic gate lock" },
  { src: "/images/cent-804.jpg", alt: "Centurion anti-theft cage, for gate motor", name: "Centurion anti-theft cage", note: "For gate motor" },
  { src: "/images/cent-805.jpg", alt: "Centurion Photon Smart beams, infrared safety beams", name: "Centurion Photon Smart beams", note: "Infrared safety beams" },
  { src: "/images/cent-806.jpg", alt: "Centurion i5 infrared beam, safety beam", name: "Centurion i5 infrared beam", note: "Safety beam" },
  { src: "/images/cent-807.jpg", alt: "Centurion Filtertube, surge protection with thermal protection", name: "Centurion Filtertube", note: "Surge protection with thermal protection" },
  { src: "/images/cent-808.jpg", alt: "Centurion power pack, battery and charger unit", name: "Centurion power pack", note: "Battery and charger unit" },
  { src: "/images/cent-809.jpg", alt: "Centurion alarm siren, for gate automation", name: "Centurion alarm siren", note: "For gate automation" },
  { src: "/images/cent-817.jpg", alt: "Gemini sliding gate motor kit, motor, anti-theft cage, 2 remotes, battery and racks", name: "Gemini sliding gate motor kit", note: "Motor, anti-theft cage, 2 remotes, battery and racks" },
  { src: "/images/cent-818.jpg", alt: "Gate remote, 3 button, black, grey and yellow buttons", name: "Gate remote, 3 button", note: "Black, grey and yellow buttons" },
  { src: "/images/cent-819.jpg", alt: "Gate remote, 4 button, blue, with coloured buttons", name: "Gate remote, 4 button", note: "Blue, with coloured buttons" },
  { src: "/images/cent-820.jpg", alt: "Gate remote, 4 button, blue, carbon look", name: "Gate remote, 4 button", note: "Blue, carbon look" },
];

/** Floor and wall tiles, shown on the Products page. */
export const tiles = [
  { src: "/images/tile-821.jpg", alt: "Plain beige floor tile, polished, square", name: "Plain beige floor tile", note: "Polished, square" },
  { src: "/images/tile-842.jpg", alt: "Grey marble-look floor tile, fine white veins, square", name: "Grey marble-look floor tile", note: "Fine white veins, square" },
  { src: "/images/tile-828.jpg", alt: "Grey marble-look floor tile, light veining, square", name: "Grey marble-look floor tile", note: "Light veining, square" },
  { src: "/images/tile-823.jpg", alt: "Wood-grain travertine tile, beige, rectangular", name: "Wood-grain travertine tile", note: "Beige, rectangular" },
  { src: "/images/tile-824.jpg", alt: "Concrete-look floor tile, blue-grey, square", name: "Concrete-look floor tile", note: "Blue-grey, square" },
  { src: "/images/tile-825.jpg", alt: "Blue marble-look tile, brown swirls, large rectangle", name: "Blue marble-look tile", note: "Brown swirls, large rectangle" },
  { src: "/images/tile-826.jpg", alt: "Cement-look floor tile, cream, square", name: "Cement-look floor tile", note: "Cream, square" },
  { src: "/images/tile-827.jpg", alt: "Concrete-look tile, grey, rectangular", name: "Concrete-look tile", note: "Grey, rectangular" },
  { src: "/images/tile-829.jpg", alt: "Stone-look tile, grey-brown streaks, rectangular", name: "Stone-look tile", note: "Grey-brown streaks, rectangular" },
  { src: "/images/tile-830.jpg", alt: "Blue and gold marble tile, white, gold veins", name: "Blue and gold marble tile", note: "White, gold veins" },
  { src: "/images/tile-832.jpg", alt: "Terrazzo-look floor tile, light grey chips", name: "Terrazzo-look floor tile", note: "Light grey chips" },
  { src: "/images/tile-833.jpg", alt: "White marble-look floor tile, grey veins, square", name: "White marble-look floor tile", note: "Grey veins, square" },
  { src: "/images/tile-838.jpg", alt: "White marble-look floor tile, soft grey veining, square", name: "White marble-look floor tile", note: "Soft grey veining, square" },
  { src: "/images/tile-834.jpg", alt: "White marble-look tile, grey and gold veins, rectangular", name: "White marble-look tile", note: "Grey and gold veins, rectangular" },
  { src: "/images/tile-835.jpg", alt: "White marble-look tile, fine grey veins", name: "White marble-look tile", note: "Fine grey veins" },
  { src: "/images/tile-836.jpg", alt: "Travertine-look floor tile, beige-grey, square", name: "Travertine-look floor tile", note: "Beige-grey, square" },
  { src: "/images/tile-837.jpg", alt: "Dark grey floor tile, cement look, speckled", name: "Dark grey floor tile", note: "Cement look, speckled" },
  { src: "/images/tile-839.jpg", alt: "Light grey concrete-look tile, square", name: "Light grey concrete-look tile", note: "Square" },
  { src: "/images/tile-841.jpg", alt: "Pale grey stone-look tile, square", name: "Pale grey stone-look tile", note: "Square" },
  { src: "/images/tile-843.jpg", alt: "Self-adhesive marble tiles, blue-grey with gold, peel and stick", name: "Self-adhesive marble tiles", note: "Blue-grey with gold, peel and stick" },
  { src: "/images/tile-844.jpg", alt: "Self-adhesive marble tiles, white, peel and stick", name: "Self-adhesive marble tiles", note: "White, peel and stick" },
  { src: "/images/tile-848.jpg", alt: "Brown stone-pattern floor tile, mixed block layout", name: "Brown stone-pattern floor tile", note: "Mixed block layout" },
  { src: "/images/tile-849.jpg", alt: "Natural stone-look floor tile, brown crazy-paving pattern, square", name: "Natural stone-look floor tile", note: "Brown crazy-paving pattern, square" },
  { src: "/images/tile-850.jpg", alt: "Interlocking PVC floor tiles, dark grey, coin pattern", name: "Interlocking PVC floor tiles", note: "Dark grey, coin pattern" },
];

/** Clamps, shown on the Products page. */
export const clamps = [
  { src: "/images/clamp-876.jpg", alt: "Duratec spring clamp, red, soft grip handles", name: "Duratec spring clamp", note: "Red, soft grip handles" },
  { src: "/images/clamp-880.jpg", alt: "Duratec spring clamp, red, small", name: "Duratec spring clamp", note: "Red, small" },
  { src: "/images/clamp-877.jpg", alt: "Duratec large spring clamp, red, long jaws", name: "Duratec large spring clamp", note: "Red, long jaws" },
  { src: "/images/clamp-878.jpg", alt: "Duratec spring clamp with levels, red, spirit levels in the jaw", name: "Duratec spring clamp with levels", note: "Red, spirit levels in the jaw" },
  { src: "/images/clamp-879.jpg", alt: "Corner clamp, orange, 90 degree, two screws", name: "Corner clamp", note: "Orange, 90 degree, two screws" },
  { src: "/images/clamp-882.jpg", alt: "Duratec corner clamp squares, red, 90 degree", name: "Duratec corner clamp squares", note: "Red, 90 degree" },
  { src: "/images/clamp-881.jpg", alt: "G-clamp, red, cast", name: "G-clamp", note: "Red, cast" },
  { src: "/images/clamp-884.jpg", alt: "Duratec lever clamp, red and black, steel bar", name: "Duratec lever clamp", note: "Red and black, steel bar" },
  { src: "/images/clamp-885.jpg", alt: "Duratec quick-grip clamp, one-hand bar clamp, pack of sizes", name: "Duratec quick-grip clamp", note: "One-hand bar clamp, pack of sizes" },
  { src: "/images/clamp-886.jpg", alt: "Bar clamp, steel bar with screw jaw", name: "Bar clamp", note: "Steel bar with screw jaw" },
  { src: "/images/clamp-887.jpg", alt: "Parallel bar clamp, red jaws, soft grip handle", name: "Parallel bar clamp", note: "Red jaws, soft grip handle" },
  { src: "/images/clamp-889.jpg", alt: "F-clamps, black and red, in different lengths", name: "F-clamps", note: "Black and red, in different lengths" },
];

/** Roof fixings and building boards, shown on the Products page. */
export const roofing = [
  { src: "/images/roof-892.jpg", alt: "SafeTop roof fixing system, self-drilling screws, m5.5x65, pack of 100", name: "SafeTop roof fixing system", note: "Self-drilling screws, M5.5x65, pack of 100" },
  { src: "/images/roof-893.jpg", alt: "SafeTop Value Box self-drilling screws, m5.5x65, 200 pieces", name: "SafeTop Value Box self-drilling screws", note: "M5.5x65, 200 pieces" },
  { src: "/images/roof-895.jpg", alt: "SafeTop grey roof washers and screws, 65 mm, pack of 20", name: "SafeTop grey roof washers and screws", note: "65 mm, pack of 20" },
  { src: "/images/roof-891.jpg", alt: "Roof screw caps and washers, green, grey and red", name: "Roof screw caps and washers", note: "Green, grey and red" },
  { src: "/images/roof-894.jpg", alt: "SafeTop security coach screws, m10x75", name: "SafeTop security coach screws", note: "M10x75" },
  { src: "/images/roof-896.jpg", alt: "Galvanised steel stud, for partitions and ceilings", name: "Galvanised steel stud", note: "For partitions and ceilings" },
  { src: "/images/roof-897.jpg", alt: "Building boards, flat sheets, ask for type and size", name: "Building boards", note: "Flat sheets, ask for type and size" },
];

/** Plascon paint range, shown on the Products page. */
export const plasconRange = [
  { src: "/images/plascon-double-velvet.jpg", alt: "Plascon Double Velvet Pure interior paint tin", name: "Double Velvet Pure", note: "Velvet sheen, interior" },
  { src: "/images/plascon-polvin.jpg", alt: "Plascon Polvin premium washable matt paint bucket", name: "Polvin", note: "Premium washable matt" },
  { src: "/images/plascon-velvaglo-wb.jpg", alt: "Plascon Velvaglo Non-Drip water-based paint tin", name: "Velvaglo Non-Drip Water Based", note: "Silky sheen, interior / exterior" },
  { src: "/images/plascon-velvaglo-enamel.jpg", alt: "Plascon Velvaglo Non-Drip Enamel tin", name: "Velvaglo Non-Drip Enamel", note: "Satin sheen, interior" },
  { src: "/images/plascon-kitchens-bathrooms.jpg", alt: "Plascon Kitchens and Bathrooms interior matt paint tub", name: "Kitchens & Bathrooms", note: "Interior matt" },
  { src: "/images/plascon-one-coat.jpg", alt: "Plascon One Coat water-based ceiling paint bucket", name: "One Coat Ceiling Paint", note: "Water-based, interior" },
  { src: "/images/plascon-glazecoat.jpg", alt: "Plascon Water-Based Glazecoat bucket", name: "Water-Based Glazecoat", note: "Interior matt" },
  { src: "/images/plascon-super-gloss.jpg", alt: "Plascon Super Gloss Enamel tin", name: "Super Gloss Enamel", note: "High gloss, interior / exterior" },
  { src: "/images/plascon-wb-super-gloss.jpg", alt: "Plascon Water-Based Super Gloss Enamel bucket", name: "Water-Based Super Gloss Enamel", note: "High gloss, interior / exterior" },
  { src: "/images/plascon-multi-primer.jpg", alt: "Plascon Multi-Surface Primer bucket", name: "Multi-Surface Primer", note: "Water-based, interior / exterior" },
  { src: "/images/plascon-plaster-primer.jpg", alt: "Plascon Plaster Primer tin", name: "Plaster Primer", note: "Solvent-based, interior / exterior" },
  { src: "/images/plascon-metalcare-mild.jpg", alt: "Plascon Metalcare Mild Steel Primer tin", name: "Metalcare Mild Steel Primer", note: "Solvent-based primer" },
  { src: "/images/plascon-metalcare-wb.jpg", alt: "Plascon Metalcare WB red oxide primer bucket", name: "Metalcare WB Primer", note: "Red oxide, water-based" },
  { src: "/images/plascon-woodcare-varnish.jpg", alt: "Plascon WoodCare Interior Varnish tin", name: "WoodCare Interior Varnish", note: "Gloss finish, water-based" },
  { src: "/images/plascon-woodcare-knot.jpg", alt: "Plascon WoodCare Knot Seal tin", name: "WoodCare Knot Seal", note: "Interior / exterior" },
  { src: "/images/plascon-woodcare-sealer.jpg", alt: "Plascon WoodCare Sanding Sealer tin", name: "WoodCare Sanding Sealer", note: "Interior" },
  { src: "/images/plascon-rubber-tuff.jpg", alt: "Plascon Rubber Tuff heavy-duty reinforced waterproofing bucket", name: "Rubber Tuff", note: "Heavy-duty waterproofing" },
  { src: "/images/plascon-allseal.jpg", alt: "Plascon Allseal waterproofing with membrane bucket", name: "Allseal", note: "Waterproofing with membrane" },
  { src: "/images/plascon-end-rust.jpg", alt: "Plascon End Rust anti-rust primer bucket", name: "End Rust Anti-Rust Primer", note: "3-in-1, water-based" },
  { src: "/images/plascon-micatex.jpg", alt: "Plascon Micatex exterior paint bucket", name: "Micatex", note: "Exterior, matt fine texture" },
  { src: "/images/plascon-nuroof-cool.jpg", alt: "Plascon Nuroof Cool roof paint bucket", name: "Nuroof Cool", note: "Roof paint, low sheen" },
  { src: "/images/plascon-bituminous-aluminium.jpg", alt: "Plascon Bituminous Aluminium paint tin", name: "Bituminous Aluminium Paint", note: "Exterior, silver finish" },
  { src: "/images/plascon-steeltect-primer.jpg", alt: "Plascon Steeltect 1200 SB mild steel primer tin", name: "Steeltect 1200 SB Primer", note: "Mild steel primer, solvent-based" },
  { src: "/images/plascon-steeltect-degreaser.jpg", alt: "Plascon Steeltect 7100 SB degreaser and cleaner tin", name: "Steeltect 7100 SB Degreaser", note: "Cleaner for mild steel" },
  { src: "/images/plascon-steeltect-cleaner.jpg", alt: "Plascon Steeltect 7100 WB galvanised iron cleaner container", name: "Steeltect 7100 WB Cleaner", note: "Cleaner for galvanised iron" },
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
