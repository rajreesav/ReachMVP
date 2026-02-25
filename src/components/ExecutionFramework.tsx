const steps = [
  {
    number: "01",
    title: "Product Scope & Architecture",
    day: "Day 1",
    description:
      "We define exactly what ships. Feature scope, data models, API contracts, and technical architecture — documented and signed off before a single line of code is written.",
  },
  {
    number: "02",
    title: "UI System & Experience Design",
    day: "Day 2",
    description:
      "High-fidelity screens built on a consistent design system. Navigation flows, component library, and interaction patterns finalised for both iOS and Android.",
  },
  {
    number: "03",
    title: "Development Sprint",
    day: "Days 3 – 6",
    description:
      "Focused build across frontend, backend, and integrations. Daily progress updates with working builds you can test on your own device.",
  },
  {
    number: "04",
    title: "Deployment & Handoff",
    day: "Day 7",
    description:
      "Production deployment to App Store and Google Play. Full source code handoff, documentation, and a 30-day post-launch support window.",
  },
];

const ExecutionFramework = () => {
  return (
    <section id="framework" className="relative py-24 overflow-hidden scroll-mt-20">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/4 rounded-full blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our 7-Day Execution Framework
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A structured, milestone-driven process — no ambiguity, no scope creep.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-6 p-6 rounded-2xl border border-border/50 bg-card/40"
            >
              <div className="flex-shrink-0 flex flex-col items-center">
                <span className="text-3xl font-bold text-gradient">{step.number}</span>
                <span className="text-xs text-muted-foreground mt-1 whitespace-nowrap">
                  {step.day}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutionFramework;
