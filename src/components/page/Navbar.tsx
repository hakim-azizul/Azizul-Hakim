"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { useState, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
        {/* LOGO */}
        <Link
          href="/"
          className="font-mono text-xl font-bold tracking-tight flex items-center gap-0.5 shrink-0"
        >
          <span className="text-foreground">{`{`}</span>
          <span className="border-b-2 border-signature pb-0.5">A</span>
          <span className="text-foreground">{`}`}</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-signature after:transition-all after:duration-300 after:rounded-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Resume Download Button */}
          <a
            href="/Azizul-Hakim-Resume.pdf"
            download="Azizul-Hakim-Resume.pdf"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-signature text-signature-foreground hover:opacity-90 px-5 h-9 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-signature focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Azizul-Hakim-Resume.pdf"
            download="Azizul-Hakim-Resume.pdf"
            onClick={closeMobile}
            className="inline-flex items-center gap-2 mt-2 py-2.5 text-sm font-medium text-signature hover:text-signature/80 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
