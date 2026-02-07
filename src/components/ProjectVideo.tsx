import { Play } from "lucide-react";

interface ProjectVideoProps {
  video?: string;
  title: string;
}

const ProjectVideo = ({ video, title }: ProjectVideoProps) => {
  return (
    <section className="bg-background">
      <div className="px-6 md:px-10 lg:px-16 pb-16 md:pb-20 lg:pb-24">
        <div className="mx-auto">
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
                <p className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider">
                  VIDEO
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectVideo;
