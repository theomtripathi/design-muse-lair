import { Building2, Mic } from "lucide-react";

const clients = [
  {
    name: "Dyversify Capital",
    podcast: "Winning Podcast",
    type: "VC Firm",
  },
  {
    name: "Evergreen",
    podcast: "Transformation",
    type: "Tech Company",
  },
  {
    name: "Millionaire Mentor",
    podcast: "Podcast",
    type: "Media Brand",
  },
  {
    name: "Dyversify Capital",
    podcast: "Winning Podcast",
    type: "VC Firm",
  },
  {
    name: "Evergreen",
    podcast: "Transformation",
    type: "Tech Company",
  },
  {
    name: "Millionaire Mentor",
    podcast: "Podcast",
    type: "Media Brand",
  },
];

const ClientShowcase = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-scroll gap-6" style={{ width: "max-content" }}>
        {clients.map((client, index) => (
          <div
            key={index}
            className="glass-card px-6 py-4 rounded-xl flex items-center gap-4 min-w-[280px] hover:scale-105 transition-transform duration-300"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              {client.type === "VC Firm" ? (
                <Building2 className="h-6 w-6 text-primary" />
              ) : (
                <Mic className="h-6 w-6 text-primary" />
              )}
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{client.name}</h4>
              <p className="text-sm text-muted-foreground">{client.podcast}</p>
            </div>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {clients.map((client, index) => (
          <div
            key={`dup-${index}`}
            className="glass-card px-6 py-4 rounded-xl flex items-center gap-4 min-w-[280px] hover:scale-105 transition-transform duration-300"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              {client.type === "VC Firm" ? (
                <Building2 className="h-6 w-6 text-primary" />
              ) : (
                <Mic className="h-6 w-6 text-primary" />
              )}
            </div>
            <div>
              <h4 className="font-semibold text-foreground">{client.name}</h4>
              <p className="text-sm text-muted-foreground">{client.podcast}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientShowcase;
