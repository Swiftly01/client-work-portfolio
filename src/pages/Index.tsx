import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import OtherSection from "@/components/OtherSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <OtherSection/>
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
