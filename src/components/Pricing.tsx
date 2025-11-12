import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Essential",
    price: "$4,999",
    period: "/month",
    tagline: "Perfect for brands that need consistent video editing and motion design.",
    note: "Bring us your footage—we'll make it brilliant.",
    features: [
      "Video Editing & Post-Production",
      "Motion Graphics & Animations",
      "Social Media Creatives (Reels, Stories, Shorts)",
      "Podcast Editing & Repurposing",
      "Product Launch Video Editing",
      "AI Ads Creative (Editing Only)",
      "UGC Ads Videos (Editing Only)",
      "Brand Story Editing",
      "Unlimited Revisions",
      "Unlimited Requests",
      "Dedicated Project Manager",
    ],
    cta: "Book a Call",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9,999",
    period: "/month",
    tagline: "Full-service video production from concept to delivery.",
    badge: "BEST FOR GROWTH",
    note: "We handle everything from concept to delivery.",
    features: [
      "Everything in Essential +",
      "Scriptwriting & Creative Strategy",
      "Professional Video Shooting",
      "Event Coverage (conferences, launches, brand events)",
      "Product Shoot Production",
      "On-Location & Studio Filming",
      "Creative Direction",
      "Multi-Camera Setups",
      "Global Production Team",
      "Unlimited Requests",
      "Unlimited Revisions",
    ],
    cta: "Book a Call",
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 relative min-h-[70vh]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transparent Pricing.
            <br />
            <span className="text-gradient">Predictable Costs. Unlimited Creativity.</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-8 lg:p-10 relative hover:scale-105 transition-all duration-300 animate-fade-in ${
                plan.popular ? "border-[3px] border-primary" : ""
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                boxShadow: plan.popular ? 'var(--shadow-glow)' : undefined 
              }}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-foreground text-sm font-semibold rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.tagline}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              <p className="text-sm text-muted-foreground italic mb-6 border-t border-primary/20 pt-6">
                {plan.note}
              </p>

              {/* CTA Button */}
              <Button
                className={`w-full py-6 text-lg font-semibold ${
                  plan.popular
                    ? "bg-primary text-foreground hover:bg-primary/90 glow-hover"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
                onClick={() => document.getElementById("book-a-call")?.scrollIntoView({ behavior: "smooth" })}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
