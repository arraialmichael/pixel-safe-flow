import { motion } from "framer-motion";
import { Zap, TrendingUp, ShieldCheck, Award } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Mais velocidade", desc: "IA gera propostas em segundos, não em horas", color: "text-amber-400", glow: "group-hover:shadow-[0_0_30px_hsl(35_92%_50%/0.15)]" },
  { icon: TrendingUp, title: "Mais previsibilidade", desc: "Pagamentos organizados e rastreáveis", color: "text-emerald-400", glow: "group-hover:shadow-[0_0_30px_hsl(160_84%_39%/0.15)]" },
  { icon: ShieldCheck, title: "Mais segurança", desc: "Cofre Anti-Calote protege cada entrega", color: "text-primary", glow: "group-hover:glow-cyan" },
  { icon: Award, title: "Mais profissionalismo", desc: "Impressione clientes do primeiro contato ao último", color: "text-violet-400", glow: "group-hover:shadow-[0_0_30px_hsl(270_76%_65%/0.15)]" },
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
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
          Por que designers escolhem o{" "}
          <span className="text-gradient">PixelSafe</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`text-center p-8 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 transition-all duration-300 group hover:border-primary/20 ${b.glow}`}
            style={{ perspective: "800px" }}
          >
            <div className="transition-transform duration-300 group-hover:[transform:rotateY(5deg)_rotateX(-3deg)]">
              <b.icon className={`h-10 w-10 mx-auto mb-5 ${b.color} transition-transform duration-300 group-hover:scale-110`} />
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
