interface ProjectInfoProps {
  client: string;
  year: string;
  services: string[];
}

const ProjectInfo = ({ client, year, services }: ProjectInfoProps) => {
  const infoItems = [
    { label: "Client", value: client },
    { label: "Year", value: year },
    { label: "Services", value: services.join(", ") },
  ];

  return (
    <section className="border-b border-foreground/15">
      <div className="grid grid-cols-3">
        {infoItems.map((item, index) => (
          <div 
            key={item.label}
            className={`p-6 md:p-8 ${
              index < infoItems.length - 1 ? "border-r border-foreground/15" : ""
            }`}
          >
            <p className="text-xs text-primary font-medium tracking-wider mb-2">
              {item.label.toUpperCase()}
            </p>
            <p className="text-sm md:text-base font-medium">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectInfo;
