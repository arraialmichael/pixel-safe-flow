

## Plano Atualizado: Otimização Dual-Target (SEO + GEO)

A única diferença é que todas as referências de URL passam a usar `https://www.pixelsafe.com.br` em vez do domínio Lovable.

---

### 1. Meta Tags e Technical SEO (`index.html`)

| Tag | Novo valor |
|-----|------------|
| `<title>` | "PixelSafe \| Contratos Seguros e Cobrança para Designers" (56 chars) |
| `meta description` | "Proteja suas entregas com o Cofre Anti-Calote. Crie propostas com IA, envie contratos com assinatura digital e receba sem stress. Teste grátis por 7 dias." (155 chars) |
| `og:title` | Coincidir com title |
| `og:description` | Coincidir com description |
| `og:url` | **`https://www.pixelsafe.com.br`** |
| `og:locale` | `pt_BR` |
| `og:image` | Manter imagem atual |
| `twitter:site` | Remover `@Lovable` (ou substituir por conta PixelSafe se existir) |
| `twitter:title` / `twitter:description` | Coincidir com novos valores |
| **`<link rel="canonical">`** | **`https://www.pixelsafe.com.br`** |

### 2. Schema Markup JSON-LD (`index.html`)

**a) SoftwareApplication** -- incluir `"url": "https://www.pixelsafe.com.br"`:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PixelSafe",
  "url": "https://www.pixelsafe.com.br",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Plataforma SaaS white label para designers: propostas com IA, contratos com assinatura digital, cobrança integrada e Cofre Anti-Calote com links temporários encriptados.",
  "offers": {
    "@type": "Offer",
    "price": "49.00",
    "priceCurrency": "BRL",
    "priceValidUntil": "2026-12-31"
  }
}
```

**b) FAQPage** -- mapear as 6 perguntas do `FAQSection.tsx` para Rich Snippets e GEO.

### 3. Componentes React

| Arquivo | Alteração |
|---------|-----------|
| `Header.tsx` | Alt do logo: "PixelSafe - Plataforma de contratos e cobrança segura para designers" |
| `Footer.tsx` | Adicionar "Última atualização: Abril 2026" entre logo e copyright |

### Arquivos a modificar

- `index.html` -- title, description, OG/Twitter tags, canonical (`pixelsafe.com.br`), 2x JSON-LD
- `src/components/landing/Header.tsx` -- alt descritivo
- `src/components/landing/Footer.tsx` -- freshness signal

