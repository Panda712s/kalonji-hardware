type P = { size?: number };

const base = (size = 20) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const Phone = ({ size }: P) => (
  <svg {...base(size)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>
);
export const Chat = ({ size }: P) => (
  <svg {...base(size)}><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.4A8.5 8.5 0 1 1 21 11.5Z" /></svg>
);
export const Pin = ({ size }: P) => (
  <svg {...base(size)}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const Arrow = ({ size }: P) => (
  <svg {...base(size)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Check = ({ size }: P) => (
  <svg {...base(size)}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const Menu = ({ size }: P) => (
  <svg {...base(size)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = ({ size }: P) => (
  <svg {...base(size)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Layers = ({ size }: P) => (
  <svg {...base(size)}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></svg>
);
export const Zap = ({ size }: P) => (
  <svg {...base(size)}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>
);
export const Tag = ({ size }: P) => (
  <svg {...base(size)}><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" /><circle cx="7.5" cy="7.5" r="1.2" /></svg>
);
export const Facebook = ({ size }: P) => (
  <svg {...base(size)}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" /></svg>
);
export const Sun = ({ size }: P) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
export const Moon = ({ size }: P) => (
  <svg {...base(size)}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
);
export const ArrowUp = ({ size }: P) => (
  <svg {...base(size)}><path d="M12 19V5M6 11l6-6 6 6" /></svg>
);
export const Basket = ({ size }: P) => (
  <svg {...base(size)}><path d="M5 9h14l-1.4 9.1a2 2 0 0 1-2 1.9H8.4a2 2 0 0 1-2-1.9L5 9Z" /><path d="m9 9 3-5 3 5" /></svg>
);
export const Search = ({ size }: P) => (
  <svg {...base(size)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const Plus = ({ size }: P) => (
  <svg {...base(size)}><path d="M12 5v14M5 12h14" /></svg>
);
export const Minus = ({ size }: P) => (
  <svg {...base(size)}><path d="M5 12h14" /></svg>
);
export const Trash = ({ size }: P) => (
  <svg {...base(size)}><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></svg>
);
export const Clock = ({ size }: P) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Left = ({ size }: P) => (
  <svg {...base(size)}><path d="m15 5-7 7 7 7" /></svg>
);
export const Right = ({ size }: P) => (
  <svg {...base(size)}><path d="m9 5 7 7-7 7" /></svg>
);
