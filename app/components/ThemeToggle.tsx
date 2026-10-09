"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "./Icons";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const t = document.documentElement.dataset.theme;
    setDark(t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  function toggle() {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setDark(!dark);
    try {
      localStorage.setItem("kh-theme", next);
    } catch {}
  }

  return (
    <button type="button" className="theme-btn" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
