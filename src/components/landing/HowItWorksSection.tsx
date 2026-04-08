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
  <section id="como-funciona" className="section-padding relative">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Como <span className="text-gradient text-[#02deb6]">funciona</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/10 to-transparent" />

        <div className="space-y-12">
          {steps.map((step, i) => {
            const isRight = i % 2 !== 0;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-6 ${
                  isRight ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                {/* Number circle */}
                <div className="relative z-10 shrink-0 w-12 h-12 rounded-full border-gradient bg-card flex items-center justify-center text-[#02deb6]">
                  <span className="font-display font-bold text-sm text-[#02deb6]">{step.num}</span>
                </div>

                <div className={`flex-1 p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:glow-cyan ${
                  isRight ? "md:mr-12" : "md:ml-0"
                }`}>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
