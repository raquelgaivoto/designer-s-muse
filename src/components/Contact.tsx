const Contact = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-primary-foreground/80 max-w-md mb-2">
              Ready to bring your ideas to life? Get in touch and let's create something amazing.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              hello@portfolio-rg.design
            </p>
          </div>

          {/* Right - CTA */}
          <div className="flex md:justify-end">
            <a 
              href="mailto:hello@portfolio-rg.design" 
              className="inline-flex items-center justify-center bg-primary-foreground text-primary px-10 py-5 font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20 px-6 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 Portfolio_RG. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Behance</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
