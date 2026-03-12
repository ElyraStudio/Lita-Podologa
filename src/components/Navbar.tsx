import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Localização", href: "#localizacao" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className={`font-display text-xl font-bold transition-colors ${scrolled ? "text-foreground" : ""}`} style={scrolled ? {} : { color: "white" }}>
          Lita Machmann <span className="text-gold">Podologia</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors hover:text-gold ${scrolled ? "text-foreground" : ""}`} style={scrolled ? {} : { color: "hsl(40 20% 90%)" }}>
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

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden" style={scrolled ? {} : { color: "white" }}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-foreground font-medium hover:text-gold">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5551993631514"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center gold-gradient px-5 py-3 rounded-full font-semibold"
            style={{ color: "white" }}
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
