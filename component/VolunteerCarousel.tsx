"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { 
  FaHeart, 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaBehance 
} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";

interface Volunteer {
  id: number;
  name: string;
  role: string;
  image: string;
}

const volunteers: Volunteer[] = [
  { id: 1, name: "Daniel Thomas", role: "Volunteer", image: "team-1.png" },
  { id: 2, name: "Michel Connor", role: "Volunteer", image: "team-3.png" },
  { id: 3, name: "Michel Connor", role: "Volunteer", image: "team-1.png" },
  { id: 4, name: "Jessica Lauren", role: "Volunteer", image: "team-2.png" },
  { id: 5, name: "Lucas Scott", role: "Volunteer", image: "team-3.png" },
];

export default function VolunteerCarousel() {
  return (
    <section className="relative py-24 bg-[#fcfcfc] overflow-hidden font-nunito">
      
      {/* ─── DECORATIVE HAND ICONS (Background) ─── */}
      <div className="absolute top-20 left-10 lg:left-40 animate-bounce opacity-20 lg:opacity-100">
        <img src="/hand-yellow.png" alt="" className="w-16 h-auto rotate-12" />
      </div>
      <div className="absolute top-20 right-10 lg:right-40 animate-pulse opacity-20 lg:opacity-100">
         <div className="relative">
            <FaHeart className="text-gray-100 text-6xl absolute -top-4 -left-4" />
            <img src="/hand-orange.png" alt="" className="w-16 h-auto -rotate-12 relative z-10" />
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        
        {/* ─── SECTION HEADING ─── */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaHeart className="text-[#0a4a44] text-xl" />
            <span className="text-orange-500 font-bold text-2xl font-caveat">
              Our Volunteer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-[900] text-gray-900 tracking-tight">
            Meet The Optimistic Volunteer
          </h2>
        </div>

        {/* ─── CAROUSEL ─── */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 10000, // 10 Seconds
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {volunteers.map((person) => (
            <SwiperSlide key={person.id}>
              <div className="group">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-[40px] aspect-[4/5] mb-6 bg-gray-100 shadow-sm">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Small decorative hand on the first card like your image */}
                  {person.id === 1 && (
                    <img src="/hand-orange-small.png" alt="" className="absolute bottom-4 left-4 w-10 h-auto" />
                  )}
                </div>

                {/* Info */}
                <div className="px-2">
                  <h3 className="text-2xl font-black text-gray-900 mb-1">
                    {person.name}
                  </h3>
                  <p className="text-gray-400 font-bold text-sm uppercase tracking-wider mb-4">
                    {person.role}
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex gap-4 text-gray-800">
                    <SocialLink icon={<FaTwitter />} />
                    <SocialLink icon={<FaFacebookF />} />
                    <SocialLink icon={<FaInstagram />} />
                    <SocialLink icon={<FaBehance />} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Decorative Hand */}
        <div className="flex justify-end pr-20 -mt-10 opacity-20 lg:opacity-100">
            <img src="/hand-teal.png" alt="" className="w-16 h-auto" />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="hover:text-orange-500 transition-colors text-base">
      {icon}
    </button>
  );
}