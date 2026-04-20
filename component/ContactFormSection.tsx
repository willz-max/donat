"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* Left Side: Image with Splatters */}
        <div className="relative">
          {/* Background Splatter Decorations (Visual Placeholders) */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0 opacity-20 pointer-events-none">
             <div className="absolute top-0 left-0 w-64 h-64 bg-teal-800 rounded-full blur-[100px]" />
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-400 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 flex justify-center">
            {/* Replace with your actual volunteer image path */}
            <img 
              src="/contact-man.png" 
              alt="Volunteer" 
              className="w-full md:w-full lg:w-[170%] xl:w-[140%] h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm p-8 md:p-12 lg:p-16">
          <form className="flex flex-col gap-6">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full h-16 px-8 rounded-full border border-gray-200 focus:border-[#1a5d4e] focus:ring-1 focus:ring-[#1a5d4e] outline-none transition-all text-gray-700 placeholder:text-gray-400"
              />
            </div>
            
            <div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full h-16 px-8 rounded-full border border-gray-200 focus:border-[#1a5d4e] focus:ring-1 focus:ring-[#1a5d4e] outline-none transition-all text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full h-16 px-8 rounded-full border border-gray-200 focus:border-[#1a5d4e] focus:ring-1 focus:ring-[#1a5d4e] outline-none transition-all text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <div>
              <textarea 
                placeholder="Type Your Message" 
                rows={5}
                className="w-full px-8 py-6 rounded-[30px] border border-gray-200 focus:border-[#1a5d4e] focus:ring-1 focus:ring-[#1a5d4e] outline-none transition-all text-gray-700 placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="bg-[#1a5d4e] text-white font-bold h-16 rounded-full px-10 self-start hover:bg-orange-500 transition-all shadow-lg shadow-teal-900/10 active:scale-95"
            >
              Send a Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}