import { motion, AnimatePresence } from "framer-motion";
import { Star, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Helena Ferreira da Costa Pivoto",
    text: "Maravilhosa, a Angelita é muito atenciosa, delicada e competente sempre procurando a melhor forma de proceder para que a cliente se sinta segura, sem nenhum incomodo. 100% satisfeita.",
    time: "4 meses atrás",
  },
  {
    name: "Rômulo Prado",
    text: "Podóloga incrível! Resolveu o problema que me perseguia a mais de um ano em apenas 3 atendimentos. Querida, atenciosa e extremamente profissional.",
    time: "1 mês atrás",
  },
  {
    name: "Ellen Daniberg",
    text: "Excelente profissional, ambiente maravilhoso! Merece avaliação máxima!!!",
    time: "1 ano atrás",
  },
];

const SocialSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // autoplay loop
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (i: number) => {
    if (i === index) return "center";
    if (i === (index + 1) % reviews.length) return "right";
    if (i === (index - 1 + reviews.length) % reviews.length) return "left";
    return "hidden";
  };

  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold mb-3 block">
            Avaliações
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>

          {/* animated stars */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                <Star className="w-6 h-6 fill-gold text-gold" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative flex justify-center items-center h-[320px]">

          <AnimatePresence>
            {reviews.map((review, i) => {
              const position = getPosition(i);

              if (position === "hidden") return null;

              return (
                <motion.div
                  key={i}
                  className="absolute bg-card border border-border rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: position === "center" ? 1 : 0.5,
                    scale: position === "center" ? 1 : 0.85,
                    x:
                      position === "center"
                        ? 0
                        : position === "left"
                        ? -220
                        : 220,
                    zIndex: position === "center" ? 10 : 5,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ width: "280px" }}
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm">
                    "{review.text}"
                  </p>

                  <div>
                    <p className="font-semibold text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.time}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-16">

          <p className="text-muted-foreground mb-6 text-lg">
            Veja mais conteúdos e dicas sobre saúde dos pés
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

        </div>
      </div>
    </section>
  );
};

export default SocialSection;