import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Ship Your Startup's MVP.{" "}
                <span className="text-gradient">In 48 Hours.</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-semibold">Reesav Raj</span>. I turn your vision into a live, 
                functional MVP using the MERN stack & React Native, so you can validate, 
                fundraise, and launch. <span className="text-primary font-semibold">Fast.</span>
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="cta"
                className="text-lg px-8 py-6 h-auto group"
                asChild
              >
                <a href="#contact">
                  Book a Call
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 h-auto border-muted hover:border-primary"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-gradient">48h</div>
                <div className="text-sm text-muted-foreground">Average Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">MERN + RN</div>
                <div className="text-sm text-muted-foreground">Tech Stack</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">MVP Focus</div>
                <div className="text-sm text-muted-foreground">No Bloat</div>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={heroImage} 
                alt="Futuristic tech visualization" 
                className="w-full h-auto animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
