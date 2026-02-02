import type { ProjectMetric } from "@/data/projects";

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
}

const ProjectMetrics = ({ metrics }: ProjectMetricsProps) => {
  return (
    <section className="bg-primary text-primary-foreground border-b border-foreground">
      <div className="p-8 md:p-12 lg:p-16 border-b border-primary-foreground/20">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-center">
          KEY RESULTS
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className={`p-8 md:p-12 lg:p-16 text-center ${
              index < metrics.length - 1 ? "border-b md:border-b-0 md:border-r border-primary-foreground/20" : ""
            }`}
          >
            <p className="font-display text-5xl md:text-6xl lg:text-7xl mb-4">
              {metric.value}
            </p>
            <p className="text-sm text-primary-foreground/80 tracking-wider uppercase">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectMetrics;
