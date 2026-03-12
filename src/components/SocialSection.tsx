import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const SocialSection = () => (
  <section className="relative section-padding bg-background overflow-hidden">

    {/* Background glows */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gold/10 blur-3xl"
        style={{
          width: 250 + i * 120,
          height: 250 + i * 120,
          top: `${20 + i * 20}%`,
          left: `${10 + i * 30}%`,
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Large background icons */}
    <Instagram className="absolute opacity-5 w-72 h-72 -left-24 top-20 rotate-12 text-gold" />
    <Instagram className="absolute opacity-5 w-64 h-64 -right-24 bottom-20 -rotate-12 text-gold" />

    <div className="container relative z-10 mx-auto text-center px-4">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
          Redes Sociais
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Siga no Instagram
        </h2>

        <p className="text-muted-foreground mb-8 text-lg max-w-xl mx-auto">
          Acompanhe dicas, novidades e conteúdos sobre saúde dos pés e cuidados podológicos.
        </p>

        <a
          href="https://www.instagram.com/litamachmannpodologia"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full gold-gradient text-lg font-semibold hover:scale-110 transition-transform duration-300 gold-shadow"
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