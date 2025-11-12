import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Ticker from "@/components/Ticker";
import TrustedTicker from "@/components/TrustedTicker";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-24">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Videos that <span className="text-gradient">Convert</span>
            <br />
            Every Launch, Ad & Event
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unlimited video production for software companies and ecommerce brands. 
            Professional quality videos, delivered fast.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary text-foreground hover:bg-primary/90 glow-hover font-semibold px-8 py-6 text-lg group"
              onClick={() => document.getElementById("book-a-call")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 font-semibold px-8 py-6 text-lg group"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">48h</div>
              <div className="text-sm text-muted-foreground mt-1">Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">1.5+ Billion</div>
              <div className="text-sm text-muted-foreground mt-1">Views</div>
            </div>
          </div>

          {/* Tickers */}
          <div className="-mx-4 lg:-mx-8">
            <Ticker />
            <TrustedTicker />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
