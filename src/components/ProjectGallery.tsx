interface ProjectGalleryProps {
  images: string[];
  title: string;
  subtitle?: string;
}

const ProjectGallery = ({ images, title, subtitle }: ProjectGalleryProps) => {
  // Create a masonry-like layout pattern based on image count
  const getImageLayout = (index: number, total: number) => {
    // Pattern: large + small, then pairs, then varied
    const pattern = index % 5;
    switch (pattern) {
      case 0:
        return "md:col-span-2 aspect-[16/10]"; // Large landscape
      case 1:
        return "aspect-[3/4]"; // Portrait
      case 2:
        return "aspect-[4/3]"; // Landscape
      case 3:
        return "aspect-[3/4]"; // Portrait
      case 4:
        return "md:col-span-2 aspect-[21/9]"; // Wide panoramic
      default:
        return "aspect-[4/3]";
    }
  };

  return (
    <section className="border-b border-foreground">
      <div className="p-8 md:p-12 lg:p-16 border-b border-foreground text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl">
          PROJECT GALLERY
        </h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-2 tracking-wider">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`relative overflow-hidden group ${getImageLayout(index, images.length)} border-b border-foreground last:border-b-0 ${
              index < images.length - 1 ? "md:border-r border-foreground" : ""
            }`}
          >
            <img 
              src={image} 
              alt={`${title} - Gallery ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
