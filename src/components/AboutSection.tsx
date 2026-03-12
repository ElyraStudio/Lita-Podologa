import { motion } from "framer-motion";
import { Award, BookOpen, Heart } from "lucide-react";
import profImage from "@/assets/profissional-podologa.jpg";

const AboutSection = () => (
  <section id="sobre" className="section-padding bg-warm-white">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden gold-shadow">
            <img
              src={profImage}
              alt="Angelita Machmann Francisco - Podóloga"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full gold-gradient opacity-20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">Sobre a Profissional</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Angelita Machmann Francisco
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Angelita Machmann Francisco é profissional da área de podologia com <strong className="text-foreground">mais de 10 anos de experiência</strong>, dedicada ao cuidado, saúde e bem-estar dos pés. oferecendo
  podologia humanizada e cuidados especializado em pés diabéticos.
            </p>
            <p>
              Ao longo da sua trajetória, realizou diversas certificações e especializações, buscando sempre oferecer um atendimento seguro, atualizado e de alta qualidade para seus clientes.
            </p>
            <p>
              Seu trabalho é marcado pela atenção aos detalhes, cuidado com cada paciente e foco na saúde dos pés. Atualmente, Angelita também está cursando faculdade, ampliando ainda mais seus conhecimentos na área da saúde.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { icon: Award, label: "Certificações" },
              { icon: Heart, label: "Dedicação" },
              { icon: BookOpen, label: "Formação contínua" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-gold-dark">
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
