import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/reesavraj7761/30min";

const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Ready to Turn Your Web Traffic into a{" "}
            <span className="text-gradient">Mobile Growth Engine?</span>
          </h2>

          <div className="pt-4">
            <Button
              size="lg"
              className="text-lg px-10 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 group"
              asChild
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No commitment required. A focused 30-minute conversation about your product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
