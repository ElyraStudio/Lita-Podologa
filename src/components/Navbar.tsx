import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Localização", href: "#localizacao" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-semibold tracking-tight transition-all"
          style={{
            fontFamily: "Inter, sans-serif",
            color: scrolled ? "" : "white",
          }}
        >
          <span className="text-gold">Podologia</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-all hover:text-gold ${
                scrolled ? "text-foreground" : ""
              }`}
              style={scrolled ? {} : { color: "hsl(40 20% 90%)" }}
            >
              {l.label}
            </a>
          ))}

          <a
            href="https://wa.me/5551993631514"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
            style={{ color: "white" }}
          >
            Agendar
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-50"
          style={scrolled ? {} : { color: "white" }}
        >
          {open ? (
            <X className="w-7 h-7 transition-transform rotate-90" />
          ) : (
            <Menu className="w-7 h-7 transition-transform hover:scale-110" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-background border-t border-border shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-gold transition"
                >
                  {l.label}
                </a>
              ))}

              <a
                href="https://wa.me/5551993631514"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-center gold-gradient px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                style={{ color: "white" }}
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;