import { ChevronLeft, ChevronRight } from "lucide-react";
import projectVideo from "@/assets/project-video.jpg";

const videos = [
  { id: 1, title: "Brand Film", category: "Commercial", image: projectVideo },
  { id: 2, title: "Product Launch", category: "Promotional", image: projectVideo },
  { id: 3, title: "Social Clips", category: "Content", image: projectVideo },
];

const VideoSection = () => {
  return (
    <section id="video" className="border-b border-foreground py-16 md:py-24">
      <div className="container px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4">
            VIDEO
          </h2>
          <p className="text-muted-foreground text-sm tracking-wider">
            Motion graphics & video production
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex gap-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous videos"
          >
            <ChevronLeft className="w-6 h-6" />
            <ChevronLeft className="w-6 h-6 -ml-4" />
            <ChevronLeft className="w-6 h-6 -ml-4" />
          </button>

          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex gap-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next videos"
          >
            <ChevronRight className="w-6 h-6" />
            <ChevronRight className="w-6 h-6 -ml-4" />
            <ChevronRight className="w-6 h-6 -ml-4" />
          </button>

          {/* Video Grid */}
          <div className="grid md:grid-cols-3 gap-6 px-12">
            {videos.map((video) => (
              <article key={video.id} className="group cursor-pointer">
                <div className="relative aspect-video bg-secondary overflow-hidden mb-4">
                  <img 
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="category-tag absolute bottom-4 left-4">
                    {video.category}
                  </span>
                </div>
                <h4 className="font-medium mb-1">{video.title}</h4>
                <p className="text-sm text-muted-foreground">{video.category}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
