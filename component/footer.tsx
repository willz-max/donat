"use client";

import React from "react";
import Link from "next/link";
import { 
  FaPaperPlane, 
  FaHeart, 
  FaArrowRight, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedinIn,
  FaArrowUp 
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full text-white overflow-hidden">
      
      {/* ─── BACKGROUND IMAGE LAYER ─── */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/footer-bg.png" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* ─── CONTENT WRAPPER ─── */}
      <div className="relative z-10">
        
        {/* ─── 1. NEWSLETTER BAR ─── */}
        <div className="relative w-full pt-28 pb-16 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black mb-2">Subscribe To Our Newsletter</h2>
              <p className="text-gray-300 font-medium">Regular inspections and feedback mechanisms</p>
            </div>

            <div className="relative flex items-center w-full max-w-xl">
              <input 
                type="email" 
                placeholder="Enter Email Address" 
                className="w-full h-16 rounded-full px-8 pr-20 bg-white text-zinc-900 outline-none placeholder-gray-500 shadow-xl"
              />
              <button className="absolute right-2 w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-teal-950 shadow-lg hover:scale-105 active:scale-95 transition-transform">
                <FaPaperPlane size={18} />
              </button>
            </div>
          </div>
          
          {/* Horizontal Divider */}
          <div className="max-w-7xl mx-auto h-px bg-white/10 mt-16" />
        </div>

        {/* ─── 2. MAIN FOOTER CONTENT ─── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-10 lg:pb-24 lg:pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Col 1: Brand Info */}
            <div className="flex flex-col gap-6">
              <img src="/logo-white.svg" alt="Donat Logo" className="h-10 w-auto self-start" />
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                Our secure online donation platform allows you to make contributions quickly and safely. Choose from various.
              </p>
              <button className="flex items-center gap-2 w-fit bg-teal-800/40 border border-white/10 hover:bg-amber-500 hover:text-teal-950 transition-all duration-300 py-3 px-8 rounded-full font-bold text-sm">
                <FaHeart className="text-amber-500" />
                Donate Now
              </button>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-amber-500"></span>
              </h4>
              <ul className="flex flex-col gap-4">
                {["About Us", "Our News", "Our Campaign", "Privacy policy", "Contact Us"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-amber-500 transition-colors text-sm group">
                      <FaArrowRight className="-rotate-45 text-amber-500 text-xs transition-transform group-hover:translate-x-1" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Our Service */}
            <div>
              <h4 className="text-xl font-bold mb-6 relative">
                Our Service
                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-amber-500"></span>
              </h4>
              <ul className="flex flex-col gap-4">
                {["Give Donation", "Education Support", "Food Support", "Health Support", "Our Campaign"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-amber-500 transition-colors text-sm group">
                      <FaArrowRight className="-rotate-45 text-amber-500 text-xs transition-transform group-hover:translate-x-1" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Us Card */}
            <div className="relative">
              <div className="bg-[#0a251e]/60 backdrop-blur-md p-8 pr-12 rounded-[30px] border border-white/10 shadow-2xl">
                <h4 className="text-2xl font-bold mb-8">Contact Us</h4>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <FaPhoneAlt className="text-white mt-1" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Call us any time:</p>
                      <p className="text-lg font-bold">+163-3654-7896</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FaEnvelope className="text-white mt-1" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Email us any time:</p>
                      <p className="text-lg font-bold">info@donat.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Social Icons Vertical Strip */}
              <div className="absolute -right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2 p-2 bg-[#0a251e] rounded-full border border-white/10 shadow-2xl">
                {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon, idx) => (
                  <button key={idx} className="w-10 h-10 rounded-full bg-white text-teal-950 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all shadow-md">
                    <Icon size={14} />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ─── 3. BOTTOM COPYRIGHT BAR ─── */}
        <div className="relative py-8 px-6 lg:px-20 flex items-center justify-center text-center">
          <p className="text-sm font-medium text-gray-300">
            © Copyright 2025 <span className="text-amber-500 font-bold">Donat</span>. All Rights Reserved.
          </p>

          <button 
            onClick={scrollToTop}
            className="absolute right-6 lg:right-20 -top-8 w-14 h-14 rounded-full bg-white border-4 border-[#0a251e] flex items-center justify-center text-teal-950 shadow-2xl transition-all hover:bg-amber-500 hover:text-white group z-50"
          >
            <FaArrowUp className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;