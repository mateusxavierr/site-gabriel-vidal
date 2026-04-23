# PASSO 3 — ESCOLHA DO STACK TECNOLÓGICO (React)
## Projeto: Site one-page (alta conversão) — Advocacia de Trânsito
## Data: 2026-04-22

---

## 1) Stack completo recomendado

### 1.1 — Framework React
- **Escolha**: **Next.js (App Router)** — recomendado usar a versão estável mais recente no momento do setup (ex.: `next@latest`).

#### Por que Next.js (e não Vite SPA / Remix)?
- **SEO e performance com pouco esforço**: Next facilita renderização no servidor/estática, geração de metadados, imagens otimizadas e estrutura “pronta para escalar”.
- **One-page hoje, multi-page amanhã**: se futuramente vocês quiserem blog, páginas locais por cidade ou páginas de serviço, já está no framework.
- **DX e deploy**: deploy simples e barato em Vercel.

#### Modos de renderização (explicação + escolha)
- **SPA (Single Page App)**: HTML inicial “vazio” + JS carrega e renderiza no browser.
  - **Prós**: simples.
  - **Contras**: SEO e performance inicial geralmente piores (dependendo do conteúdo).
- **SSR (Server-Side Rendering)**: HTML é gerado no servidor a cada request.
  - **Prós**: bom para conteúdo muito dinâmico.
  - **Contras**: custo/complexidade maior, e não é necessário para landing one-page.
- **SSG (Static Site Generation)**: HTML é pré-gerado no build.
  - **Prós**: **muito rápido**, excelente para SEO.
  - **Contras**: precisa rebuild para mudanças (se não usar ISR).
- **ISR (Incremental Static Regeneration)**: páginas estáticas revalidam/atualizam em intervalos.
  - **Prós**: performance de estático com atualizações “semi-automáticas”.
  - **Contras**: exige disciplina de cache/revalidação.

**Escolha para este projeto**: **SSG + ISR (quando necessário)**.
- A home é majoritariamente conteúdo estático (copy + seções), então SSG entrega **melhor performance e SEO**.
- ISR pode ser útil no futuro (ex.: blog, conteúdos via CMS sem rebuild manual).

#### Impacto em SEO e performance
- **SEO**: o Google recebe HTML pronto com conteúdo, headings e links internos.
- **Performance**: TTFB e LCP melhores (conteúdo já chega renderizado); `next/image` e `next/font` ajudam a reduzir custo de mídia e CLS.

---

### 1.2 — Linguagem
- **Escolha**: **TypeScript**
- **Justificativa**:
  - Facilita evolução do projeto (novas seções, CMS, formulários, componentes reutilizáveis).
  - Evita regressões em refactors (muito comum quando o site crescer).
- **Custo adicional**: configuração mínima (Next já vem pronto). Vale a pena.

---

### 1.3 — Estilização (CSS)
- **Escolha**: **Tailwind CSS**
- **Por quê**:
  - Excelente para landing pages: velocidade de implementação + consistência visual.
  - Facilita design system via tokens (cores, tipografia, espaçamento) e utilitários.
  - Ajuda a manter o projeto leve (CSS gerado sob demanda).

#### Design System
- Recomendar um arquivo central de tokens (cores/spacing/typography) e uso consistente de classes.

#### Biblioteca de componentes
- **Recomendação**: **shadcn/ui** (com **Radix UI** por baixo)
  - **Prós**: componentes acessíveis, altamente customizáveis, sem “vendor lock-in” forte.
  - Ideal para: accordion (FAQ), dialog, toast, button, form patterns.

---

### 1.4 — Animações
- **Escolha**: **Framer Motion** (uso moderado) + CSS para transições simples
- **Justificativa**:
  - Fácil de usar com React, bom equilíbrio entre qualidade e produtividade.
  - Mantendo animações sutis, o custo em mobile é controlável.

#### Animações recomendadas (advocacia)
- **Recomendadas**: fade/slide leve em seções, hover suave em cards, microtransições em botões.
- **Evitar**: parallax pesado, animações contínuas, “bounce” exagerado, entradas muito longas (parece amador e pesa no mobile).

---

### 1.5 — Formulário e validação
- **Form**: **React Hook Form**
- **Validação**: **Zod**
- **Integração**: `@hookform/resolvers/zod`

#### Envio do formulário (baixo custo e simples)
Opções recomendadas (em ordem):
1. **Resend (e-mail via API)** usando uma **Route Handler** do Next (`/api/contato`) ou Server Action.
2. **Webhook** para Zapier/Make (para CRM/planilha/WhatsApp business) com validação no servidor.

**Padrão recomendado**: enviar para e-mail + (opcional) webhook.

---

### 1.6 — Gerenciamento de estado
- **Necessidade**: geralmente **não** há necessidade de estado global em landing one-page.
- **Justificativa**:
  - Estados são locais (menu aberto, accordion FAQ, formulário, modais).
  - Menos dependências = bundle menor e manutenção mais simples.
- **Se aparecer necessidade** (ex.: multi-step form, AB test client-side, store de UTMs): usar **Zustand** por ser leve.

---

### 1.7 — SEO e Meta tags
- **Escolha**: **Next.js Metadata API** (App Router)
  - Define title/description/OG/Twitter/robots/canonical de forma central e tipada.

#### Indexação correta
- Conteúdo renderizado em SSG (HTML pronto), headings bem estruturados (H1 único, H2/H3 por seção).
- Gerar `sitemap.xml` e `robots.txt` (pode ser via `next-sitemap` ou route handler estático).

#### Meta tags essenciais (advogado local)
- **Title + Meta description** com variação por cidade (se futuramente criar páginas locais).
- **Open Graph** (para WhatsApp/Instagram): `og:title`, `og:description`, `og:image`, `og:url`.
- **Schema.org (JSON-LD)**:
  - `LegalService` ou `Attorney`
  - `LocalBusiness` (se tiver endereço/cidade/horário)
  - `FAQPage` (para a seção de FAQ)

---

### 1.8 — Ícones
- **Escolha**: **lucide-react**
- **Justificativa**: set consistente, leve, boa legibilidade, integra bem com Tailwind e shadcn/ui.

---

### 1.9 — Fontes
- **Escolha**: `next/font` (Google Fonts ou auto-hospedadas)
- **Prática recomendada para evitar CLS**:
  - Usar `next/font` com `display: swap` e fallback ajustado.
  - Definir tamanhos/line-height consistentes no design system.

---

### 1.10 — Imagens e mídia
- **Escolha**: `next/image`
- **Formatos recomendados**: **AVIF** e **WebP** (com fallback automático).
- **Responsivo**:
  - Usar `sizes` correto para cada breakpoint.
  - Preferir imagens “hero” otimizadas e poucas imagens grandes.

---

### 1.11 — Hospedagem e deploy
- **Escolha**: **Vercel**
- **Por quê**:
  - Integração nativa com Next.js (SSG/ISR, imagens, cache/CDN).
  - Deploy simples via Git (push → build → preview → produção).
- **Fluxo de deploy**:
  - `main` → produção
  - PRs → preview automático
- **Custo estimado mensal**:
  - Para um site institucional: normalmente **US$ 0 a US$ 20/mês** (depende de plano e tráfego).

---

### 1.12 — Domínio e DNS
- **Recomendação**: **Cloudflare DNS**
  - Fácil de gerenciar, bom nível de segurança, TLS/HTTPS, regras e redirects.
- **HTTPS**: Vercel fornece automaticamente (certificados gerenciados).

---

### 1.13 — Analytics e monitoramento
- **Analytics**:
  - **Plausible** (leve e privacy-friendly) **ou** **GA4** (padrão de mercado).
  - Carregar de forma assíncrona e só em produção.
- **Erros**: **Sentry** (opcional, mas ótimo para formularios e futuras integrações).

---

## 2) Estrutura de pastas do projeto (recomendada)

```text
/
├── public/
│   ├── og/                       # imagens Open Graph
│   └── images/                   # imagens estáticas (se necessário)
├── src/
│   ├── app/
│   │   ├── layout.tsx            # layout raiz + metadata base
│   │   ├── page.tsx              # one-page
│   │   ├── api/
│   │   │   └── contato/route.ts  # endpoint do formulário (server-side)
│   │   ├── sitemap.ts            # sitemap (ou usar next-sitemap)
│   │   └── robots.ts             # robots
│   ├── components/
│   │   ├── ui/                   # shadcn/ui + componentes genéricos
│   │   ├── layout/               # Header, Footer, Container, etc.
│   │   └── sections/             # Hero, Atuação, FAQ, Contato...
│   ├── content/
│   │   ├── site.ts               # textos/labels/CTAs centralizados
│   │   └── seo.ts                # titles/descriptions/JSON-LD
│   ├── styles/
│   │   ├── globals.css           # tailwind base + tokens css vars
│   │   └── tokens.css            # (opcional) vars de cor/typography
│   ├── lib/
│   │   ├── env.ts                # validação de env (Zod)
│   │   ├── analytics.ts          # wrappers GA/Plausible
│   │   └── utils.ts              # helpers
│   └── hooks/
│       └── useScrollSpy.ts       # (opcional) navegação por âncoras
├── .editorconfig
├── .prettierrc
├── eslint.config.mjs             # ESLint (flat config)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

**Justificativa**:
- `components/sections` separa o que é “pedaço de página” do que é “componente reutilizável”.
- `content/` mantém textos/CTAs fáceis de atualizar sem caçar strings no JSX.
- `app/api/contato` isola o envio do formulário no servidor (segurança e antispam).

---

## 3) Configurações essenciais do projeto

### ESLint
- Ativar presets do Next + TypeScript.
- Regras importantes:
  - evitar `any` quando possível
  - preferir imports organizados
  - proibir variáveis não usadas

### Prettier
- Config padrão com:
  - printWidth 100
  - singleQuote true
  - trailingComma all

### Husky + lint-staged (pre-commit)
- Rodar `eslint` + `prettier` apenas nos arquivos staged para garantir consistência sem travar o dev.

### .editorconfig
- newline no fim do arquivo, indent 2 espaços, charset utf-8.

### tsconfig.json
- `strict: true`
- `baseUrl` + `paths` (ex.: `@/components/*`, `@/content/*`)

### Variáveis de ambiente (desde o início)
- `.env.local` (dev) / variáveis na Vercel (prod).
- Sugestão:
  - `NEXT_PUBLIC_SITE_URL`
  - `CONTACT_TO_EMAIL`
  - `RESEND_API_KEY` (se usar Resend)
  - `CONTACT_WEBHOOK_URL` (opcional)
  - `NEXT_PUBLIC_GA_ID` (opcional) ou `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
  - `SENTRY_DSN` (opcional)

---

## 4) Dependências do projeto

### Dependências de produção (`dependencies`)

```bash
npm install zod react-hook-form @hookform/resolvers lucide-react framer-motion
```

- `zod`: validação/parse de dados (client e server).
- `react-hook-form`: formulários performáticos.
- `@hookform/resolvers`: integra Zod com RHF.
- `lucide-react`: ícones.
- `framer-motion`: animações sutis.

Se for enviar e-mail por API:

```bash
npm install resend
```

- `resend`: envio de e-mail via API (ex.: leads do formulário).

### Dependências de desenvolvimento (`devDependencies`)

```bash
npm install -D eslint prettier husky lint-staged @types/node
```

- `eslint`: lint.
- `prettier`: formatação.
- `husky`: hooks git.
- `lint-staged`: roda lint/format só no staged.
- `@types/node`: types para config.

Stack de UI com Tailwind (geralmente vem do boilerplate do Next + Tailwind):
- `tailwindcss`, `postcss`, `autoprefixer`

Se usar shadcn/ui:
- `tailwind-merge`, `clsx`, `class-variance-authority` (comuns no setup)

---

## 5) Checklist de setup inicial

```text
[ ] Criar projeto Next.js (App Router + TS)
[ ] Instalar Tailwind CSS
[ ] Configurar estrutura de pastas (src/, components/, content/, etc.)
[ ] Adicionar ESLint + Prettier
[ ] Configurar Husky + lint-staged (pre-commit)
[ ] Configurar tsconfig paths (@/*)
[ ] Criar `src/content/site.ts` para textos/CTAs
[ ] Implementar layout base + metadata (SEO)
[ ] Implementar sections (Hero/Atuação/FAQ/Contato) e navegação por âncoras
[ ] Implementar endpoint `/api/contato` + validação Zod no servidor
[ ] Integrar envio do formulário (Resend ou webhook)
[ ] Configurar analytics (GA4/Plausible) só em produção
[ ] Gerar sitemap/robots
[ ] Primeiro deploy na Vercel (preview + produção)
```

---

## 6) Decisões que devem ser evitadas

- **Create React App (CRA)**: legado, bundling/SSG/SEO mais limitados e sem o ecossistema moderno do Next.
- **SPA pura (Vite) para site local altamente SEO**: funciona, mas exige mais esforço para SEO técnico e performance do “primeiro render”.
- **CSS-in-JS pesado** (Emotion/Styled-Components em excesso): pode aumentar custo de runtime e complexidade; Tailwind é mais direto para landing.
- **GSAP/parallax pesado**: piora performance mobile e pode quebrar o tom profissional.
- **WordPress/page builder** (para este objetivo): volta a problemas de performance/manutenção/plugins; aqui o objetivo é controle e velocidade.

---

## 7) Escalabilidade futura (sem reescrever tudo)

### Adicionar um blog
- Criar rotas em `src/app/blog/[slug]/page.tsx`.
- Conteúdo via:
  - MDX no repositório (simples) **ou**
  - CMS headless (Sanity/Contentful/Strapi).
- ISR para atualizar posts sem rebuild manual.

### Área de login para clientes
- Adicionar autenticação (ex.: NextAuth/Auth.js).
- Criar rotas protegidas em `src/app/cliente/...`.
- Backend pode começar com APIs server-side no próprio Next e evoluir para serviços externos.

### Novas páginas além da home
- App Router naturalmente suporta múltiplas páginas.
- Reaproveita design system e componentes `ui/`.

### Integrar com CMS (advogado editar textos sem dev)
- `content/` deixa o site pronto para trocar a fonte de dados.
- Substituir `content/site.ts` por fetch do CMS, mantendo o layout/sections iguais.

### Aumentar time (1 → 3 pessoas)
- TS + ESLint/Prettier + hooks de commit reduzem inconsistências.
- Estrutura por `sections/` facilita trabalho paralelo (cada dev pega uma seção).

