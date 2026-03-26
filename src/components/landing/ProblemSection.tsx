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
  <section className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Se você trabalha com design, <span className="text-gradient">já passou por isso:</span>
        </h2>
      </motion.div>

      <div className="space-y-4 mb-12">
        {problems.map((problem, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
          >
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
            <span className="text-foreground">{problem}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xl md:text-2xl font-semibold text-foreground"
      >
        O problema não é seu trabalho. <span className="text-gradient">É o processo.</span>
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;
