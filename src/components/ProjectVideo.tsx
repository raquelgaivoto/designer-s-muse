interface ProjectVideoProps {
  video?: string;
  title: string;
}

const ProjectVideo = ({ video, title }: ProjectVideoProps) => {
  if (!video) return null;

  return (
    <section className="border-b border-foreground">
      <div className="p-8 md:p-12 lg:p-16 border-b border-foreground">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-center">
          PROJECT VIDEO
        </h2>
      </div>

      <div className="p-8 md:p-12 lg:p-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-secondary overflow-hidden">
            <video
              src={video}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-foreground/5"
              aria-label={`${title} project video`}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVideo;
