"use client";

import { useLayoutEffect, useSyncExternalStore, useCallback } from "react";
import { Sun, Moon } from "lucide-react";

function getThemeFromStorage(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme") as "light" | "dark" | null;
  return (
    stored ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
}

let listeners: Array<() => void> = [];
function subscribe(cb: () => void) {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
}
function getSnapshot(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function getServerSnapshot(): "light" | "dark" {
  return "light";
}

function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
  listeners.forEach((l) => l());
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Re-apply after React clears the class on dev remount. No-op in production.
  useLayoutEffect(() => {
    const resolved = getThemeFromStorage();
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, []);

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="relative flex items-center justify-center w-9 h-9 rounded-full border border-border bg-secondary/80 text-foreground hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-signature focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
