import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, TechFlow",
    company: "Marketing SaaS Startup",
    location: "San Francisco, USA",
    image: "", // Add actual images later
    rating: 5,
    text: "Reesav delivered our AI-powered dashboard in exactly 48 hours as promised. The quality was exceptional and the communication throughout was professional. He understood our vision perfectly and turned it into reality.",
    project: "NexusAI Dashboard"
  },
  {
    name: "Marcus Johnson",
    role: "CEO, FitLife Studios",
    company: "Fitness App",
    location: "London, UK",
    image: "",
    rating: 5,
    text: "Working with Reesav was a game-changer for our startup. He built our React Native fitness app over a weekend and it exceeded all expectations. The app is now live with 1000+ users!",
    project: "SwiftPulse App"
  },
  {
    name: "Elena Rodriguez",
    role: "CTO, DevTeam Pro",
    company: "Project Management Tool",
    location: "Barcelona, Spain",
    image: "",
    rating: 5,
    text: "I needed a project management tool for my remote team urgently. Reesav not only delivered on time but added features I hadn't even thought of. His expertise in the MERN stack is impressive.",
    project: "Kortex Platform"
  },
  {
    name: "David Kim",
    role: "Product Manager",
    company: "E-commerce Startup",
    location: "Seoul, South Korea",
    image: "",
    rating: 5,
    text: "The speed and quality of Reesav's work is unmatched. He built our e-commerce platform MVP in 2 days and helped us launch 3 weeks ahead of schedule. Highly recommend!",
    project: "ShopFlow MVP"
  },
  {
    name: "Lisa Thompson",
    role: "Entrepreneur",
    company: "EdTech Platform",
    location: "Toronto, Canada",
    image: "",
    rating: 5,
    text: "Reesav transformed our idea into a working product in just 48 hours. His attention to detail and ability to work across different timezones made the entire process smooth.",
    project: "LearnHub Platform"
  },
  {
    name: "Ahmed Hassan",
    role: "Startup Founder",
    company: "FinTech Solution",
    location: "Dubai, UAE",
    image: "",
    rating: 5,
    text: "Professional, fast, and reliable. Reesav delivered our financial dashboard with complex charts and real-time data. The code quality was production-ready from day one.",
    project: "FinanceTracker Pro"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            What <span className="text-gradient">Global Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by founders and CTOs from 15+ countries to deliver production-ready MVPs in record time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-glow overflow-hidden"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="relative z-10 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
                
                {/* Project reference */}
                <div className="text-xs text-primary font-medium">
                  Project: {testimonial.project}
                </div>
                
                {/* Author info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary font-medium">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
              </div>
            </Card>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">MVPs Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">24h</div>
            <div className="text-sm text-muted-foreground">Average Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;