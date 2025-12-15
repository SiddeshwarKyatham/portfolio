import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import HowIBuildSection from "@/components/HowIBuildSection";
import BehindProjectsSection from "@/components/BehindProjectsSection";
import DecisionsSection from "@/components/DecisionsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <HowIBuildSection />
      <ProjectsSection />
      <BehindProjectsSection />
      <DecisionsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
