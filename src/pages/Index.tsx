import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import ExecutionFramework from "@/components/ExecutionFramework";
import TechStack from "@/components/TechStack";
import WhyReachMVP from "@/components/WhyWorkWithMe";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoThisIsFor />
      <ExecutionFramework />
      <TechStack />
      <WhyReachMVP />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
