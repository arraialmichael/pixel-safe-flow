import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Mesh background */}
      <div className="absolute inset-0 bg-mesh-blue pointer-events-none" />

      {/* Geometric SVG decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.06] pointer-events-none hidden lg:block">
        <svg viewBox="0 0 500 500" fill="none" className="w-full h-full animate-spin-slow">
          <rect x="100" y="100" width="300" height="300" rx="8" stroke="hsl(163 98% 44%)" strokeWidth="1" />
          <rect x="150" y="150" width="200" height="200" rx="8" stroke="hsl(163 98% 44%)" strokeWidth="0.5" transform="rotate(15 250 250)" />
          <rect x="175" y="175" width="150" height="150" rx="8" stroke="hsl(163 98% 44%)" strokeWidth="0.5" transform="rotate(30 250 250)" />
          <circle cx="250" cy="250" r="60" stroke="hsl(163 98% 44%)" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: "20%", left: "10%", delay: 0 },
          { top: "60%", left: "85%", delay: 2 },
          { top: "80%", left: "15%", delay: 4 },
          { top: "30%", left: "75%", delay: 1 },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40 animate-float"
            style={{ top: dot.top, left: dot.left, animationDelay: `${dot.delay}s` }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p variants={item} className="text-primary/80 text-sm font-medium tracking-widest uppercase mb-6 font-display">
            Usado por designers que querem mais segurança e profissionalismo
          </motion.p>

          <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.08] tracking-tight text-foreground mb-6">
            Feche projetos com segurança e{" "}
            <span className="text-glow text-primary">receba sem dor de cabeça</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Gere propostas com IA, envie contratos, receba pagamentos e só libere os arquivos finais quando tudo estiver pago.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-5">
            <Button
              size="lg"
              onClick={() => scrollTo("pricing")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shimmer-btn text-base px-8 py-6 transition-all hover:scale-105 group glow-cyan font-medium"
            >
              Começar grátis agora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("como-funciona")}
              className="border-border/50 text-foreground hover:bg-secondary text-base px-8 py-6 transition-all hover:scale-105 hover:border-primary/30"
            >
              <Play className="mr-2 h-4 w-4" />
              Ver como funciona
            </Button>
          </motion.div>

          <motion.p variants={item} className="text-sm text-muted-foreground">
            Sem cartão de crédito • Acesso imediato
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
