import SecondaryHero from "@/component/SecondaryHero";
import FeatureCards from "@/component/FeatureCards";   
import AboutSection from "@/component/AboutSection"; 
import VolunteerCarousel from "@/component/VolunteerCarousel";  
import VideoStatsSection from "@/component/VideoStatsSection";
import TestimonialSection from "@/component/TestimonialSection";
import TrustedBy from "@/component/TrustedBy";




export default function About() {
  return (
    <div>
      <SecondaryHero title="About" />
      <FeatureCards />
      <AboutSection />
      <VolunteerCarousel/>
      <VideoStatsSection />
      <TestimonialSection />
      <TrustedBy />
    </div>
  );
}