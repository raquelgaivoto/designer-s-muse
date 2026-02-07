import { useState } from "react";
import heroImage from "@/assets/hero-lightbulb.jpg";

const navItems = ["Design", "Social Media", "Video", "Email"];

const Hero = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <section className="min-h-screen">
      {/* Large Title */}
      <header className="border-b border-foreground">
        <h1 className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none tracking-tight px-6 py-4">
          PORTFOLIO<span className="text-muted-foreground">_</span>RG
        </h1>
      </header>

      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-foreground px-6 py-4">
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item} className="flex items-center gap-4">
              <a 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="link-underline text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
              {index < navItems.length - 1 && (
                <span className="text-muted-foreground">/</span>
              )}
            </li>
          ))}
        </ul>
        <button className="md:hidden text-sm font-medium">Menu</button>
      </nav>

      {/* Hero Content */}
      <div className="grid lg:grid-cols-2 border-b border-foreground">
        {/* Left - Text */}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 animate-fade-in">
          <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 max-w-md">
            WHERE EVERY PIXEL TELLS A STORY.
          </p>
          <button 
            onClick={() => setAboutOpen(!aboutOpen)} 
            className="btn-hero w-fit"
          >
            GET TO KNOW ME
          </button>
        </div>

        {/* Right - Image */}
        <div className="relative aspect-square lg:aspect-auto border-t lg:border-t-0 lg:border-l border-foreground overflow-hidden">
          <img 
            src={heroImage} 
            alt="Creative colorful lightbulb representing design innovation"
            className="w-full h-full object-cover animate-fade-in stagger-2"
          />
        </div>
      </div>

      {/* About Me Dropdown */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out border-b border-foreground ${
          aboutOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        <div className="px-8 md:px-12 lg:px-16 py-10 md:py-14 text-center flex flex-col gap-6">
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            I'm a creative designer passionate about shapes, colors, and patterns. Design is more than a profession to me — it's a way of seeing the world and transforming ideas into meaningful, functional, and visually engaging experiences.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            With a background in Visual Arts and Technologies and further specialization in Branding and Content Marketing, I combine creativity with strategic thinking. My experience spans graphic design, social media management, email marketing, website content creation, and both digital and print production across industries such as tourism, digital marketing, and health.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            I approach every project as an opportunity to learn, experiment, and refine my craft. I'm driven by curiosity, continuous growth, and the challenge of turning concepts into compelling visual solutions that communicate clearly and effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
