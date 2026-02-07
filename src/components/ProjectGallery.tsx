interface ProjectGalleryProps {
  images: string[];
  title: string;
  subtitle?: string;
}

const ProjectGallery = ({ images, title, subtitle }: ProjectGalleryProps) => {
  // Assign layout classes based on position to create an organic, magazine-style collage
  const getLayoutClasses = (index: number) => {
    const layouts = [
      "col-span-2 row-span-2",   // Large feature image
      "col-span-1 row-span-1",   // Small square
      "col-span-1 row-span-2",   // Tall portrait
      "col-span-1 row-span-1",   // Small square
      "col-span-2 row-span-1",   // Wide landscape
      "col-span-1 row-span-1",   // Small square
      "col-span-1 row-span-1",   // Small square
      "col-span-3 row-span-1",   // Full-width panoramic
    ];
    return layouts[index % layouts.length];
  };

  return (
    <section className="border-b border-foreground bg-background">
      <div className="py-12 md:py-16 lg:py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
          PROJECT GALLERY
        </h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-3 tracking-widest uppercase">
            {subtitle}
          </p>
        )}
      </div>

      <div className="px-6 md:px-12 lg:px-16 pb-12 md:pb-16 lg:pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[280px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group rounded-sm ${getLayoutClasses(index)}`}
            >
              <img
                src={image}
                alt={`${title} - Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
