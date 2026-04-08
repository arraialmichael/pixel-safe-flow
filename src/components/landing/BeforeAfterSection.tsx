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
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Antes vs <span className="text-gradient text-[#02deb6]">Depois</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-0 md:gap-0 rounded-2xl overflow-hidden border border-border/50">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 bg-card/40"
        >
          <h3 className="text-lg font-display font-semibold text-muted-foreground mb-8 tracking-wide uppercase text-sm">
            Antes do PixelSafe
          </h3>
          <ul className="space-y-5">
            {before.map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <X className="h-5 w-5 text-destructive/70 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 bg-card/80 border-l border-primary/10 relative"
        >
          {/* Cyan accent line */}
          <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <h3 className="text-lg font-display font-semibold mb-8 tracking-wide uppercase text-sm text-[#02deb6]">
            Com PixelSafe
          </h3>
          <ul className="space-y-5">
            {after.map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground">
                <Check className="h-5 w-5 shrink-0 text-[#02deb6]" />
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
