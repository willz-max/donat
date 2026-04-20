"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight, FaExclamationTriangle, FaDollarSign } from "react-icons/fa";

const FundraisingCampaigns = () => {
  const [donateAmount, setDonateAmount] = useState("10.00");
  const amounts = ["10.00", "25.00", "50.00", "100.00", "250.00"];

  return (
    <section className="relative w-full py-20 px-6 lg:px-20 overflow-hidden bg-[#F9F7F2]">
      {/* ─── BACKGROUND TEXTURE & DECORATIONS ─── */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `url('/texture-bg.jpg')`, backgroundRepeat: 'repeat' }}></div>
      
      {/* Floating Decorations */}
      <div className="absolute top-0 right-0 w-[30%] h-auto opacity-30 z-0">
        <img src="/brushstroke-light.png" alt="" className="w-full h-auto object-contain" />
      </div>
      <div className="absolute bottom-10 right-0 w-64 lg:w-96 opacity-50 z-0 pointer-events-none">
        <img src="/hand-hearts.png" alt="" className="w-full h-auto" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* ─── HEADER ─── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-amber-500 text-lg font-serif italic">Fundraising Campaigns</span>
              <div className="w-8 h-px bg-amber-500"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight">
              Save The Children, One Donation At The Time
            </h2>
          </div>
          
          <button className="flex items-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-md group shrink-0 text-sm">
            Contact Us Now 
            <FaArrowRight className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* ─── DONATION CARD ─── */}
        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Image Side (35%) */}
          <div className="lg:w-[35%] relative min-h-[300px] lg:min-h-full">
            <Image
              src="/hero_bg_3.png"
              alt="Campaign"
              fill
              className="object-cover"
              style={{ objectPosition: "80% center" }} 
              priority
            />
          </div>

          {/* Content Side (65%) */}
          <div className="lg:w-[65%] p-8 lg:p-12 flex flex-col">
            <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-6 tracking-tight">
              Medical Health or People React Acuter.
            </h3>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="relative w-full h-1.5 bg-gray-100 rounded-full">
                <div className="absolute top-0 left-0 h-full w-[75%] bg-teal-700 rounded-full flex items-center justify-end">
                  <div className="w-3 h-3 rounded-full bg-white border-2 border-teal-700 translate-x-1.5 shadow-sm"></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 text-sm font-medium">
                <span className="text-zinc-500">Raised - <span className="text-zinc-900 font-bold">$138,310.00</span></span>
                <span className="text-teal-700">Goal - $10,000.00</span>
              </div>
            </div>

            <hr className="my-8 border-gray-100" />

            {/* Notice Alert (Compact) */}
            <div className="flex items-center gap-5 mb-8">
               <div className="flex flex-col items-center">
                  <div className="w-[2px] h-6 bg-amber-500 rounded-full"></div>
                  <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center -my-1 z-10">
                    <FaExclamationTriangle className="text-white text-[10px]" />
                  </div>
                  <div className="w-[2px] h-6 bg-amber-500 rounded-full"></div>
               </div>
               <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                 <span className="font-bold text-zinc-900">Notice:</span> Test mode is enabled. While in test mode no live donations are processed.
               </p>
            </div>

            {/* Donation Input Box (Compact) */}
            <div className="flex items-center gap-4 bg-white rounded-full p-1.5 mb-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-50 max-w-[280px]">
              <div className="w-12 h-12 rounded-full bg-teal-800 flex items-center justify-center text-white text-lg shrink-0">
                <FaDollarSign />
              </div>
              <input 
                type="text" 
                value={donateAmount}
                onChange={(e) => setDonateAmount(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-xl font-bold text-zinc-900 w-full outline-none"
              />
            </div>

            {/* Amount Buttons Row (Compact) */}
            <div className="flex flex-wrap gap-3 mb-10">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setDonateAmount(amt)}
                  className={`py-2.5 px-6 rounded-full border transition-all duration-300 text-sm font-semibold ${
                    donateAmount === amt 
                    ? "bg-teal-800 border-teal-800 text-white shadow-md" 
                    : "bg-white border-gray-200 text-zinc-600 hover:border-teal-800"
                  }`}
                >
                  ${amt}
                </button>
              ))}
              <button className="py-2.5 px-6 rounded-full border border-gray-200 text-zinc-600 text-sm font-semibold hover:border-teal-800">
                Custom Amount
              </button>
            </div>

            {/* Final CTA Button */}
            <button className="w-fit bg-white border border-gray-200 hover:bg-teal-800 hover:text-white hover:border-teal-800 transition-all duration-500 py-3 px-10 rounded-full font-bold text-sm shadow-sm">
              Donate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundraisingCampaigns;