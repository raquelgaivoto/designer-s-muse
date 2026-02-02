import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectNavProps {
  prevProject: Project | null;
  nextProject: Project | null;
}

const ProjectNav = ({ prevProject, nextProject }: ProjectNavProps) => {
  return (
    <section className="border-b border-foreground">
      <div className="grid md:grid-cols-2">
        {/* Previous Project */}
        {prevProject ? (
          <Link 
            to={`/project/${prevProject.slug}`}
            className="group relative overflow-hidden border-b md:border-b-0 md:border-r border-foreground"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
              <img 
                src={prevProject.heroImage} 
                alt={prevProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative p-8 md:p-12 lg:p-16 flex items-center gap-4">
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
              <div>
                <p className="text-xs text-muted-foreground tracking-wider mb-1">PREVIOUS</p>
                <p className="font-display text-2xl md:text-3xl">{prevProject.title.toUpperCase()}</p>
              </div>
            </div>
          </Link>
        ) : (
          <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-foreground opacity-30">
            <p className="text-xs text-muted-foreground tracking-wider">NO PREVIOUS PROJECT</p>
          </div>
        )}

        {/* Next Project */}
        {nextProject ? (
          <Link 
            to={`/project/${nextProject.slug}`}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
              <img 
                src={nextProject.heroImage} 
                alt={nextProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative p-8 md:p-12 lg:p-16 flex items-center justify-end gap-4">
              <div className="text-right">
                <p className="text-xs text-muted-foreground tracking-wider mb-1">NEXT</p>
                <p className="font-display text-2xl md:text-3xl">{nextProject.title.toUpperCase()}</p>
              </div>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        ) : (
          <div className="p-8 md:p-12 lg:p-16 text-right opacity-30">
            <p className="text-xs text-muted-foreground tracking-wider">NO NEXT PROJECT</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectNav;
