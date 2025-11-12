import clipsiLogo from "@/assets/clipsi-logo.png";

const videoTypes = [
  "Product Launch",
  "Product Hype",
  "Product Demonstration",
  "Brand Storytelling",
  "Pixar Style Videos",
  "Video Repurposing",
  "Event Video",
  "AI Ads Videos",
  "UGC Ads Videos",
  "Sales Enablement Videos",
  "Feature Highlight Videos",
  "Customer Success Stories",
];

const Ticker = () => {
  return (
    <div className="w-full overflow-hidden py-2">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Duplicate the items twice for seamless loop */}
        {[...videoTypes, ...videoTypes].map((type, index) => (
          <div key={index} className="inline-flex items-center gap-6 px-6">
            <span className="text-lg font-semibold text-muted-foreground">
              {type}
            </span>
            <img
              src={clipsiLogo}
              alt=""
              className="w-6 h-6 opacity-30"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
