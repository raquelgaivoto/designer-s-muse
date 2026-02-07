interface ProjectContentProps {
  challenge: string;
  solution: string;
}

const ProjectContent = ({ challenge, solution }: ProjectContentProps) => {
  return (
    <section className="border-b border-foreground">
      <div className="grid md:grid-cols-2">
        {/* Challenge */}
        <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-foreground">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 text-primary italic underline underline-offset-4 decoration-2">
            THE CHALLENGE
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="p-8 md:p-12 lg:p-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 text-primary italic underline underline-offset-4 decoration-2">
            THE SOLUTION
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {solution}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectContent;
