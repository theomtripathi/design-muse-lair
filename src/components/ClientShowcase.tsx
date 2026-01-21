const clients = [
  "Dyversify Capital",
  "Winning Podcast",
  "Evergreen Transformation",
  "Millionaire Mentor Podcast",
  "Dyversify Capital",
  "Winning Podcast",
  "Evergreen Transformation",
  "Millionaire Mentor Podcast",
];

const ClientShowcase = () => {
  return (
    <div className="w-full overflow-hidden py-4">
      <div className="flex animate-scroll gap-12" style={{ width: "max-content" }}>
        {clients.map((client, index) => (
          <span
            key={index}
            className="text-lg md:text-xl font-medium text-foreground/70 whitespace-nowrap"
          >
            {client}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {clients.map((client, index) => (
          <span
            key={`dup-${index}`}
            className="text-lg md:text-xl font-medium text-foreground/70 whitespace-nowrap"
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ClientShowcase;
