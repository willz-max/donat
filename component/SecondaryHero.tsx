"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaSearch, 
  FaShoppingCart, 
  FaHeart, 
  FaBars, 
  FaTimes, 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedinIn,
  FaArrowRight 
} from "react-icons/fa";

interface SecondaryHeroProps {
  title: string;
  bgImage?: string;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Donations", href: "/donations" },
  { label: "Pages", href: "/pages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function SecondaryHero({ title, bgImage = "/Secondary-hero-bg.png" }: SecondaryHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // Total Height restricted to 80% of screen height
    <div className="relative w-full h-[80vh] flex flex-col overflow-hidden bg-white">
      
      {/* ─── TOP CONTACT HEADER (ENLARGED) ─── */}
      <div className="hidden lg:block bg-white py-8 border-b border-gray-100 shrink-0">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo & Socials Section */}
          <div className="flex flex-col gap-6">
            <img src="/logo.svg" alt="Donat Logo" className="h-12 w-auto object-contain self-start" />
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-teal-700 hover:text-white transition-all cursor-pointer shadow-sm">
                  <Icon size={14} />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info Blocks - Text sizes increased */}
          <div className="flex gap-12">
            <InfoBlock label="Locate Address:" value="Newyork City, USA" />
            <div className="w-[1.5px] h-12 bg-gray-100 self-center" />
            <InfoBlock label="Call us any time:" value="+163-3654-7896" />
            <div className="w-[1.5px] h-12 bg-gray-100 self-center" />
            <InfoBlock label="Email us any time:" value="info@donat.com" />
          </div>
        </div>
      </div>

      {/* ─── NAVIGATION & HERO IMAGE AREA (Takes remaining height) ─── */}
      <section className="relative flex-1 flex flex-col items-center min-h-0">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-[#0a4a44]/80 mix-blend-multiply" />
        </div>

        {/* ─── DESKTOP NAVIGATION ─── */}
        <nav className="hidden lg:flex relative z-50 w-full max-w-7xl px-4 -mt-8"> 
          {/* -mt-8 pulls the navbar up slightly into the white area as seen in professional designs */}
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 bg-[#0a4a44] rounded-full px-10 h-20 flex items-center shadow-2xl">
              <div className="flex gap-10">
                {navItems.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    className="text-white text-[15px] font-bold hover:text-orange-400 transition-colors tracking-wide"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <button className="h-20 w-20 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-[#0a4a44] transition-all shadow-xl">
                <FaSearch size={22} />
            </button>

            <Link href="/donate" className="flex items-center gap-3 bg-orange-500 hover:bg-[#0a4a44] text-white font-black px-10 h-20 rounded-full transition-all shadow-xl whitespace-nowrap ml-2 uppercase text-sm tracking-widest">
                <FaHeart size={18} />
                Donate Now
            </Link>
          </div>
        </nav>

        {/* ─── MOBILE NAVBAR ─── */}
        <nav className="lg:hidden relative z-50 w-full px-4 mt-6 flex items-center gap-3">
          <div className="flex-1 bg-[#0a4a44] rounded-full h-[60px] flex items-center px-6 shadow-xl">
             <img src="/logo-white.svg" alt="Logo" className="h-6 w-auto" />
          </div>
          <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-[60px] w-[60px] shrink-0 rounded-full bg-[#0a4a44] flex items-center justify-center text-white shadow-xl"
            >
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </nav>

        {/* ─── HERO CONTENT ─── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg"
          >
            {title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 text-0.5xl font-bold"
          >
            <Link href="/" className="text-orange-400 hover:underline">
                Home
            </Link>
            <FaArrowRight size={16} className="text-white" />
            <span className="text-white">{title}</span>
          </motion.div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden absolute top-28 left-4 right-4 bg-white rounded-3xl shadow-2xl z-[60] overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                {navItems.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-900 text-xl font-bold border-b border-gray-100 pb-3"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

// Sub-component for the top info blocks with increased font weights/sizes
function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-gray-400 uppercase tracking-[0.2em] font-bold">
        {label}
      </span>
      <span className="text-gray-900 font-extrabold text-xl tracking-tight">
        {value}
      </span>
    </div>
  );
}