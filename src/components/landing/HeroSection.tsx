import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
            Usado por designers que querem mais segurança e profissionalismo
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground mb-6">
            Feche projetos com segurança e{" "}
            <span className="text-gradient">receba sem dor de cabeça</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
            Gere propostas com IA, envie contratos, receba pagamentos e só libere os arquivos finais quando tudo estiver pago.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollTo("pricing")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue text-base px-8 py-6 transition-all hover:scale-105 group"
            >
              Começar grátis — acesso completo por 7 dias
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("como-funciona")}
              className="border-border text-foreground hover:bg-secondary text-base px-8 py-6 transition-all hover:scale-105"
            >
              <Play className="mr-2 h-4 w-4" />
              Ver como funciona
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Sem cartão de crédito • Acesso imediato
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
