"use client";

import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Fund Poor Raised",
    description: "Share stories and experiences from current volunteers to inspire others to join.",
    image: "/service_card_3_1.png", // Replace with your image
    icon: "/service-card-icon1-1.svg", // Replace with your icon
  },
  {
    id: 2,
    title: "Money This Treatment",
    description: "Share stories and experiences from current volunteers to inspire others to join.",
    image: "/service_card_3_2.png", // Replace with your image
    icon: "/service-card-icon1-2.svg", // Replace with your icon
  },
  {
    id: 3,
    title: "Child Education Raised",
    description: "Share stories and experiences from current volunteers to inspire others to join.",
    image: "/service_card_3_3.png", // Replace with your image
    icon: "/service-card-icon1-3.svg", // Replace with your icon
  },
];

const medicalKeywords = [
  { text: "Medical", type: "filled" },
  { text: "Medical", type: "outlined" },
];

const ServicesSection = () => {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      
      {/* ─── HEADER ─── */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="w-12 h-px bg-amber-500 hidden sm:block"></div>
          <span className="text-amber-500 text-2xl font-serif italic">Our Best Services</span>
          <div className="w-12 h-px bg-amber-500 hidden sm:block"></div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 max-w-3xl mx-auto leading-tight">
          We Provide This Life's Service To The Poor.
        </h2>
      </div>

      {/* ─── CARDS GRID ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Image Container (Grayscale to Color effect) */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Card Content */}
              <div className="relative bg-white px-6 pb-12 pt-16 text-center grow flex flex-col items-center">
                
                {/* ─── MODIFIED: Semi-Circle Icon Badge ─── */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-32 h-16 bg-white rounded-t-full flex items-center justify-center">
                  {/* Inner Gold Arc (No bottom border to keep semi-circle look) */}
                  <div className="absolute top-2 left-2 right-2 bottom-0 border-t-2 border-l-2 border-r-2 border-amber-600/40 rounded-t-full flex items-center justify-center">
                    <div className="relative w-12 h-12 mb-[-10px]">
                      <img src={service.icon} alt="Service Icon" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-zinc-900 mb-3 group-hover:text-teal-800 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-[260px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── BOTTOM MEDICAL TEXT CAROUSEL ─── */}
      <div className="relative w-full mt-24 py-10 bg-white border-t border-gray-100 overflow-hidden">
        <div className="flex w-fit items-center gap-12 animate-scroll-text">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-6xl md:text-3xl lg:text-7xl font-black text-teal-800 uppercase">
                Medical
              </span>
              <div className="w-5 h-5 bg-[#FF5722] rounded-full shrink-0"></div>
              <span 
                className="text-6xl md:text-3xl lg:text-7xl font-black uppercase"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #FF5722",
                }}
              >
                Medical
              </span>
              <div className="w-5 h-5 bg-[#FF5722] rounded-full shrink-0"></div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CUSTOM SCROLL ANIMATION ─── */}
      <style jsx>{`
        @keyframes scroll-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-text {
          animation: scroll-text 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;