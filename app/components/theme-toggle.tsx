"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "./icons";
import type { Language } from "@/lib/content";

function updateBrowserTheme() {
  const light = document.documentElement.dataset.theme === "light";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", light ? "#f3f3f3" : "#111111");
  document.querySelector('link[rel="icon"]')?.setAttribute("href", light ? "/favicon-light.png" : "/favicon-dark.png");
}

export function ThemeToggle({ language = "id" }: { language?: Language }) {
  useEffect(() => {
    updateBrowserTheme();
    const sync = (event: StorageEvent) => {
      if (event.key === "llian-theme" || event.key === null) {
        document.documentElement.dataset.theme = event.newValue === "light" ? "light" : "dark";
        updateBrowserTheme();
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  function toggleTheme() {
    const theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    updateBrowserTheme();
    try { localStorage.setItem("llian-theme", theme); } catch { /* The toggle still works when browser storage is blocked. */ }
  }

  const label = language === "id" ? "Ganti tema terang / gelap" : "Toggle light / dark theme";
  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={label} title={label}>
      <SunIcon className="sun-icon" />
      <MoonIcon className="moon-icon" />
    </button>
  );
}
