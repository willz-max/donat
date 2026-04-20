import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import About from "@/component/About";
import DonationCauses from "@/component/DonationCauses";
import DonationCta from "@/component/DonationCta";
import ServicesSection from "@/component/ServicesSection";
import FundraisingCampaigns from "@/component/FundraisingCampaigns";
import VolunteersSection from "@/component/VolunteersSection";
import  SuccessStorySection from "@/component/SuccessStorySection";
import TestimonialSection from "@/component/TestimonialSection";
import EventSection from "@/component/EventSection";
import CtaMapSection from "@/component/CtaMapSection";
import NewsSection from "@/component/NewsSection";




function Home() {
  return(
      <div>
        <Navbar />
        <Hero />
        <About />
        <DonationCauses />
        <DonationCta />
        <ServicesSection />
        <FundraisingCampaigns />
        <VolunteersSection />
        <SuccessStorySection />
        <TestimonialSection/>
        <EventSection />
        <CtaMapSection />
        <NewsSection />
      

      
        
      </div>
  );
}

export default Home