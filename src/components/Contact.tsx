import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MessageCircle, 
  Calendar, 
  Linkedin, 
  Github, 
  Twitter,
  Globe,
  Clock,
  MapPin
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "reesavraj7761@gmail.com",
      action: () => window.open("mailto:reesavraj7761@gmail.com?subject=MVP Project Inquiry", "_blank"),
      description: "Get a detailed response within 2 hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 91536 63735",
      action: () => window.open("https://wa.me/919153663735?text=Hi%20Reesav,%20I%27d%20like%20to%20discuss%20my%20MVP%20project", "_blank"),
      description: "Instant messaging for quick questions"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      value: "Book 30min slot",
      action: () => window.open("https://calendly.com/reesavraj7761/30min", "_blank"),
      description: "Free consultation call to discuss your project"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect professionally",
      action: () => window.open("https://www.linkedin.com/in/raj-reesav", "_blank"),
      description: "Connect for business opportunities"
    }
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's Build Your{" "}
              <span className="text-gradient">Next MVP</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to turn your idea into a working product? Choose your preferred way to get in touch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="group p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-glow cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={method.action}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-gradient transition-all">
                      {method.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">{method.value}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center bg-card/30 backdrop-blur-sm border-border/50">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Quick Response</h3>
              <p className="text-sm text-muted-foreground">
                Usually respond within 2-6 hours across all timezones
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card/30 backdrop-blur-sm border-border/50">
              <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Global Availability</h3>
              <p className="text-sm text-muted-foreground">
                Working with clients from US, Europe, Asia, and Australia
              </p>
            </Card>
            
            <Card className="p-6 text-center bg-card/30 backdrop-blur-sm border-border/50">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Based in India</h3>
              <p className="text-sm text-muted-foreground">
                Cost-effective development with premium quality
              </p>
            </Card>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Or find me on social platforms:</p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://github.com/rajreesav", "_blank")}
                className="group"
              >
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://twitter.com/rajreesav", "_blank")}
                className="group"
              >
                <Twitter className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Twitter
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("https://www.linkedin.com/in/raj-reesav", "_blank")}
                className="group"
              >
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;