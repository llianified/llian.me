"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";
import type { Language } from "@/lib/content";

const labels = {
  id: { light: "Aktifkan tema terang", dark: "Aktifkan tema gelap" },
  en: { light: "Switch to light theme", dark: "Switch to dark theme" },
};

function updateBrowserTheme() {
  const light = document.documentElement.dataset.theme === "light";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", light ? "#f3f3f3" : "#111111");
  document
    .querySelector('link[rel="icon"]')
    ?.setAttribute("href", light ? "/favicon-light.png" : "/favicon-dark.png");
  return light;
}

export function ThemeToggle({ language = "id" }: { language?: Language }) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(updateBrowserTheme());
    const sync = (event: StorageEvent) => {
      if (event.key === "llian-theme" || event.key === null) {
        document.documentElement.dataset.theme =
          event.newValue === "light" ? "light" : "dark";
        setIsLight(updateBrowserTheme());
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  function toggleTheme() {
    const theme =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    setIsLight(updateBrowserTheme());
    try {
      localStorage.setItem("llian-theme", theme);
    } catch {
      /* The toggle still works when browser storage is blocked. */
    }
  }

  const label = labels[language][isLight ? "dark" : "light"];
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <SunIcon className="sun-icon" />
      <MoonIcon className="moon-icon" />
    </button>
  );
}
