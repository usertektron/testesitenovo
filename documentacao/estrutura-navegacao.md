# Estrutura de Navegação — Site Tektron

> **Data:** 2026-07-13  
> **Revisão técnica:** 2026-07-13  
> **Status:** validado pela Fernanda em 2026-07-15 (regra de
> Aplicações/Central de Conhecimento, rodapé e título institucional
> ajustados nesta validação) — estratégia e IA aprovadas; implementação
> segue bloqueada pelos itens da Seção 10 (lacunas e bloqueadores de
> publicação), não pela estratégia em si.  
> **Fontes internas:**
> 1. `Arquivos/Especificacoes/_matrizespecificacoes.ods` — fonte única: 19 modelos ativos; campo `familia` = taxonomia oficial.
> 2. `documento-canonico-site-tektron.md` (§10 terminologia, §11 arquitetura, §12 pilares, §16 reforma gradual).
> 3. `plano-organizacao.md` (§4 — copy pública, vocabulário de famílias, fonte única).
> 4. `arquitetura-site.md` (mapa palavras-chave × páginas, reaproveitamento de URLs).
>
> **Terminologia pública (compliance):** todo texto visível — títulos, H1,
> navegação, nomes de família e de produto, introduções e subtítulos — usa
> **“sensor de movimento”**. A expressão **“sensor de presença”** entra
> apenas em metadados (meta title/description), palavras-chave, FAQ
> (“também conhecido como”) e na equivalência da busca interna — decisão A1
> registrada no canônico §21.2 (2026-07-13). Não repetir como palavra-chave
> nem substituir a nomenclatura técnica oficial.
>
> **Nota de taxonomia:** o nome oficial da família na matriz é
> **“Ultrassônico”** — não “Ultrassom”.
>
> **Alvo de acessibilidade:** **WCAG 2.2 nível AA** e padrões aplicáveis do
> WAI-ARIA APG.

---

## 1. Navegação principal (header)

Menu enxuto: **4 itens + busca**.

```text
[Logo Tektron]   Produtos ▾   Suporte Técnico & Downloads   Institucional   Contato / Onde Comprar   [Busca]
```

A lupa, quando usada, é SVG; emoji não é ícone de interface.

| Item | Tipo | Destino |
|---|---|---|
| **Produtos** | mega-menu disclosure | painel com as 6 famílias e links de modelos |
| **Suporte Técnico & Downloads** | link direto | manuais, diagramas e especificações |
| **Institucional** | link direto | Nossa História (tagline: “Feito para durar.”) |
| **Contato / Onde Comprar** | link direto | WhatsApp, revendas e formulário mínimo |
| **Busca** | campo/botão | índice local tolerante a códigos, acentos, espaços, hífens e sinônimos controlados |

Nenhum item institucional ou de suporte fica a mais de **1 clique** da home;
nenhum produto, a mais de **2 cliques**: Produtos → modelo.

Nesta fase, os pilares **Aplicações** e **Central de Conhecimento** não
aparecem como itens independentes do menu principal, para manter a
navegação enxuta (Lei de Hick, canônico §7.5). Isso não é "nunca", é
"ainda não": como capturar quem busca por problema (“sensor para
garagem”, “sensor para escada”...) é parte central da estratégia de SEO
(canônico §12.3), os dois pilares precisam de links visíveis em locais
estratégicos — home, mega-menu de Produtos, rodapé e links internos —
para permanecerem descobríveis por usuários e por mecanismos de busca.
Quando atingirem massa crítica de conteúdo, são promovidos ao menu
principal.

### 1.1 Busca — requisitos funcionais

A existência do formulário não significa que a busca esteja implementada. A
funcionalidade só é considerada pronta quando cumprir os critérios abaixo:

- índice gerado da matriz e dos downloads, sem serviço externo pesado;
- normalização de maiúsculas/minúsculas e acentos;
- equivalência de código:
  - `BS50`, `bs-50` e `bs 50` → **BS-50**;
  - `MC1500` → **MC-1500**;
- sinônimos controlados:
  - “sensor de presença” → resultados de sensores de movimento;
  - “fotocélula” e “relé fotoelétrico” → mesma família;
  - “ultrassom” → família oficial Ultrassônico;
- tolerância limitada a erros simples, sem resultados absurdos;
- prioridade: código exato → nome/modelo → família → conteúdo técnico;
- página de “nenhum resultado” com sugestões úteis e link para contato;
- termo pesquisado preservado e visível no campo;
- funcionamento por teclado e leitor de tela;
- consultas não saem para terceiros, salvo necessidade real — e, nesse caso,
  a política de privacidade informa.

**Casos mínimos de teste:** `bs50`, `BS 50`, `sensor presença`, `fotocelula`,
`ultrassom`, `manual me60`, `minuteria` e uma busca sem resultado.

---

## 2. Mega-menu “Produtos”

### 2.1 Estrutura do painel

As quatro famílias de sensores ficam sob o guarda-chuva **Sensores de
Movimento**, que possui página-hub própria. Fotocélulas e Minuterias são
categorias irmãs.

A página-hub geral é uma prioridade estratégica de SEO e navegação, mas não
se deve registrar volume de busca como fato permanente sem informar
**ferramenta, país, período, tipo de correspondência e data da consulta**.

```text
┌─────────────────────────────────────────────────────────────────────────┐
│ SENSORES DE MOVIMENTO                       FOTOCÉLULAS    MINUTERIAS    │
│ ├─ Infravermelho (agrupado por instalação)  ├─ FC-10       └─ MC-1500    │
│ ├─ Infravermelho Compacto                    └─ FC-15                      │
│ ├─ Doppler                                                               │
│ └─ Ultrassônico                                                          │
│                                                                          │
│ [futuro] Por aplicação: Garagem · Escada · Corredor · ...               │
└─────────────────────────────────────────────────────────────────────────┘
```

Regras:

- cada família é link para seu hub;
- modelos são links diretos para páginas de produto;
- os dez infravermelhos ficam agrupados por instalação; não usar lista plana;
- rótulos no menu são curtos; detalhes completos ficam na página do produto;
- não há botão de compra no mega-menu;
- o painel usa headings reais: um `<h2>` oculto visualmente e um `<h3>` por
  família/grupo relevante;
- sem JavaScript, os links essenciais continuam acessíveis por fallback em
  fluxo normal ou página de produtos — o conteúdo não pode desaparecer.

### 2.2 Páginas-hub de categoria

| Página-hub | H1 público | URL | Situação |
|---|---|---|---|
| Sensores de Movimento | Sensores de Movimento | `/sensores-de-movimento` *(proposta)* | a criar — prioridade |
| Infravermelho | Sensores de Movimento Infravermelho | `/produto/sensor-movimento-infravermelho.html` | existe; falta conteúdo |
| Infravermelho Compacto | Sensores de Movimento Infravermelho Compactos | `/sensores-de-movimento/infravermelho-compacto` *(proposta)* | a criar |
| Doppler | Sensores de Movimento Doppler | `/sensores-de-movimento/doppler` *(proposta)* | a criar |
| Ultrassônico | Sensores de Movimento Ultrassônicos | `/produto/sensor-movimento-ultrassonico.html` | existe; consolidar `/modelo6_ultrassom.html` com 301 |
| Fotocélulas | Fotocélulas — Relés Fotoelétricos | consolidar `/modelo7_fotocelula.html` e `/produto/rele-fotoeletrico.html` | reaproveitar com 301 |
| Minuterias | Minuterias | semente: `/modelo8_automacao.html` | reaproveitar com 301 |

URLs propostas dependem da coluna `slug` na matriz e não devem ser publicadas
antes de serem fixadas na fonte única.

Cada hub responde, nesta ordem:

1. o que é;
2. como funciona;
3. quando usar;
4. limitações reais;
5. modelos disponíveis;
6. como escolher;
7. FAQ.

O esclarecimento “também conhecido no mercado como sensor de presença” vive
no bloco de FAQ do hub e nos metadados — nunca na introdução visível
(decisão A1, canônico §21.2). É linguagem do usuário, não mudança de
taxonomia.

### 2.3 Distribuição dos 19 modelos ativos

#### Infravermelho — 10 modelos

| Grupo no menu | Código | Rótulo curto |
|---|---|---|
| Caixa 4×2 | BS-40 | BS-40 — caixa 4×2 |
| Caixa 4×2 | MI-400 | MI-400 — 4×2, até 12 min |
| Caixa 4×2 | SR-03 | SR-03 — 4×2, chave 3 posições |
| Embutir no forro | STI-550 | STI-550 — embutir no forro |
| Teto | BS-50 | BS-50 — teto, sobrepor |
| Teto | MI-500 | MI-500 — teto, até 12 min |
| Parede | BS-70 | BS-70 — parede, 12 m |
| Parede | MI-700 | MI-700 — parede, até 12 min |
| Uso externo | ME-60 | ME-60 — externo, parede/poste/teto coberto |
| Uso externo | ME-70 | ME-70 — externo, parede/poste |

#### Infravermelho Compacto — 2 modelos

| Código | Rótulo curto |
|---|---|
| CS-5 | CS-5 — compacto, teto/parede |
| TC-5 | TC-5 — super compacto |

#### Doppler — 2 modelos

| Código | Rótulo curto |
|---|---|
| TKR | TKR — 360°, alta sensibilidade |
| TKT | TKT — 360°, carga baixa |

A afirmação “detecta através de paredes finas” está confirmada na matriz
(coluna `destaques` do TKR, conferido em 2026-07-13); na página, deve vir
acompanhada da limitação de uso.

#### Ultrassônico — 2 modelos

| Código | Rótulo curto |
|---|---|
| MU-500 | MU-500 — ambientes até 15 m² |
| MU-600 | MU-600 — até 15 m², fotocélula |

#### Fotocélula — 2 modelos

| Código | Rótulo curto |
|---|---|
| FC-10 | FC-10 — relé fotoelétrico compacto |
| FC-15 | FC-15 — relé fotoelétrico 15 A |

#### Minuteria — 1 modelo

| Código | Rótulo curto |
|---|---|
| MC-1500 | MC-1500 — minuteria coletiva |

As páginas de produto usam `url_produto` da matriz, por exemplo:
`/produto/sensor-de-movimento-infravermelho-bs-50.html`.

### 2.4 Conferência de contagem

| Família | Modelos |
|---|---:|
| Infravermelho | 10 |
| Infravermelho Compacto | 2 |
| Doppler | 2 |
| Ultrassônico | 2 |
| Fotocélula | 2 |
| Minuteria | 1 |
| **Total** | **19** |

### 2.5 Comportamento no desktop

- “Produtos” é botão disclosure com `aria-expanded` e `aria-controls`.
- Clique, Enter ou Espaço abre/fecha.
- `Esc` fecha e devolve o foco ao botão.
- Clique fora fecha.
- Quando o foco sai do botão e do painel, o painel fecha.
- Selecionar um link fecha antes da navegação.
- Hover pode alterar aparência, mas não é o único modo de abrir.
- O painel não prende o foco; `Tab` continua a sequência normal da página.
- Mudança de breakpoint fecha estados incompatíveis para evitar menu invisível
  ainda marcado como aberto.

---

## 3. Suporte Técnico & Downloads

Página única, escaneável, sem cadastro:

1. busca por código;
2. tabela por modelo: código, família, manual, diagrama e especificações;
3. FAQ técnico;
4. contato como fallback quando o documento não existir.

A tabela deve distinguir claramente:

- **Disponível** — link real;
- **Em preparação** — texto sem link;
- **Não se aplica** — `—` com explicação quando necessário.

Os PDFs serão gerados por `gerar-especificacoes.py`, ainda a criar. Hoje há
apenas o piloto do BS-50. A página pode ser publicada de forma gradual, mas
não pode mostrar links quebrados ou botões falsos.

---

## 4. Institucional

Página: **Nossa História**

- H1: Nossa História
- Subtítulo/tagline: Feito para durar.

H1 identifica a página; a tagline carrega a personalidade de marca —
juntar as duas funções num título só piora acessibilidade, SEO e clareza
para o usuário.

Conteúdo permitido:

- história verificável;
- fabricante brasileiro;
- tempo de mercado com data/fonte interna;
- fotos reais;
- razão social, CNPJ, cidade e canais oficiais;
- responsáveis técnicos ou autoria quando houver base real.

Esses elementos são **identificação institucional e sinais de confiança**.
E-E-A-T é um conceito de avaliação de qualidade do Google, não uma obrigação
legal nem um selo de conformidade.

Não usar prova social, número de clientes, certificação ou prêmio sem fonte.

---

## 5. Contato / Onde Comprar

Uma página, três caminhos:

1. **WhatsApp** — ação primária no mobile;
2. **Onde comprar** — revendas verificadas ou orientação honesta;
3. formulário mínimo: nome, e-mail e mensagem.

O formulário deve ter:

- labels visíveis;
- mensagens de erro associadas aos campos;
- confirmação clara de envio;
- proteção antiabuso que não dependa apenas de CAPTCHA visual;
- política de privacidade coerente com os dados coletados.

O `smtpform.php` legado permanece congelado; a solução nova o substitui.
Nunca publicar `wa.me/seu-numero-aqui` ou outro placeholder.

---

## 6. Acessibilidade — navegação e menu

Padrão desktop: **disclosure navigation** do WAI-ARIA APG, não
`role="menubar"`.

### 6.1 Marcação

- `<nav aria-label="Principal">` com `<ul>`.
- botão Produtos com `aria-expanded` e `aria-controls`.
- painel identificado e associado ao botão.
- `<h2>` visualmente oculto para o painel e `<h3>` reais para famílias.
- skip link como primeiro elemento focável.
- `aria-current="page"` no link atual.
- headings reais também no rodapé; não usar `<span>` como falso título.
- ícones decorativos usam `aria-hidden="true"`; o nome acessível está no
  botão ou link.

### 6.2 Teclado

| Tecla/ação | Comportamento |
|---|---|
| `Tab` / `Shift+Tab` | percorre controles em ordem lógica |
| Enter/Espaço no botão | abre ou fecha |
| `Esc` | fecha e devolve foco ao acionador |
| foco sai do conjunto | fecha o painel desktop |
| clique fora | fecha o painel desktop |

### 6.3 Foco, alvos e reflow

- `outline: 3px solid #FAEE1E; outline-offset: 2px`; em fundos claros, anel
  interno grafite adicional (indicador bicolor — ver diretrizes-visuais §1).
- não remover `outline`.
- foco não pode ficar oculto por header, painel ou aviso.
- alvo recomendado Tektron: ≥ 44×44 px; hambúrguer ≥ 48×48 px.
- cumprir WCAG 2.2 AA, inclusive tamanho mínimo de alvo nas exceções
  aplicáveis, reflow e contraste não textual.
- testar a 320 CSS px e com zoom de 200% e 400%.

---

## 7. Mobile

Padrão: **hambúrguer + diálogo modal + acordeões**.

- Preferir `<dialog>` nativo aberto com `showModal()`, com implementação
  progressiva e testes nos navegadores-alvo.
- Botão “Menu” possui `aria-expanded`, `aria-controls` e alvo ≥ 48×48 px.
- Ao abrir:
  - foco vai para o título ou primeiro controle útil;
  - conteúdo de fundo não recebe foco/interação;
  - há botão “Fechar” visível;
  - `Esc` fecha;
  - ao fechar, foco retorna ao botão Menu.
- Dentro do diálogo:
  - Sensores de Movimento expande as quatro famílias;
  - cada família expande os modelos;
  - Fotocélulas e Minuterias expandem diretamente;
  - apenas uma seção por nível permanece aberta;
  - nome da família navega para o hub e chevron separado expande;
  - cada área interativa possui alvo ≥ 44 px.
- Suporte, Institucional e Contato ficam como links simples abaixo.
- O corpo da página não rola enquanto o diálogo está aberto; o diálogo pode
  rolar internamente.
- Não usar drawer multinível que esconda contexto nem mega-menu desktop
  comprimido em tela pequena.

---

## 8. Breadcrumbs, SEO técnico e dados estruturados

### 8.1 Breadcrumbs

Todas as páginas, exceto a home, exibem breadcrumb real e clicável:

```text
Início > Sensores de Movimento > Infravermelho > BS-50
```

- usar `<nav aria-label="Breadcrumb">` e lista ordenada;
- item atual não precisa ser link;
- adicionar `BreadcrumbList` em JSON-LD coerente com o breadcrumb visível.

### 8.2 Metadados e indexação

Cada URL publicada exige:

- `<title>` único;
- meta description específica;
- canonical correto;
- H1 único e coerente com a intenção da página;
- Open Graph básico;
- inclusão no sitemap XML;
- status HTTP correto;
- página 404 útil;
- mapa documentado de redirecionamentos 301 para URLs consolidadas.

Não publicar URLs propostas antes de definir slugs e redirecionamentos.

### 8.3 Dados estruturados

- Home: `Organization` e, se adequado, `WebSite`.
- Páginas internas: `BreadcrumbList`.
- Produto: `Product` com nome, imagem, descrição, marca, SKU/modelo e categoria
  somente quando os dados forem reais.
- Não incluir `Offer`, estoque, preço, avaliação ou `aggregateRating` sem fonte
  pública e atualização confiável.
- Dados estruturados devem corresponder ao conteúdo visível; não servem para
  inserir afirmações que a página não mostra.

### 8.4 Conteúdo e palavras pesquisadas

- escrever primeiro para eletricistas, instaladores, compradores e usuários;
- usar códigos e linguagem real do mercado;
- não repetir “sensor de presença” artificialmente;
- registrar qualquer volume de busca com fonte, local, período e data;
- decisões permanentes de arquitetura não dependem de um único número de uma
  ferramenta de SEO.

---

## 9. Rodapé

Quatro colunas no desktop, empilhadas no mobile:

```text
┌──────────────────────────────────────────────────────────────────────┐
│ PRODUTOS              SUPORTE                    EMPRESA            │
│ Sensores de Movimento Downloads e manuais         Nossa História    │
│ · Infravermelho       FAQ técnico                 Contato/Onde Comprar│
│ · Infrav. Compacto    Especificações               WhatsApp          │
│ · Doppler             Central de Conhecimento                       │
│ · Ultrassônico                                                       │
│ Fotocélulas           POLÍTICAS                                     │
│ Minuterias            Política de Privacidade                       │
│ Aplicações            Termos de Uso                                 │
├──────────────────────────────────────────────────────────────────────┤
│ Tektron Montagem e Comércio de Aparelhos Eletrônicos Ltda           │
│ CNPJ 57.465.874/0001-31 · Indústria Brasileira · São Paulo/SP       │
└──────────────────────────────────────────────────────────────────────┘
```

Aplicações e Central de Conhecimento entram no rodapé assim que as
páginas correspondentes existirem — mesma condição do item abaixo sobre
políticas (ver §1: descobribilidade dos dois pilares antes de virarem
item de menu).

- títulos das colunas são headings reais;
- `<nav aria-label="Rodapé">` separado da navegação principal;
- identificação institucional aparece em todas as páginas;
- políticas só recebem link quando a página existir;
- não chamar essa linha de “compliance E-E-A-T”.

---

## 10. Lacunas e bloqueadores de publicação

1. número oficial de WhatsApp;
2. lista de revendas e critérios de atualização;
3. endereço institucional completo, se for publicado;
4. texto e fotos da página Nossa História;
5. Política de Privacidade e Termos de Uso;
6. colunas `slug`, `seo_titulo`, `seo_descricao` e termos de busca na matriz;
7. `gerar-especificacoes.py` e PDFs por modelo;
8. índice/mecanismo real da busca;
9. mapa completo de URLs antigas → URLs finais com 301;
10. logo SVG final, incluindo **variante clara oficial para o header
    grafite** (o logo oficial contém elementos pretos; até a variante
    existir, ele é aplicado sobre uma área branca discreta no header);
11. fonte e data de qualquer volume de pesquisa citado;
12. conteúdo técnico que confirme afirmações sensíveis (a detecção através
    de paredes finas do TKR já está confirmada na matriz, coluna `destaques`);
13. implementação mobile completa — não apenas o botão hambúrguer;
14. testes de teclado, foco, reflow e contraste antes da publicação.

Nenhum placeholder, link vazio, política inexistente ou funcionalidade apenas
visual pode chegar à produção.

---

## 11. Critérios de aceite do protótipo

O protótipo só passa para produção quando:

- mega-menu está agrupado por instalação;
- desktop funciona por clique, teclado, `Esc`, foco fora e clique fora;
- mobile usa diálogo acessível e devolve o foco corretamente;
- todos os links e URLs retornam destino válido;
- busca passa pelos casos da seção 1.1;
- não há rolagem horizontal da página em 320 CSS px;
- zoom de 200% e 400% não corta controles ou conteúdo;
- foco permanece visível e não oculto;
- `prefers-reduced-motion` é respeitado;
- HTML não contém emoji de interface, logo temporário ou placeholders;
- título, description, canonical, breadcrumb e JSON-LD estão coerentes;
- páginas de produto não inventam preço, estoque ou avaliação;
- testes manuais são feitos em Chrome e Firefox desktop e no Chrome Android
  em aparelho real, incluindo o Galaxy Note 10;
- validação automática complementa, mas não substitui, testes manuais;
- metas de Core Web Vitals são verificadas após publicação com dados reais.

---

## 12. Referências técnicas oficiais

- W3C — WCAG 2.2:  
  <https://www.w3.org/TR/WCAG22/>
- WAI-ARIA APG — Disclosure Navigation:  
  <https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/>
- WAI-ARIA APG — Modal Dialog:  
  <https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/>
- Google Search Central — Helpful, reliable, people-first content:  
  <https://developers.google.com/search/docs/fundamentals/creating-helpful-content>
- Google Search Central — Breadcrumb structured data:  
  <https://developers.google.com/search/docs/appearance/structured-data/breadcrumb>
- Google Search Central — Product structured data:  
  <https://developers.google.com/search/docs/appearance/structured-data/product-snippet>
