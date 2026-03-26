import { motion } from "framer-motion";
import { Sparkles, Link, FileText, CreditCard, ShieldCheck } from "lucide-react";

const steps = [
  { icon: Sparkles, num: "01", title: "Crie proposta com IA", desc: "Descreva o projeto e receba uma proposta profissional em segundos" },
  { icon: Link, num: "02", title: "Envie link profissional", desc: "Seu cliente visualiza e aprova diretamente no navegador" },
  { icon: FileText, num: "03", title: "Gere contrato automaticamente", desc: "A proposta vira contrato com valores, prazos e condições" },
  { icon: CreditCard, num: "04", title: "Receba pagamento", desc: "Pix, cartão ou boleto — o dinheiro vai direto pra você" },
  { icon: ShieldCheck, num: "05", title: "Libere arquivos com segurança", desc: "Os arquivos só são entregues após o pagamento confirmado" },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Como <span className="text-gradient">funciona</span>
        </h2>
      </motion.div>

      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex gap-6 items-start p-6 rounded-xl bg-card border border-border hover:border-glow transition-all group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary font-bold text-lg shrink-0 group-hover:bg-primary/20 transition-colors">
              {step.num}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
