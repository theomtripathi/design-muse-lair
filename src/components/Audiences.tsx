import { Building2, Rocket, Users } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "For Venture Capital Firms",
    benefits: [
      "Build direct founder relationships",
      "Signal thesis and taste",
      "Create long term dealflow leverage",
    ],
  },
  {
    icon: Rocket,
    title: "For Tech Leaders",
    benefits: [
      "Become a category voice",
      "Access investors and operators",
      "Build credibility with customers and talent",
    ],
  },
];

const Audiences = () => {
  return (
    <section id="audiences" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            <Users className="h-4 w-4 text-primary" />
            Built For Two Audiences
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Who We <span className="text-gradient">Serve</span>
          </h2>
        </div>

        {/* Audiences Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="glass-card p-8 lg:p-10 rounded-2xl hover:scale-105 transition-all duration-300 glow-hover group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <audience.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-6">{audience.title}</h3>
              <ul className="space-y-4">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audiences;
