import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSection = () => (
  <section id="localizacao" className="section-padding bg-cream">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">Localização</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Onde estamos</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl overflow-hidden gold-shadow"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d-51.1!3d-30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiUyA1McKwMDYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da clínica"
        />
      </motion.div>

      <div className="text-center mt-8">
        <a
          href="https://maps.app.goo.gl/RK1uoTUVS5PaWBGQ8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gold text-gold-dark font-semibold hover:gold-gradient hover:border-transparent transition-all duration-300"
          style={{ ["--tw-text-opacity" as string]: 1 }}
        >
          <MapPin className="w-5 h-5" />
          Ver localização
        </a>
      </div>
    </div>
  </section>
);

export default LocationSection;
