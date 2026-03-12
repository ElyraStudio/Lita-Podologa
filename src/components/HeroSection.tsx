import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-podologia.jpg";

const WHATSAPP_LINK = "https://wa.me/5551993631514";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Clínica de podologia profissional" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
    </div>

    <div className="container relative z-10 mx-auto px-4 py-20">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wider uppercase gold-gradient mb-6"
            style={{ color: "white" }}>
            Podologia Especializada
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ color: "white" }}
        >
          Podologia Profissional e{" "}
          <span className="gold-text">Cuidados Especializados</span>{" "}
          para seus Pés
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mb-10 leading-relaxed"
          style={{ color: "hsl(40 20% 85%)" }}
        >
          Atendimento profissional focado na saúde, conforto e bem-estar dos seus pés.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 gold-gradient px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          style={{ color: "white" }}
        >
          <MessageCircle className="w-5 h-5" />
          Agendar pelo WhatsApp
        </motion.a>
      </div>
    </div>
  </section>
);

export default HeroSection;
