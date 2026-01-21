import { TrendingUp, Calendar } from "lucide-react";

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
    <section id="transformation" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            <TrendingUp className="h-4 w-4 text-primary" />
            Your Journey
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transformation <span className="text-gradient">Timeline</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl animate-fade-in relative md:ml-20"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Circle on timeline */}
                  <div className="absolute -left-[4.75rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary hidden md:block" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 md:hidden">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{milestone.timeframe}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
