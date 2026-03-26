import { motion } from "framer-motion";
import { Check, X, Star, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => (
  <section id="pricing" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Comece grátis. <span className="text-gradient">Continue apenas se fizer sentido.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-4">
          Teste todas as funcionalidades por 7 dias. Sem cartão de crédito.
        </p>
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <Clock className="h-4 w-4" />
          Seu acesso completo expira em 7 dias
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Starter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-card border border-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-1">Starter</h3>
          <p className="text-muted-foreground text-sm mb-6">Para quem está começando</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-foreground">R$49</span>
            <span className="text-muted-foreground">/mês</span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              { text: "Propostas com IA (limitado)", ok: true },
              { text: "Gestão de clientes", ok: true },
              { text: "Contratos básicos", ok: true },
              { text: "Link de proposta", ok: true },
              { text: "Integração de pagamento", ok: false },
              { text: "Cofre Anti-Calote", ok: false },
            ].map((item) => (
              <li key={item.text} className="flex items-center gap-3 text-sm">
                {item.ok ? (
                  <Check className="h-4 w-4 text-primary shrink-0" />
                ) : (
                  <X className="h-4 w-4 text-muted-foreground shrink-0" />
                )}
                <span className={item.ok ? "text-foreground" : "text-muted-foreground"}>{item.text}</span>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            className="w-full border-border text-foreground hover:bg-secondary py-6 transition-all hover:scale-105"
          >
            Começar grátis
          </Button>
        </motion.div>

        {/* Pro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative p-8 rounded-xl bg-card border-2 border-primary/40 glow-blue-strong scale-[1.02]"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold">
              <Star className="h-3 w-3" />
              Mais escolhido por designers profissionais
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-1 mt-2">Pro</h3>
          <p className="text-muted-foreground text-sm mb-6">Para quem quer fechar projetos com segurança</p>
          <div className="mb-2">
            <span className="text-muted-foreground line-through text-lg mr-2">R$147</span>
            <span className="text-4xl font-bold text-foreground">R$99</span>
            <span className="text-muted-foreground">/mês</span>
          </div>
          <p className="text-primary text-xs font-medium mb-6">Oferta de lançamento por tempo limitado</p>

          <ul className="space-y-3 mb-8">
            {[
              "Propostas com IA ilimitadas",
              "Contratos automáticos",
              "Integração de pagamento",
              "Fluxo completo",
              "Cofre Anti-Calote",
              "Liberação automática de arquivos",
              "Suporte prioritário",
            ].map((text) => (
              <li key={text} className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 text-primary shrink-0" />
                <span className="text-foreground">{text}</span>
              </li>
            ))}
          </ul>

          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-blue py-6 text-base transition-all hover:scale-105 group animate-glow-pulse"
          >
            Começar grátis
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-center text-xs text-muted-foreground mt-4">
            A maioria dos usuários recupera o valor da mensalidade no primeiro projeto
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PricingSection;
