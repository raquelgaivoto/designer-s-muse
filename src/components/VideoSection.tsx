const videos = [
  { id: 1, title: "Manifest", src: "/videos/manifesto.mp4" },
  { id: 2, title: "New Identity", src: "/videos/new-identity.mp4" },
  { id: 3, title: "Agilidade Brand", src: "/videos/agilidade-brand.mp4" },
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

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <article key={video.id}>
              <div className="relative aspect-video bg-secondary overflow-hidden mb-4">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain bg-foreground/5"
                  aria-label={`${video.title} video`}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h4 className="font-medium mb-1">{video.title}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
