import { TrendingUp, Rocket, Target, Award, Crown } from "lucide-react";

const milestones = [
  {
    timeframe: "Month 1",
    description: "Clear positioning, first episodes live, distribution engine running",
    icon: Rocket,
    color: "from-blue-500 to-cyan-500",
  },
  {
    timeframe: "Quarter 1",
    description: "Consistent founder conversations and inbound interest",
    icon: Target,
    color: "from-purple-500 to-pink-500",
  },
  {
    timeframe: "6 Months",
    description: "Recognizable brand inside your category",
    icon: Award,
    color: "from-orange-500 to-yellow-500",
  },
  {
    timeframe: "Long Term",
    description: "A durable media asset compounding beyond any single deal",
    icon: Crown,
    color: "from-primary to-emerald-500",
  },
];

const Transformation = () => {
  return (
    <section id="transformation" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            <TrendingUp className="h-4 w-4 text-primary" />
            Your Journey
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transformation <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From launch to long-term brand equity — here's what to expect
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connector Line (hidden on mobile and last item) */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-1rem)] h-px bg-gradient-to-r from-primary/50 to-primary/10" />
                )}

                <div className="glass-card p-6 rounded-2xl h-full hover:scale-105 transition-all duration-300 glow-hover relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <milestone.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {milestone.timeframe}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <p className="text-lg text-muted-foreground">
            Ready to start your transformation?{" "}
            <button 
              onClick={() => document.getElementById("book-a-call")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary hover:underline font-semibold"
            >
              Let's talk →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
