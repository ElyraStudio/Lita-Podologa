import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    text: "Excelente atendimento, muito profissional e cuidadosa. Recomendo de olhos fechados!",
  },
  {
    name: "Carla R.",
    text: "Atendimento impecável, ambiente muito limpo e acolhedor. Me senti muito segura.",
  },
  {
    name: "Joana L.",
    text: "Profissional extremamente dedicada e atenciosa. Meus pés nunca estiveram tão bem cuidados.",
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">Depoimentos</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">O que dizem nossos clientes</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 border border-border relative"
          >
            <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />
            <Stars />
            <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
            <p className="font-semibold text-foreground">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
