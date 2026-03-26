import { motion } from "framer-motion";
import { FileText, Send, FileCheck, CreditCard, Lock } from "lucide-react";

const steps = [
  { icon: FileText, label: "Proposta com IA" },
  { icon: Send, label: "Envio por link" },
  { icon: FileCheck, label: "Contrato automático" },
  { icon: CreditCard, label: "Pagamento integrado" },
  { icon: Lock, label: "Entrega protegida" },
];

const ProofSection = () => (
  <section className="section-padding bg-gradient-radial">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Tudo em um único fluxo <span className="text-gradient">simples e profissional</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Do briefing ao pagamento final — sem planilhas, sem improviso e sem risco.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-2">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex items-center gap-2 md:gap-4"
          >
            <div className="flex flex-col items-center gap-3 px-4 py-6 rounded-xl bg-card border border-border hover:border-glow transition-all hover:glow-blue group">
              <step.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground">{step.label}</span>
            </div>
            {i < steps.length - 1 && (
              <span className="hidden md:block text-muted-foreground text-xl">→</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;
