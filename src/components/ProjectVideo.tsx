import { Play } from "lucide-react";

interface ProjectVideoProps {
  video?: string;
  title: string;
}

const ProjectVideo = ({ video, title }: ProjectVideoProps) => {
  // Show video player if video exists, otherwise show placeholder
  return (
    <section className="border-b border-foreground">
      <div className="p-8 md:p-12 lg:p-16 border-b border-foreground text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
          VIDEO
        </h2>
      </div>

      <div className="p-8 md:p-12 lg:p-16">
        <div className="max-w-5xl mx-auto">
          {video ? (
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
          ) : (
            <div className="relative aspect-video bg-primary flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-60" />
                <p className="font-display text-2xl md:text-3xl tracking-wider opacity-80">
                  VIDEO
                </p>
                <p className="text-sm opacity-60 mt-2">Coming soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectVideo;
