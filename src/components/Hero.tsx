import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-24">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Turn conversations into <span className="text-gradient">dealflow</span> and brand equity.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Clipsi builds and runs end to end podcasts that help venture firms and tech companies attract founders, customers, partnerships, and inbound opportunities while compounding long term brand authority.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary text-foreground hover:bg-primary/90 glow-hover font-semibold px-8 py-6 text-lg group"
              onClick={() => document.getElementById("book-a-call")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Line */}
          <p className="text-sm md:text-base text-muted-foreground/70 pt-8">
            Trusted by venture teams building long term mindshare with founders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
