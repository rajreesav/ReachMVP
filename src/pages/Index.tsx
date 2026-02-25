import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import BookCall from "@/components/BookCall";
import Contact from "@/components/Contact";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <WhyWorkWithMe />
      <BookCall />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
