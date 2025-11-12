import { useEffect } from "react";

const BookACall = () => {
  useEffect(() => {
    // Cal.com inline embed initialization
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", "30min", { origin: "https://app.cal.com" });

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
  }, []);

  return (
    <section id="book-a-call" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="text-gradient">Video Strategy?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free 30-minute strategy call to discuss your video needs.
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
      </div>
    </section>
  );
};

export default BookACall;
