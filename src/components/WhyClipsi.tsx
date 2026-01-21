import { Target, BookOpen, Layers, Zap } from "lucide-react";

const reasons = [
  {
    icon: Target,
    text: "Built specifically for venture and tech audiences",
  },
  {
    icon: BookOpen,
    text: "Editorially rigorous, not content for content sake",
  },
  {
    icon: Layers,
    text: "Designed as an asset, not a campaign",
  },
];

const WhyClipsi = () => {
  return (
    <section id="why-clipsi" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
              <Zap className="h-4 w-4 text-primary" />
              Why Clipsi
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We do not ship episodes.
              <br />
              <span className="text-gradient">We build leverage.</span>
            </h2>
          </div>

          {/* Reasons */}
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 glow-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="text-muted-foreground">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyClipsi;
