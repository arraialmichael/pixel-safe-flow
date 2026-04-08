import { motion } from "framer-motion";
import { ShieldOff, ShieldCheck, Lock } from "lucide-react";

const VaultSection = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Dramatic blue mesh */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-mesh-blue opacity-200" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[100px]" />
    </div>

    <div className="container mx-auto max-w-4xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2.5 rounded-full text-sm font-display font-medium mb-8 text-[#02deb6]">
          <Lock className="h-4 w-4" />
          Cofre Anti-Calote
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          Nunca mais entregue um projeto{" "}
          <span className="text-glow text-primary">sem receber</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          O Cofre Anti-Calote protege seu trabalho até o pagamento ser concluído.
        </p>
      </motion.div>

      {/* Central shield icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mb-14"
      >
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center animate-glow-pulse">
            <ShieldCheck className="h-12 w-12 text-primary" />
          </div>
          <div className="absolute -inset-4 rounded-3xl border border-primary/10 animate-pulse" />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-xl bg-card/60 backdrop-blur-sm border border-destructive/15"
        >
          <ShieldOff className="h-10 w-10 text-destructive/70 mb-5" />
          <h3 className="text-lg font-display font-semibold text-foreground mb-5">Sem PixelSafe</h3>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex items-center gap-2"><span className="text-destructive">✕</span> Entrega antes de receber</li>
            <li className="flex items-center gap-2"><span className="text-destructive">✕</span> Cobrança manual por WhatsApp</li>
            <li className="flex items-center gap-2"><span className="text-destructive">✕</span> Risco de calote em todo projeto</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-xl bg-card/60 backdrop-blur-sm border border-primary/20 glow-cyan"
        >
          <ShieldCheck className="h-10 w-10 text-primary mb-5" />
          <h3 className="text-lg font-display font-semibold text-foreground mb-5">Com PixelSafe</h3>
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
        className="text-center text-xl md:text-2xl font-display font-semibold text-foreground"
      >
        Seu trabalho só é entregue quando o{" "}
        <span className="text-glow text-primary">pagamento está garantido</span>
      </motion.p>
    </div>
  </section>
);

export default VaultSection;
