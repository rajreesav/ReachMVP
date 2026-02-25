import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

const projects = [
  {
    name: "NexusAI",
    description: "AI-powered content curation dashboard for marketing teams. Built responsive web app with real-time data visualization and analytics in just 48 hours.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Chart.js"],
    gradient: "from-cyan-500/10 to-blue-500/10",
    demoUrl: "https://nexus-ai-demo.vercel.app", // Replace with actual URLs
    githubUrl: "https://github.com/reesavraj/nexus-ai",
    timeline: "48 hours",
    client: "Marketing Startup",
    features: ["Real-time analytics", "AI content curation", "Team collaboration", "Mobile responsive"]
  },
  {
    name: "SwiftPulse",
    description: "React Native fitness app for on-demand workout routines and progress tracking. Cross-platform MVP delivered over one weekend with full backend integration.",
    tech: ["React Native", "Express.js", "Firebase", "Expo"],
    gradient: "from-purple-500/10 to-pink-500/10",
    demoUrl: "https://swiftpulse-app.com", // Replace with actual URLs
    githubUrl: "https://github.com/reesavraj/swiftpulse",
    timeline: "Weekend (48h)",
    client: "Fitness Coach",
    features: ["Workout tracking", "Progress analytics", "Social features", "Offline support"]
  },
  {
    name: "Kortex",
    description: "Project management tool for remote developers with real-time chat and task boards. Complete MERN stack application built and deployed in record time.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    demoUrl: "https://kortex-pm.vercel.app", // Replace with actual URLs
    githubUrl: "https://github.com/reesavraj/kortex",
    timeline: "48 hours",
    client: "Tech Agency",
    features: ["Real-time chat", "Task management", "Team boards", "File sharing"]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            From Idea to Product{" "}
            <span className="text-gradient">in 48 Hours</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real projects delivered to real founders. Fast, functional, and ready to scale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-glow overflow-hidden transition-all duration-300 hover:scale-105"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold group-hover:text-gradient transition-all">
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{project.timeline}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{project.client}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-border/50">
                  <Button 
                    size="sm" 
                    onClick={() => window.open(project.demoUrl, '_blank')}
                    className="flex-1 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex-1 group/btn"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
