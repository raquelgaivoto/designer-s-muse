import { useMemo } from "react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
  subtitle?: string;
}

interface GalleryRow {
  type: "2-1" | "1-1-1" | "full" | "1-2" | "2-wide";
  images: string[];
}

const ProjectGallery = ({ images, title, subtitle }: ProjectGalleryProps) => {
  // Distribute images into rows with varied layouts matching the PDF editorial style
  const rows = useMemo(() => {
    const result: GalleryRow[] = [];
    const patterns: GalleryRow["type"][] = ["2-1", "1-1-1", "full", "1-2"];
    let i = 0;
    let patternIdx = 0;

    while (i < images.length) {
      const pattern = patterns[patternIdx % patterns.length];
      const remaining = images.length - i;

      if (pattern === "2-1" && remaining >= 2) {
        result.push({ type: "2-1", images: [images[i], images[i + 1]] });
        i += 2;
      } else if (pattern === "1-1-1" && remaining >= 3) {
        result.push({ type: "1-1-1", images: [images[i], images[i + 1], images[i + 2]] });
        i += 3;
      } else if (pattern === "full") {
        result.push({ type: "full", images: [images[i]] });
        i += 1;
      } else if (pattern === "1-2" && remaining >= 2) {
        result.push({ type: "1-2", images: [images[i], images[i + 1]] });
        i += 2;
      } else {
        // Fallback: single full-width image
        result.push({ type: "full", images: [images[i]] });
        i += 1;
      }
      patternIdx++;
    }

    return result;
  }, [images]);

  return (
    <section className="bg-background">
      {/* Section Header */}
      <div className="py-16 md:py-20 lg:py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight">
          PROJECT GALLERY
        </h2>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-3 tracking-widest uppercase">
            {subtitle}
          </p>
        )}
      </div>

      {/* Gallery Rows */}
      <div className="px-6 md:px-10 lg:px-16 pb-16 md:pb-20 lg:pb-24 space-y-4 md:space-y-6">
        {rows.map((row, rowIndex) => {
          if (row.type === "2-1") {
            return (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="md:col-span-2 overflow-hidden">
                  <img
                    src={row.images[0]}
                    alt={`${title} - Gallery`}
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="md:col-span-1 overflow-hidden">
                  <img
                    src={row.images[1]}
                    alt={`${title} - Gallery`}
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          }

          if (row.type === "1-2") {
            return (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="md:col-span-1 overflow-hidden">
                  <img
                    src={row.images[0]}
                    alt={`${title} - Gallery`}
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="md:col-span-2 overflow-hidden">
                  <img
                    src={row.images[1]}
                    alt={`${title} - Gallery`}
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          }

          if (row.type === "1-1-1") {
            return (
              <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {row.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="overflow-hidden">
                    <img
                      src={img}
                      alt={`${title} - Gallery`}
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            );
          }

          if (row.type === "full") {
            return (
              <div key={rowIndex} className="overflow-hidden">
                <img
                  src={row.images[0]}
                  alt={`${title} - Gallery`}
                  className="w-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
};

export default ProjectGallery;
