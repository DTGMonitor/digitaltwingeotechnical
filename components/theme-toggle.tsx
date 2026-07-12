"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/**
 * Header theme toggle — flips <html data-theme> between dark (default) and light,
 * persisting the choice. The no-flash inline script in app/layout.tsx applies the
 * stored value before paint; on mount we sync from the DOM the script set.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("dtg-theme", next);
    } catch {
      /* storage unavailable — the toggle still works for the session */
    }
    setTheme(next);
  }

  const nextLabel = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${nextLabel} theme`}
      aria-pressed={theme === "light"}
    >
      {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
    </button>
  );
}
