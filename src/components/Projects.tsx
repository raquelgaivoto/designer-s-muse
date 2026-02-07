import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const featuredImages = [
  projects[0].heroImage,
  projects[1].heroImage,
  projects[2].heroImage,
  projects[3].heroImage,
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="border-b border-foreground">
      {/* Section Header */}
      <div className="text-center py-12 md:py-16 border-b border-foreground">
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-primary mb-4">
          PROJECTS
        </h2>
        <p className="text-muted-foreground text-sm tracking-wider">
          Design | Social Media | Video | Email
        </p>
      </div>

      {/* Featured Project */}
      <div className="grid lg:grid-cols-2 border-b border-foreground">
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <span className="text-xs text-muted-foreground tracking-wider mb-4">FEATURED</span>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl">
            MULTIPLE PROJECTS
          </h3>
        </div>
        <div className="relative aspect-video lg:aspect-auto border-t lg:border-t-0 lg:border-l border-foreground overflow-hidden">
          {featuredImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Featured project ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {featuredImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? "bg-primary-foreground w-6"
                    : "bg-primary-foreground/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article 
            key={project.slug}
            className={`border-b md:border-b-0 ${
              index % 3 !== 2 ? 'lg:border-r' : ''
            } ${index % 2 !== 1 ? 'md:border-r lg:border-r-0' : 'md:border-r-0'} ${
              index < 3 ? 'lg:border-b' : ''
            } ${index < 2 ? 'md:border-b' : 'md:border-b-0'} border-foreground group`}
          >
            <Link to={`/project/${project.slug}`} className="block">
              <div className="p-4">
                <h4 className="text-sm font-medium mb-1">{project.title}</h4>
                <p className="text-xs text-muted-foreground">{project.category}</p>
              </div>
              <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                <img 
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="category-tag absolute bottom-4 left-4">
                  {project.category}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
