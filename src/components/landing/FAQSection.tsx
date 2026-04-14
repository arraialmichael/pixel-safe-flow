import { motion } from "framer-motion";
import { ShieldCheck, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O cliente consegue baixar o arquivo sem pagar?",
    a: "De forma alguma. O nosso Cofre Anti-Calote utiliza tecnologia de Links Temporários Encriptados (Signed URLs). O link de download só é gerado pelo servidor após a confirmação real do pagamento. Não é um botão escondido, é proteção de nível bancário.",
    icon: ShieldCheck,
  },
  {
    q: "O PixelSafe fica com alguma porcentagem do meu projeto?",
    a: "Zero. O PixelSafe é uma plataforma de gestão. Você conecta sua conta do Mercado Pago e o dinheiro cai direto para você. Cobramos apenas a assinatura mensal para manter sua infraestrutura segura.",
    icon: Check,
  },
  {
    q: "O cliente vai saber que estou usando o PixelSafe?",
    a: "Não. Somos uma plataforma White Label. O workspace leva o seu nome e sua identidade. Para o seu cliente, você investiu numa infraestrutura própria de alto nível para atendê-lo.",
    icon: ShieldCheck,
  },
  {
    q: "E se eu já tiver meus próprios contratos?",
    a: "Perfeito. Além dos nossos 3 templates jurídicos prontos, você tem o Template Customizado com editor de texto rico. Basta colar seu contrato e o sistema aplica toda a nossa camada de blindagem e assinatura digital nele.",
    icon: Check,
  },
  {
    q: "Por que custa apenas R$ 49,00?",
    a: "Este é o nosso preço promocional de lançamento. Queremos democratizar a segurança para designers brasileiros. Um único calote evitado paga anos de assinatura da plataforma.",
    icon: ShieldCheck,
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Ainda tem <span className="text-gradient">dúvidas?</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Respostas diretas para as objeções mais comuns.
        </p>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => {
          const Icon = faq.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="relative border border-border/40 rounded-lg px-6 bg-card/60 backdrop-blur-sm data-[state=open]:border-primary/30 data-[state=open]:glow-cyan transition-all duration-300 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 font-display font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="flex gap-3 items-start">
                    <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          );
        })}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
