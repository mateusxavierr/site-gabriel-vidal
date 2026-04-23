# PASSO 2 — DEFINIÇÃO DA ESTRUTURA DO SITE (ONE-PAGE)
## Site: Gabriel Vidal Advocacia (GV Multas)
## Data: 2026-04-22

---

## Conteúdo

Este arquivo é uma cópia do conteúdo entregue no `PASSO_2_ESTRUTURA_ONEPAGE.md` na raiz do projeto, centralizada aqui dentro da pasta `docs/`.

---

# PASSO 2 — DEFINIÇÃO DA ESTRUTURA DO SITE (ONE-PAGE)
## Site: Gabriel Vidal Advocacia (GV Multas)
## Data: 2026-04-22

---

## 1) Decisão e justificativa da estrutura (one-page)

Uma estrutura **one-page** faz muito sentido para advocacia de trânsito porque o visitante chega em **alta urgência emocional** (medo de perder a CNH, prazo curto, impacto em renda/rotina). Nessa situação, ele não quer “explorar o site”, ele quer:

- **Entender rápido** se você resolve o problema dele (multas, suspensão, cassação, PPD).
- **Sentir segurança** (autoridade, clareza de processo, ética/sigilo, transparência).
- **Agir** com o menor atrito possível (WhatsApp + formulário na mesma página).

Para esse perfil, a one-page é ideal porque:

- **Reduz fricção e dispersão**: menos cliques, menos páginas, menos chance de abandono.
- **Orquestra a jornada** em uma ordem persuasiva (dor → solução → prova/autoridade → como funciona → contato).
- **Aumenta conversão em mobile** (maior parte do tráfego) com CTAs sempre acessíveis.
- **Facilita manutenção**: serviços/FAQ/CTAs e dados de contato ficam centralizados e fáceis de atualizar.

---

## 2) Estrutura completa do site em ASCII

```text
╔══════════════════════════════════════════════════════════════════════╗
║  HEADER FIXO (sticky)                                                ║
║  [Logo GV Multas]  [Atuação] [Casos urgentes] [Como funciona]        ║
║                   [Sobre] [FAQ] [Contato]        [CTA: WhatsApp]     ║
╚══════════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════╗
║  SEÇÃO 1 — HERO (primeira dobra)                                     ║
║  ┌──────────────────────────────────┐ ┌───────────────────────────┐ ║
║  │  H1: "Escritório de Advocacia..."│ │ [Foto do advogado/escrit.] │ ║
║  │  Parágrafo: "A GV Multas atua..."│ │ (humanização + confiança)   │ ║
║  │  [CTA Primário: WhatsApp]        │ └───────────────────────────┘ ║
║  │  [CTA Secundário: Ver áreas]     │                               ║
║  └──────────────────────────────────┘                               ║
║  [Barra rápida: OAB/PE 64.194 | Atendimento ágil | Sigilo | Brasil]  ║
╚══════════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════╗
║  SEÇÃO 2 — "O que está acontecendo com você?" (DORES + URGÊNCIA)      ║
║  ┌────────────────────────────────────────────────────────────────┐  ║
║  │ [Blocos curtos]                                                  │  ║
║  │ - Risco de suspensão/cassação?                                   │  ║
║  │ - Multa gravíssima e medo de ficar sem dirigir?                  │  ║
║  │ - PPD em risco de perder a CNH provisória?                        │  ║
║  │ [Mini-CTA: "Fale com um especialista agora"]                      │  ║
║  └────────────────────────────────────────────────────────────────┘  ║
╚══════════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════╗
║  SEÇÃO 3 — ÁREAS DE ATUAÇÃO (grade de cards)                          ║
║  Título: "ÁREAS DE ATUAÇÃO DO ESCRITÓRIO"                             ║
║  Sub: "Veja como eu poderei te ajudar"                                ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                 ║
║  │ Defesa de    │ │ Suspensão do │ │ Cassação da  │                 ║
║  │ Multas...    │ │ Direito...   │ │ CNH          │                 ║
║  └──────────────┘ └──────────────┘ └──────────────┘                 ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                 ║
║  │ Recursos 1ª/ │ │ Acompanh. no │ │ Consultoria   │                 ║
║  │ 2ª Instância │ │ DETRAN       │ │ Preventiva    │                 ║
║  └──────────────┘ └──────────────┘ └──────────────┘                 ║
║  [CTA: "CLIQUE AQUI E FALE COM UM ESPECIALISTA"]                      ║
╚══════════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════╗
║  SEÇÃO 4 — CASOS URGENTES (3 cards “Atuação Imediata”)                ║
║  Título: "Atuação Imediata"                                           ║
║  ┌──────────────────────────┐ ┌──────────────────────────┐           ║
║  │ Multas gravíssimas...     │ │ Suspensão e Cassação...   │           ║
║  │ (texto do site)           │ │ (texto do site)           │           ║
║  │ [CTA: WhatsApp]           │ │ [CTA: WhatsApp]           │           ║
║  └──────────────────────────┘ └──────────────────────────┘           ║
║  ┌──────────────────────────┐                                       ║
║  │ PPD... (texto do site)    │   [Selo: "Prazo curto para agir"]      ║
║  │ [CTA: WhatsApp]           │                                       ║
║  └──────────────────────────┘                                       ║
╚══════════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════╗
║  SEÇÃO 5 — COMO FUNCIONA O ATENDIMENTO (passo a passo)                ║
║  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐              ║
║  │ 1) Você chama  │ │ 2) Análise    │ │ 3) Estratégia  │              ║
║  │ no WhatsApp    │ │ técnica do    │ │ e protocolo    │              ║
║  │                │ │ caso          │ │ de defesa      │              ║
║  └───────────────┘ └───────────────┘ └───────────────┘              ║
║  ┌───────────────┐ ┌───────────────┐                                ║
║  │ 4) Acompanha-  │ │ 5) Atualizações│                                ║
║  │ mento DETRAN   │ │ com transparên.│                                ║
║  └───────────────┘ └───────────────┘                                ║
║  [CTA: "Quero apoio jurídico personalizado"]                          ║
╚══════════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════╗
║  SEÇÃO 6 — SOBRE O ADVOGADO (autoridade + humanização)                ║
║  ┌──────────────────────────────────┐ ┌───────────────────────────┐ ║
║  │ "Quem irá trabalhar ao seu favor"│ │ [Foto do advogado]         │ ║
║  │ "Gabriel Vidal"                  │ │ (confiança)                │ ║
║  │ Bio completa (texto do site)     │ └───────────────────────────┘ ║
║  │ Linha de credencial: OAB/PE 64.194│                               ║
║  └──────────────────────────────────┘                               ║
║  [CTA: "CLIQUE AQUI E FALE COM UM ESPECIALISTA"]                      ║
╚══════════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════╗
║  SEÇÃO 7 — DIFERENCIAIS (4 cards)                                     ║
║  Título: "Por que escolher nosso escritório?"                         ║
║  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌─────────────┐║
║  │ Contato      │ │ Atendimento  │ │ Transparência│ │ Ética Prof.  │║
║  │ (texto)      │ │ Ágil (texto) │ │ (texto)      │ │ (texto)      │║
║  └──────────────┘ └──────────────┘ └──────────────┘ └─────────────┘║
║  [CTA: "QUERO APOIO JURÍDICO PERSONALIZADO"]                          ║
╚══════════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════╗
║  SEÇÃO 8 — PROVAS (recomendada: adicionar)                             ║
║  [Bloco 1: Resultados/Indicadores]*  [Bloco 2: Avaliações/selos]*     ║
║  (*mesmo que hoje não exista, é seção nova para conversão)            ║
║  [CTA curto]                                                          ║
╚══════════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════╗
║  SEÇÃO 9 — FAQ (accordion)                                             ║
║  Título: "Perguntas realizadas com frequência" + "F.A.Q"              ║
║  ┌────────────────────────────────────────────────────────────────┐  ║
║  │ Q1... → A...                                                     │  ║
║  │ Q2... → A...                                                     │  ║
║  │ Q3... → A...                                                     │  ║
║  │ Q4... → A...                                                     │  ║
║  └────────────────────────────────────────────────────────────────┘  ║
║  [CTA: WhatsApp]                                                      ║
╚══════════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════╗
║  SEÇÃO 10 — CONTATO (WhatsApp + Formulário)                            ║
║  ┌─────────────────────────────┐ ┌────────────────────────────────┐ ║
║  │ "Contato"                    │ │ Formulário                      │ ║
║  │ Email + Telefone (site)      │ │ [Nome completo]                  │ ║
║  │ Redes sociais (links)        │ │ [Digite seu e-mail]              │ ║
║  │                              │ │ [Digite seu telefone]            │ ║
║  │ [CTA: WhatsApp destacado]    │ │ [Mensagem]                       │ ║
║  └─────────────────────────────┘ │ [ENVIAR]                          │ ║
║                                  └────────────────────────────────┘ ║
╚══════════════════════════════════════════════════════════════════════╝

╔══════════════════════════════════════════════════════════════════════╗
║  FOOTER                                                                ║
║  [Email] [Telefone] [Facebook] [Instagram]                             ║
║  "Copyright 2025..." + "Desenvolvido por MRG Digital"                   ║
║  [Links legais: Política/Termos]*                                       ║
╚══════════════════════════════════════════════════════════════════════╝
```

---

## 3) Lista de seções com justificativa estratégica

### SEÇÃO 1 — HERO + Prova rápida
- **Objetivo**: ancorar relevância imediata e abrir o caminho para contato.
- **Conteúdo**: H1 do site, parágrafo “A GV Multas atua…”, CTA WhatsApp, CTA “Ver áreas”, foto, barra rápida (OAB/PE + sigilo + atuação nacional).
- **Gatilho mental**: clareza + autoridade + segurança + urgência.
- **Posição justificada**: primeira dobra define se o usuário fica ou sai; precisa deixar claro “direito de trânsito + multas/CNH” e oferecer saída rápida (WhatsApp).

### SEÇÃO 2 — Dores (problema do visitante) + urgência
- **Objetivo**: mostrar que você entende o momento do usuário e aumentar engajamento.
- **Conteúdo**: bullets curtos baseados no texto (“prazo curto”, “renda/rotina”, “refazer habilitação”), CTA curto.
- **Gatilho mental**: identificação + urgência.
- **Posição justificada**: antes de listar serviços, valida a dor e prepara o usuário para ver a solução certa.

### SEÇÃO 3 — Áreas de atuação (6 cards)
- **Objetivo**: dar “cardápio” claro do que você resolve.
- **Conteúdo**: os 6 serviços com descrições literais + CTA.
- **Gatilho mental**: clareza + competência.
- **Posição justificada**: cedo o suficiente para o usuário se localizar (“é comigo?”) sem precisar rolar muito.

### SEÇÃO 4 — Casos urgentes (Atuação imediata)
- **Objetivo**: capturar o tráfego mais quente (multas gravíssimas, suspensão/cassação, PPD).
- **Conteúdo**: 3 cards com os textos completos + CTA WhatsApp por card.
- **Gatilho mental**: urgência + alívio (“tem solução”) + ação.
- **Posição justificada**: vem logo após áreas gerais para aumentar conversão em casos críticos.

### SEÇÃO 5 — Como funciona o atendimento (passo a passo)
- **Objetivo**: reduzir ansiedade e objeções (“o que acontece depois que eu chamo?”).
- **Conteúdo**: 5 passos curtos (contato → análise técnica → estratégia/defesa → acompanhamento DETRAN → atualizações).
- **Gatilho mental**: segurança + transparência + previsibilidade.
- **Posição justificada**: depois do “o que você faz”, explica “como você entrega”.

### SEÇÃO 6 — Sobre o advogado (bio + foto + credencial)
- **Objetivo**: consolidar confiança e autoridade pessoal.
- **Conteúdo**: texto completo do perfil + OAB/PE 64.194 + foto.
- **Gatilho mental**: autoridade + confiança.
- **Posição justificada**: após solução/processo, o usuário está pronto para “quem é a pessoa por trás”.

### SEÇÃO 7 — Diferenciais (4 cards)
- **Objetivo**: vencer comparação com concorrentes (por que escolher você).
- **Conteúdo**: Contato, Atendimento Ágil, Transparência, Ética Profissional (textos literais) + CTA.
- **Gatilho mental**: segurança + confiança + redução de risco.
- **Posição justificada**: depois de saber “o que faz” e “quem é”, o visitante precisa de motivo decisivo.

### SEÇÃO 8 — Provas (nova, recomendada)
- **Objetivo**: aumentar conversão com evidência objetiva.
- **Conteúdo**: indicadores/selos/avaliações/casos (quando disponível) + CTA.
- **Gatilho mental**: prova social + autoridade.
- **Posição justificada**: antes do FAQ/contato, empurra indecisos para a ação.

### SEÇÃO 9 — FAQ
- **Objetivo**: remover objeções finais (dúvidas comuns).
- **Conteúdo**: 4 perguntas/respostas do site, em accordion, + CTA.
- **Gatilho mental**: clareza + segurança.
- **Posição justificada**: perto do final, quando o usuário está comparando e buscando “certezas”.

### SEÇÃO 10 — Contato (WhatsApp + formulário)
- **Objetivo**: converter (lead).
- **Conteúdo**: telefone, e-mail, redes, CTA WhatsApp, formulário com os campos existentes e botão `ENVIAR`.
- **Gatilho mental**: facilidade + ação.
- **Posição justificada**: fechamento direto da jornada; precisa ser simples e “sem pensamento”.

---

## 4) Seções obrigatórias a considerar (decisão)

- **Header fixo com navegação por âncoras**: **Recomendado**. Dá controle e reduz rolagem ansiosa; CTA sempre acessível.
- **Hero (primeira dobra)**: **Obrigatório**. Define relevância + CTA imediato.
- **Barra de credenciais / Prova rápida**: **Recomendado**. Hoje o site não tem, mas é um ganho enorme (OAB + “atua em todo Brasil” + sigilo + atendimento ágil).
- **Apresentação dos problemas (dores)**: **Recomendado**. O texto já aponta dor/urgência (“prazo curto”, “renda”, “refazer habilitação”).
- **Serviços oferecidos**: **Obrigatório**. Já existe forte e claro.
- **Como funciona o atendimento (passo a passo)**: **Recomendado**. Reduz objeção e aumenta confiança (alinha com “transparência”).
- **Sobre o advogado (história/autoridade/humanização)**: **Obrigatório**. A bio é um ativo de autoridade.
- **Casos resolvidos ou resultados**: **Recomendado (novo)**. Hoje não existe; faz diferença direta na conversão.
- **Depoimentos de clientes**: **Recomendado (novo)**. Hoje não existe; prova social é crítica nesse tipo de decisão.
- **FAQ**: **Obrigatório** (já existe).
- **CTA intermediário**: **Recomendado** (inserir após Seção 4 e/ou 7). Pega leads “quentes” sem exigir rolar até o fim.
- **Formulário de contato ou agendamento**: **Obrigatório** (já existe) + WhatsApp como canal principal.
- **Footer**: **Obrigatório** (contatos, redes, copyright e links legais).

### Novas seções sugeridas (para aumentar conversão)
- **Prova rápida (linha fina)**: OAB/PE + “Atuação nacional” + “Sigilo” + “Atendimento ágil”.
- **Provas (resultados/avaliações)**: números, prints de avaliações, ou “por que confiar”.
- **Objeções comuns (micro)**: “Precisa advogado?”, “prazo”, “posso continuar dirigindo?” (já no FAQ, mas com CTA ao lado).

---

## 5) Itens de navegação do header (âncoras)

### Menu (ordem e texto exato)
1. `Atuação`
2. `Casos urgentes`
3. `Como funciona`
4. `Sobre`
5. `FAQ`
6. `Contato`

### CTA principal do header (botão)
- **`Falar no WhatsApp`** (alternativa alinhada ao site atual: `Fale com um especialista`)

### Justificativa (incluído vs. deixado de fora)
- **Incluído**: itens que reduzem tempo até a resposta (“Atuação”, “Casos urgentes”) e itens que reduzem objeção (“Como funciona”, “Sobre”, “FAQ”), finalizando em ação (“Contato”).
- **Deixado de fora**: `Artigos Jurídicos` (blog) para evitar dispersão e manter o fluxo one-page focado em conversão.

---

## 6) Regras de layout e conteúdo por tipo de elemento

### Foto do advogado
- **Onde**: Hero (menor) + Seção Sobre (principal).
- **Objetivo**: humanização + confiança (“tem uma pessoa responsável por trás”).

### Imagens de apoio / ilustrações
- **Onde**: Dores (ícones/ilustração), Áreas de atuação (ícones por card), Casos urgentes (ícones), Como funciona (ícones por passo).
- **Objetivo**: escaneabilidade e leitura rápida.

### Ícones
- **Onde**: cards (serviços/diferenciais), passos (como funciona), barra rápida (credenciais).
- **Por quê**: aumenta entendimento em 2–3 segundos (essencial em urgência).

### Vídeo (se aplicável)
- **Recomendação**: opcional. Um vídeo curto (30–45s) na seção Sobre pode elevar confiança, mas só se for bem produzido (áudio claro, roteiro direto) — caso contrário, pode reduzir percepção de profissionalismo.

### Botões de CTA
- **Quantidade**: 1 CTA principal repetido (WhatsApp) + 1 secundário (Ver atuação/Como funciona).
- **Posições**: Hero, final de Áreas de atuação, dentro de cada card de Casos urgentes, após Diferenciais, no FAQ, e na seção Contato.
- **Textos**:
  - Primário: `Falar no WhatsApp` / `Fale com um especialista`
  - Secundário: `Ver áreas de atuação`

### Botão flutuante de WhatsApp
- **Deve existir**: **Sim**.
- **Posição**: canto inferior direito (desktop) e dentro de barra fixa (mobile).
- **Texto curto**: `WhatsApp` (com rótulo ao tocar/hover: `Fale com um especialista`).

---

## 7) Hierarquia de informação e fluxo de leitura (jornada)

```text
[Chegada] → Estado: ansiedade/urgência/medo de perder CNH + busca por solução rápida
[Seção 1 — Hero] → O visitante sente: “achei um especialista” + “posso falar agora”
[Seção 2 — Dores] → O visitante sente: “entenderam meu caso” + urgência validada
[Seção 3 — Atuação] → O visitante entende: “eles fazem exatamente o que preciso”
[Seção 4 — Casos urgentes] → O visitante percebe: “meu caso é tratável e preciso agir já”
[Seção 5 — Como funciona] → O visitante confia em: processo, clareza e transparência
[Seção 6 — Sobre] → O visitante confia em: autoridade pessoal (OAB/experiência) e compromisso
[Seção 7 — Diferenciais] → O visitante decide: “é a melhor opção”
[Seção 8 — Provas] → O visitante se convence: “não é promessa vazia”
[Seção 9 — FAQ] → O visitante resolve: últimas objeções
[Seção 10 — Contato] → O visitante age: WhatsApp ou formulário
```

- **Momento em que ele está pronto para contato**: após **Seção 3** (clareza) e principalmente após **Seção 4** (urgência). Por isso, CTAs intermediários são críticos.

---

## 8) Considerações para versão mobile (mobile-first)

### Regras gerais
- Header compacto com menu “hambúrguer” + **botão fixo** `WhatsApp`.
- Seções em **coluna única** (empilhadas), com textos curtos no topo e prova/CTA cedo.
- CTAs grandes (44px+), alto contraste, espaçamento generoso.

### Por seção (adaptação)
- **Hero**: imagem/foto vai **abaixo** do texto; CTA primário visível sem rolar.
- **Dores**: vira lista com ícones; CTA logo abaixo.
- **Áreas de atuação**: cards em 1 coluna (ou 2 em telas maiores); CTA após a grade.
- **Casos urgentes**: cards em carrossel leve (opcional) ou empilhados; cada card com CTA.
- **Como funciona**: passos em “timeline” vertical.
- **Sobre**: foto primeiro (ou ao lado em telas maiores), bio com quebras e CTA.
- **Diferenciais**: cards em 2 colunas (se couber) ou 1 coluna.
- **Provas/Depoimentos**: carrossel com 1 item por tela.
- **FAQ**: **accordion obrigatório**.
- **Contato**: WhatsApp acima do formulário; formulário com teclado correto (email/tel).

### CTA fixo no mobile (barra inferior)
- Barra com 1 botão grande: **`Falar no WhatsApp`** (principal).
- Opcional: segundo botão menor “Ligar” usando o telefone, se fizer sentido.

