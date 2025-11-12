import { UserPlus, Send, Package, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Subscribe",
    description: "Choose your plan and get instant access to our platform and dedicated team.",
  },
  {
    number: "02",
    icon: Send,
    title: "Request",
    description: "Submit unlimited video requests through our simple platform. We'll queue them up.",
  },
  {
    number: "03",
    icon: Package,
    title: "Receive",
    description: "Get your videos delivered fast with unlimited revisions until it's perfect.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            <Zap className="h-4 w-4 text-primary" />
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How It Works
            <br />
            <span className="text-gradient">Fast & Simple</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From brief to final video in days, not weeks. Here's our proven process.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 glow-hover group h-full">
                  {/* Number Badge */}
                  <div className="text-6xl font-bold text-primary/20 mb-4 group-hover:text-primary/30 transition-colors">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
