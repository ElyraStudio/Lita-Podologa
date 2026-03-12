import { motion } from "framer-motion";
import { Stethoscope, Shield, Sparkles, HeartPulse, Droplets } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Podologia Clínica",
    description: "Cuidados completos para manter a saúde e o bem-estar dos pés.",
  },
  {
    icon: Shield,
    title: "Tratamento de Unhas Encravadas",
    description: "Procedimentos especializados para aliviar desconforto e prevenir complicações.",
  },
  {
    icon: Sparkles,
    title: "Remoção de Calosidades",
    description: "Tratamento seguro para remover calos e áreas de pressão.",
  },
  {
    icon: HeartPulse,
    title: "Cuidados com Pés Sensíveis",
    description: "Atenção especial para manter a saúde dos pés com procedimentos adequados.",
  },
  {
    icon: Droplets,
    title: "Hidratação e Cuidados Preventivos",
    description: "Tratamentos voltados para manter os pés saudáveis e bem cuidados.",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="section-padding bg-background">
    <div className="container mx-auto px-4">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
          Nossos Serviços
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Cuidados Especializados para seus Pés
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

        {services.map((service, i) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}

              className={`
                group bg-card rounded-2xl p-6 md:p-8 border border-border
                hover:gold-shadow transition-all duration-500
                hover:-translate-y-1

                ${i === 4 ? "col-start-1 col-end-3 lg:col-start-2 lg:col-end-3 max-w-md mx-auto" : ""}
                ${i === 3 ? "lg:col-start-1 lg:col-end-2" : ""}
              `}
            >
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>

    </div>
  </section>
);

export default ServicesSection;