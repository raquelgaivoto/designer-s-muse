import { useParams, Navigate } from "react-router-dom";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import ProjectHero from "@/components/ProjectHero";
import ProjectInfo from "@/components/ProjectInfo";
import ProjectContent from "@/components/ProjectContent";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectMetrics from "@/components/ProjectMetrics";
import ProjectNav from "@/components/ProjectNav";
import Contact from "@/components/Contact";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentProjects(slug) : { prev: null, next: null };

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <ProjectHero 
        title={project.title} 
        category={project.category} 
        heroImage={project.heroImage} 
      />
      <ProjectInfo 
        client={project.client} 
        year={project.year} 
        category={project.category} 
        services={project.services} 
      />
      <ProjectContent 
        challenge={project.challenge} 
        solution={project.solution} 
      />
      <ProjectGallery 
        images={project.gallery} 
        title={project.title} 
      />
      <ProjectMetrics metrics={project.metrics} />
      <ProjectNav prevProject={prev} nextProject={next} />
      <Contact />
    </main>
  );
};

export default ProjectDetail;
