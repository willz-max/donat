"use client";

import React from "react";
import Image from "next/image";
import { FaClock, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Give the blessings of your hun boa to children's",
    image: "/event-1.png", 
    time: "10:00 AM – 2.00 PM",
    date: "24, Jun - 2025",
    venue: "350 5th AveNew York, NY 118 United States",
    description: "Our secure online donation platform allows you to make contributions quickly and safely. Choose from various payment methods and set up one-time.exactly.",
    speakerImage: "/event-speakers.png" 
  },
  {
    id: 2,
    title: "Providing Access to safe water, sanitation",
    image: "/event-2.png", 
    time: "10:00 AM – 2.00 PM",
    date: "24, Jun - 2025",
    venue: "350 5th AveNew York, NY 118 United States",
    description: "Our secure online donation platform allows you to make contributions quickly and safely. Choose from various payment methods and set up one-time.exactly.",
    speakerImage: "/event-speakers.png"
  }
];

const EventSection = () => {
  return (
    <section className="relative w-full py-16 px-6 lg:px-20 bg-[#F9F7F2]/50">
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION HEADER (Reduced sizes) --- */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-px bg-amber-500"></div>
            <span className="text-amber-500 text-lg font-serif italic">Our Events</span>
            <div className="w-8 h-px bg-amber-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-zinc-900 leading-tight">
            Join Our Latest Upcoming Events
          </h2>
        </div>

        {/* --- EVENTS LIST --- */}
        <div className="flex flex-col gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row p-6 lg:p-8 gap-8 lg:gap-12"
            >
              {/* LEFT: EVENT IMAGE (approx 35% width) */}
              <div className="lg:w-[35%] relative min-h-[280px] rounded-[24px] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* RIGHT: CONTENT SIDE (approx 65% width) */}
              <div className="lg:w-[65%] flex flex-col">
                
                {/* 1. Meta Data (Smaller text) */}
                <div className="flex flex-wrap items-center gap-6 mb-4 text-xs font-bold text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <FaClock className="text-amber-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-amber-500" />
                    {event.date}
                  </div>
                </div>

                {/* 2. Headline (Reduced to match design) */}
                <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-zinc-900 mb-4 leading-tight">
                  {event.title}
                </h3>

                {/* 3. Description (Smaller text) */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* 4. Thin Separator Line */}
                <div className="w-full h-px bg-gray-50 mb-6" />

                {/* 5. Venue Section */}
                <div className="mb-8">
                  <span className="block text-amber-500 font-bold text-base mb-1">Venue</span>
                  <p className="text-gray-400 text-sm md:text-base font-medium">{event.venue}</p>
                </div>

                {/* ─── MODIFIED FOOTER: Parent Div for Button & Speakers ─── */}
                <div className="mt-auto flex items-center justify-between gap-4">
                  
                  {/* Action Button (Smaller padding) */}
                  <button className="flex items-center justify-center gap-2 bg-teal-800 hover:bg-teal-900 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md text-sm group">
                    Event Details 
                    <FaArrowRight className="-rotate-45 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Speaker Graphic (Single Image + Label) */}
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-10 relative flex items-center">
                        <img 
                          src={event.speakerImage} 
                          alt="Speakers" 
                          className="w-full h-full object-contain" 
                        />
                    </div>
                    <span className="text-sm font-bold text-zinc-900 hidden sm:inline">Speakers</span>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;