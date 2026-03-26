import { motion } from "framer-motion";
import { Zap, TrendingUp, ShieldCheck, Award } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Mais velocidade", desc: "IA gera propostas em segundos, não em horas", color: "text-yellow-400" },
  { icon: TrendingUp, title: "Mais previsibilidade", desc: "Pagamentos organizados e rastreáveis", color: "text-green-400" },
  { icon: ShieldCheck, title: "Mais segurança", desc: "Cofre Anti-Calote protege cada entrega", color: "text-primary" },
  { icon: Award, title: "Mais profissionalismo", desc: "Impressione clientes do primeiro contato ao último", color: "text-purple-400" },
];

const BenefitsSection = () => (
  <section id="beneficios" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Por que designers escolhem o <span className="text-gradient">PixelSafe</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center p-8 rounded-xl bg-card border border-border hover:border-glow transition-all hover:glow-blue group"
          >
            <b.icon className={`h-10 w-10 mx-auto mb-4 ${b.color} group-hover:scale-110 transition-transform`} />
            <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
