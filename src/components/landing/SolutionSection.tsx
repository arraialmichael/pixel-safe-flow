import { motion } from "framer-motion";
import { Sparkles, FileCheck, ShieldAlert, Lock, Users, Zap } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Propostas com IA", desc: "Descreva o projeto e a IA cria uma proposta completa e profissional" },
  { icon: FileCheck, title: "Contratos automáticos", desc: "Transforme propostas em contratos com um clique" },
  { icon: Lock, title: "Cofre Anti-Calote", desc: "Arquivos trancados com links encriptados. Só libera após pagamento integral confirmado." },
  { icon: Users, title: "Gestão de clientes", desc: "Organize todos os seus projetos e clientes em um só lugar" },
  { icon: Zap, title: "Aprovação via link", desc: "Seu cliente aprova direto no navegador, sem criar conta" },
];

const SolutionSection = () => (
  <section className="section-padding bg-mesh-blue relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          O PixelSafe organiza e{" "}
          <span className="text-gradient">protege todo o seu fluxo</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Você não precisa de várias ferramentas. Só de um processo que funciona.
        </p>
      </motion.div>

      {/* Row 1: 3 cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {features.slice(0, 3).map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="relative p-7 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 transition-all duration-300 group hover:border-primary/30 hover:glow-cyan"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
              <f.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Row 2: 2 cards centered */}
      <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
        {features.slice(3).map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i + 3) * 0.08, duration: 0.5 }}
            className="relative p-7 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 transition-all duration-300 group hover:border-primary/30 hover:glow-cyan"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
              <f.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
