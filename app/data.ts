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
