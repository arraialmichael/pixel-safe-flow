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
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Tudo em um único fluxo{" "}
          <span className="text-gradient text-[#02deb6]">simples e profissional</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Do briefing ao pagamento final — sem planilhas, sem improviso e sem risco.
        </p>
      </motion.div>

      <div className="relative flex flex-wrap justify-center items-center gap-4 md:gap-0">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative flex flex-col items-center gap-3 px-6 py-8 md:px-8 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:glow-cyan group z-10"
          >
            <step.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300 text-[#02deb6]" />
            <span className="text-sm font-medium text-foreground">{step.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;
