import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import heroImage from "@/assets/hero-lightbulb.jpg";

const Projects = () => {
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
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            MULTIPLE PROJECTS
          </h3>
          <a href="#" className="btn-hero w-fit">
            SEE MORE
          </a>
        </div>
        <div className="relative aspect-video lg:aspect-auto border-t lg:border-t-0 lg:border-l border-foreground overflow-hidden">
          <img 
            src={heroImage} 
            alt="Featured project showcase"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
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
              <div className="p-4 border-t border-foreground">
                <span className="link-underline text-xs font-medium">
                  to {project.title.toLowerCase()}
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
