import { Play } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Product/Feature Launch",
    category: "Product Video",
    color: "from-blue-500/20 to-purple-500/20",
    videoId: "69VKylyArPY",
  },
  {
    title: "AI Ecommerce Videos",
    category: "Ad Creative",
    color: "from-orange-500/20 to-red-500/20",
    videoId: "Jg5fUoPU6EM",
  },
  {
    title: "AI App Marketing Videos",
    category: "Product Demo",
    color: "from-green-500/20 to-teal-500/20",
    videoId: "ZUt7oDn8TAk",
  },
  {
    title: "Pixar Style Video",
    category: "Animation",
    color: "from-indigo-500/20 to-blue-500/20",
    videoId: "Bm-ySayevtk",
  },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            <Play className="h-4 w-4 text-primary" />
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Portfolio
            <br />
            <span className="text-gradient">That Speaks Volumes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From startups to enterprises, we've helped hundreds of brands tell their stories.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                if (project.videoId) {
                  setPlayingIndex(index);
                }
              }}
            >
              {playingIndex === index && project.videoId ? (
                /* YouTube Player */
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&si=b3Q3dmzwHKzMM8-m`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-all duration-500 ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`} />

                  {/* Glass Overlay */}
                  <div className="absolute inset-0 glass-card" />

                  {/* Play Button - Always visible for videos */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredIndex === index ? 'scale-110 opacity-100' : 'scale-100 opacity-100'}`}>
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center glow-hover">
                      <Play className="h-8 w-8 text-foreground fill-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                    <div className="text-sm text-primary mb-1">{project.category}</div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>

                  {/* Hover Border Glow */}
                  <div className={`absolute inset-0 border-2 border-primary rounded-2xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} style={{ boxShadow: 'var(--shadow-glow)' }} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
