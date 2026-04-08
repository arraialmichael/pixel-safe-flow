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
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Comece grátis.{" "}
          <span className="text-gradient text-[#02deb6]">Continue apenas se fizer sentido.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-5">
          Teste todas as funcionalidades por 7 dias. Sem cartão de crédito.
        </p>
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2.5 rounded-full text-sm font-display font-medium text-[#02deb6]">
          <Clock className="h-4 w-4" />
          Seu acesso completo expira em 7 dias
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mt-14 items-start">
        {/* Starter — deliberately muted */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-card/50 border border-border/40 opacity-90"
        >
          <h3 className="text-xl font-display font-semibold text-foreground mb-1">Starter</h3>
          <p className="text-muted-foreground text-sm mb-6">Para quem está começando</p>
          <div className="mb-6">
            <span className="text-4xl font-display font-bold text-foreground">R$49</span>
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
                  <Check className="h-4 w-4 text-primary/60 shrink-0" />
                ) : (
                  <X className="h-4 w-4 text-muted-foreground/40 shrink-0" />
                )}
                <span className={item.ok ? "text-foreground/80" : "text-muted-foreground/60"}>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            className="w-full border-border/50 text-foreground hover:bg-secondary py-6 transition-all"
          >
            Começar grátis
          </Button>
        </motion.div>

        {/* Pro — highlighted with border gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative p-8 rounded-xl bg-card border-gradient glow-cyan-strong scale-[1.03]"
        >
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="inline-flex items-center gap-1.5 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-display font-semibold shimmer-btn bg-[#02deb6]">
              <Star className="h-3 w-3" />
              Mais escolhido por designers profissionais
            </div>
          </div>

          <h3 className="text-xl font-display font-semibold text-foreground mb-1 mt-3">Pro</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Para quem quer fechar projetos com segurança
          </p>
          <div className="mb-2">
            <span className="text-muted-foreground line-through text-lg mr-2">R$147</span>
            <span className="text-4xl font-display font-bold text-foreground">R$99</span>
            <span className="text-muted-foreground">/mês</span>
          </div>
          <p className="text-primary text-xs font-medium mb-6">
            Oferta de lançamento por tempo limitado
          </p>

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

          <Button className="w-full text-primary-foreground shimmer-btn py-6 text-base transition-all hover:scale-105 group animate-glow-pulse font-medium bg-[#02deb6]">
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
