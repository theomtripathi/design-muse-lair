import { Play, Podcast } from "lucide-react";

const projects = [
  {
    title: "Venture Insights Podcast",
    category: "VC Firm",
    description: "A leading venture capital firm building founder relationships through weekly conversations with operators.",
    outcome: "200+ founder inbound conversations in 6 months",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Tech Leaders Unplugged",
    category: "Tech Company",
    description: "A growth-stage startup positioning their CEO as a category voice in enterprise software.",
    outcome: "Featured in TechCrunch, 15 partnership leads",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "The Founder Files",
    category: "VC Firm",
    description: "An emerging fund building thesis visibility with early-stage founders across fintech.",
    outcome: "3 portfolio deals attributed to podcast relationships",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Growth Engine Weekly",
    category: "Tech Company",
    description: "A B2B SaaS company creating demand through conversations with industry practitioners.",
    outcome: "40% increase in inbound demo requests",
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            <Podcast className="h-4 w-4 text-primary" />
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Work We Have <span className="text-gradient">Done</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A snapshot of podcasts we have built and scaled.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden animate-fade-in group hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-primary mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="border-t border-primary/10 pt-4">
                  <p className="text-sm">
                    <span className="text-primary font-medium">Outcome: </span>
                    <span className="text-muted-foreground">{project.outcome}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
