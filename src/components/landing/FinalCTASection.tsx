import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => (
  <section className="section-padding bg-gradient-radial">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          Pare de perder tempo e dinheiro com{" "}
          <span className="text-gradient">processos improvisados</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Profissionalize seu fluxo, proteja seu trabalho e receba com segurança.
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 glow-blue-strong text-base px-10 py-7 transition-all hover:scale-105 group animate-glow-pulse"
        >
          Começar grátis agora — acesso completo por 7 dias
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Leva menos de 2 minutos para começar
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
