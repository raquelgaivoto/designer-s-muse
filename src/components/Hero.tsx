import { useState } from "react";
import heroBg from "@/assets/hero-gradient-bg.jpg";
const navItems = ["Design", "Social Media", "Video", "Email"];

const Hero = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <section>

      {/* Hero Content */}
      <div className="relative border-b border-foreground overflow-hidden">
        <img 
          src={heroBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
          aria-hidden="true"
        />
        <div className="relative flex flex-col justify-center items-center text-center p-12 md:p-16 lg:p-24 animate-fade-in">
          <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 max-w-md text-white drop-shadow-md">
            WHERE EVERY PIXEL TELLS A STORY.
          </p>
          <button 
            onClick={() => setAboutOpen(!aboutOpen)} 
            className="btn-hero w-fit bg-white/90 text-foreground hover:bg-white"
          >
            GET TO KNOW ME
          </button>
        </div>
      </div>

      {/* About Me Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out border-b border-foreground ${
          aboutOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        <div className="px-8 md:px-12 lg:px-16 py-10 md:py-14 text-center flex flex-col gap-6">
          <p className="text-sm md:text-base leading-relaxed text-foreground">
            I'm a creative designer passionate about shapes, colors, and patterns. Design is more than a profession to me — it's a way of seeing the world and transforming ideas into meaningful, functional, and visually engaging experiences.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-foreground">
            With a background in Visual Arts and Technologies and further specialization in Branding and Content Marketing, I combine creativity with strategic thinking. My experience spans graphic design, social media management, email marketing, website content creation, and both digital and print production across industries such as tourism, digital marketing, and health.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-foreground">
            I approach every project as an opportunity to learn, experiment, and refine my craft. I'm driven by curiosity, continuous growth, and the challenge of turning concepts into compelling visual solutions that communicate clearly and effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
