import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm" style={{ color: "hsl(40 20% 70%)" }}>
        © {new Date().getFullYear()} Lita Machmann Podologia. Todos os direitos reservados.
      </p>
      <a
        href="https://www.instagram.com/litamachmannpodologia"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold hover:text-gold-light transition-colors"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </div>
  </footer>
);

export default Footer;
