import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "O PixelSafe realmente cria propostas profissionais com IA?", a: "Sim. Você descreve o projeto e a IA gera uma proposta estruturada, com escopo, valores e opções de pacote. Sem começar do zero. Sem perder tempo." },
  { q: "Meu cliente precisa criar conta?", a: "Não. Ele recebe um link e pode visualizar, aprovar e seguir o processo direto no navegador. Menos fricção = mais chance de fechar." },
  { q: "O contrato é automático mesmo?", a: "Sim. A proposta pode virar contrato em poucos cliques, já com valores, prazos e condições definidos. Você sai do improviso e entra no profissional." },
  { q: "Como funciona o pagamento?", a: "Você conecta sua conta e o cliente paga via Pix, cartão ou boleto. O dinheiro vai direto para você — sem intermediários segurando." },
  { q: "O que é o Cofre Anti-Calote?", a: "É o que garante que você receba. Você envia os arquivos pelo sistema e eles só são liberados após o pagamento. Sem pagamento = sem entrega." },
  { q: "E se o cliente não pagar?", a: "Ele não recebe o projeto. Chega de trabalhar e torcer para receber depois." },
  { q: "Isso não vai complicar meu processo?", a: "Não — faz o contrário. Hoje você usa várias ferramentas e resolve tudo manualmente. Com o PixelSafe, tudo vira um fluxo único: proposta → contrato → pagamento → entrega." },
  { q: "Meu cliente vai estranhar esse processo?", a: "Não. Ele vai perceber mais profissionalismo, organização e clareza. Isso aumenta confiança e acelera decisões." },
  { q: "Preciso cobrar o cliente manualmente?", a: "Não. O sistema organiza etapas, mostra valores pendentes e orienta o cliente. Você deixa de ser cobrador e vira profissional." },
  { q: "Em quanto tempo isso se paga?", a: "Na maioria dos casos, no primeiro projeto. Se você fechar mais rápido ou evitar um calote, o investimento já se pagou." },
  { q: "Preciso de cartão para testar?", a: "Não. Você tem 7 dias com acesso completo, sem precisar cadastrar cartão. Teste sem risco." },
  { q: "O que acontece se eu não usar?", a: "Nada muda. Você continua criando proposta manualmente, cobrando no WhatsApp e assumindo o risco. A diferença é que agora você sabe que existe um jeito melhor." },
  { q: "Isso é para iniciantes ou profissionais?", a: "Para quem leva design a sério. Se você quer crescer, organizar e parar de improvisar — é pra você." },
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
          Perguntas <span className="text-gradient text-[#02deb6]">frequentes</span>
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.4 }}
          >
            <AccordionItem
              value={`item-${i}`}
              className="relative border border-border/40 rounded-lg px-6 bg-card/60 backdrop-blur-sm data-[state=open]:border-primary/30 data-[state=open]:glow-cyan transition-all duration-300 overflow-hidden"
            >
              {/* Cyan indicator bar */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/0 data-[state=open]:bg-primary transition-colors duration-300" />
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 font-display font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
