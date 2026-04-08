import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Geometric pattern background */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
      <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect width="60" height="60" fill="none" stroke="hsl(163 98% 44%)" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div className="absolute inset-0 bg-mesh-blue pointer-events-none" />

    <div className="container mx-auto max-w-3xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
          Pare de perder tempo e dinheiro com{" "}
          <span className="text-glow text-primary">processos improvisados</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Profissionalize seu fluxo, proteja seu trabalho e receba com segurança.
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 shimmer-btn text-base px-10 py-7 transition-all hover:scale-105 group glow-cyan-strong animate-glow-pulse font-medium"
        >
          Começar grátis agora — acesso completo por 7 dias
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <p className="text-sm text-muted-foreground mt-5">
          Leva menos de 2 minutos para começar
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
