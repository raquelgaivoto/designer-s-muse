import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ProjectHeroProps {
  title: string;
  subtitle?: string;
  category: string;
  heroImage: string;
}

const ProjectHero = ({ title, subtitle, category, heroImage }: ProjectHeroProps) => {
  return (
    <section className="relative min-h-[70vh]">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4 text-white">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO PORTFOLIO RG
        </Link>
        <Link to="/" className="font-display text-2xl md:text-3xl tracking-tight">
          PORTFOLIO<span className="opacity-50">_</span>RG
        </Link>
      </header>

      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16 z-10">
        <span className="category-tag mb-4 inline-block">
          {category}
        </span>
        {subtitle && (
          <p className="text-sm md:text-base tracking-widest text-muted-foreground mb-2 font-medium">
            {subtitle}
          </p>
        )}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight animate-fade-in">
          {title.toUpperCase()}
        </h1>
      </div>
    </section>
  );
};

export default ProjectHero;
