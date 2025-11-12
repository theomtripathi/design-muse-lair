import clipsiLogo from "@/assets/clipsi-logo.png";

const trustedItems = [
  "Fortune 500 companies",
  "Top YC companies",
  "Top ecommerce brands",
];

const TrustedTicker = () => {
  return (
    <div className="w-full overflow-hidden py-2">
      <div className="flex animate-scroll-reverse whitespace-nowrap">
        {[...trustedItems, ...trustedItems].map((label, index) => (
          <div key={index} className="inline-flex items-center gap-6 px-6">
            <span className="text-sm md:text-base font-medium text-muted-foreground">
              {label}
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

export default TrustedTicker;
