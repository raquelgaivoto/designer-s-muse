interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  return (
    <section className="border-b border-foreground">
      <div className="p-8 md:p-12 lg:p-16 border-b border-foreground">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-center">
          PROJECT GALLERY
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`relative aspect-square overflow-hidden group ${
              index === 0 ? "md:col-span-2 lg:col-span-2" : ""
            } border-b md:border-b-0 ${
              index < images.length - 1 ? "md:border-r" : ""
            } border-foreground`}
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
