import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CAL_LINK = "https://cal.com/clipsi/30min";

const BookACall = () => {
  return (
    <section id="book-a-call" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to turn conversations into
            <br />
            <span className="text-gradient">dealflow?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a call to discuss how Clipsi can help you build a podcast that drives relationships and results.
          </p>
          <Button
            size="lg"
            className="bg-primary text-foreground hover:bg-primary/90 glow-hover font-semibold px-8 py-6 text-lg group"
            onClick={() => window.open(CAL_LINK, "_blank")}
          >
            Book a Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookACall;
