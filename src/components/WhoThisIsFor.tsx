import { Monitor, ShoppingBag, Users } from "lucide-react";

const audiences = [
  {
    icon: Monitor,
    title: "SaaS Platforms",
    description:
      "You have a working web product and active users — now you need a native mobile experience that drives daily engagement and reduces churn.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Brands",
    description:
      "Your customers browse on mobile. A dedicated app with push notifications, streamlined checkout, and loyalty features converts browsers into repeat buyers.",
  },
  {
    icon: Users,
    title: "Marketplaces",
    description:
      "Two-sided platforms need speed and reliability on mobile. We build buyer and seller experiences that feel native and perform under load.",
  },
];

const WhoThisIsFor = () => {
  return (
    <section id="audience" className="relative py-24 overflow-hidden scroll-mt-20">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Who This Is For
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            ReachMVP works exclusively with companies that already generate revenue
            and need mobile to accelerate growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((item) => {
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

export default WhoThisIsFor;
