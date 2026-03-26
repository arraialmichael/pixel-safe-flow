import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const before = [
  "Propostas manuais",
  "Contratos separados",
  "Cobrança informal",
  "Entrega sem garantia",
];

const after = [
  "Proposta vira contrato",
  "Aprovação em 1 clique",
  "Pagamento integrado",
  "Entrega protegida",
];

const BeforeAfterSection = () => (
  <section className="section-padding bg-gradient-radial">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Antes vs <span className="text-gradient">Depois</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-card border border-border"
        >
          <h3 className="text-lg font-semibold text-muted-foreground mb-6">Antes do PixelSafe</h3>
          <ul className="space-y-4">
            {before.map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <X className="h-5 w-5 text-destructive shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-card border border-primary/20 glow-blue"
        >
          <h3 className="text-lg font-semibold text-primary mb-6">Com PixelSafe</h3>
          <ul className="space-y-4">
            {after.map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground">
                <Check className="h-5 w-5 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
