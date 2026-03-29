import { useMemo } from "react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
  subtitle?: string;
  layout?: "default" | "porto-santo" | "events";
}

interface GalleryRow {
  type: "2-1" | "1-1-1" | "full" | "1-2" | "2-wide";
  images: string[];
}

const ProjectGallery = ({ images, title, subtitle, layout = "default" }: ProjectGalleryProps) => {
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

      {/* Porto Santo custom collage layout */}
      {layout === "porto-santo" ? (
        <div className="px-6 md:px-10 lg:px-16 pb-16 md:pb-20 lg:pb-24 space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {images[0] && (
              <div className="overflow-hidden aspect-[4/5]">
                <img src={images[0]} alt={`${title} gallery image 1`} className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
              </div>
            )}
            {images[1] && (
              <div className="overflow-hidden aspect-square">
                <img src={images[1]} alt={`${title} gallery image 2`} className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
              </div>
            )}
            {images[2] && (
              <div className="overflow-hidden aspect-[4/5] bg-muted/20">
                <img src={images[2]} alt={`${title} gallery image 3`} className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="space-y-4 md:space-y-6">
              {images[5] && (
                <div className="overflow-hidden aspect-square">
                  <img src={images[5]} alt={`${title} gallery image 6`} className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                </div>
              )}
              {images[6] && (
                <div className="overflow-hidden aspect-[16/9]">
                  <img src={images[6]} alt={`${title} gallery image 7`} className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                </div>
              )}
            </div>

            {images[3] && (
              <div className="overflow-hidden aspect-square bg-muted/20">
                <img src={images[3]} alt={`${title} gallery image 4`} className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
              </div>
            )}

            {images[4] && (
              <div className="overflow-hidden aspect-[4/5]">
                <img src={images[4]} alt={`${title} gallery image 5`} className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
              </div>
            )}
          </div>

          {images[7] && (
            <div className="overflow-hidden aspect-[21/8]">
              <img src={images[7]} alt={`${title} gallery image 8`} className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
            </div>
          )}

          {images[8] && (
            <div className="overflow-hidden aspect-[21/8]">
              <img src={images[8]} alt={`${title} gallery image 9`} className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
            </div>
          )}
        </div>
      ) : layout === "events" ? (
        <div className="px-6 md:px-10 lg:px-16 pb-16 md:pb-20 lg:pb-24 space-y-4 md:space-y-6">
          {/* Row 1: two wide banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {images.slice(0, 2).map((img, idx) => (
              <div key={idx} className="overflow-hidden bg-muted/20 rounded-sm">
                <img src={img} alt={`${title} gallery image ${idx + 1}`} className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
          {/* Remaining images: full width to preserve aspect ratio */}
          {images.slice(2).map((img, idx) => (
            <div key={idx + 2} className="overflow-hidden bg-muted/20 rounded-sm">
              <img src={img} alt={`${title} gallery image ${idx + 3}`} className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
      ) : (
        /* Default gallery rows */
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
      )}
    </section>
  );
};

export default ProjectGallery;
