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

const bubbles = [1, 2, 3, 4];

const DifferentialsSection = () => (
  <section className="relative section-padding bg-cream overflow-hidden">
    
    {/* Floating bubbles */}
    {bubbles.map((b, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gold/10 blur-xl"
        style={{
          width: 120 + i * 40,
          height: 120 + i * 40,
          left: `${20 + i * 15}%`,
          top: `${30 + i * 10}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8 + i * 2,
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
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
          Por que nos escolher
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Nossos Diferenciais
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

        {differentials.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 p-4 md:p-6 rounded-xl bg-background border border-border hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gold-gradient flex-shrink-0 flex items-center justify-center">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>

              <p className="text-sm md:text-base text-foreground font-medium leading-snug">
                {item.text}
              </p>
            </motion.div>
          );
        })}

      </div>
    </div>
  </section>
);

export default DifferentialsSection;