"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

type Theme = "light" | "dark";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => {
    ready: Promise<void>;
  };
};

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

function applyTheme(theme: Theme, onApplied: (isLight: boolean) => void) {
  const root = document.documentElement;
  const update = () => {
    root.dataset.theme = theme;
    onApplied(updateBrowserTheme());
  };
  const startViewTransition = (document as ViewTransitionDocument)
    .startViewTransition;

  if (!startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    update();
    return;
  }

  root.dataset.themeTransitioning = "";
  const transition = startViewTransition.call(document, update);
  const finishSetup = () => delete root.dataset.themeTransitioning;
  void transition.ready.then(finishSetup, finishSetup);
}

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(true);

  function toggleTheme() {
    const theme: Theme =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";
    applyTheme(theme, setIsLight);
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
        applyTheme(event.newValue === "dark" ? "dark" : "light", setIsLight);
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
