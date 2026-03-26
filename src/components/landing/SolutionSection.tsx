import { motion } from "framer-motion";
import { Sparkles, FileCheck, CreditCard, Lock, Users, Zap } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Propostas com IA", desc: "Descreva o projeto e a IA cria uma proposta completa e profissional" },
  { icon: FileCheck, title: "Contratos automáticos", desc: "Transforme propostas em contratos com um clique" },
  { icon: CreditCard, title: "Pagamento integrado", desc: "Pix, cartão ou boleto — direto na plataforma" },
  { icon: Lock, title: "Cofre Anti-Calote", desc: "Arquivos só liberados após pagamento confirmado" },
  { icon: Users, title: "Gestão de clientes", desc: "Organize todos os seus projetos e clientes em um só lugar" },
  { icon: Zap, title: "Aprovação via link", desc: "Seu cliente aprova direto no navegador, sem criar conta" },
];

const SolutionSection = () => (
  <section className="section-padding bg-gradient-radial">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          O PixelSafe organiza e <span className="text-gradient">protege todo o seu fluxo</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Você não precisa de várias ferramentas. Só de um processo que funciona.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-6 rounded-xl bg-card border border-border hover:border-glow transition-all hover:glow-blue group"
          >
            <f.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
