import { useState } from "react";
import projectDesign from "@/assets/project-design.jpg";
import projectSocial from "@/assets/project-social.jpg";
import projectEmail from "@/assets/project-email.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { id: "01", title: "Design", description: "Brand identity, UI/UX, and visual design solutions.", image: projectDesign },
  { id: "02", title: "Social Media", description: "Strategic content creation and community management.", image: projectSocial },
  { id: "03", title: "Email", description: "Newsletter design and email marketing campaigns.", image: projectEmail },
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const currentService = services[activeService];

  const goToPrev = () => {
    setActiveService((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="services" className="border-b border-foreground">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Vertical Tabs */}
        <div className="flex lg:flex-col border-b lg:border-b-0 lg:border-r border-foreground">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`flex-1 lg:flex-none flex flex-col items-center justify-center p-6 lg:py-12 lg:px-8 border-r lg:border-r-0 lg:border-b border-foreground last:border-r-0 last:lg:border-b-0 transition-all duration-300 ${
                activeService === index 
                  ? 'bg-foreground text-background' 
                  : 'hover:bg-secondary'
              }`}
            >
              <span className="text-xs mb-2 lg:mb-4">{service.id}</span>
              <span 
                className="font-display text-lg lg:text-2xl tracking-wider"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
              >
                {service.title}
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square lg:aspect-auto bg-foreground overflow-hidden">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="w-full h-full object-cover opacity-90"
              key={activeService}
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-foreground">
            <div>
              <span className="text-xs text-muted-foreground tracking-wider mb-4 block">
                SERVICE {currentService.id}
              </span>
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                {currentService.title}
              </h3>
              <p className="text-muted-foreground max-w-sm">
                {currentService.description}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button 
                onClick={goToPrev}
                className="p-2 border border-foreground hover:bg-foreground hover:text-background transition-colors"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={goToNext}
                className="p-2 border border-foreground hover:bg-foreground hover:text-background transition-colors"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
