# Diretrizes Visuais — Site Tektron

> **Data:** 2026-07-13  
> **Revisão técnica:** 2026-07-13  
> **Status:** validado pela Fernanda em 2026-07-15 (direção estética,
> raio/sombra, "nunca faz" e tipografia ajustados nesta validação) —
> pronto para orientar implementação em HTML/CSS.  
> **Complementa:** `estrutura-navegacao.md` (arquitetura de informação) e o
> `documento-canonico-site-tektron.md` (§7 UX, §9 personalidade, §17.2 design).  
> **Alvo de acessibilidade:** **WCAG 2.2 nível AA**. O alvo interno pode superar
> o mínimo quando isso melhorar uso por toque, teclado ou baixa visão.
>
> **Direção:** hardware elétrico robusto, fabricante de verdade —
> **anti-template de startup**, sem virar austeridade sem personalidade.
> Sem aparência de Bootstrap/template, glassmorphism, neomorphism, hero
> vazio, carrossel automático ou pop-up invasivo — ver §9.1. Gradientes,
> sombras, animações e cantos maiores que o padrão não são proibidos por
> definição: entram quando tiverem função clara de hierarquia, qualidade
> percebida, identidade de marca ou usabilidade, sempre discretos e
> consistentes — ver §9.2. A estética serve à informação técnica (canônico
> §5: estética é o último critério da ordem de prioridade), mas isso não é
> motivo para abrir mão de personalidade.
>
> **Princípio de identidade:** o objetivo do design não é apenas evitar um
> visual genérico — é construir uma identidade imediatamente reconhecível
> como Tektron. Toda decisão visual deve contribuir para que o visitante
> reconheça a marca sem depender exclusivamente do logotipo.

---

## 1. Paleta

Semântica ancorada na identidade física do produto: o vermelho é o do logo e
associa-se ao **fio Fase**; o amarelo é o da **elipse do logo**. Os valores
abaixo são as cores reais do logo, conferidas nos SVGs oficiais da marca
(`Arquivos/_Recursos/Marca/Logo.svg` e `Logo_feitoparadurar.svg`) em
2026-07-13. *(Revisão 2026-07-13: os hex anteriores, `#D32F2F` e `#FFD54F`,
divergiam do logo e foram corrigidos.)*

### Tokens oficiais

```css
--cor-marca-vermelho: #E10000;
--cor-marca-amarelo: #FAEE1E;
--cor-grafite: #1E2229;
--cor-fundo: #FFFFFF;
--cor-fundo-tecnico: #F4F5F7;
```

Tokens derivados (hover, bordas, realces, texto secundário sobre grafite)
vivem em `/css/global.css` e derivam destes cinco.

| Cor | Hex | Papel | Onde usar | Onde NÃO usar |
|---|---|---|---|---|
| Grafite Escuro | `#1E2229` | estrutura | fundo do header, mega-menu e rodapé; texto principal sobre fundos claros | fundo de blocos longos de leitura |
| Branco | `#FFFFFF` | conteúdo | fundo padrão; texto sobre grafite e vermelho | — |
| Cinza Técnico | `#F4F5F7` | apoio | zebra de tabelas, fundos alternados, cards de download | texto |
| Vermelho da Marca | `#E10000` | ação | CTA primário (texto branco); texto de ação sobre Branco ou Cinza Técnico quando atingir AA | texto corrido; texto normal sobre grafite (≈ 3,19:1, reprovado); dois CTAs vermelhos disputando a mesma dobra |
| Vermelho Escuro | `#B71C1C` | interação/erro | hover do CTA; mensagem de erro acompanhada de texto e ícone | áreas extensas ou decoração |
| Amarelo da Marca | `#FAEE1E` | foco/estado | anel de foco, marcador ativo e realce sobre grafite | texto ou ícone sobre Branco ou Cinza Técnico; fundo de texto branco |

### Contrastes verificados — WCAG 2.2

Valores calculados pela fórmula de contraste WCAG, arredondados a duas casas:

| Combinação | Razão | Veredito |
|---|---:|---|
| Branco sobre Grafite `#1E2229` | ≈ 15,96:1 | AAA — header/rodapé |
| Grafite sobre Branco | ≈ 15,96:1 | AAA — texto padrão |
| Grafite sobre Cinza Técnico | ≈ 14,63:1 | AAA — tabelas/cards |
| Branco sobre Vermelho `#E10000` | ≈ 5,00:1 | AA — CTA |
| Branco sobre Vermelho Escuro `#B71C1C` | ≈ 6,57:1 | AA — hover do CTA |
| Vermelho sobre Branco | ≈ 5,00:1 | AA — link de ação |
| Vermelho sobre Cinza Técnico | ≈ 4,58:1 | AA — no limite; preferir peso 600 ou tamanho grande |
| Vermelho sobre Grafite | ≈ 3,19:1 | **reprovado para texto normal** |
| Amarelo `#FAEE1E` sobre Grafite | ≈ 13,16:1 | AAA — foco/estado no header |
| Grafite sobre Amarelo | ≈ 13,16:1 | AAA — realce eventual |
| Amarelo sobre Branco | ≈ 1,21:1 | **proibido para informação** |
| Amarelo sobre Cinza Técnico | ≈ 1,11:1 | **proibido para informação** |

**Regra prática:** texto de leitura usa grafite ou branco. Vermelho e amarelo
comunicam ação ou estado e nunca são o único meio de transmitir significado.
Em fundos claros, o indicador de foco é **bicolor**: anel amarelo com
contraste adicional grafite (anel interno), porque o amarelo sozinho não
atinge 3:1 sobre Branco nem sobre Cinza Técnico. Erro, aviso e sucesso devem
incluir texto explícito e, quando útil, ícone SVG.

---

## 2. Tipografia

- **Fonte padrão atual: Inter**, variável, auto-hospedada em WOFF2, sem
  CDN — uma das melhores opções para interface hoje (legibilidade,
  renderização, peso leve, acessibilidade), mas não é trava definitiva.
  Qualquer substituição futura deve demonstrar ganho mensurável em
  legibilidade, identidade de marca, desempenho ou acessibilidade, e
  manter os mesmos requisitos técnicos: auto-hospedada, variável, WOFF2,
  sem dependência de CDN.
- Fallback:
  `font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;`
- Declarar `font-display: swap` no `@font-face`.
- Gerar subconjunto latino e carregar somente eixos/pesos realmente usados.
- Fazer preload apenas do arquivo crítico acima da dobra; não carregar várias
  fontes preventivamente.
- **Números tabulares** em tabelas e especificações:
  `font-variant-numeric: tabular-nums;`.
- **Pesos:** 400 para texto, 600 para subtítulos/rótulos e 700 para H1/H2/CTA.
  Não usar pesos 100–300 nem itálico decorativo.

### Escala tipográfica

| Papel | Tamanho | Peso | Observação |
|---|---:|---:|---|
| H1 | `2rem` / 32 px | 700 | um por página |
| H2 | `1.5rem` / 24 px | 700 | seções |
| H3 | `1.25rem` / 20 px | 600 | famílias e subseções |
| Corpo | `1rem` / 16 px | 400 | `line-height: 1.6` |
| Tabela/spec | `0.9375rem` / 15 px | 400 | `line-height: 1.5`; números tabulares |
| Legenda/meta | `0.875rem` / 14 px | 400 | mínimo absoluto; contraste AA |

- Parágrafos: `max-width: 70ch`.
- Códigos de produto, como **BS-50** e **MC-1500**, usam peso 600 na mesma
  família; não adicionar fonte monoespaçada só para códigos.
- Texto deve continuar legível com zoom de 200% e espaçamento personalizado,
  sem corte, sobreposição ou perda de conteúdo.

---

## 3. Layout, espaçamento e camadas

### 3.1 Contêiner

- Largura máxima estrutural: `75rem` / 1200 px.
- Texto longo continua limitado a `70ch` dentro do contêiner.
- Margens laterais:
  - até 47,99 rem: `1rem`;
  - 48–63,99 rem: `1.5rem`;
  - a partir de 64 rem: `2rem`.
- A página nunca deve criar rolagem horizontal em 320 CSS px de largura.

### 3.2 Escala de espaçamento

Usar apenas a escala abaixo, salvo necessidade técnica documentada:

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 px`

- Espaçamento interno de componentes: 8–24 px.
- Distância entre blocos relacionados: 16–24 px.
- Distância entre seções: 48–64 px.

### 3.3 Breakpoints

Pontos iniciais, ajustáveis quando o conteúdo quebrar — não por marca de aparelho:

| Token | Valor | Uso inicial |
|---|---:|---|
| `--bp-md` | `48rem` / 768 px | tabelas, grid intermediário |
| `--bp-lg` | `64rem` / 1024 px | navegação desktop/mega-menu |
| `--bp-xl` | `80rem` / 1280 px | telas largas sem aumentar texto indefinidamente |

### 3.4 Camadas (`z-index`)

| Camada | Valor |
|---|---:|
| conteúdo normal | `0` |
| header fixo, se adotado | `10` |
| mega-menu desktop | `20` |
| overlay mobile | `30` |
| diálogo mobile | `40` |
| mensagens críticas temporárias | `50` |

Não criar valores arbitrários como `9999`.

---

## 4. Formas e componentes

- **Raio padrão: 4 px** em botões, cards, campos e tabelas. Componentes
  específicos podem usar raio maior quando houver justificativa funcional
  ou de identidade visual, mantendo consistência com o resto do sistema —
  ver §9.2.
- **Bordas como elemento estrutural principal:** `1px solid rgb(30 34 41 / 15%)`.
- Sombra é permitida quando tiver função clara (ex.: separar o mega-menu
  flutuante do conteúdo) — sempre discreta, neutra e sem glow. Mesmo
  critério de §9.2 vale para qualquer outro uso de sombra.

### 4.1 Botões e links

- Primário: fundo `#E10000`, texto branco 700, raio 4 px.
- Secundário: branco, borda grafite, texto grafite.
- Altura/alvo interno recomendado: **mínimo 44×44 px**. Essa é a meta de
  conforto da Tektron; o requisito AA de tamanho de alvo da WCAG 2.2 é menor
  em certas condições, mas não deve ser usado como desculpa para controles
  apertados.
- Hover do primário: `#B71C1C`; nunca escala, bounce ou deslocamento.
- Foco: `outline: 3px solid #FAEE1E; outline-offset: 2px`; em fundos claros,
  acrescentar anel interno grafite (`box-shadow: 0 0 0 2px #1E2229`) —
  indicador bicolor, porque o amarelo sozinho não atinge 3:1 sobre fundo
  claro (ver §1).
- Um CTA primário por seção.
- Links em texto corrido são sublinhados; não dependem apenas da cor.
- Ícones de ação sempre possuem nome acessível no controle ou texto adjacente.

### 4.2 Campos e mensagens

- Campo com label visível; placeholder é exemplo, não substitui o label.
- Altura mínima de 44 px; borda grafite; foco amarelo.
- Erro: borda/vermelho escuro + mensagem textual vinculada com
  `aria-describedby`; usar `aria-invalid="true"` quando aplicável.
- Sucesso e aviso: texto explícito e ícone; nunca apenas mudança de cor.
- Botão desabilitado deve parecer indisponível, mas preservar contraste do
  rótulo; não usar somente opacidade muito baixa.

### 4.3 Cards e downloads

- Card é um agrupamento, não decoração. Deve ter título, conteúdo útil e ação
  clara.
- Não tornar todo o card clicável quando houver múltiplas ações internas.
- Downloads informam formato e, quando disponível, tamanho do arquivo:
  `Manual (PDF, 1,2 MB)`.

---

## 5. Tabelas técnicas em primeiro lugar

A tabela de especificações é o componente nobre do site:

- Cabeçalho grafite, texto branco 600.
- Linhas zebradas em Branco e Cinza Técnico.
- Sem bordas verticais internas; divisórias horizontais sutis.
- Números tabulares à direita; texto à esquerda.
- Unidade permanece na célula: `200 W / 127 V`.
- Valor ausente é `—`, nunca célula vazia.
- Usar `<caption>` descritivo e cabeçalhos `<th scope="col">` ou
  `<th scope="row">` conforme a estrutura.
- Não usar tabela para layout.
- **Mobile:**
  - tabela comparativa pode rolar horizontalmente dentro do próprio contêiner;
  - o contêiner recebe indicação visual e textual de que há mais colunas;
  - a página não rola lateralmente;
  - em especificação de um único produto, preferir lista empilhada
    `rótulo + valor` quando isso for mais legível.
- Cabeçalho `sticky` só permanece se testes confirmarem que não oculta o foco
  nem reduz excessivamente a área útil.
- Todo dado vem de `_matrizespecificacoes.ods`; nenhum valor técnico é digitado
  manualmente no HTML.

### Impressão

- Criar `@media print` para remover header, navegação, CTAs e elementos não
  essenciais.
- Manter logo, título do produto, tabela, data/versão e identificação da
  empresa.
- Evitar quebra de linha entre rótulo e valor; repetir cabeçalho de tabela
  quando o navegador suportar.

---

## 6. Imagens e ícones

- Foto real do produto em fundo branco ou Cinza Técnico, com ângulo e luz
  consistentes.
- Nada de mockup 3D genérico ou banco de imagem de pessoas sorrindo para
  lâmpadas.
- Definir `width` e `height` ou `aspect-ratio` para impedir mudança de layout.
- Imagem principal de produto: proporção preferencial 1:1; usar `object-fit:
  contain` para não cortar o equipamento.
- Usar `srcset`/`sizes`, WebP ou AVIF quando houver ganho real, mantendo
  fallback adequado.
- Imagem acima da dobra não usa lazy loading; imagens abaixo podem usar
  `loading="lazy"`.
- Texto alternativo descreve o produto/ângulo quando a imagem acrescenta
  informação. Imagem puramente decorativa usa `alt=""`.
- Ícones são SVG simples, monocromáticos e consistentes. **Emoji não é ícone
  de interface.**
- Logo final deve ser SVG real; texto temporário “TEKTRON” não é substituto de
  produção.
- **Dependência de marca:** o logo oficial contém elementos pretos e não
  funciona sobre o header grafite. Criar uma **variante clara oficial** é
  decisão de marca — nunca recolorir nem redesenhar o SVG automaticamente.
  Até a variante existir, aplicar o logo oficial sobre uma área branca
  discreta no header.

---

## 7. Aplicação por região

| Região | Fundo | Texto | Detalhes |
|---|---|---|---|
| Header + mega-menu | Grafite | Branco | item ativo e foco em Amarelo |
| Conteúdo | Branco | Grafite | Cinza Técnico apenas para ritmo |
| Tabelas | Branco + zebra Cinza | Grafite | cabeçalho grafite/branco |
| CTA primário | Vermelho | Branco | um por seção |
| Rodapé | Grafite | Branco | identificação institucional em 14 px |

Espaço em branco é parte do design. Não preencher áreas vazias com selo,
badge, ícone ou texto sem função.

---

## 8. Acessibilidade e desempenho como requisitos de design

- Conformidade-alvo: **WCAG 2.2 AA**.
- O foco nunca pode ficar escondido por header fixo, mega-menu, aviso ou
  rodapé sobreposto.
- Toda ação funciona com teclado, toque e ponteiro; não depender de hover.
- Respeitar `prefers-reduced-motion: reduce`.
- Não bloquear zoom no `viewport`.
- Testar contraste de texto e também contraste não textual de bordas,
  controles e indicadores de foco.
- Metas de Core Web Vitals no percentil 75, mobile e desktop:
  - LCP ≤ 2,5 s;
  - INP ≤ 200 ms;
  - CLS ≤ 0,1.
- Evitar bibliotecas pesadas para componentes que HTML, CSS e JavaScript
  simples resolvem.
- JavaScript deve aprimorar a página; conteúdo essencial e links não podem
  desaparecer definitivamente quando ele falhar.

---

## 9. Identidade visual: o que evitamos e o que abrimos com critério

### 9.1 Nunca faz

- Aparência de Bootstrap ou template genérico de prateleira.
- Glassmorphism, neomorphism, blobs, partículas ou dark mode decorativo.
- Hero vazio — tela cheia com frase abstrata sem informação.
- Carrossel automático.
- Pop-up intrusivo antes de o usuário entender a página.
- Ícones emoji ou ilustração flat genérica de pessoas.
- Tipografia display “criativa”.
- Contadores, selos, avaliações ou números sem fonte verificável.
- Banner de cookies genérico quando não houver tecnologia que exija
  consentimento; privacidade deve refletir o que o site realmente coleta.

Bordas seguem como elemento estrutural principal (§4); o visual permanece
limpo e técnico, com prioridade para conteúdo e usabilidade (canônico §5).

### 9.2 Recursos com critério, não proibição

Gradientes, sombras, animações e outros recursos visuais não são
proibidos por definição. Podem ser usados quando tiverem função clara de
reforçar hierarquia, percepção de qualidade, identidade da marca ou
usabilidade — desde que permaneçam discretos, consistentes e alinhados à
identidade técnica da Tektron.

O risco a evitar não é só o "visual de startup genérica": é também o
extremo oposto, um site tecnicamente correto mas austero a ponto de não
ter personalidade nenhuma. Ver o Princípio de Identidade no cabeçalho
deste documento.

---

## 10. Referências técnicas oficiais

- W3C — Web Content Accessibility Guidelines (WCAG) 2.2:  
  <https://www.w3.org/TR/WCAG22/>
- WAI-ARIA Authoring Practices Guide:  
  <https://www.w3.org/WAI/ARIA/apg/>
- web.dev — Core Web Vitals:  
  <https://web.dev/articles/vitals>
