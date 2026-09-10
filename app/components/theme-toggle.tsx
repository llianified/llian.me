"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

function updateBrowserTheme() {
  const light = document.documentElement.dataset.theme === "light";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", light ? "#fdfdfc" : "#11110f");
  document
    .querySelector('link[rel="icon"]')
    ?.setAttribute("href", light ? "/favicon-light.png" : "/favicon-dark.png");
  return light;
}

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(true);

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

  useEffect(() => {
    setIsLight(updateBrowserTheme());

    const sync = (event: StorageEvent) => {
      if (event.key === "llian-theme" || event.key === null) {
        document.documentElement.dataset.theme =
          event.newValue === "dark" ? "dark" : "light";
        setIsLight(updateBrowserTheme());
      }
    };

    const shortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        event.key.toLowerCase() !== "t" ||
        event.repeat ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        target?.isContentEditable ||
        target?.matches("input, textarea, select")
      ) return;
      toggleTheme();
    };

    window.addEventListener("storage", sync);
    window.addEventListener("keydown", shortcut);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("keydown", shortcut);
    };
  }, []);

  const label = isLight ? "Switch to dark theme" : "Switch to light theme";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={!isLight}
      title={`${label} (T)`}
    >
      <SunIcon className="sun-icon" />
      <MoonIcon className="moon-icon" />
    </button>
  );
}
