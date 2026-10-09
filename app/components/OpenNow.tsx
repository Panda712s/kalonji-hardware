"use client";

import { useEffect, useState } from "react";
import { HOURS } from "../data";
import { Clock } from "./Icons";

function status() {
  if (!HOURS) return null;
  const parts = new Intl.DateTimeFormat("en-ZA", {
    timeZone: "Africa/Johannesburg",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const now = `${get("hour").replace("24", "00")}:${get("minute")}`;
  const today = HOURS[day];
  if (!today) return { open: false, label: "Closed today" };
  const [from, to] = today;
  if (now >= from && now < to) return { open: true, label: `Open now · until ${to}` };
  if (now < from) return { open: false, label: `Closed · opens ${from}` };
  return { open: false, label: "Closed now" };
}

/** Shows an Open / Closed badge. Renders nothing until HOURS is filled in data.ts. */
export default function OpenNow() {
  const [s, setS] = useState<ReturnType<typeof status>>(null);

  useEffect(() => {
    setS(status());
    const id = setInterval(() => setS(status()), 60000);
    return () => clearInterval(id);
  }, []);

  if (!s) return null;
  return (
    <span className={`open-badge ${s.open ? "is-open" : "is-closed"}`}>
      <Clock size={14} /> {s.label}
    </span>
  );
}
