import { motion } from "framer-motion";
import { Clock, Award, UserCheck, ShieldCheck, Wrench, Heart } from "lucide-react";

const differentials = [
  { icon: Clock, text: "Mais de 10 anos de experiência" },
  { icon: Award, text: "Diversas certificações na área" },
  { icon: UserCheck, text: "Atendimento cuidadoso e profissional" },
  { icon: ShieldCheck, text: "Ambiente seguro e higienizado" },
  { icon: Wrench, text: "Materiais adequados e técnicas atualizadas" },
  { icon: Heart, text: "Foco no bem-estar e saúde dos pés" },
];

const DifferentialsSection = () => (
  <section className="section-padding bg-cream">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">Por que nos escolher</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossos Diferenciais</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {differentials.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border"
          >
            <div className="w-12 h-12 rounded-lg gold-gradient flex-shrink-0 flex items-center justify-center">
              <item.icon className="w-6 h-6" style={{ color: "white" }} />
            </div>
            <p className="text-foreground font-medium pt-2.5">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
