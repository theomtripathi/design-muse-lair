import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookACall = () => {
  useEffect(() => {
    // Check if Cal is already loaded
    if ((window as any).Cal) {
      initCal();
      return;
    }

    // Load Cal.com script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      initCal();
    };
    document.head.appendChild(script);

    function initCal() {
      const Cal = (window as any).Cal;
      if (!Cal) return;

      Cal("init", "30min", { origin: "https://app.cal.com" });

      // Wait for the element to be in the DOM
      setTimeout(() => {
        Cal.ns["30min"]("inline", {
          elementOrSelector: "#my-cal-inline-30min",
          config: { layout: "month_view", theme: "light" },
          calLink: "om-tripathi-rpdnjo/30min",
        });

        Cal.ns["30min"]("ui", {
          theme: "light",
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }, 100);
    }
  }, []);

  return (
    <section id="book-a-call" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to turn conversations into
            <br />
            <span className="text-gradient">dealflow?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a call to discuss how Clipsi can help you build a podcast that drives relationships and results.
          </p>
        </div>

        {/* Calendar Embed */}
        <div className="max-w-4xl mx-auto">
          <div
            id="my-cal-inline-30min"
            className="w-full rounded-2xl glass-card p-4"
            style={{ width: "100%", height: "700px", overflow: "scroll" }}
          />
        </div>

        {/* What Happens Next */}
        <div className="max-w-2xl mx-auto mt-12 glass-card p-8 rounded-2xl animate-fade-in">
          <h3 className="text-xl font-bold mb-4 text-center">What happens next:</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>We review your fund thesis, ICP, and portfolio strategy</span>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>We map the podcast to dealflow and brand goals</span>
            </li>
            <li className="flex items-start gap-3">
              <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>You receive a custom podcast plan within 48 hours</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BookACall;
