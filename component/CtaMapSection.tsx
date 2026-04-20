"use client";

import React from "react";

const CtaMapSection = () => {
  return (
    <section className="relative w-full flex flex-col lg:flex-row min-h-[500px] overflow-hidden">
      
      {/* ─── LEFT SIDE: FORM CONTENT ─── */}
      <div className="w-full lg:w-[55%] bg-[#0a251e] py-16 px-6 md:px-12 lg:px-20 flex flex-col justify-center">
        
        {/* Subtitle */}
        <span className="text-amber-500 text-lg font-serif italic mb-2 block">
          Call To Action
        </span>
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-10 leading-tight">
          Give Your Big Hand Forever
        </h2>

        {/* Form Grid */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Input */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Your name" 
              className="w-full h-14 px-8 rounded-full bg-[#0d2e25] border border-[#1d443a] text-white placeholder-gray-400 outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your Email Address..." 
              className="w-full h-14 px-8 rounded-full bg-[#0d2e25] border border-[#1d443a] text-white placeholder-gray-400 outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Phone Input */}
          <div className="relative">
            <input 
              type="tel" 
              placeholder="Phone Number..." 
              className="w-full h-14 px-8 rounded-full bg-[#0d2e25] border border-[#1d443a] text-white placeholder-gray-400 outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Zip Code Input */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Zip Code..." 
              className="w-full h-14 px-8 rounded-full bg-[#0d2e25] border border-[#1d443a] text-white placeholder-gray-400 outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-1">
            <button 
              type="submit" 
              className="w-full h-14 rounded-full bg-amber-500 hover:bg-white hover:text-teal-900 text-teal-950 font-bold transition-all duration-300 shadow-lg"
            >
              Get Involved Today
            </button>
          </div>
        </form>
      </div>

      {/* ─── RIGHT SIDE: MAP CONTENT ─── */}
      <div className="w-full lg:w-[45%] h-[400px] lg:h-auto relative bg-gray-200">
        {/* Grayscale Google Map Iframe */}
        <iframe 
          title="Location Map"
          className="w-full h-full grayscale opacity-80 contrast-125"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d153205.975497216!2d18.15655767512838!3d52.22277439008984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b339486f059c3%3A0xc3042078601878d2!2sKonin%2C%20Poland!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
          loading="lazy"
          allowFullScreen
        ></iframe>

        {/* Floating Custom Map Label (Mimics the Konin UI in your design) */}
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-md shadow-lg border border-gray-100 hidden md:flex items-center gap-4">
           <div>
              <p className="text-zinc-900 font-bold text-sm">Konin</p>
              <p className="text-zinc-500 text-xs">Konin, Poland</p>
           </div>
           <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-zinc-400">
              {/* Box icon placeholder */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
           </div>
        </div>
      </div>
      
    </section>
  );
};

export default CtaMapSection;