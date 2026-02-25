import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your Idea, Live{" "}
              <span className="text-gradient">in 48 Hours.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Stop planning. Start building. Let's hop on a call and map out your MVP.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              variant="cta"
              className="text-xl px-12 py-8 h-auto group"
              asChild
            >
              <a href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-3 w-6 h-6" />
                Book Your Call Now
              </a>
            </Button>
          </div>
          
          {/* Supporting text */}
          <p className="text-sm text-muted-foreground pt-4">
            No commitment required. Let's discuss your vision and see if we're a good fit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
