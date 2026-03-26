import { motion } from "framer-motion";
import { ShieldOff, ShieldCheck, Lock } from "lucide-react";

const VaultSection = () => (
  <section className="section-padding bg-gradient-radial">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Lock className="h-4 w-4" />
          Cofre Anti-Calote
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Nunca mais entregue um projeto <span className="text-gradient">sem receber</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          O Cofre Anti-Calote protege seu trabalho até o pagamento ser concluído.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-destructive/5 border border-destructive/20"
        >
          <ShieldOff className="h-10 w-10 text-destructive mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-4">Sem PixelSafe</h3>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex items-center gap-2"><span className="text-destructive">✕</span> Entrega antes de receber</li>
            <li className="flex items-center gap-2"><span className="text-destructive">✕</span> Cobrança manual por WhatsApp</li>
            <li className="flex items-center gap-2"><span className="text-destructive">✕</span> Risco de calote em todo projeto</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-primary/5 border border-primary/20 glow-blue"
        >
          <ShieldCheck className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-4">Com PixelSafe</h3>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex items-center gap-2"><span className="text-primary">✓</span> Entrega protegida até o pagamento</li>
            <li className="flex items-center gap-2"><span className="text-primary">✓</span> Cobrança automatizada</li>
            <li className="flex items-center gap-2"><span className="text-primary">✓</span> Zero risco de calote</li>
          </ul>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xl md:text-2xl font-semibold text-foreground"
      >
        Seu trabalho só é entregue quando o <span className="text-gradient">pagamento está garantido</span>
      </motion.p>
    </div>
  </section>
);

export default VaultSection;
