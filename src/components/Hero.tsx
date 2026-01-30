import heroImage from "@/assets/hero-lightbulb.jpg";

const navItems = ["Design", "Social Media", "Video", "Email"];

const Hero = () => {
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
          <a href="#projects" className="btn-hero w-fit">
            GET TO KNOW ME
          </a>
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
    </section>
  );
};

export default Hero;
