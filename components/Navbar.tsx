"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold tracking-tight">
          <span className="text-primary">Re</span>
          <span className="text-charcoal">Room</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted hover:text-charcoal transition-colors"
          >
            How It Works
          </a>
          <a
            href="#examples"
            className="text-sm font-medium text-muted hover:text-charcoal transition-colors"
          >
            Examples
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted hover:text-charcoal transition-colors"
          >
            Pricing
          </a>
          <a
            href="https://app.roomlab.ca"
            className="bg-charcoal text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-charcoal/90 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-charcoal transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted"
            onClick={() => setMenuOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#examples"
            className="text-sm font-medium text-muted"
            onClick={() => setMenuOpen(false)}
          >
            Examples
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="https://app.roomlab.ca"
            className="bg-charcoal text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
