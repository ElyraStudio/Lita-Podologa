import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-podologia.jpg";

const WHATSAPP_LINK = "https://wa.me/5551993631514";

const HeroSection = () => (
  <section className="relative min-h-[100dvh] flex items-center overflow-hidden">

    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Clínica de podologia profissional"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/30" />
    </div>

    <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl text-center md:text-left">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium tracking-wider uppercase gold-gradient mb-6"
            style={{ color: "white" }}
          >
            Podologia Especializada
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ color: "white" }}
        >
          Podologia Profissional e{" "}
          <span className="gold-text">Cuidados Especializados</span>{" "}
          para seus Pés
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed max-w-lg mx-auto md:mx-0"
          style={{ color: "hsl(40 20% 85%)" }}
        >
          Atendimento profissional focado na saúde, conforto e bem-estar dos seus pés.
        </motion.p>

        {/* Authority phrase */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-sm sm:text-base mb-10 font-medium"
          style={{ color: "hsl(40 30% 75%)" }}
        >
          Mais de 10 anos de experiência em podologia clínica.
        </motion.p>

        {/* CTA */}
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 gold-gradient px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
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