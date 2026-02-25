import { Smartphone, Server, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Smartphone,
    title: "React Native",
    description:
      "One codebase. Two platforms. We ship native-quality iOS and Android apps from a single React Native codebase — faster time-to-market without sacrificing performance.",
  },
  {
    icon: Server,
    title: "Scalable Backend",
    description:
      "Node.js and cloud-native infrastructure designed around your data model. REST or GraphQL APIs, real-time capabilities, and database architecture built to grow with your user base.",
  },
  {
    icon: Rocket,
    title: "Production Deployment",
    description:
      "CI/CD pipelines, App Store and Google Play submissions, environment management, and monitoring — your app launches ready for real traffic from day one.",
  },
];

const TechStack = () => {
  return (
    <section id="technology" className="relative py-24 overflow-hidden scroll-mt-20">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technology Stack
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Modern, battle-tested tools chosen for reliability and developer velocity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-border/50 bg-card/40 hover-glow"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
