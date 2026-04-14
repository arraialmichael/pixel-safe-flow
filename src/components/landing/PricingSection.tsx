import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Propostas com IA ilimitadas",
  "Contratos profissionais automáticos",
  "PDFs personalizados",
  "Pagamento blindado integrado",
  "Cofre Anti-Calote",
  "Liberação automática de arquivos",
  "Gestão de Equipe",
  "Gestão de clientes",
  "Suporte prioritário",
];

const PricingSection = () => (
  <section id="pricing" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Um único plano.{" "}
          <span className="text-gradient">Proteção total para o seu estúdio.</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Todas as funcionalidades premium incluídas. Sem surpresas.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="relative max-w-lg mx-auto p-8 md:p-10 rounded-xl bg-card border-gradient glow-cyan-strong"
      >
        {/* Badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-display font-semibold shimmer-btn">
            <Star className="h-3 w-3" />
            Preço Promocional de Lançamento
          </div>
        </div>

        <div className="text-center mt-3">
          <h3 className="text-2xl font-display font-bold text-foreground mb-1">Acesso Total</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Tudo o que o PixelSafe oferece, sem limitações
          </p>

          <div className="mb-2">
            <span className="text-muted-foreground line-through text-lg mr-2">R$99</span>
            <span className="text-5xl font-display font-bold text-foreground">R$49</span>
            <span className="text-muted-foreground">/mês</span>
          </div>
          <p className="text-primary text-xs font-medium mb-8">
            Oferta válida apenas no lançamento
          </p>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((text) => (
            <li key={text} className="flex items-center gap-3 text-sm">
              <Check className="h-4 w-4 text-primary shrink-0" />
              <span className="text-foreground">{text}</span>
            </li>
          ))}
        </ul>

        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shimmer-btn py-6 text-base transition-all hover:scale-105 group animate-glow-pulse font-medium">
          Começar grátis agora
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Recupere o investimento logo no primeiro projeto fechado
        </p>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
