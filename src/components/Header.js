"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import siteConfig from "../data/siteConfig";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["About", "Services", "Projects", "Videos", "Blog"];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      {/* HEADER BAR */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20 md:h-24">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.companyName}
            width={140}
            height={28}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[12px] font-semibold uppercase tracking-[0.15em] text-gray-800 hover:text-luxury-gold transition"
            >
              {item}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-4 px-7 py-3 bg-luxury-charcoal text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-luxury-gold transition"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[2px] w-6 bg-black transition ${
              menuOpen && "rotate-45 translate-y-2"
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition ${
              menuOpen && "opacity-0"
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition ${
              menuOpen && "-rotate-45 -translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 bg-white/90 backdrop-blur-xl flex flex-col gap-5">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-widest text-gray-800"
            >
              {item}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-6 py-3 text-center bg-luxury-charcoal text-white text-xs font-bold uppercase tracking-widest hover:bg-luxury-gold transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
