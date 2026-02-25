import { Zap, Shield, Target } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "48-Hour Launch",
    description: "I operate on a proven system to design, develop, and deploy your core product in just two days, giving you a massive first-mover advantage.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Zero Tech Overhead",
    description: "Focus on your business and customers. I handle the entire technical build, from database architecture to pixel-perfect UI.",
    color: "text-secondary",
  },
  {
    icon: Target,
    title: "MVP-First Mindset",
    description: "I build only the features that matter for validation, avoiding bloat and ensuring you get a lean, cost-effective product to test the market.",
    color: "text-primary",
  },
];

const WhyWorkWithMe = () => {
  return (
    <section id="why" className="relative py-24 overflow-hidden scroll-mt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Founders Choose Me{" "}
            <span className="text-gradient">To Build Their MVP</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover-glow"
              >
                {/* Icon with glow */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 ${feature.color}`}>
                  <Icon className="w-8 h-8" strokeWidth={2} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
