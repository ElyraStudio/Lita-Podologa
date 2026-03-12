import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => (
  <section id="localizacao" className="relative section-padding bg-cream overflow-hidden">

    {/* Animated background circles */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute border border-gold/20 rounded-full"
        style={{
          width: 300 + i * 200,
          height: 300 + i * 200,
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.15, 0.4],
        }}
        transition={{
          duration: 6 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Floating glow */}
    {[...Array(2)].map((_, i) => (
      <motion.div
        key={"glow" + i}
        className="absolute rounded-full bg-gold/10 blur-3xl"
        style={{
          width: 250 + i * 150,
          height: 250 + i * 150,
          top: `${20 + i * 40}%`,
          left: `${15 + i * 40}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 25, 0],
        }}
        transition={{
          duration: 10 + i * 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    <div className="container relative z-10 mx-auto px-4">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
          Localização
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Onde estamos
        </h2>

        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Atendimento profissional em um ambiente confortável e preparado
          para cuidar da saúde dos seus pés.
        </p>
      </motion.div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl overflow-hidden gold-shadow"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.3095449321771!2d-50.99529643034402!3d-29.94382693634813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973473b567e85%3A0xb551e19991aa5697!2sLita%20Machmann%20Podologia!5e0!3m2!1spt-BR!2sbr!4v1773337242499!5m2!1spt-BR!2sbr"
          width="100%"
          height="420"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da clínica"
        />
      </motion.div>

      {/* Address card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-10"
      >

        <div className="inline-block bg-background border border-border rounded-xl px-6 py-4 shadow-sm mb-6">
          <p className="text-foreground font-semibold flex items-center gap-2 justify-center">
            <MapPin className="w-5 h-5 text-gold" />
            Lita Machmann Podologia
          </p>

          <p className="text-muted-foreground text-sm mt-1">
            Gravataí • Rio Grande do Sul
          </p>
        </div>

        <div>
          <a
            href="https://maps.app.goo.gl/mx85U95DnPXnbXWr7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gold-gradient text-lg font-semibold hover:scale-105 transition-transform duration-300 gold-shadow"
            style={{ color: "white" }}
          >
            <Navigation className="w-5 h-5" />
            Abrir no Google Maps
          </a>
        </div>

      </motion.div>
    </div>
  </section>
);

export default LocationSection;