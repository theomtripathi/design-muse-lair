import { Podcast } from "lucide-react";
import { useState } from "react";

const clips = [
  {
    title: "Podcast Clip",
    videoId: "eWbnOCRQaQA",
    type: "clip",
  },
  {
    title: "Full Episode Editing",
    videoId: "ZmMQmJf4E0c",
    type: "episode",
  },
  {
    title: "Podcast Clip",
    videoId: "3WYcWhOvsck",
    type: "clip",
  },
];

const shorts = [
  {
    title: "Short Clip",
    videoId: "mkTExR7-vdo",
  },
  {
    title: "Short Clip",
    videoId: "Vfw_sTR4a5A",
  },
];

const VideoCard = ({ videoId, title, isShort = false }: { videoId: string; title: string; isShort?: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = isShort 
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  
  const embedUrl = isShort 
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
    : `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div 
      className={`glass-card rounded-2xl overflow-hidden animate-fade-in group hover:scale-[1.02] transition-all duration-300 ${isShort ? 'aspect-[9/16]' : 'aspect-video'}`}
    >
      {isPlaying ? (
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <div 
          className="relative w-full h-full cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <img 
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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

        {/* Clips Grid - 3 horizontal videos */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {clips.map((clip, index) => (
            <VideoCard 
              key={index}
              videoId={clip.videoId}
              title={clip.title}
            />
          ))}
        </div>

        {/* Shorts Row - 2 vertical videos */}
        <div className="flex justify-center gap-6 lg:gap-8">
          {shorts.map((short, index) => (
            <div key={index} className="w-[200px] md:w-[240px]">
              <VideoCard 
                videoId={short.videoId}
                title={short.title}
                isShort={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
