import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5551993631514";

const CTASection = () => (
  <section className="section-padding bg-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full gold-gradient blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full gold-gradient blur-3xl" />
    </div>

    <div className="container mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "white" }}>
          Agende seu atendimento
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "hsl(40 20% 80%)" }}>
          Cuide da saúde dos seus pés com uma profissional experiente e dedicada.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 gold-gradient px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
          style={{ color: "white" }}
        >
          <MessageCircle className="w-6 h-6" />
          Agendar pelo WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
