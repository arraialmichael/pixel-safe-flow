import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const problems = [
  "Perde tempo criando proposta do zero",
  "Cliente demora para aprovar",
  "Contratos desorganizados",
  "Cobrança feita no WhatsApp",
  "Entrega sem garantia de pagamento",
];

const ProblemSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-mesh-danger pointer-events-none" />

    <div className="container mx-auto max-w-3xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Se você trabalha com design,{" "}
          <span className="text-gradient text-[#02deb6]">já passou por isso:</span>
        </h2>
      </motion.div>

      <div className="space-y-4 mb-14">
        {problems.map((problem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 + i * 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex items-center gap-4 p-5 rounded-xl bg-card/80 border border-border/50 backdrop-blur-sm"
            style={{ marginLeft: `${i * 16}px` }}
          >
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 animate-pulse" />
            <span className="text-foreground font-medium">{problem}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-xl md:text-2xl font-display font-semibold text-foreground"
      >
        O problema não é seu trabalho.{" "}
        <span className="text-glow text-[#02deb6]">É o processo.</span>
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;
