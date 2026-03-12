import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const SocialSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">Redes Sociais</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Siga no Instagram</h2>
        <p className="text-muted-foreground mb-8 text-lg">Acompanhe dicas, novidades e conteúdos sobre saúde dos pés</p>

        <a
          href="https://www.instagram.com/litamachmannpodologia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full gold-gradient text-lg font-semibold hover:scale-105 transition-transform duration-300 gold-shadow"
          style={{ color: "white" }}
        >
          <Instagram className="w-6 h-6" />
          @litamachmannpodologia
        </a>
      </motion.div>
    </div>
  </section>
);

export default SocialSection;
