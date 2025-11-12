import { Video, Megaphone, Package, TrendingUp, Sparkles, Target } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Product/Feature Launches",
    description: "High-impact launch videos that tell your product's story and drive conversions from day one.",
  },
  {
    icon: Megaphone,
    title: "Ad Creatives",
    description: "Scroll-stopping ads optimized for every platform. From Meta to TikTok, we've got you covered.",
  },
  {
    icon: Package,
    title: "Product Demos",
    description: "Clear, engaging demos that showcase features and benefits in under 60 seconds.",
  },
  {
    icon: TrendingUp,
    title: "Social Content",
    description: "Consistent, high-quality content that keeps your brand top of mind across all channels.",
  },
  {
    icon: Sparkles,
    title: "Event Coverage",
    description: "Capture the energy of your events with cinematic highlight reels and recap videos.",
  },
  {
    icon: Target,
    title: "Testimonials",
    description: "Authentic customer stories that build trust and drive decisions at every funnel stage.",
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
            What We Create
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Every Video Type
            <br />
            <span className="text-gradient">You'll Ever Need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From product/feature launches to social content, we deliver professional videos that drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 glow-hover group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
