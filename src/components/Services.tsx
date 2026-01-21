import { Lightbulb, Video, Scissors, Share2, Sparkles } from "lucide-react";

const stages = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Pre Production",
    description: "We lay the strategic and brand foundation before a single episode is recorded.",
    features: [
      "Podcast branding and narrative",
      "Show positioning for VC or tech audiences",
      "Guest targeting and guest management",
      "Outreach, scheduling, and coordination",
      "Episode research and briefing docs",
    ],
  },
  {
    number: "02",
    icon: Video,
    title: "Production",
    description: "We handle recording so your team stays focused on the conversation.",
    features: [
      "Remote or in person recording setup",
      "Partner or founder friendly workflows",
      "Live editorial support during recording",
    ],
  },
  {
    number: "03",
    icon: Scissors,
    title: "Post Production",
    description: "We turn raw conversations into polished media assets.",
    features: [
      "Full length episode editing",
      "Short form clips for social and distribution",
      "Audio mastering and visual polish",
    ],
  },
  {
    number: "04",
    icon: Share2,
    title: "Distribution",
    description: "We ensure every episode reaches the right audience.",
    features: [
      "Distribution strategy by audience type",
      "LinkedIn, Twitter, and founder first channels",
      "Content cadence and publishing calendar",
      "Performance review and iteration",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Core Four
          </h2>
          <p className="text-lg text-muted-foreground">
            Clipsi delivers an end to end operating system across four customizable stages. You choose what you need, we handle the rest.
          </p>
        </div>

        {/* Stages Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 glow-hover group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Number Badge */}
              <div className="text-5xl font-bold text-primary/20 mb-4 group-hover:text-primary/30 transition-colors">
                {stage.number}
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                  <stage.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{stage.title}</h3>
                  <p className="text-muted-foreground">{stage.description}</p>
                </div>
              </div>

              <ul className="space-y-2 mt-6 border-t border-primary/10 pt-6">
                {stage.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
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

export default Services;
