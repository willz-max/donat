"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FaSearch, FaBars, FaTimes, FaHeart } from "react-icons/fa";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Donations", href: "/donations" },
  { label: "Pages", href: "/pages" },
  { label: "Blog", href: "/blog" },
  { label: "contact", href: "/contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300 bg-white">
      
      {/* ── Desktop Navbar ── */}
      <nav className="hidden sm:flex w-[90%] max-w-7xl mx-auto h-24 items-center justify-between py-4 gap-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img src="/logo.svg" alt="Donat Logo" className="h-10 w-auto" />
        </Link>

        {/* Nav Links pill */}
        <div className="flex items-center h-full gap-1 bg-teal-800 rounded-full px-8 py-3 flex-1 max-w-2xl justify-between shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white text-sm font-medium hover:text-amber-400 transition-colors duration-200 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className="h-14 w-14 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors duration-200 flex items-center justify-center text-white shadow-md"
            aria-label="Search"
          >
            <FaSearch size={20} />
          </button>

          {/* Donate Now CTA */}
          <Link
            href="/donate"
            className="flex items-center gap-2 bg-amber-400 hover:bg-teal-800 text-white font-semibold text-sm px-6 h-14 rounded-full transition-all duration-300 shadow-md whitespace-nowrap"
          >
            <FaHeart size={16} fill="white" />
            Donate Now
          </Link>
        </div>
      </nav>

      {/* Search Bar (desktop) */}
      {searchOpen && (
        <div className="hidden sm:flex w-[90%] max-w-7xl mx-auto pb-3 animate-in slide-in-from-top-2 duration-200">
          <input
            autoFocus
            type="text"
            placeholder="Search causes, campaigns..."
            className="w-full border border-gray-200 rounded-full px-6 py-3 text-sm text-gray-700 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100 shadow-lg bg-white"
          />
        </div>
      )}

      {/* ── Mobile Navbar ── */}
      <nav className="flex sm:hidden w-full h-20 bg-white items-center justify-between px-5 border-b border-gray-100 shadow-sm">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.svg" alt="Donat Logo" className="h-9 w-auto" />
        </Link>

        {/* Mobile Right Actions */}
        <div className="flex items-center gap-2">
          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="h-11 w-11 rounded-full bg-teal-800 hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-100 shadow-2xl animate-in slide-in-from-top-full duration-300">
          <ul className="flex flex-col px-5 py-4 gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-3 text-gray-800 font-medium text-sm border-b border-gray-50 hover:text-teal-800 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/donate"
                className="flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-teal-800 text-white font-semibold text-sm py-3 rounded-full transition-colors duration-300 shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaHeart size={15} fill="white" />
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;