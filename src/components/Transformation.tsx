import { TrendingUp } from "lucide-react";

const CAL_LINK = "https://cal.com/clipsi/30min";

const milestones = [
  {
    timeframe: "Month 1",
    description: "Clear positioning, first episodes live, distribution engine running",
  },
  {
    timeframe: "Quarter 1",
    description: "Consistent founder conversations and inbound interest",
  },
  {
    timeframe: "6 Months",
    description: "Recognizable brand inside your category",
  },
  {
    timeframe: "Long Term",
    description: "A durable media asset compounding beyond any single deal",
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
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-1rem)] h-px bg-gradient-to-r from-primary/50 to-primary/10" />
                )}

                <div className="glass-card p-6 rounded-2xl h-full hover:scale-105 transition-all duration-300 glow-hover relative overflow-hidden">
                  {/* Step Number */}
                  <div className="text-5xl font-bold text-primary mb-4">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {milestone.timeframe}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
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
            <a 
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Let's talk →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
