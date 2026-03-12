import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5551993631514";

const CTASection = () => (
  <section className="relative section-padding bg-foreground overflow-hidden">

    {/* Glow background */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full gold-gradient opacity-20 blur-3xl"
        style={{
          width: 250 + i * 120,
          height: 250 + i * 120,
          top: `${20 + i * 20}%`,
          left: `${15 + i * 25}%`,
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

    

    <div className="container relative z-10 mx-auto text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: "white" }}
        >
          Agende seu atendimento
        </h2>

        <p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          style={{ color: "hsl(40 20% 80%)" }}
        >
          Cuide da saúde dos seus pés com uma profissional experiente e dedicada.
        </p>

        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="inline-flex items-center gap-3 gold-gradient px-10 py-5 rounded-full text-xl font-bold shadow-2xl"
          style={{ color: "white" }}
        >
          <MessageCircle className="w-6 h-6" />
          Agendar pelo WhatsApp
        </motion.a>

      </motion.div>
    </div>
  </section>
);

export default CTASection;