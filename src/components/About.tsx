import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cloud, 
  Zap,
  Trophy,
  Users,
  Rocket
} from "lucide-react";

const skills = {
  "Frontend": {
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Vue.js"]
  },
  "Backend": {
    icon: Database,
    color: "from-green-500 to-emerald-500",
    technologies: ["Node.js", "Express.js", "Python", "FastAPI", "GraphQL", "REST APIs"]
  },
  "Mobile": {
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    technologies: ["React Native", "Expo", "iOS", "Android", "Cross-platform", "Native APIs"]
  },
  "Database & Cloud": {
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    technologies: ["MongoDB", "PostgreSQL", "Firebase", "AWS", "Vercel", "Docker"]
  }
};

const achievements = [
  {
    icon: Zap,
    title: "48-Hour Delivery",
    description: "Specialized in ultra-fast MVP development without compromising quality"
  },
  {
    icon: Users,
    title: "50+ Happy Clients",
    description: "Served founders and startups across 15+ countries worldwide"
  },
  {
    icon: Trophy,
    title: "Production Ready",
    description: "All MVPs are built with scalable architecture and clean code practices"
  },
  {
    icon: Rocket,
    title: "Launch Success",
    description: "95% of delivered MVPs successfully launched and gained traction"
  }
];

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose{" "}
            <span className="text-gradient">Reesav Raj</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack MERN developer specializing in rapid MVP development for startups and entrepreneurs.
          </p>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate full-stack developer who understands the urgency of turning ideas into reality. 
                With expertise in the MERN stack and React Native, I help founders and entrepreneurs build 
                production-ready MVPs in just 48 hours.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                My approach combines rapid development with solid architecture. I don't just build fast - 
                I build right. Every MVP is designed to scale, with clean code, proper documentation, 
                and deployment-ready infrastructure.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Having worked with clients across different timezones and industries, I understand the 
                unique challenges of early-stage startups and the importance of speed-to-market while 
                maintaining quality standards.
              </p>
            </div>
          </Card>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skill]) => (
              <Card key={category} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-glow group">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="font-semibold text-lg mb-3 group-hover:text-gradient transition-all">
                  {category}
                </h4>
                
                <div className="space-y-2">
                  {skill.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="mr-2 mb-2 text-xs bg-muted/50 hover:bg-muted transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">What Sets Me Apart</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover-glow group">
                <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="font-semibold text-lg mb-2 group-hover:text-gradient transition-all">
                  {achievement.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border/50">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">48h</div>
            <div className="text-sm text-muted-foreground">Average Turnaround</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Communication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;