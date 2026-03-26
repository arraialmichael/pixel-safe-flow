

# Redesign da Landing Page PixelSafe — Skill Frontend Design

## Problema Atual
A landing page atual usa Inter (genérico), layouts previsíveis (grid padrão), animações repetitivas (fade-up em tudo), e carece de personalidade visual. A skill exige design distintivo, tipografia marcante, composição espacial inesperada e atmosfera visual rica.

## Direção Estética
**Conceito: "Vault Noir"** — Luxo tecnológico com peso visual. Dark mode profundo com azul ciano elétrico como acento dominante. Atmosfera de cofre digital: segurança, precisão, confiança.

- **Tipografia**: **Sora** (display/headings — geométrica moderna com personalidade) + **DM Sans** (body — limpa mas com mais caráter que Inter)
- **Cor**: Fundo quase preto (#0a0a0f), azul ciano elétrico (#00d4ff) como acento dominante, com toques de amber (#f59e0b) para alertas/destruição
- **Texturas**: Noise/grain overlay sutil no fundo, gradient meshes radiais, linhas geométricas decorativas
- **Motion**: Entrada orquestrada com stagger no Hero, scroll-triggered reveals com variação (não só fade-up), hovers surpreendentes com scale + glow + border shift

## Plano de Implementação

### 1. Foundation — `src/index.css` + `tailwind.config.ts`
- Trocar fonte de Inter para Sora + DM Sans (Google Fonts)
- Novo esquema de cores com ciano elétrico dominante
- Adicionar utilitários: `noise-overlay`, `mesh-gradient`, `text-glow`, `border-gradient`
- Novo keyframe: `float`, `shimmer`, `slide-in-left`, `slide-in-right`, `scale-in`
- CSS para grain texture overlay global

### 2. Header — Layout assimétrico
- Logo com efeito de glow no ícone ao hover
- Nav links com underline animado (slide-in) ao hover em vez de simples color change
- CTA com border gradient animado
- Backdrop com noise texture

### 3. Hero — Composição dramática
- Layout com texto alinhado à esquerda (quebrar a centralização genérica)
- Headline com palavras-chave em `text-glow` ciano
- Elemento decorativo geométrico grande (SVG) no lado direito — linhas angulares que remetem a "cofre/proteção"
- Staggered entrance: cada elemento entra com delay diferente
- Floating particles/dots decorativos com animação CSS
- CTAs com shimmer effect no botão principal

### 4. ProofSection — Fluxo horizontal com linha conectora
- Ícones conectados por uma linha SVG animada (draw-on scroll)
- Cards com hover que revela glow border + elevação
- Layout mais generoso com spacing

### 5. ProblemSection — Layout diagonal/assimétrico
- Items empilhados com leve offset horizontal progressivo (escada visual)
- Ícone de alerta com pulse animation
- Background com gradient mesh vermelho sutil (reforça "dor")

### 6. SolutionSection — Grid com overlap
- Cards com tamanhos variados (feature principal maior)
- Borda gradient nos cards ao hover
- Ícones com backdrop glow

### 7. HowItWorksSection — Timeline vertical com linha
- Linha vertical SVG conectando os steps
- Números com circle border-gradient
- Alternância esquerda/direita nos steps (não lista linear)

### 8. VaultSection — Seção de impacto máximo
- Background mais dramático (gradient mesh azul intenso)
- Comparação lado a lado com divider animado
- Ícone de escudo grande com glow pulsante central

### 9. BenefitsSection — Cards com hover 3D tilt
- Perspective transform sutil no hover
- Ícones com cor distinta cada + glow matching

### 10. BeforeAfterSection — Slider visual
- Dois painéis com contraste visual forte (cinza apagado vs ciano vivo)
- Transição visual marcante entre os dois lados

### 11. PricingSection — Pro card elevado
- Pro card com border-gradient animado contínuo
- Badge com shimmer effect
- Starter card deliberadamente mais discreto (opacity reduzida, sem efeitos)

### 12. FAQSection — Accordion refinado
- Trigger com indicador lateral (barra azul) em vez de chevron genérico
- Open state com glow border suave

### 13. FinalCTASection — Grande finale
- Texto extra grande, glow intenso
- Geometric pattern background
- Botão com shimmer + scale + glow pulse

### 14. Footer — Minimal com personalidade
- Linha divisória com gradient ao invés de cor sólida

## Detalhes Técnicos
- Todas as 11 seções mantidas (Hero, Proof, Problem, Solution, HowItWorks, Vault, Benefits, BeforeAfter, Pricing, FAQ, FinalCTA + Header/Footer)
- Framer Motion continua como lib de animação
- Google Fonts: Sora (600, 700, 800) + DM Sans (400, 500)
- Grain overlay via CSS `background-image` com SVG inline noise
- Border gradients via `background-clip` + pseudo-elements
- Arquivos alterados: `index.css`, `tailwind.config.ts`, todos os 13 componentes em `src/components/landing/`

