import { FileCheck, Milestone, MessageSquare, LifeBuoy } from "lucide-react";

const reasons = [
  {
    icon: FileCheck,
    title: "Fixed Scope Clarity",
    description:
      "Every engagement starts with a locked scope document. You know exactly what ships, when, and for how much — before development begins.",
  },
  {
    icon: Milestone,
    title: "Milestone-Based Delivery",
    description:
      "Payment and progress are tied to tangible milestones. You review working software at each stage, not slide decks.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description:
      "No account managers or ticket queues. You work directly with the team building your product — fast decisions, zero information loss.",
  },
  {
    icon: LifeBuoy,
    title: "Post-Launch Support",
    description:
      "Every project includes a 30-day support window after deployment. Bug fixes, store submission issues, and performance tuning — covered.",
  },
];

const WhyReachMVP = () => {
  return (
    <section id="why" className="relative py-24 overflow-hidden scroll-mt-20">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why ReachMVP
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-5 p-6 rounded-2xl border border-border/50 bg-card/40"
              >
                <div className="flex-shrink-0 inline-flex p-3 rounded-xl bg-primary/10 h-fit">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyReachMVP;
