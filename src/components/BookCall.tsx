import { Calendar, Clock, Globe, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BookCall = () => {
  const openCalendly = () => {
    // You can create a free Calendly account at calendly.com
    window.open('https://calendly.com/reesavraj7761/30min', '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919153663735?text=Hi%20Reesav,%20I%27d%20like%20to%20discuss%20my%20MVP%20project', '_blank');
  };

  return (
    <section id="book-call" className="relative py-24 overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Ship Your{" "}
              <span className="text-gradient">MVP in 48 Hours?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss your project requirements and turn your vision into a live product this weekend.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-glow group">
              <Clock className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Quick 30min Call</h3>
              <p className="text-sm text-muted-foreground">
                Discuss your requirements and get a clear project roadmap
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-glow group">
              <Globe className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Global Availability</h3>
              <p className="text-sm text-muted-foreground">
                Available across timezones - US, Europe, Asia friendly hours
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-glow group">
              <MessageCircle className="w-8 h-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Instant Response</h3>
              <p className="text-sm text-muted-foreground">
                Quick WhatsApp or email response within 2 hours
              </p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={openCalendly}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Book a Discovery Call
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={openWhatsApp}
              className="px-8 py-6 text-lg font-semibold border-primary/20 hover:bg-primary/10 group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              WhatsApp Me
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">48h</div>
              <div className="text-sm text-muted-foreground">Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">MVPs Shipped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;