import { useState, useRef, useEffect } from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          </div>

          {/* Right - CTA with dropdown */}
          <div className="flex md:justify-end">
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center bg-primary-foreground text-primary px-10 py-5 font-semibold tracking-wide hover:opacity-90 transition-opacity"
              >
                CONTACT ME
              </button>

              {open && (
                <div className="absolute bottom-full mb-2 right-0 z-50 bg-primary-foreground text-primary rounded-md shadow-lg w-64 overflow-hidden">
                  <a
                    href="mailto:raqmonteirog@gmail.com"
                    className="flex items-center gap-3 px-5 py-4 hover:bg-primary/10 transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    raqmonteirog@gmail.com
                  </a>
                  <a
                    href="tel:+351910546545"
                    className="flex items-center gap-3 px-5 py-4 hover:bg-primary/10 transition-colors text-sm border-t border-primary/10"
                  >
                    <Phone className="h-4 w-4 shrink-0" />
                    910 546 545
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20 px-6 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 Portfolio_RG. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/raquel-gaivoto-aa69bb17a/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
