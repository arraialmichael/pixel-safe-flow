

## Plano: Argumentos de Segurança Técnica na Landing Page

### Objetivo
Transformar as features de segurança (Signed URLs e Hard-block de pagamento) em copy de venda concreta e persuasiva, em 3 componentes.

---

### 1. VaultSection.tsx — Cofre com linguagem técnica premium

**Header atualizado:**
- Subtítulo: "Cofre Digital com Nível de Segurança Bancária"
- Descrição: mencionar "Links de Acesso Temporário e Encriptados" (Signed URLs)

**Card "Sem PixelSafe"** — adicionar item:
- "✕ Cliente paga valor errado e alega quitação"

**Card "Com PixelSafe"** — reescrever itens:
- "✓ Entrega via links temporários e encriptados"
- "✓ Cofre digital com segurança de nível bancário"
- "✓ Arquivos 100% inacessíveis até o último centavo"

**Frase final:** "Seus arquivos ficam trancados em um cofre digital encriptado — inacessível até a confirmação do último centavo."

**Ícones:** Trocar `ShieldCheck` central por `ShieldCheck` + adicionar `KeyRound` e `LockKeyhole` nos itens.

---

### 2. SolutionSection.tsx — Novo card "Blindagem de Pagamento"

**Substituir** o card "Pagamento integrado" (CreditCard) por um card mais forte:
- Titulo: "Blindagem de Pagamento"
- Descrição: "O sistema bloqueia qualquer valor diferente do contrato. Ninguém paga R$ 1 para liberar um projeto de R$ 1.000."
- Ícone: `ShieldAlert` (lucide-react)

**Manter** o pagamento integrado como parte da descrição do card de Cofre Anti-Calote, que será atualizado:
- Desc: "Arquivos trancados com links encriptados. Só libera após pagamento integral confirmado."

---

### 3. HeroSection.tsx — Badge Anti-Fraude

**Adicionar** um badge animado abaixo do texto "Sem cartão de crédito • Acesso imediato":
- Ícone: `ShieldCheck`
- Texto: "Processo Blindado de Ponta a Ponta"
- Estilo: inline-flex com bg-primary/10, border-primary/20, text-primary, rounded-full (mesmo padrão do badge do VaultSection)

---

### Arquivos modificados
- `src/components/landing/VaultSection.tsx`
- `src/components/landing/SolutionSection.tsx`
- `src/components/landing/HeroSection.tsx`

### Consistência visual
Todos os novos elementos usam ícones de escudo/cadeado do lucide-react (`ShieldCheck`, `ShieldAlert`, `LockKeyhole`, `KeyRound`) e seguem o padrão visual existente (cores primary, glow-cyan, font-display).

