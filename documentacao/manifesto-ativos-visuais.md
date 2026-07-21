# Manifesto de Ativos Visuais — Páginas de Aplicações

> Documento vivo: começa pela página `aplicacoes/caixa-4x2.html`; as
> páginas `teto.html` e `externo.html` já estão implementadas abaixo. As
> próximas páginas de Aplicações (grandes-ambientes, minuterias) entram
> aqui conforme forem implementadas.
>
> Papel deste documento: especificação técnica para produção de ativos
> visuais por outra IA (ou fotografia real). Não é a etapa de integração —
> nenhum arquivo `<img>`/`<picture>` foi inserido no HTML ainda.
> Fontes: `Arquivos/Especificacoes/_matrizespecificacoes.ods` (abas
> `Especificacoes` e `aplicacao`), `css/global.css`, `css/home.css`,
> `aplicacoes/caixa-4x2.html`, `Arquivos/Midia/*` (conferido: BS-40,
> MI-400 e SR-03 não têm nenhum arquivo ainda).
>
> **Cópia espelhada:** `Gestao/03_Empresa/Marketing/Site/manifesto-ativos-visuais.md`
> (mesmo padrão do `documento-canonico-site-tektron.md`). Este arquivo em
> `Arquivos/Site/site_novo/documentacao/` é o original — toda edição
> acontece aqui primeiro, e a cópia da Gestao é atualizada logo em
> seguida. Uma cópia antiga e não sincronizada (congelada em 2026-07-17,
> só com a seção da `caixa-4x2.html`) foi movida para
> `Gestao/_DESCARTAR/manifesto-ativos-visuais_stale-2026-07-17-1611.md`.

---

# Ativos Compartilhados entre Páginas

Ativos cujo conteúdo técnico é idêntico em mais de uma página não geram
arquivos duplicados — usam um único arquivo físico, referenciado por
códigos de manifesto distintos em cada página (ex.: CX06, TT11 e EX09
apontam para o mesmo arquivo). Registrado aqui para não se perder quando
o documento crescer.

## Diagrama: ligação elétrica, 3 fios, 127 V / 220 V

- **Nome do arquivo:** `ligacao-3-fios-127-220.svg`
- **Caminho:** `assets/images/diagramas/ligacao-3-fios-127-220.svg`
  (fora das pastas por página, pois é um ativo transversal compartilhado
  por caixa 4×2, teto e externo — não específico de nenhuma das páginas
  de aplicações)
- **Verificação (planilha, campo `tipo_ligacao`):** idêntico — "3 fios
  (Fase: vermelho · Neutro: preto — ou 2ª fase em 220 V · Retorno: verde)"
  — em **18 dos 19 modelos ativos**: BS-40, MI-400, SR-03 (`caixa-4x2.html`,
  CX06); CS-5, TC-5, BS-50, MI-500, STI-550, TKR, TKT, MU-500, MU-600
  (`teto.html`, TT11); FC-10, FC-15, ME-60, ME-70 (`externo.html`, EX09)
  — os 4 modelos da página externa, já implementada e com manifesto
  próprio (ver seção `aplicacoes/externo.html` abaixo); e BS-70, MI-700 —
  ainda sem página de aplicação própria, mas com o mesmo `tipo_ligacao`
  confirmado na planilha.
  A única variação entre eles é o comprimento do fio (20 cm ou 30 cm,
  já registrado em texto em cada página) e o tipo de relé (NA ou NF) —
  nenhum dos dois muda a ligação física dos 3 fios, então nenhum dos dois
  justifica um diagrama separado.
  **Verificação completa dos 19 modelos ativos da planilha (2026-07-20):
  o MC-1500 é o único com ligação diferente** — 4 fios (acrescenta um
  condutor de Pulsador, branco), por ser minuteria, não sensor. Os outros
  18 modelos (todos os sensores e fotocélulas ativos) usam exatamente o
  mesmo esquema de 3 fios — confirmado que não há mais nenhuma exceção
  além do MC-1500.
- **Páginas que utilizam:** `aplicacoes/caixa-4x2.html` (código CX06),
  `aplicacoes/teto.html` (código TT11), `aplicacoes/externo.html` (código
  EX09 — confirmado nesta entrega: FC-10, FC-15, ME-60 e ME-70 têm o
  mesmo `tipo_ligacao` de 3 fios, cores idênticas).
- **Condição que justificaria uma variação específica no futuro:** um
  modelo com número de fios diferente (o único caso hoje é o **MC-1500**,
  minuteria, com 4 fios — inclui um condutor de pulsador que nenhum
  sensor ou fotocélula tem) ou com esquema de cores diferente do padrão
  fase-vermelho/neutro-preto/retorno-verde. **Não** conta como
  justificativa: comprimento de fio diferente (20 × 30 cm) nem tipo de
  relé (NA × NF) — essas diferenças já ficam registradas em texto, na
  página, não no diagrama.

## Fotos de produto compartilhadas entre SKUs de mesmo invólucro

Registrado em 2026-07-18. Alguns pares de modelos usam exatamente o mesmo
invólucro físico — mesmas `dimensoes_mm` e `cores_disponiveis` na
planilha — e diferem só em característica interna (ajuste de
sensibilidade, acionamento zero-cross), que não aparece na foto frontal.
Nesses casos, uma única fotografia serve aos dois SKUs; não se produz
uma sessão de foto separada só para "provar" uma diferença que a câmera
não capta.

| Par | Dimensões (planilha) | Página | Códigos de manifesto |
|---|---|---|---|
| BS-40 / MI-400 | 43 × 77 × 117 mm, Branca | `caixa-4x2.html` | CX02 = CX03 (mesmo arquivo `bs-40-frontal.webp`) |
| BS-50 / MI-500 | 65 × 55 × 76 mm, Branca | `teto.html` | TT02 = TT03 (mesmo arquivo `bs-50-frontal.webp`) |
| BS-70 / MI-700 | 66 × 54 × 75 mm, Branca | `grandes-ambientes.html` (2026-07-21: cards já existiam prontos, só faltava a foto — resolvido reaproveitando `bs70.jpg` do site antigo) | mesmo arquivo `bs-70-frontal.webp` |

**Condição que justificaria uma foto própria no futuro:** qualquer
diferença visível de fora (cor, formato, elemento externo) entre os dois
modelos do par. **Não** conta como justificativa: diferença só de
característica interna (sensibilidade, zero-cross, temporização) — já
registrada em texto/specs na página, não na foto.

---

# Regra: fotografia real, edição por IA permitida

**Atualizada em 2026-07-18, a pedido de Fernanda,** depois de avaliar as
3 primeiras entregas de CX01/CX02/CX04 (fotos reais do BS-40/SR-03,
retocadas por IA).

"Fotografia real" — usado em todo campo `Tipo` deste documento — significa
que a imagem parte de uma fotografia de produto físico de verdade. Não
significa "sem qualquer edição por IA".

**Permitido:** usar IA para editar/retocar uma fotografia real — limpeza
de fundo, correção de cor e iluminação, remoção de poeira/reflexo/sombra
indesejada, redução de ruído. O resultado continua contando como
"fotografia real" para efeito de aprovação.

**Não permitido, mesmo partindo de uma foto real:** IA alterar ou
inventar qualquer detalhe físico do produto — forma, textura, texto do
logotipo, saída de fios, proporção, cor real do corpo. Se um detalhe
exigido pelo brief não aparece nítido na foto original (ex.: a chave de
3 posições do SR-03, ou a saída dos fios do ME-60 no EX07), a solução é
refotografar com mais foco/proximidade — nunca pedir pra IA "desenhar"
o detalhe que a câmera não capturou.

Continua proibido: imagem 100% gerada por IA sem nenhuma fotografia real
por trás; mockup 3D; qualquer coisa listada como "critério de reprovação"
em cada brief individual, exceto a menção a "elemento gerado por IA" —
que passa a valer só para produto sem foto real de origem, não para
edição sobre foto real.

Esta regra vale para todas as fotografias deste documento (CX01–CX04,
TT01–TT10, EX01–EX06, EX11 etc.) — não é específica de nenhuma página.

---

# Página: `aplicacoes/caixa-4x2.html`

## 1. Diagnóstico visual da página atual (`caixa-4x2.html`)

| Seção do HTML | Estado atual | Ativo melhora a compreensão? | Motivo |
|---|---|---|---|
| `.hero-intro` / `.hero-lead` (H1 + parágrafo) | Só texto | **Sim — essencial** | O H1 promete "substituir interruptor sem obra"; nada na primeira dobra prova isso visualmente. Uma imagem aqui cumpre a função "mostrar o produto exato" + "reconhecer o formato" antes mesmo de ler o texto. |
| `#problema-heading` (`.factor-list`, 3 itens) | Só texto | Avaliado — **opcional, não essencial** | Os 3 itens já são curtos e escaneáveis (cards com nome em negrito + descrição). Ícones ajudariam no reconhecimento visual, mas nenhum dos 3 problemas (esquecimento, interruptor mal posicionado, não trocar o ponto) depende de imagem pra ser entendido — é a seção com menor ganho por ativo. |
| `.brand-principle` (aside do slogan) | Só texto, por desenho (não é citação, é princípio de marca) | Não | Intencionalmente textual; adicionar imagem aqui competiria com o slogan em vez de reforçá-lo. |
| `#solucao-heading` (BS-40 principal + outras opções, prosa) | Só texto | Não — **evitar duplicar** | Os 3 produtos já vão ganhar foto na seção de comparação logo abaixo. Repetir foto aqui seria "imagem pra preencher espaço", não pra resolver problema visual novo. |
| `#comparacao-heading` (`.spec-cards`, 3 cards) | Só texto + specs | **Sim — essencial** | Função "mostrar o produto exato" + "diferenciar modelos" batem direto aqui. Hoje os 3 cards são indistinguíveis visualmente (só texto), o que enfraquece a decisão entre BS-40 / MI-400 / SR-03. |
| `#caracteristicas-heading` (`.factor-list`, 3 itens: simples / ajuste+temporização / controle manual) | Só texto | Avaliado — **importante, não essencial** | Aqui os 3 itens já mapeiam 1:1 com os 3 produtos da comparação acima — um ícone por item reforçaria "diferenciar modelos" sem repetir a foto do produto. Vale a pena, mas a página funciona sem isso; a comparação com foto já cobre a maior parte do ganho. |
| `#instalacao-heading` (3 fios, boas práticas) | Só texto (lista) | **Sim — essencial (2 ativos)** | "Explicar a instalação" é uma das 6 funções válidas — e é justamente onde texto puro tem mais atrito: (a) o diagrama de substituição física prova "sem obra"; (b) o diagrama elétrico é indispensável pra quem vai realmente instalar (fase/neutro/retorno por texto corrido é mais difícil de seguir que um diagrama). |
| `#resultado-heading` | Só texto | Não | É a seção de fechamento/payoff — já coberta conceitualmente pelo hero + pelos 2 diagramas da seção anterior. Imagem aqui seria redundante. |
| `#confianca-heading` (fabricação e suporte) | Só texto | Avaliado — **desnecessário** | Selo genérico de "indústria brasileira" não cumpre nenhuma das 6 funções (não mostra produto, ambiente, instalação, diferença de modelo, característica técnica ou CTA) — é o tipo de ícone decorativo que a marca já evita (`diretrizes-visuais.md`). Descartado por avaliação, não por esquecimento. |
| `#faq-heading` (`.faq-list`) | Só texto | Não | FAQ funciona por texto; nenhuma pergunta desta página depende de imagem pra ser respondida. |
| `.cta-section` (CTA final) | Só texto/botões | Não | Os 2 botões (Onde Comprar / Suporte) já são fortes visualmente (`.btn-primary`/`.btn-secondary`); o reforço de conversão vem do hero e dos diagramas mais acima, não de um novo ativo aqui. |
| `<meta property="og:...">` no `<head>` | **Sem nenhuma tag `og:image`** | **Sim — essencial (gap real)** | A página hoje não tem `og:image` nenhum — compartilhar o link no WhatsApp/redes hoje não mostra nada. Gap confirmado, não é regressão de nada que já existia. |

---

## 2. Lista priorizada de ativos

| ID | Ativo | Classificação | Função(ões) cumprida(s) |
|---|---|---|---|
| CX01 | Imagem principal do hero (BS-40 no espelho 4x2) | **Essencial** | Reconhecer formato + mostrar produto exato |
| CX02 | Foto produto — BS-40 (card de comparação) | **Essencial** | Mostrar produto exato + diferenciar modelos |
| CX03 | Foto produto — MI-400 (card de comparação) | **Essencial** | Mostrar produto exato + diferenciar modelos |
| CX04 | Foto produto — SR-03 (card de comparação) | **Essencial** | Mostrar produto exato + diferenciar modelos |
| CX05 | Diagrama de substituição física ("sem obra") | **Essencial** | Explicar a instalação |
| CX06 | Diagrama elétrico 127 V / 220 V | **Essencial** | Explicar a instalação + traduzir característica técnica |
| CX07 | Imagem Open Graph | **Essencial** | Reforçar o próximo passo de conversão (compartilhamento) |
| CX08 | Ícones — "Características que orientam a escolha" (3) | Importante | Diferenciar modelos |
| CX09 | Ícones — "O problema" (3) | Opcional | Reconhecer o ambiente/situação |
| CX10 | Selo "Fabricação brasileira / suporte" | **Desnecessário** | Nenhuma das 6 funções — descartado |

Só os 7 essenciais (CX01–CX07) recebem brief individual completo nesta
entrega, conforme pedido. CX08 e CX09 ficam especificados em nível de
sistema (§ "Ícones", abaixo) caso você decida produzi-los depois; CX10
não avança.

---

## 3. Paleta extraída do projeto (`css/global.css`)

Valores reais, lidos direto do token — nenhuma cor aproximada:

- fundo principal: `var(--cor-fundo)` — `#FFFFFF`
- fundo técnico (cards/zebra): `var(--cor-fundo-tecnico)` — `#F4F5F7`
- grafite (estrutura/texto sobre fundo claro): `var(--cor-grafite)` — `#1E2229`
- vermelho de marca (ação): `var(--cor-marca-vermelho)` — `#E10000`
- vermelho escuro (hover/erro): `var(--cor-vermelho-escuro)` — `#B71C1C`
- amarelo de marca (foco/destaque — nunca sobre fundo claro): `var(--cor-marca-amarelo)` — `#FAEE1E`
- branco (papel sobre grafite/vermelho): `var(--cor-branco)` — `#FFFFFF`
- texto suave sobre grafite: `var(--cor-texto-suave-escuro)` — `#C6CBD4`
- borda sobre fundo claro: `var(--cor-borda)` — `rgb(30 34 41 / 15%)`
- borda sobre grafite: `var(--cor-borda-clara)` — `rgb(255 255 255 / 18%)`
- raio máximo do sistema: `var(--raio)` — `4px`

Tipografia: **Inter** (variable, local), pesos 400/600/700. H1 2 rem/700,
H2 1.5 rem/700, H3 1.25 rem/600, H4 1 rem/600, corpo 1 rem/400,
line-height 1.6.

Esta é a paleta exata a ser repassada à IA visual — nenhuma cor "próxima
de" ou "tom de vermelho similar" deve ser usada nos briefs.

---

## 4. Manifesto de produção

| ID | Prioridade | Página | Seção | Seletor HTML | Tipo | Objetivo | Mensagem principal | Produto | Composição | Enquadramento | Fundo | Paleta exata | Formato | Proporção | Largura | Altura | Nome do arquivo | Caminho | Alt | Legenda | Instrução | Proibido | Pendência técnica | Critério de aprovação |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CX01 | Essencial | caixa-4x2 | Hero | `.hero-intro` (novo `.hero-media` ao lado) | Fotografia (produto real) | Provar "sem obra" antes de ler o texto | Sensor substitui o interruptor, no mesmo lugar | BS-40 | BS-40 montado num espelho 4×2 real, ¾ de frente | Plano fechado, produto ocupa 60–70% do quadro | Cinza técnico claro equivalente a `#F4F5F7`, sem textura | grafite `#1E2229` (sombra/contorno), branco `#FFFFFF` (produto), sem vermelho/amarelo no fundo | WEBP | 1:1 | 1600px (fonte) | 1600px (fonte) | `caixa-4x2-hero-bs-40.webp` | `assets/images/aplicacoes/caixa-4x2/caixa-4x2-hero-bs-40.webp` | "Sensor de movimento BS-40 instalado numa caixa 4×2, no lugar do interruptor convencional" | Nenhuma (imagem autoexplicativa com o H1 ao lado) | Fotografia real, luz difusa, sem sombra dura | Fundo com textura/parede a mostra; logotipos de terceiros; poeira/dedadas no produto | Nenhuma — modelo e cores já validados na planilha | Produto nítido, centralizado, sem distorção de perspectiva; fundo limpo igual aos outros ativos de produto |
| CX02 | Essencial | caixa-4x2 | Comparação (`.spec-cards`) | `.spec-card:nth-child(1) .spec-card-name` | Fotografia (produto real) | Diferenciar modelo na comparação | Este é o BS-40 | BS-40 | Frontal, sem articulador (não tem), lente circular visível | Produto centralizado, margem igual nos 4 lados | Cinza técnico claro `#F4F5F7`, idêntico ao CX03/CX04 | mesma paleta do CX01 | WEBP | 1:1 | 1000px | 1000px | `bs-40-frontal.webp` | `assets/images/aplicacoes/caixa-4x2/bs-40-frontal.webp` | "Sensor de movimento BS-40, vista frontal" | "BS-40" (já existe no `.spec-card-name`) | Fotografia real, mesmo ângulo/altura de câmera do MI-400 e SR-03 | Ângulo diferente dos outros 2; zoom diferente | Nenhuma | Os 3 produtos (BS-40/MI-400/SR-03), lado a lado, parecem fotografados na mesma sessão |
| CX03 | Essencial | caixa-4x2 | Comparação (`.spec-cards`) | `.spec-card:nth-child(2) .spec-card-name` | Fotografia (produto real) — **ativo compartilhado, mesmo arquivo do CX02** | Diferenciar modelo na comparação | Este é o MI-400 (mesmo invólucro do BS-40) | MI-400 | Idêntico ao CX02 — BS-40 e MI-400 têm o mesmo invólucro (43 × 77 × 117 mm, Branca) | Idêntico ao CX02 | Idêntico ao CX02 | Idêntico ao CX02 | WEBP | 1:1 | 1000px | 1000px | `bs-40-frontal.webp` (**reutilizado, não gera arquivo próprio**) | `assets/images/aplicacoes/caixa-4x2/bs-40-frontal.webp` | "Sensor de movimento MI-400, vista frontal" | "MI-400" | Nenhuma — reutiliza o arquivo do CX02 | N/A (não é sessão própria) | Nenhuma | Mesmo arquivo do CX02, sem distinção visual — a diferença (ajuste de sensibilidade, zero-cross) é interna, não aparece na foto |
| CX04 | Essencial | caixa-4x2 | Comparação (`.spec-cards`) | `.spec-card:nth-child(3) .spec-card-name` | Fotografia (produto real) | Diferenciar modelo + mostrar a chave de 3 posições | Este é o SR-03 — tem chave de 3 posições | SR-03 | Frontal, chave de 3 posições visível e legível | Idêntico ao CX02, mas com a chave em foco nítido | Idêntico ao CX02 | Idêntico ao CX02 | WEBP | 1:1 | 1000px | 1000px | `sr-03-frontal.webp` | `assets/images/aplicacoes/caixa-4x2/sr-03-frontal.webp` | "Sensor de movimento SR-03, vista frontal, com a chave de 3 posições visível" | "SR-03" | Mesma sessão; garantir foco na chave (diferencial do modelo) | Chave fora de foco ou fora do quadro | Nenhuma | A chave de 3 posições precisa estar legível em miniatura (tamanho do card) |
| CX05 | Essencial | caixa-4x2 | Instalação (`#instalacao-heading`) | Após o parágrafo introdutório da seção, antes da `<dl>` de fiação | Diagrama (SVG, ilustração) | Provar "sem obra" no passo a passo | Retire o interruptor, encaixe o sensor, o ponto elétrico continua o mesmo | BS-40 (representativo dos 3) | 3 quadros em sequência horizontal: (1) interruptor comum na caixa 4×2 → (2) sensor sendo encaixado no mesmo espelho → (3) sensor instalado, com indicação "mesmo ponto elétrico" | Ilustração linear simples, sem fotorrealismo | Branco `#FFFFFF` | grafite `#1E2229` (traço e texto), vermelho `#E10000` (setas/destaque de transição) | SVG | ~16:5 (faixa horizontal) | viewBox 960 | viewBox 300 | `substituicao-interruptor-caixa-4x2.svg` | `assets/images/aplicacoes/caixa-4x2/substituicao-interruptor-caixa-4x2.svg` | "Sequência mostrando a troca do interruptor pelo sensor BS-40 na mesma caixa 4×2, sem obra" | "Mesmo ponto elétrico, sem abrir parede" | Ilustração vetorial (não fotografia); 3 quadros, não mais que isso | Vira manual técnico com múltiplos passos; texto pequeno demais pra ler no celular | Nenhuma — conceito já é o texto da própria seção | Entendível em 3 segundos, sem precisar ler legenda |
| CX06 | Essencial | caixa-4x2 | Instalação (`#instalacao-heading`) | Depois da `<dl>` de fiação (cores dos fios) | Diagrama (SVG, técnico) | Explicar a ligação elétrica real | Fase (vermelho), Neutro/2ª fase (preto), Retorno (verde) — 127 V e 220 V | BS-40 / MI-400 / SR-03 (ligação idêntica nos 3 — validado abaixo) | 2 painéis lado a lado (ou empilhados no mobile): "127 V" e "220 V", cada um com sensor + lâmpada + fios rotulados por texto E cor | Diagrama técnico, sem perspectiva | Branco `#FFFFFF` | grafite `#1E2229` (traço/rótulo), vermelho real do fio = `#E10000` só como apoio visual (o rótulo em texto é obrigatório, não pode depender só da cor) | SVG | 2 painéis ~1:1 cada, total ~2:1 | viewBox 1000 | viewBox 500 | `ligacao-3-fios-127-220.svg` (**arquivo compartilhado** — ver "Ativos Compartilhados entre Páginas") | `assets/images/diagramas/ligacao-3-fios-127-220.svg` | "Diagrama de ligação elétrica do sensor em 127 V e 220 V: fase, neutro ou 2ª fase, e retorno para a lâmpada" | "Fase: vermelho · Neutro (127 V) ou 2ª fase (220 V): preto · Retorno: verde" | Ver circuito validado abaixo antes de produzir | Cor como única forma de identificar o fio (sem rótulo texto); disjuntor/quadro elétrico (fora do escopo desta página) | **Resolvida nesta entrega** — ver validação abaixo | Alguém que nunca instalou consegue identificar os 3 fios certos só olhando |
| CX07 | Essencial | caixa-4x2 | `<head>` (Open Graph) | `<meta property="og:image">` (a criar — hoje a página não tem nenhuma) | Fotografia/composição (produto + identidade) | Boa leitura ao compartilhar o link (WhatsApp etc.) | "Sensor de movimento para caixa 4×2" | BS-40 em destaque; MI-400 e SR-03 como coadjuvantes, menores | BS-40 grande e centralizado; MI-400/SR-03 menores, ao lado ou abaixo, sem competir | Produto(s) ocupando ~50% do quadro, resto é respiro + texto | Branco `#FFFFFF` ou cinza técnico `#F4F5F7` | grafite `#1E2229` (texto), vermelho `#E10000` (destaque/logo), sem amarelo em área de texto pequena | JPG | 1200×630 exato | 1200px | 630px | `caixa-4x2-og.jpg` | `assets/images/aplicacoes/caixa-4x2/caixa-4x2-og.jpg` | "Sensor de movimento Tektron para caixa 4×2" | (imagem não usa `<figcaption>` — é meta tag) | Texto grande e curto, testado a 300px de largura (tamanho real no WhatsApp) | Diagrama elétrico; especificações pequenas; textura de fundo | Nenhuma | Legível como miniatura pequena (teste no preview do WhatsApp antes de aprovar) |

---

## 5. Briefs individuais (ativos essenciais)

Cada brief abaixo é autocontido — pode ser copiado direto para a IA
visual, sem precisar do resto deste documento.

### CX01 — Imagem principal do hero

**Status (2026-07-18): 3ª tentativa aprovada por decisão explícita de
Fernanda, contra a recomendação registrada.** Tentativa 1: rejeitada por
ângulo frontal, textura de parede e enquadramento pequeno demais.
Tentativa 2 (foto real editada por IA/Gemini): ângulo ¾ e enquadramento
corrigidos, mas sem parede/espelho visível (produto com fios soltos no
ar). Tentativa 3 (`avalieaqui.png` → `caixa-4x2-hero-bs-40.webp`): foto
real do produto instalado numa parede real, com a cena ao redor
(corredor, piso de madeira, quadro, sala ao fundo) gerada/composta pelo
Gemini. Avaliação registrada antes da aprovação: essa cena contraria
diretamente o "Reforço explícito" abaixo (sem ambiente doméstico
completo, sem cena lifestyle, fundo técnico neutro) e o produto ocupa
bem menos que 60–70% do quadro — recomendei reprovar e manter o padrão
anterior. **Fernanda decidiu aprovar assim mesmo** ("use a que eu coloquei
lá na pasta agora"). Decisão registrada como exceção específica do CX01
— não se aplica a CX02/CX03/CX04 (que continuam fundo técnico limpo) nem
a outras páginas, salvo nova decisão explícita.

**O que produzir:** fotografia de produto do sensor de movimento Tektron
**BS-40** instalado num espelho de caixa 4×2 real, em ângulo ¾, mostrando
que o sensor ocupa o mesmo espaço físico de um interruptor comum.

**Problema visual que resolve:** o H1 ("Sensor de movimento para caixa
4x2") e o parágrafo de abertura prometem uma solução sem obra — mas nada
na primeira dobra da página comprova isso visualmente hoje. Um visitante
que só olha a imagem (sem ler texto) precisa entender "isso substitui meu
interruptor" em menos de 2 segundos.

**Produto real:** BS-40 (código oficial Tektron; não usar MI-400 ou SR-03
aqui — os dois aparecem só na comparação, mais abaixo na página).

**Arquivo de referência fornecido:** nenhum. Não existe nenhuma foto do
BS-40 no projeto (`Arquivos/Midia/BS-40/` está vazia). A única referência
disponível é a especificação textual: dimensões 43 × 77 × 117 mm, cor
branca, formato retangular com lente circular central, sem articulador
(modelo fixo, para embutir).

**Ambiente:** espelho de caixa 4×2 branco padrão, num fragmento de parede
ou suporte de teste — não precisa ser uma cena doméstica completa (evita
o risco de parecer imagem de banco de imagem genérica); o foco é o
produto + o formato, não o cômodo.

**Estilo:** fotografia de produto limpa, tipo catálogo técnico — não
lifestyle, não staged com pessoas.

**Reforço explícito (aprovado por Fernanda em 2026-07-17 — SUPERSEDIDO
para o CX01 em 2026-07-18, ver "Status" acima):**
- sem textura de parede aparente (tijolo, reboco, papel de parede — nada
  que compita visualmente com o produto);
- sem cena lifestyle (nenhuma pessoa, nenhuma mão tocando o sensor);
- sem ambiente doméstico completo (não é foto de cômodo — nada de móveis,
  piso, teto ao fundo);
- o foco é só o produto + o espelho 4x2, com leitura imediata da solução
  — qualquer elemento do quadro que não seja o sensor e o espelho deve
  ser neutro o bastante pra não roubar atenção.

**Paleta exata:** fundo cinza técnico equivalente a `#F4F5F7` (fundo
físico da foto, papel ou parede lisa); nenhuma cor de marca (vermelho
`#E10000` / amarelo `#FAEE1E`) no fundo — essas cores ficam só pra
elementos de UI ao redor da imagem, não dentro dela. **Não se aplica ao
arquivo final do CX01** (ver "Status" acima — cena doméstica aprovada
como exceção).

**O que não pode ser alterado:** a cor branca real do produto, o formato
retangular, a lente circular central — não estilizar/pintar o produto.

**Proporção e resolução:** 1:1, exportar a 1600 × 1600 px (fonte), WEBP.
Arquivo final entregue a 1024 × 1024 px — abaixo do previsto, aceito
nesta rodada; se a nitidez em tela grande incomodar, reexportar em
resolução maior fica pendente.

**Área de respiro:** mínimo 15% de margem ao redor do produto (não
sangrar o produto até a borda do quadro).

**Posição provável de texto:** nenhum texto sobre a imagem — o H1 e o
parágrafo ficam ao lado (desktop) ou acima (mobile), fora da imagem.

**Resultado esperado:** alguém que nunca viu a Tektron entende, só pela
imagem, que existe um sensor do tamanho de um interruptor.

**Critérios de reprovação:** produto borrado ou com reflexo forte;
ângulo que esconde a lente; fundo com textura/cor que puxe mais atenção
que o produto; imagem sem nenhuma fotografia real de origem, ou detalhe
físico do produto alterado/inventado pela edição de IA (ver "Regra:
fotografia real, edição por IA permitida", no início do documento —
retoque de fundo/cor/iluminação sobre uma foto real continua aceitável).

---

### CX02, CX03, CX04 — Fotos dos três produtos (comparação)

**Atualização (2026-07-18): CX03 é ativo compartilhado, não gera arquivo
próprio.** BS-40 e MI-400 têm o mesmo invólucro físico (`dimensoes_mm` e
`cores_disponiveis` idênticos na planilha: 43 × 77 × 117 mm, Branca) — a
diferença entre os dois é só interna (ajuste de sensibilidade,
acionamento zero-cross), não aparece na foto frontal. CX03 reutiliza o
mesmo arquivo do CX02 (`bs-40-frontal.webp`); não precisa de sessão de
foto própria. O mesmo raciocínio vale, quando as respectivas páginas
forem escritas, para BS-50/MI-500 (já registrado como TT02/TT03 em
`teto.html`, mesma lógica) e BS-70/MI-700 (ainda sem página) — ver
"Ativos Compartilhados entre Páginas", no início deste documento.

**O que produzir:** 2 fotografias de produto — BS-40 (serve também como
MI-400) e SR-03 — com ângulo, escala, fundo e iluminação **idênticos
entre si**, para uso lado a lado nos 3 cards de comparação
(`.spec-cards`).

**Problema visual que resolve:** hoje os 3 cards de comparação são
indistinguíveis visualmente (só texto e specs) — quem está decidindo
entre os 3 modelos não consegue "ver" a diferença, mesmo eles sendo
fisicamente quase idênticos (mesmas dimensões, 43 × 77 × 117 mm). A foto
frontal existe justamente pra confirmar isso: são parecidos, a diferença
está na característica interna (fixa no SR-03: a chave de 3 posições
visível na frente).

**Produtos reais:** BS-40 (também usado para MI-400), SR-03 (códigos
oficiais Tektron).

**Arquivo de referência fornecido:** CX02 e CX04 já produzidos e
aprovados nesta sessão (fotografia real, retocada por IA — ver "Regra:
fotografia real, edição por IA permitida"). Diferencial visível
conhecido: o SR-03 tem uma chave de 3 posições na face frontal que BS-40
e MI-400 não têm — essa chave PRECISA aparecer nítida na foto do SR-03.

**Ambiente:** nenhum — fotografia de produto isolado (still life), sem
cenário.

**Estilo:** idêntico ao CX01 (catálogo técnico, não lifestyle) — mesma
sessão de fotos, se possível, pra garantir consistência de luz/ângulo.

**Paleta exata:** fundo cinza técnico `#F4F5F7`, igual para os 3.

**O que não pode ser alterado:** a cor branca real do produto; a chave de
3 posições do SR-03 precisa estar visível e em foco (é o diferencial do
modelo).

**Proporção e resolução:** 1:1, 1000 × 1000 px (fonte), WEBP, para os 3.

**Área de respiro:** mesma margem nos 3 (mínimo 15%), pra parecerem da
mesma escala quando lado a lado no card.

**Posição provável de texto:** nenhum — o nome do modelo já existe no
`.spec-card-name` (texto HTML, fora da imagem).

**Resultado esperado:** os 3 cards, lado a lado, parecem fotografados na
mesma sessão — mesmo ângulo, mesma altura de câmera, mesma distância.

**Critérios de reprovação:** qualquer um dos 3 com ângulo, escala ou fundo
diferente dos outros dois; chave do SR-03 fora de foco ou fora do quadro.

---

### CX05 — Diagrama de substituição física ("sem obra")

**O que produzir:** ilustração vetorial (SVG) simples, em 3 quadros
horizontais, mostrando: (1) o interruptor comum na caixa 4×2; (2) o
sensor BS-40 sendo encaixado no mesmo espelho; (3) o sensor instalado,
com um rótulo curto indicando que o ponto elétrico é o mesmo.

**Problema visual que resolve:** a promessa central da página é "sem
obra" — mas isso é uma afirmação abstrata em texto corrido hoje. Um
diagrama simples prova em 3 segundos o que o texto tenta explicar em 2
parágrafos.

**Produto real:** BS-40 (representa os 3 modelos — a substituição física
é idêntica para BS-40/MI-400/SR-03, já que os 3 têm a mesma dimensão de
encaixe, 43 × 77 × 117 mm, para o mesmo espelho 4×2).

**Arquivo de referência fornecido:** a foto do CX01/CX02 (BS-40 frontal),
depois de produzida, pode servir de referência visual para o desenho do
sensor no quadro 2 e 3 — mas o diagrama em si é ilustração linear, não
fotografia colada.

**Ambiente:** nenhum cenário externo — só a caixa 4×2 isolada, sem parede
ao redor.

**Estilo:** linha fina, estilo técnico/editorial, sem gradientes nem
sombra realista — mesmo espírito visual dos ícones lineares descritos na
§ Ícones deste documento (mesmo se os ícones não forem produzidos agora,
o estilo de traço deve ser compatível, para eventual reuso futuro).

**Paleta exata:** fundo branco `#FFFFFF`; traço e texto em grafite
`#1E2229`; setas ou destaque de transição entre quadros em vermelho de
marca `#E10000` (único uso de cor além do grafite).

**O que não pode ser alterado:** a leitura tem que funcionar sem cor (só
grafite sobre branco) — o vermelho é reforço, não a única pista.

**Proporção e resolução:** faixa horizontal, viewBox 960 × 300 (ou
proporção equivalente ~16:5), SVG (vetorial, sem resolução fixa).

**Área de respiro:** espaço igual entre os 3 quadros; não comprimir o
quadro 3 (o mais importante — "ponto elétrico mantido") pra caber mais
texto nos anteriores.

**Posição provável de texto:** um rótulo curto por quadro (2–4 palavras),
não frases completas — o texto de apoio já existe na seção HTML ao
redor.

**Resultado esperado:** compreensível sem legenda, em qualquer largura de
tela (inclusive celular).

**Critérios de reprovação:** mais de 3 quadros (vira manual); texto
pequeno demais pra ler em tela de celular; qualquer elemento que pareça
foto realista em vez de ilustração linear.

---

### CX06 — Diagrama elétrico (127 V / 220 V)

**Validação do circuito antes do brief (obrigatória, feita agora):**
fonte — aba `Especificacoes` da planilha canônica, campo `tipo_ligacao`,
idêntico para os 3 modelos desta página (BS-40, MI-400, SR-03):

> "3 fios (Fase: vermelho · Neutro: preto — ou 2ª fase em 220 V · Retorno:
> verde) · 20 cm"

Complementado por `alimentacao` ("Bivolt 127 V / 220 V"), `controle_carga`
("Relé NA") e `potencia_controle` ("200 W / 127 V · 350 W / 220 V") — os
mesmos valores nos 3 modelos. Não há divergência entre modelos nesta
página: **um único diagrama elétrico serve para BS-40, MI-400 e SR-03.**
Não existe diagrama visual anterior para nenhum dos 3 (pastas de mídia
vazias) — este será o primeiro.

**Atualização: ativo compartilhado.** Esse mesmo padrão de 3 fios (fase
vermelho / neutro ou 2ª fase preto / retorno verde) também é idêntico nos
9 modelos de `teto.html` (TT11) e nos 4 modelos de `externo.html` (EX09)
— ver "Ativos Compartilhados entre Páginas", no início deste documento.
CX06 **não** gera um arquivo próprio: usa `ligacao-3-fios-127-220.svg`,
em `assets/images/diagramas/`, o mesmo arquivo referenciado por TT11 e
por EX09.

**O que produzir:** diagrama técnico (SVG) com 2 painéis lado a lado (ou
empilhados no mobile): um pra ligação em 127 V, outro em 220 V. Cada
painel mostra o sensor, a lâmpada, e os 3 fios rotulados por **texto e
cor simultaneamente**.

**Problema visual que resolve:** quem vai instalar precisa identificar
fase / neutro (ou 2ª fase) / retorno rapidamente — texto corrido
("Fase: vermelho · Neutro: preto...") exige leitura atenta; um diagrama
permite checagem visual rápida durante a instalação real.

**Produto real:** BS-40 / MI-400 / SR-03 (ligação idêntica — ver
validação acima).

**Arquivo de referência fornecido:** nenhum diagrama anterior existe.
Referência é só o texto validado acima.

**Ambiente:** nenhum — diagrama técnico isolado, sem cenário.

**Estilo:** diagrama de ligação elétrica tradicional (linhas retas,
símbolos simples de sensor/lâmpada/fio) — não fotorrealista.

**Paleta exata:** fundo branco `#FFFFFF`; traço e rótulos de texto em
grafite `#1E2229`; cor real do fio como apoio visual (vermelho `#E10000`
para o fio de fase — nota: é a mesma cor de marca, coincidência
conveniente; preto e verde para os outros 2 fios, sem token de projeto
correspondente — usar preto/verde reais, já que são as cores físicas do
fio, não cores de marca).

**O que não pode ser alterado:** os 3 fios e suas cores reais (fase
vermelho, neutro/2ª fase preto, retorno verde) — não inventar uma 4ª
cor ou renomear os fios.

**O que não pode depender só da cor:** cada fio precisa ter o nome
escrito ao lado (ex.: "Fase" ao lado do fio vermelho), porque parte dos
usuários pode ter deficiência de percepção de cor — a cor é apoio, o
texto é obrigatório.

**Proporção e resolução:** 2 painéis, cada um ~1:1, total ~2:1, viewBox
1000 × 500, SVG.

**Área de respiro:** separação clara entre os 2 painéis (127 V / 220 V),
com o rótulo da tensão em destaque no topo de cada um.

**Posição provável de texto:** rótulo de cada fio junto ao próprio fio
(não uma legenda separada distante do desenho).

**Resultado esperado:** alguém que nunca instalou um sensor Tektron
consegue identificar os 3 fios certos só olhando o diagrama, sem precisar
ler o texto corrido da página.

**Critérios de reprovação:** fio identificado só pela cor (sem rótulo de
texto); painéis 127 V e 220 V misturados/sem separação clara; inclusão do
disjuntor/quadro elétrico (fora do escopo — isso é conteúdo da futura
página de minuterias).

---

### CX07 — Imagem Open Graph

**O que produzir:** imagem 1200 × 630 px, JPG, para a tag `og:image`
(hoje **inexistente** na página — compartilhar o link no WhatsApp não
mostra nenhuma prévia).

**Problema visual que resolve:** conversão fora da página — quem recebe
o link compartilhado (WhatsApp, grupo de eletricistas, etc.) decide clicar
ou não com base só nessa miniatura.

**Produto real:** BS-40 é o produto principal e continua na imagem em
qualquer versão. MI-400 e SR-03 só entram como linha complementar (mais
menores, ao lado ou abaixo do BS-40) **se isso não prejudicar a leitura em
miniatura pequena**. Regra de decisão (aprovada por Fernanda em
2026-07-17): teste a composição com os 3 produtos primeiro; se ficar
carregada/difícil de ler a ~300 px de largura, **descarte MI-400 e SR-03
da imagem** e mantenha só o BS-40 — os outros dois modelos continuam
citados no texto da página (og:description, título), não precisam
aparecer visualmente. Clareza em miniatura vence "mostrar a linha
completa".

**Arquivo de referência fornecido:** as fotos CX01/CX02/CX03/CX04, depois
de produzidas — a OG image reaproveita essas fotos de produto, não é uma
sessão nova.

**Ambiente:** nenhum — fundo neutro (branco ou cinza técnico).

**Estilo:** catálogo/institucional, texto grande e curto — o formato é
consumido em miniatura pequena (a maioria vê isso a ~300px de largura no
celular).

**Paleta exata:** fundo branco `#FFFFFF` ou cinza técnico `#F4F5F7`; texto
em grafite `#1E2229`; destaque (ex.: um traço, o nome Tektron) em vermelho
`#E10000`; sem amarelo em área de texto pequeno (risco de contraste ruim
em miniatura).

**O que não pode ser alterado:** a identidade Tektron precisa estar
presente (nome ou logo), mas sem competir com o produto.

**Proporção e resolução:** exatamente 1200 × 630 px, JPG.

**Área de respiro:** texto principal ocupando no máximo a metade superior
ou inferior do quadro — nunca colado nas bordas (recortes de preview
variam por plataforma).

**Posição provável de texto:** "Sensor de movimento para caixa 4x2"
(texto principal sugerido) — grande, uma linha, sem subtítulo técnico.

**Resultado esperado:** legível e reconhecível como miniatura pequena no
preview do WhatsApp/redes — teste isso antes de aprovar.

**Critérios de reprovação:** diagrama elétrico ou specs pequenas nessa
imagem (proibido, indicado por você); texto que só fica legível em
tamanho grande; mais de uma mensagem central competindo; MI-400/SR-03
presentes na composição a ponto de prejudicar a leitura do BS-40 ou do
texto principal em miniatura — nesse caso, a versão só-com-BS-40 é a
correta, não uma versão "quase boa" com os 3.

---

## 6. Lista de fotografias reais necessárias

Sequência prática de captação, uma de cada vez. Câmera: Galaxy Note 10.

| # | Modelo | Face fotografada | Ângulo | Posição do produto | Orientação do Note 10 | Distância aprox. | Altura da câmera | Fundo | Iluminação | Precisa aparecer | Precisa evitar | Mín. de fotos |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | BS-40 | Frontal | 0° (de frente, sem inclinação) | Produto centralizado, apoiado ou suspenso a 90° da câmera | Retrato (vertical), depois recorte 1:1 | ~30–40 cm | Na altura do centro do produto (não de cima, não de baixo) | Papel ou superfície lisa cinza-claro/branca, sem textura, sem sombra dura | Luz difusa (janela com luz indireta ou softbox), sem flash direto | Lente circular central nítida, cor branca real do produto, bordas retas do corpo | Reflexo de flash na lente, sombra dura projetada, poeira/dedadas visíveis | 3 (variação leve de exposição, escolher a melhor) |
| 2 | MI-400 | Frontal | Idêntico à foto 1 (mesma distância, altura, ângulo) | Idêntico à foto 1 | Idêntico à foto 1 | Idêntico à foto 1 | Idêntico à foto 1 | Idêntico à foto 1 (mesmo fundo físico, se possível a mesma sessão) | Idêntico à foto 1 | Lente circular central nítida | Ângulo/distância diferente da foto 1 | 3 |
| 3 | SR-03 | Frontal, com atenção extra na chave de 3 posições | Idêntico às fotos 1 e 2 | Idêntico às fotos 1 e 2 | Idêntico às fotos 1 e 2 | Idêntico às fotos 1 e 2 — se a chave ficar pequena demais, uma 2ª foto de detalhe (macro) só da chave é aceitável como complemento | Idêntico | Idêntico | Idêntico | **Chave de 3 posições nítida e legível** (é o diferencial do modelo) | Chave fora de foco, ou fora do quadro | 4 (3 iguais às anteriores + 1 detalhe da chave) |
| 4 | BS-40 | ¾ (três quartos), montado num espelho de caixa 4×2 real | ~30–45° em relação à face frontal | Sensor já encaixado no espelho, espelho fixado num fragmento de parede ou suporte de teste | Paisagem (horizontal) ou retrato — testar as duas e escolher a que permite recorte 1:1 com mais respiro | ~40–60 cm (plano mais aberto que as fotos de produto isolado) | Levemente acima do centro do produto, simulando altura de instalação (~1,10–1,30 m do chão, se estiver numa parede de teste) | Parede lisa clara ou espelho isolado sobre fundo neutro — evitar parede com textura chamativa (tijolo aparente, papel de parede) | Luz difusa, sem sombra dura projetada do sensor na parede | O espelho 4×2 completo, o sensor bem encaixado (sem folga visível), boa parte do "acabamento limpo" | Fios aparentes/soltos, parede em obra, ferramentas no quadro | 4 (ângulos ligeiramente variados, escolher o melhor pra hero) |

Ordem sugerida de execução: 1 → 2 → 3 → 4 (produtos isolados primeiro,
com a mesma sessão/luz montada uma única vez; a foto 4, do espelho
montado, por último, já que exige montar o suporte de teste).

---

## 7. Alterações de HTML e CSS que podem ser preparadas agora

**Feito nesta rodada (aprovada por Fernanda em 2026-07-17, item 6):**

- `css/home.css`, nova seção 11 — classes `.hero-layout`, `.hero-media`,
  `.spec-card-photo`, `.diagram-figure`, `.diagram-caption`, com
  `aspect-ratio` reservado e comportamento responsivo (empilhado no
  mobile, lado a lado a partir de 64rem no hero). Nenhuma delas está
  aplicada a um elemento visível — ficam inertes até o `<figure>`/`<img>`
  real ser inserido.
- `aplicacoes/caixa-4x2.html`:
  - Hero reestruturado em `.hero-layout` > `.hero-intro` (texto real,
    sem mudança de conteúdo) + comentário HTML marcando o ponto exato de
    inserção do CX01, com o markup completo já escrito dentro do
    comentário (`<!-- ... -->`), pronto pra descomentar quando o arquivo
    existir.
  - Os 3 `.spec-card` (comparação) e a seção de instalação ganharam o
    mesmo tratamento: comentário com o `<figure>`/`<img>` completo
    (src, alt, width/height, loading/decoding) já escrito para CX02, CX03,
    CX04, CX05 e CX06.
  - `<head>`: bloco comentado com as 4 tags de `og:image` (CX07),
    pronto pra descomentar.
  - Nada disso é visível ou clicável hoje — comentário HTML não
    renderiza, não é link quebrado, não é bloco vazio.
- Estrutura de pastas `assets/images/aplicacoes/caixa-4x2/` — ainda **não
  criada** nesta rodada (só os arquivos physicais dos ativos justificam
  criar a pasta; ela entra junto do primeiro arquivo real).

## 8. Alterações que devem aguardar os arquivos finais

- Descomentar os blocos preparados no passo anterior — só depois que cada
  arquivo (CX01–CX07) existir e for aprovado. Descomentar um `<figure>`
  sem o arquivo por trás recriaria o link quebrado que estamos evitando.
- Qualquer `srcset`/`sizes` — não há variantes de largura geradas ainda;
  entra junto da integração real.
- Ícones (CX08/CX09) — **pausados por decisão explícita** (item 4,
  2026-07-17): não produzir agora. Reavaliar depois que CX01–CX07
  estiverem no ar e a página puder ser vista com eles — se ainda parecer
  que falta reforço visual em "O problema" ou "Características", retoma-se
  o brief a partir do sistema já especificado abaixo.

---

## Ícones (CX08 e CX09) — sistema, caso você decida produzir

Não produzidos automaticamente, conforme instrução. Caso aprove, o
sistema único a seguir é:

- SVG, estilo linear (só traço, sem preenchimento sólido);
- espessura de traço única, 2 px num grid de 24×24;
- terminações de linha arredondadas, consistentes entre todos;
- cor principal: grafite `#1E2229`; amarelo `#FAEE1E` **só** como destaque
  pontual (nunca o ícone inteiro em amarelo, e nunca amarelo sobre fundo
  claro, por regra de contraste já registrada em `global.css`);
- sem emoji, sem misturar com outra biblioteca de ícones.

Conceitos, caso aprovado:
- **CX08** (características): "ajuste simples" (BS-40), "ajuste fino +
  temporização" (MI-400), "controle manual / chave" (SR-03) — 3 ícones,
  1 por modelo, reforçando a diferença já mostrada na comparação.
- **CX09** (problema): "luz esquecida acesa", "interruptor de difícil
  acesso", "caixa 4×2 sem obra" — 3 ícones, 1 por item do `.factor-list`.

Nenhum destes tem brief de produção nesta entrega (só CX01–CX07, os
essenciais). Se aprovar a produção, retorno com brief individual no
mesmo padrão.

---

# Página: `aplicacoes/teto.html`

> Estrutura de referência: HTML aprovado em 2026-07-17 (H1 único; H2 por
> seção; H3 por situação — sobrepor, forro, 360°, ultrassônico; H4 por
> produto dentro dos cards). Nenhum `<img>`/`<picture>` inserido nesta
> etapa. Fontes: aba `Especificacoes` da planilha canônica (CS-5, TC-5,
> BS-50, MI-500, STI-550, TKR, TKT, MU-500, MU-600), `Arquivos/Midia/*`
> (conferido nesta sessão) e o manifesto de `caixa-4x2.html` acima
> (mesmo método, mesmos códigos de campo).

## 1. Avaliação por grupo de solução

| Grupo (H3) | Produtos | Foto frontal já basta? | Precisa de diagrama? | Motivo |
|---|---|---|---|---|
| Sobrepor | BS-50, MI-500 (+ nota CS-5/TC-5) | **Sim**, para BS-50 e MI-500 — visualmente quase idênticos, a diferença é interna (ajuste/temporização), já explicada em texto | Não, além do diagrama geral sobrepor×embutir (item 2) | O hero já estabelece "sensor de sobrepor no teto"; não precisa de 2ª foto instalada aqui |
| Forro (embutir) | STI-550 | **Não** — o STI-550 é um disco embutido, quase invisível de frente; uma foto frontal isolada não comunica "isso entra dentro do forro" | **Sim** — diagrama sobrepor × embutir | É exatamente o caso que você descreveu: forma de instalação não compreensível só pela foto frontal |
| Cobertura 360° | TKR, TKT | Sim, para reconhecer/diferenciar os 2 produtos | **Sim** — diagrama cobertura direcionada × 360° | A foto do produto não explica o conceito de "detecta ao redor"; isso é o que justifica escolher TKR/TKT em vez de um sensor frontal comum |
| Movimentação lenta/discreta | MU-500, MU-600 | **Sim** — os dois têm formato de sensor de teto comum, sem elemento visual que precise de diagrama | Não — o fenômeno (percepção de movimento sutil) não é fotografável nem vira diagrama sem virar ilustração decorativa, que você pediu para evitar | Nenhum ativo novo além das 2 fotos de produto |

Conclusão: **não** criei uma imagem diferente por grupo só para preencher espaço — 2 dos 4 grupos (sobrepor, ultrassônico) só precisam da foto de produto; os outros 2 (forro, 360°) precisam de diagrama porque a foto frontal realmente não basta.

---

## 2. Ativos — especificação completa

### TT01 — Hero da página

- **Local exato:** `.hero-layout` (a criar, mesmo padrão de `caixa-4x2.html`), ao lado do H1/`hero-lead`.
- **Objetivo:** reconhecimento imediato de "isso é sobre sensor de teto", antes de ler o texto.
- **Conteúdo visual:** BS-50 instalado num teto real (alvenaria), visto de baixo/ângulo ¾.
- **Produto(s):** BS-50.
- **Tipo:** fotografia real, instalada (não still life).
- **Orientação:** paisagem ou quadrada (testar as duas, decidir pelo recorte responsivo).
- **Proporção:** 1:1 (mesmo padrão do hero de `caixa-4x2.html`, para consistência entre páginas).
- **Dimensão de exportação:** 1600 × 1600 px (fonte), WEBP.
- **Formato final:** WEBP.
- **Nome previsto:** `teto-hero-bs-50.webp`.
- **Fundo:** teto de alvenaria real, cor clara, sem textura chamativa.
- **Enquadramento:** produto ocupando 40–55% do quadro (mais aberto que o hero da caixa-4x2, porque aqui o contexto — "é o teto" — também precisa aparecer).
- **Iluminação:** difusa, sem sombra dura projetada no teto.
- **Devem aparecer:** o corpo do BS-50, o articulador, uma porção real do teto ao redor.
- **Não podem aparecer:** fios soltos/aparentes, ferramentas, qualquer pessoa, decoração de ambiente (luminária, ventilador de teto etc. competindo com o produto).
- **Alt proposto:** "Sensor de movimento BS-50 instalado no teto".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim — serve como imagem "instalada" da futura página do BS-50.
- **Dependências:** nenhuma — nenhuma foto instalada de BS-50 existe hoje (`Arquivos/Midia/BS-50/` só tem arte de solapa/embalagem, não fotografia de produto — ver §6).

### TT02 — Foto produto BS-50 (card, situação sobrepor)

- **Local exato:** `#situacao-sobrepor .spec-card:nth-child(1)`.
- **Objetivo:** mostrar o produto exato, permitir comparação com MI-500.
- **Conteúdo visual:** BS-50, frontal, still life.
- **Produto(s):** BS-50.
- **Tipo:** fotografia real, still life.
- **Orientação:** quadrada.
- **Proporção:** 1:1.
- **Dimensão de exportação:** 1000 × 1000 px, WEBP.
- **Formato final:** WEBP.
- **Nome previsto:** `bs-50-frontal.webp`.
- **Fundo:** cinza técnico `#F4F5F7`, liso.
- **Enquadramento:** produto centralizado, margem igual nos 4 lados (mín. 15%).
- **Iluminação:** difusa, sem reflexo forte na lente.
- **Devem aparecer:** lente circular, articulador, corpo branco real.
- **Não podem aparecer:** fios (escondidos — o objetivo aqui é acabamento frontal, não instalação).
- **Alt proposto:** "Sensor de movimento BS-50, vista frontal".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim — é a foto principal que a futura página do BS-50 vai usar.
- **Dependências:** nenhuma.

### TT03 — Foto produto MI-500 (card, situação sobrepor)

**Atualização (2026-07-18): ativo compartilhado, não gera arquivo
próprio.** BS-50 e MI-500 têm o mesmo invólucro físico (`dimensoes_mm` e
`cores_disponiveis` idênticos na planilha: 65 × 55 × 76 mm, Branca) — ver
"Fotos de produto compartilhadas entre SKUs de mesmo invólucro", no
início deste documento. TT03 reutiliza o mesmo arquivo do TT02
(`bs-50-frontal.webp`); não precisa de sessão de foto própria.

- **Local exato:** `#situacao-sobrepor .spec-card:nth-child(2)`.
- **Objetivo:** mostrar o produto exato; permitir notar que é visualmente quase idêntico ao BS-50 (a diferença é interna).
- **Conteúdo visual:** idêntico ao TT02 — BS-50 e MI-500 têm o mesmo invólucro.
- **Produto(s):** MI-500 (mesmo invólucro do BS-50).
- **Tipo:** fotografia real — mesmo arquivo do TT02, não é sessão própria.
- **Orientação:** quadrada. **Proporção:** 1:1. **Dimensão:** 1000 × 1000 px, WEBP.
- **Nome previsto:** `bs-50-frontal.webp` (**reutilizado, não gera arquivo próprio**).
- **Fundo:** idêntico ao TT02.
- **Enquadramento / iluminação:** idênticos ao TT02 (mesmo arquivo).
- **Devem aparecer:** lente circular, articulador, corpo branco real.
- **Não podem aparecer:** fios.
- **Alt proposto:** "Sensor de movimento MI-500, vista frontal".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim.
- **Dependências:** nenhuma.

### TT04 — Foto produto STI-550 (card, situação forro)

- **Local exato:** `#situacao-forro .spec-card`.
- **Objetivo:** mostrar o produto exato — mesmo sabendo que a foto frontal sozinha não explica a instalação (ver TT05).
- **Conteúdo visual:** STI-550, frontal, still life — disco circular.
- **Produto(s):** STI-550.
- **Tipo:** fotografia real, still life.
- **Orientação:** quadrada. **Proporção:** 1:1. **Dimensão:** 1000 × 1000 px, WEBP.
- **Nome previsto:** `sti-550-frontal.webp`.
- **Fundo:** cinza técnico `#F4F5F7`.
- **Enquadramento:** produto centralizado; como é menor/mais fino (Ø 70 × 37 mm), aproximar um pouco mais que TT02/TT03 para manter escala visual equivalente no card.
- **Iluminação:** difusa.
- **Devem aparecer:** a face circular visível após instalado, o furo/lente central.
- **Não podem aparecer:** fios; parte do corpo que fica embutida no forro (não é o que se vê depois de instalado).
- **Alt proposto:** "Sensor de movimento STI-550, vista frontal (parte visível após embutido no forro)".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim.
- **Dependências:** nenhuma.

### TT05 — Diagrama: instalação de sobrepor × embutir

- **Local exato:** seção "A solução Tektron", entre `#situacao-sobrepor` e `#situacao-forro` (funciona como transição entre os dois primeiros grupos) — ou dentro de `#situacao-forro`, logo após o parágrafo do STI-550. Recomendo dentro de `#situacao-forro`, por ser onde a lacuna de compreensão realmente existe.
- **Objetivo:** explicar a diferença física entre instalar de sobrepor (BS-50/MI-500, na superfície do teto) e embutir (STI-550, dentro do forro) — sem isso, a foto frontal do STI-550 não faz sentido sozinha.
- **Conteúdo visual:** 2 cortes/vistas simples lado a lado — (1) sensor de sobrepor sobre a superfície do teto; (2) STI-550 embutido, com a parte visível e a parte interna ao forro indicadas.
- **Produto(s):** BS-50 (representando sobrepor) e STI-550 (embutir).
- **Tipo:** diagrama técnico (SVG), não fotografia.
- **Orientação:** paisagem (2 painéis lado a lado).
- **Proporção:** ~2:1. **Dimensão:** viewBox 1000 × 500.
- **Formato final:** SVG.
- **Nome previsto:** `teto-sobrepor-x-embutir.svg`.
- **Fundo:** branco `#FFFFFF`.
- **Enquadramento:** corte simples, sem perspectiva complexa.
- **Iluminação:** N/A (ilustração linear).
- **Devem aparecer:** a superfície do teto/forro em corte, o produto em cada situação, rótulo de texto ("sobrepor" / "embutir").
- **Não podem aparecer:** ferramentas, mão humana, fotorrealismo.
- **Alt proposto:** "Comparação entre instalação de sobrepor e instalação embutida no forro".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim — útil na futura página do STI-550 e na futura página de categoria "Infravermelho".
- **Dependências:** nenhuma técnica. Nota de produção: existe arte de referência **não reutilizável diretamente** em `Arquivos/Midia/BS-50/esquema_instalacao_21x50mm.svg` e `instalacao.svg` — são ilustrações da solapa/embalagem do BS-50 (em edição pela Fernanda, ver memória do projeto), registro de estilo, não substituem este diagrama.

### TT06 — Foto produto TKR (card, situação 360°)

- **Local exato:** `#situacao-360 .spec-card:nth-child(1)`.
- **Objetivo:** mostrar o produto exato; permitir comparação com TKT.
- **Conteúdo visual:** TKR, frontal, still life.
- **Produto(s):** TKR. **Tipo:** fotografia real, still life.
- **Orientação:** quadrada. **Proporção:** 1:1. **Dimensão:** 1000 × 1000 px, WEBP.
- **Nome previsto:** `tkr-frontal.webp`.
- **Fundo:** cinza técnico `#F4F5F7`.
- **Enquadramento:** produto centralizado; TKR é menor (39×36×40 mm) — aproximar a câmera para manter escala visual equivalente aos demais cards da página.
- **Iluminação:** difusa.
- **Devem aparecer:** corpo branco/preto real, articulador.
- **Não podem aparecer:** fios.
- **Alt proposto:** "Sensor de movimento TKR, vista frontal".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim.
- **Dependências:** nenhuma.

### TT07 — Foto produto TKT (card, situação 360°)

- **Local exato:** `#situacao-360 .spec-card:nth-child(2)`.
- **Objetivo:** mostrar o produto exato — visualmente quase idêntico ao TKR, sem articulador visível.
- **Conteúdo visual:** TKT, frontal, still life — mesmo ângulo/escala/fundo do TT06.
- **Produto(s):** TKT. **Tipo:** fotografia real, mesma sessão do TT06.
- **Orientação:** quadrada. **Proporção:** 1:1. **Dimensão:** 1000 × 1000 px, WEBP.
- **Nome previsto:** `tkt-frontal.webp`.
- **Fundo/enquadramento/iluminação:** idênticos ao TT06.
- **Devem aparecer:** corpo branco/preto real (sem articulador — diferença real do TKR).
- **Não podem aparecer:** fios.
- **Alt proposto:** "Sensor de movimento TKT, vista frontal".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim.
- **Dependências:** nenhuma.

### TT08 — Diagrama: cobertura direcionada × cobertura 360°

- **Local exato:** dentro de `#situacao-360`, logo após o parágrafo introdutório do TKR/TKT, antes dos cards.
- **Objetivo:** explicar visualmente por que escolher 360° — o que uma foto de produto não comunica.
- **Conteúdo visual:** vista de cima (planta baixa simplificada) — (1) sensor frontal comum, com um cone de detecção voltado para um lado; (2) sensor 360°, com círculo de detecção ao redor do ponto de instalação.
- **Produto(s):** genérico (não é sobre um modelo específico, é sobre o conceito de cobertura) — TKR como rótulo do exemplo 360°.
- **Tipo:** diagrama técnico (SVG).
- **Orientação:** paisagem (2 painéis lado a lado). **Proporção:** ~2:1. **Dimensão:** viewBox 1000 × 500.
- **Formato final:** SVG. **Nome previsto:** `cobertura-direcionada-x-360.svg`.
- **Fundo:** branco `#FFFFFF`.
- **Enquadramento:** planta baixa simples, sem perspectiva 3D.
- **Devem aparecer:** o ponto do sensor, a área de detecção (cone vs. círculo), rótulo de texto em cada painel.
- **Não podem aparecer:** fotorrealismo, pessoas, mobília detalhada.
- **Alt proposto:** "Comparação entre cobertura direcionada e cobertura 360° ao redor do ponto de instalação".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim — útil nas futuras páginas do TKR, TKT e na página de categoria Doppler; também relevante para `grandes-ambientes.html` (mesma tecnologia).
- **Dependências:** nenhuma.

### TT09 — Foto produto MU-500 (card, situação ultrassônico)

- **Local exato:** `#situacao-ultrassonico .spec-card:nth-child(1)`.
- **Objetivo:** mostrar o produto exato.
- **Conteúdo visual:** MU-500, frontal, still life.
- **Produto(s):** MU-500. **Tipo:** fotografia real, still life.
- **Orientação:** quadrada. **Proporção:** 1:1. **Dimensão:** 1000 × 1000 px, WEBP.
- **Nome previsto:** `mu-500-frontal.webp`.
- **Fundo:** cinza técnico `#F4F5F7`. **Enquadramento:** igual ao padrão dos demais cards.
- **Iluminação:** difusa.
- **Devem aparecer:** corpo branco real, articulador.
- **Não podem aparecer:** fios; qualquer elemento sugerindo "ondas sonoras" ou efeito gráfico não documentado.
- **Alt proposto:** "Sensor de movimento ultrassônico MU-500, vista frontal".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim.
- **Dependências:** nenhuma.

### TT10 — Foto produto MU-600 (card, situação ultrassônico)

- **Local exato:** `#situacao-ultrassonico .spec-card:nth-child(2)`.
- **Objetivo:** mostrar o produto exato — diferencial real (fotocélula integrada) deve ser visível se houver abertura externa para o sensor de luminosidade.
- **Conteúdo visual:** MU-600, frontal, still life — mesmo ângulo/escala/fundo do TT09.
- **Produto(s):** MU-600. **Tipo:** fotografia real, mesma sessão do TT09.
- **Orientação:** quadrada. **Proporção:** 1:1. **Dimensão:** 1000 × 1000 px, WEBP.
- **Nome previsto:** `mu-600-frontal.webp`.
- **Fundo/enquadramento/iluminação:** idênticos ao TT09.
- **Devem aparecer:** corpo branco real, abertura da fotocélula (se visível externamente).
- **Não podem aparecer:** fios.
- **Alt proposto:** "Sensor de movimento ultrassônico MU-600, com fotocélula integrada, vista frontal".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim.
- **Dependências:** nenhuma.

### TT11 — Diagrama elétrico 127 V / 220 V

- **Local exato:** seção "Instalação e ligação elétrica", depois da `<dl>` de cores de fio.
- **Objetivo:** explicar a ligação real — idêntica nos 9 modelos da página (fase vermelho, neutro/2ª fase preto, retorno verde), variando só o comprimento do fio (20 cm ou 30 cm, já registrado em texto).
- **Conteúdo visual:** 2 painéis (127 V / 220 V), sensor + lâmpada + fios rotulados por texto e cor.
- **Produto(s):** genérico — vale para os 9 modelos (CS-5, TC-5, BS-50, MI-500, STI-550, TKR, TKT, MU-500, MU-600).
- **Tipo:** diagrama técnico (SVG).
- **Orientação:** paisagem. **Proporção:** ~2:1. **Dimensão:** viewBox 1000 × 500.
- **Formato final:** SVG. **Nome previsto:** `ligacao-3-fios-127-220.svg` (**arquivo compartilhado**, não exclusivo desta página — ver "Ativos Compartilhados entre Páginas").
- **Caminho:** `assets/images/diagramas/ligacao-3-fios-127-220.svg` (fora da pasta `aplicacoes/teto/`, por ser transversal).
- **Fundo:** branco `#FFFFFF`.
- **Devem aparecer:** os 3 fios rotulados (texto + cor), sensor, lâmpada.
- **Não podem aparecer:** disjuntor/quadro elétrico (fora do escopo desta página); cor como única forma de identificar o fio.
- **Alt proposto:** "Diagrama de ligação elétrica em 127 V e 220 V: fase, neutro ou 2ª fase, e retorno para a lâmpada".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim, nas 9 páginas de produto desta família e nas 4 páginas de produto correspondentes aos modelos de `externo.html`.
- **Dependências:** **resolvida nesta entrega** — os três códigos abaixo usam exatamente o mesmo arquivo físico, `ligacao-3-fios-127-220.svg`: CX06 (`caixa-4x2.html`), TT11 (`teto.html`), EX09 (`externo.html`). Produzir uma única vez; nenhum template duplicado.

### TT12 — Imagem Open Graph

- **Local exato:** `<meta property="og:image">` (a criar no `<head>` — hoje ausente, mesma situação da `caixa-4x2.html`).
- **Objetivo:** boa leitura ao compartilhar o link (WhatsApp etc.).
- **Conteúdo visual:** ver decisão na seção 4 abaixo (BS-50 principal; STI-550 como 2º elemento se não prejudicar a leitura).
- **Produto(s):** BS-50 (+ STI-550, condicional).
- **Tipo:** composição fotográfica (reaproveitando TT01/TT02/TT04, depois de produzidas).
- **Orientação:** paisagem. **Proporção:** 1200:630 exato.
- **Dimensão de exportação:** 1200 × 630 px.
- **Formato final:** JPG.
- **Nome previsto:** `teto-og.jpg`.
- **Fundo:** branco `#FFFFFF` ou cinza técnico `#F4F5F7`.
- **Enquadramento:** produto(s) ocupando ~50% do quadro; texto "Sensor de movimento para teto" grande, uma linha.
- **Iluminação:** igual às fotos de produto.
- **Devem aparecer:** BS-50 (sempre); nome Tektron.
- **Não podem aparecer:** diagrama elétrico, specs pequenas, mais de 2 produtos.
- **Alt proposto:** "Sensor de movimento Tektron para instalação no teto".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** não (é específica de compartilhamento desta página).
- **Dependências:** TT01 ou TT02/TT04 prontas primeiro (é composição, não sessão nova).

### TT13 — Foto linha compacta CS-5/TC-5 (complementar)

- **Local exato:** nenhum hoje — a página só menciona CS-5/TC-5 em nota de texto (`.solution-note`), sem card.
- **Objetivo:** reserva para uso futuro (página de produto ou expansão do grupo "sobrepor" com card próprio).
- **Conteúdo visual:** CS-5 e TC-5, frontal, still life, mesmo padrão dos demais.
- **Produto(s):** CS-5, TC-5.
- **Tipo:** fotografia real. **Proporção:** 1:1. **Dimensão:** 1000 × 1000 px, WEBP.
- **Nome previsto:** `cs-5-frontal.webp`, `tc-5-frontal.webp`.
- **Fundo/enquadramento/iluminação:** mesmo padrão do TT02/TT03.
- **Alt proposto:** "Sensor de movimento CS-5, vista frontal" / "..., TC-5, vista frontal".
- **Prioridade:** Complementar — não bloqueia a publicação; a nota de texto já é suficiente sem card dedicado.
- **Reutilização em página de produto:** sim — é o principal motivo de produzir agora, se a sessão de fotos dos outros 7 modelos já estiver montada.
- **Dependências:** nenhuma técnica; só depende de prioridade de agenda.

---

## 3. Classificação

**Essenciais para publicar:** TT01 (hero), TT02 (BS-50), TT03 (MI-500), TT04 (STI-550), TT05 (diagrama sobrepor×embutir), TT06 (TKR), TT07 (TKT), TT08 (diagrama cobertura), TT09 (MU-500), TT10 (MU-600), TT11 (diagrama elétrico), TT12 (Open Graph).

**Complementares posteriores:** TT13 (CS-5/TC-5) — não produzida agora, sem prejuízo à publicação.

Nenhum ícone decorativo foi incluído nesta etapa, conforme instrução.

---

## 4. Decisão do hero e justificativa

**Decisão: TT01 — fotografia única do BS-50 instalado no teto** (não a composição com os 4 modelos principais).

**Justificativa:**
- **Equilíbrio real entre produtos:** BS-50, STI-550, TKR e MU-500 têm formatos muito diferentes entre si — STI-550 é um disco embutido que fica quase invisível de frente; TKR é um terço do tamanho dos outros (39×36×40 mm vs. ~65 mm). Colocar os 4 lado a lado criaria desequilíbrio visual real (o STI-550 "sumiria" ao lado dos outros), não só uma escolha estética.
- **Clareza em tela pequena:** 1 produto, com contexto (o teto real ao redor), é reconhecível em 1 segundo. 4 produtos de tamanhos e formatos diferentes exigem mais tempo de leitura — o oposto do que um hero deve fazer.
- **Reconhecimento imediato da aplicação:** um sensor visivelmente instalado no teto comunica "isso é sobre teto" mais rápido que 4 produtos isolados sobre fundo neutro (que poderiam ser confundidos com qualquer página de categoria de produto).
- **Consistência editorial:** seguo o mesmo padrão já aprovado no hero de `caixa-4x2.html` (1 produto principal, instalado, sem composição múltipla) — mantém o "padrão Tektron" reconhecível entre as páginas de Aplicações.
- **Viabilidade de produção:** 1 sessão de foto instalada é factível com o Galaxy Note 10 (ver lista de captação, item 6); uma composição equilibrada com 4 formatos tão diferentes exigiria tratamento gráfico mais complexo (redimensionar/compor depois), risco maior de ficar com "cara de colagem".

Os outros 3 modelos (STI-550, TKR, MU-500) continuam obtendo reconhecimento visual próprio — só não é no hero, e sim nos cards de cada situação (TT04, TT06, TT09), que é onde a comparação entre eles de fato acontece.

---

## 5. Decisão da imagem Open Graph

**Decisão: TT12 — BS-50 como produto principal; STI-550 como 2º elemento, condicional ao teste de legibilidade.**

Mesma lógica do hero: testar primeiro com BS-50 + STI-550 (2 formas visualmente distintas — retangular de sobrepor e disco embutido — comunicam "mais de um jeito de instalar no teto" sem precisar dos 4). Se mesmo essa combinação de 2 ficar carregada em miniatura (teste obrigatório a ~300 px, igual ao critério já usado em `caixa-4x2.html`), **reduzir para BS-50 sozinho** — o texto "Sensor de movimento para teto" já comunica a variedade, a imagem não precisa provar isso sozinha.

Não testo com os 4 modelos como composição principal, pelos mesmos motivos de desequilíbrio de forma/tamanho do item 4 — seria repetir o mesmo risco que já descartei no hero.

---

## 6. Fotografias que precisam ser produzidas

Nenhuma fotografia de produto existe hoje para nenhum dos 9 modelos desta página.
Conferido: `Arquivos/Midia/BS-50/` tem 12 arquivos, mas são todos arte de
embalagem/solapa (SVGs de ícones, tabela de dados técnicos, PDF de
datasheet) — **não são fotografias do produto** e não substituem TT01/TT02.
As pastas de MI-500, STI-550, TKR, TKT, MU-500 e MU-600 estão vazias.

Sequência de captação (Galaxy Note 10), mesma disciplina da caixa-4x2
(mesma distância, altura, iluminação, fundo, escala entre fotos do mesmo
grupo; fios escondidos nas fotos frontais; recorte 1:1; exportação WEBP):

| # | Modelo | Enquadramento | Observação |
|---|---|---|---|
| 1 | BS-50 | Frontal, still life | Base de comparação de toda a sessão (mesmo fundo/luz pras próximas) |
| 2 | MI-500 | Frontal, idêntico à foto 1 | Precisa parecer fotografado junto com o BS-50 |
| 3 | STI-550 | Frontal, still life | Produto menor/mais fino — aproximar a câmera pra manter escala visual |
| 4 | TKR | Frontal, still life | Produto pequeno (39×36×40 mm) — aproximar a câmera |
| 5 | TKT | Frontal, idêntico à foto 4 | Sem articulador — diferença real a registrar |
| 6 | MU-500 | Frontal, still life | — |
| 7 | MU-600 | Frontal, idêntico à foto 6 | Registrar a abertura da fotocélula, se visível externamente |
| 8 | BS-50 | ¾, instalado num teto real | Para o hero (TT01) — sessão separada, precisa de um teto de teste montado |

Complementar (não bloqueia publicação): CS-5 e TC-5, frontal, mesmo padrão — só se a agenda permitir na mesma sessão.

---

## 7. Fotografias existentes que podem ser reutilizadas

**Nenhuma.** Verificação feita em `Arquivos/Midia/` para os 9 modelos desta
página: só a pasta do BS-50 tem conteúdo, e é arte de solapa/embalagem
(em edição pela Fernanda — ver `projeto_solapa_bs50_svg` na memória do
projeto), não fotografia de produto. As pastas de CS-5, TC-5, MI-500,
STI-550, TKR, TKT, MU-500 e MU-600 estão vazias. As 8 fotos do item 6 são
todas novas.

---

## 8. Diagramas necessários

- **TT05** — sobrepor × embutir (novo).
- **TT08** — cobertura direcionada × 360° (novo).
- **TT11** — ligação elétrica 127 V / 220 V. **Mesmo arquivo compartilhado
  por CX06 (`caixa-4x2.html`) e EX09 (`externo.html`)**
  (`ligacao-3-fios-127-220.svg`) — não é um diagrama novo e separado, ver
  "Ativos Compartilhados entre Páginas".

Nenhum diagrama existente pode ser reaproveitado diretamente — os SVGs em
`Arquivos/Midia/BS-50/` (`esquema_instalacao_21x50mm.svg`, `instalacao.svg`)
são arte de embalagem, em outro registro visual (ícone de solapa, não
diagrama de página web) e ainda em edição.

---

## 9. Ordem recomendada de produção

1. **Fotos de produto (still life), 1 sessão só:** TT02, TT03, TT04, TT06,
   TT07, TT09, TT10 (7 modelos — mesmo fundo/luz montados uma vez).
2. **Foto instalada do BS-50** (TT01/hero) — sessão separada, exige montar
   um teto de teste.
3. **TT12 (Open Graph)** — composição a partir das fotos 1–2, não é sessão
   nova.
4. **TT05 e TT08 (diagramas de conceito)** — podem ser produzidos em
   paralelo às fotos, não dependem delas.
5. **TT11 (diagrama elétrico)** — é o mesmo arquivo do CX06 e do EX09
   (`ligacao-3-fios-127-220.svg`); produzir uma única vez, serve às 3
   páginas de aplicações.
6. **TT13 (CS-5/TC-5)** — complementar, só se sobrar tempo na sessão do
   passo 1.

---

# Página: `aplicacoes/externo.html`

> Estrutura de referência: HTML aprovado em 2026-07-17 (H1 único; H2 por
> seção — Escolha rápida, Problema, Impacto, Solução Tektron,
> Características, Instalação, Resultado, Fabricação/Suporte, FAQ, Outras
> páginas, CTA; H3 por situação — movimento, luminosidade; H4 por produto
> nos cards). Nenhum `<img>`/comentário de integração inserido nesta
> etapa — só planejamento. Fontes: aba `Especificacoes` da planilha
> canônica (FC-10, FC-15, ME-60, ME-70), decisão já registrada no
> canônico sobre o ME-60 (parede principal, teto só em área coberta),
> `Arquivos/Midia/*` (conferido nesta sessão: as 4 pastas — ME-60, ME-70,
> FC-10, FC-15 — estão vazias).

## 1. Verificação de reutilização (antes de tudo)

Conferido nesta sessão, `Arquivos/Midia/`:

| Produto | Conteúdo da pasta | Reutilizável? |
|---|---|---|
| ME-60 | Vazia | Não há nada — foto nova |
| ME-70 | Vazia | Não há nada — foto nova |
| FC-10 | Vazia | Não há nada — foto nova |
| FC-15 | Vazia | Não há nada — foto nova |

Diferente do BS-50 (que tinha arte de solapa/embalagem, não confundida
com fotografia real — ver manifesto de `caixa-4x2.html`/`teto.html`),
nenhum dos 4 produtos desta página tem qualquer arquivo — nem solapa, nem
desenho técnico, nem render. **As 4 fotografias frontais e a foto
instalada são 100% novas.**

---

## 2. Ativos — especificação completa

### EX01 — Hero da página (composição editorial em dois painéis)

**Ajuste desta rodada:** EX01 deixou de ser uma composição still life
dos dois produtos numa mesma cena física lado a lado. Motivo: ME-60
(74×56×80 mm) e FC-10 (24×26×24 mm) têm diferença real de tamanho grande
o bastante para que, numa mesma cena, o FC-10 fique visualmente
irrelevante — especialmente no celular, onde o hero é exibido pequeno.
Aumentar o FC-10 artificialmente para equilibrar a composição foi
descartado, porque isso falsificaria a escala real do produto. A solução
é separar os dois produtos em painéis distintos, cada um com seu próprio
enquadramento.

- **Página e posição:** `aplicacoes/externo.html`, ao lado do H1/`hero-lead` (dentro de um `.hero-layout` a criar — dois painéis lado a lado no desktop, empilhados no mobile).
- **Objetivo:** comunicar, em painéis claramente separados, as duas soluções da página — movimento (ME-60) e luminosidade (FC-10) — garantindo que os dois produtos sejam reconhecíveis, inclusive no celular, sem sugerir comparação de tamanho físico entre eles.
- **Conteúdo visual:** duas fotografias reais, independentes — painel 1: ME-60, representando acionamento por movimento; painel 2: FC-10, representando acionamento por luminosidade.
- **Produto(s):** ME-60 (painel 1) e FC-10 (painel 2).
- **Tipo:** fotografia real (2 arquivos) — sem mockup 3D, sem cenário doméstico, sem pessoas.
- **Orientação:** cada painel em formato próprio (testar quadrado ou retrato por painel); os 2 painéis lado a lado no desktop, empilhados no mobile.
- **Proporção:** 1:1 por painel (mesmo padrão dos demais heros do site).
- **Dimensão de exportação:** 1600 × 1600 px (fonte) por painel, WEBP.
- **Formato final:** WEBP (2 arquivos).
- **Nome previsto:** `externo-hero-me-60.webp` (painel 1), `externo-hero-fc-10.webp` (painel 2).
- **Fundo:** mesmo fundo técnico `#F4F5F7` nos dois painéis — mesma sessão, mesmo padrão de iluminação, para reforçar que é uma peça editorial única, não duas fotos soltas.
- **Enquadramento:** independente por painel — ME-60 no enquadramento habitual (produto ocupando ~60–70% do quadro); FC-10 com câmera mais próxima (crop mais fechado), já que é fisicamente muito menor e precisa ficar reconhecível no mesmo espaço de exibição. A aproximação é de enquadramento/câmera, nunca de escala do objeto — o produto não pode ser fisicamente aumentado nem redesenhado maior.
- **Iluminação:** mesmo padrão de luz difusa nos dois painéis (mesma sessão, mesma configuração de luz).
- **Devem aparecer:** os 2 produtos reais, cada um nítido e reconhecível no próprio painel; uma separação visual explícita entre os painéis (gutter, borda ou faixa de fundo que marque os dois quadros como peças distintas).
- **Não podem aparecer:** os outros 2 produtos (ME-70, FC-15) — ficam para os cards; mockup 3D; cenário doméstico; pessoas; texto técnico pequeno dentro da imagem; qualquer aumento ou deformação dos produtos; e — proibição explícita — a composição não pode parecer uma única fotografia física dos dois produtos apoiados lado a lado (isso reintroduziria o problema de escala que motivou a mudança).
- **Nota de escala (registrar sempre que este ativo for referenciado):** as dimensões relativas entre ME-60 e FC-10 **não devem ser inferidas** a partir da composição do hero — o enquadramento independente por painel existe para reconhecimento, não para proporção. As dimensões reais dos dois produtos continuam informadas só no conteúdo técnico das respectivas páginas de produto.
- **Alt proposto:** painel 1 — "Sensor de movimento ME-60, representando o acionamento por movimento"; painel 2 — "Fotocélula FC-10, representando o acionamento por luminosidade".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** parcial — cada painel, se enquadrado como os cards (EX02/EX04), pode ser reaproveitado; se o enquadramento do hero for mais fechado que o do card, produzir como ativo próprio.
- **Dependências:** nenhuma — a mesma sessão de foto de EX02/EX04 pode ser aproveitada, desde que cada painel receba seu próprio enquadramento final.

### EX02 — Foto produto ME-60 (card, situação movimento)

- **Página e posição:** `#situacao-movimento .spec-card:nth-child(1)`.
- **Objetivo:** mostrar o produto exato, permitir comparação com o ME-70.
- **Conteúdo visual:** ME-60, frontal, still life.
- **Produto(s):** ME-60. **Tipo:** fotografia real, still life.
- **Orientação:** quadrada. **Proporção:** 1:1. **Dimensão:** 1000 × 1000 px, WEBP.
- **Nome previsto:** `me-60-frontal.webp`.
- **Fundo:** cinza técnico `#F4F5F7`.
- **Enquadramento:** produto centralizado, margem mínima de 15%.
- **Iluminação:** difusa, sem reflexo forte na lente.
- **Devem aparecer:** lente circular, articulador, corpo real (branco, cinza ou preto — conferir cor da unidade fotografada).
- **Não podem aparecer:** fios (acabamento frontal, sem fiação à mostra).
- **Alt proposto:** "Sensor de movimento ME-60, vista frontal".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim.
- **Dependências:** nenhuma.

### EX03 — Foto produto ME-70 (card, situação movimento)

- **Página e posição:** `#situacao-movimento .spec-card:nth-child(2)`.
- **Objetivo:** mostrar o produto exato — a lente é Plana (diferente da lente Circular do ME-60), diferencial real a registrar.
- **Conteúdo visual:** ME-70, frontal, still life — mesmo ângulo/escala/fundo do EX02.
- **Produto(s):** ME-70. **Tipo:** fotografia real, mesma sessão do EX02.
- **Orientação:** quadrada. **Proporção:** 1:1. **Dimensão:** 1000 × 1000 px, WEBP.
- **Nome previsto:** `me-70-frontal.webp`.
- **Fundo/enquadramento/iluminação:** idênticos ao EX02.
- **Devem aparecer:** lente Plana (visivelmente diferente da lente Circular do ME-60), articulador.
- **Não podem aparecer:** fios.
- **Alt proposto:** "Sensor de movimento ME-70, vista frontal".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim.
- **Dependências:** nenhuma.

### EX04 — Foto produto FC-10 (card, situação luminosidade)

- **Página e posição:** `#situacao-luminosidade .spec-card:nth-child(1)`.
- **Objetivo:** mostrar o produto exato — o menor de todos os 4 (24×26×24 mm).
- **Conteúdo visual:** FC-10, frontal, still life.
- **Produto(s):** FC-10. **Tipo:** fotografia real, still life.
- **Orientação:** quadrada. **Proporção:** 1:1. **Dimensão:** 1000 × 1000 px, WEBP.
- **Nome previsto:** `fc-10-frontal.webp`.
- **Fundo:** cinza técnico `#F4F5F7`.
- **Enquadramento:** aproximar mais a câmera que nos outros 3 (produto bem menor) — mas sem inflar a escala aparente além do que a distância real permite; a diferença de tamanho real deve continuar honesta.
- **Iluminação:** difusa.
- **Devem aparecer:** corpo real, reconhecível como o produto (não depende de mostrar a célula fotossensível — revisado em 2026-07-21, a pedido de Fernanda: o público-alvo não identifica esse componente visualmente, então não é critério de aprovação); o fio de ligação (20 cm) — **correção 2026-07-21:** diferente dos sensores desta página, o FC-10 é ligado por fio próprio (confirmado por Fernanda: "fio, é com fio mesmo"), não por encaixe/twist-lock — o fio faz parte do reconhecimento físico do produto, não deve ser escondido.
- **Não podem aparecer:** conector de encaixe/twist-lock no lugar do fio (regra antiga, invertida nesta revisão).
- **Alt proposto:** "Relé fotoelétrico FC-10, vista frontal".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim.
- **Dependências:** foto nova — a única foto do site antigo (`fc10.jpg`) é de uma variante de encaixe/twist-lock, incompatível com o FC-10 atual (com fio). Não reutilizável.

### EX05 — Foto produto FC-15 (card, situação luminosidade)

- **Página e posição:** `#situacao-luminosidade .spec-card:nth-child(2)`.
- **Objetivo:** mostrar o produto exato — formato cilíndrico (Ø 80 × 80 mm), diferente do corpo do FC-10.
- **Conteúdo visual:** FC-15, frontal, still life.
- **Produto(s):** FC-15. **Tipo:** fotografia real, mesma sessão dos demais.
- **Orientação:** quadrada. **Proporção:** 1:1. **Dimensão:** 1000 × 1000 px, WEBP.
- **Nome previsto:** `fc-15-frontal.webp`.
- **Fundo:** cinza técnico `#F4F5F7`.
- **Enquadramento:** produto centralizado; é cilíndrico e maior que o FC-10 — não igualar a escala aparente artificialmente.
- **Iluminação:** difusa.
- **Devem aparecer:** corpo translúcido fosco real (**correção 2026-07-21:** planilha dizia "Cinza", Fernanda confirmou que é translúcido fosco — planilha já atualizada), corpo cilíndrico (não depende de mostrar a célula fotossensível — ver nota no EX04); o fio de ligação (20 cm) — **correção 2026-07-21:** mesmo caso do FC-10, o FC-15 é ligado por fio próprio (confirmado por Fernanda), não por encaixe/twist-lock — o fio faz parte do reconhecimento físico do produto.
- **Não podem aparecer:** conector de encaixe/twist-lock no lugar do fio (regra antiga, invertida nesta revisão).
- **Alt proposto:** "Relé fotoelétrico FC-15, vista frontal".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim.
- **Dependências:** nenhuma — `fc15.jpg` (com fio) do site antigo é a variante correta; `fc15t.jpg` (encaixe) é a variante descontinuada, não usar.

### EX06 — Foto instalada: ME-60 em teto externo coberto

- **Página e posição:** dentro de `#situacao-movimento`, após o parágrafo do ME-60/ME-70, antes dos cards.
- **Objetivo:** mostrar a característica real e não óbvia do ME-60 — aceitar instalação em teto quando a área externa é coberta (varanda, garagem, marquise, corredor externo coberto). Uma foto frontal isolada não comunica isso; é preciso ver o produto no contexto.
- **Conteúdo visual:** ME-60 instalado no teto de uma área externa coberta real (ex.: uma varanda ou garagem, com teto/laje visível).
- **Produto(s):** ME-60.
- **Tipo:** fotografia real, instalada.
- **Orientação:** paisagem ou quadrada — testar as duas.
- **Proporção:** 1:1 (padrão dos ativos "instalados" das outras páginas).
- **Dimensão de exportação:** 1200 × 1200 px, WEBP.
- **Formato final:** WEBP.
- **Nome previsto:** `me-60-instalado-teto-coberto.webp`.
- **Fundo:** teto/laje real de área externa coberta, clara, sem textura chamativa.
- **Enquadramento:** produto ocupando 30–45% do quadro — o contexto (teto + indício de "coberto", como uma viga ou borda de laje) também precisa aparecer, para justificar a legenda.
- **Iluminação:** natural difusa (luz de dia, sem sol direto duro).
- **Devem aparecer:** o ME-60 montado no teto, uma porção real do teto/laje, algum indício visual de "área coberta" (viga, beiral, ou vão de garagem/varanda).
- **Não podem aparecer:** chuva dramática encenada; fios soltos; ferramentas; pessoas.
- **Alt proposto:** "Sensor de movimento ME-60 instalado no teto de uma área externa coberta".
- **Prioridade:** Importante/complementar — reclassificado nesta rodada (não bloqueia publicação; ver justificativa em "Classificação" e em "Fotografias instaladas realmente necessárias").
- **Reutilização em página de produto:** sim — página futura do ME-60.
- **Dependências:** nenhuma técnica; produção exige uma área externa coberta real disponível para a foto (varanda, garagem ou corredor coberto).

### EX07 — Diagrama: pingadeira e entrada de água (correto × incorreto)

- **Página e posição:** dentro da seção "Instalação externa: cabo, entrada de água e pingadeira", logo após a lista de cuidados de instalação.
- **Objetivo:** mostrar visualmente a instalação correta do cabo — o que o texto já explica, mas que se beneficia de uma comparação visual direta.
- **Conteúdo visual:** 2 painéis lado a lado — (1) **correto**: equipamento na vertical, saída dos fios para baixo, formando a pingadeira, água escorrendo e pingando antes de chegar ao equipamento; (2) **incorreto**: equipamento com saída dos fios para cima ou de lado, água escorrendo pelo cabo até dentro do equipamento.
- **Produto(s):** representativo — usar a silhueta real do ME-60 (fiel, baseada na foto EX02, não um retângulo genérico), com nota de que o princípio vale para os 4 modelos da página.
- **Tipo:** diagrama técnico (SVG), com contorno fiel ao produto real (não formato genérico).
- **Orientação:** paisagem (2 painéis lado a lado).
- **Proporção:** ~2:1. **Dimensão:** viewBox 1000 × 500.
- **Formato final:** SVG.
- **Nome previsto:** `pingadeira-instalacao-correta-x-incorreta.svg`.
- **Fundo:** branco `#FFFFFF`.
- **Enquadramento:** corte simples, sem perspectiva complexa; setas indicando o caminho da água em cada painel.
- **Devem aparecer:** o equipamento (silhueta fiel), o cabo, a seta do caminho da água, rótulo de texto "correto"/"incorreto" (não confiar só em cor ou símbolo de check/x).
- **Não podem aparecer:** aparência infantil (traços grossos tipo desenho animado); fotorrealismo; qualquer produto com formato inventado.
- **Alt proposto:** "Comparação entre instalação correta (fios para baixo, formando pingadeira) e incorreta (água escorrendo até o equipamento)".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim — útil nas 4 futuras páginas de produto e potencialmente na página de Suporte Técnico (erros comuns de instalação).
- **Dependências:** depende de **duas** referências, nenhuma delas suficiente sozinha:
  1. a foto EX02 (ME-60 frontal, still life) — para a silhueta frontal fiel;
  2. uma **foto técnica de referência adicional**, só para uso interno da produção do vetor — ver brief completo logo abaixo ("Referência fotográfica adicional para EX07"). Sem essa segunda foto, a IA/ilustrador tende a inventar a saída dos fios, o que compromete a fidelidade do diagrama.

**Referência fotográfica adicional para EX07 (não é ativo publicado):**

- **Objetivo:** fornecer à IA/ilustrador uma referência real da saída dos fios do ME-60, para que o diagrama de pingadeira não invente essa parte do produto.
- **Conteúdo:** foto técnica mostrando — saída dos fios; parte inferior ou traseira relevante do ME-60; direção natural do cabo; relação entre o cabo e o corpo do equipamento.
- **Nome interno sugerido:** `referencia-me-60-saida-fios.jpg`.
- **Uso:** somente como referência interna para o desenho vetorial do EX07 — não é exportada em WebP, não é publicada no site, não entra na lista de ativos visíveis da página.
- **Requisito de fidelidade:** deve manter o formato real do produto e mostrar detalhe suficiente (fios, direção do cabo, ponto de saída) para eliminar ambiguidade na hora de desenhar o vetor.
- **Prioridade:** obrigatória para a produção correta do EX07 — mas não conta como ativo essencial de publicação (não é visível na página).

### EX08 — Matriz de pontos de instalação compatíveis (parede × poste × teto coberto) — não é ativo de imagem

**Reclassificação desta rodada: não é ativo de imagem.** EX08 contém
informação puramente textual/tabular (compatibilidade de instalação por
modelo) — não deve ser produzido como SVG. Cruzar 4 modelos × 3 pontos
de instalação é exatamente o tipo de conteúdo que uma tabela HTML
semântica resolve melhor que um diagrama: SVG esconde o texto de leitor
de tela e de busca; tabela expõe o dado nativamente, com acessibilidade
e responsividade de graça.

**Classificação:** "Melhoria estrutural em HTML — não é arquivo de
imagem." Não conta como fotografia, diagrama SVG ou ativo essencial de
produção visual.

**Não alterar `externo.html` agora** — esta seção só corrige a
classificação no manifesto; a implementação da tabela aguarda
autorização separada.

- **Página e posição (quando implementada):** dentro da seção "Características que orientam a escolha", logo após o parágrafo introdutório, antes da lista de critérios.
- **Objetivo:** evitar erro real de escolha — a compatibilidade de ponto de instalação **não é igual** entre os 4 modelos (ex.: ME-60 não vai em poste; ME-70 e as fotocélulas não vão no teto), e essa assimetria não é óbvia a partir do nome dos produtos.
- **Conteúdo:** grade/matriz — 4 linhas (ME-60, ME-70, FC-10, FC-15) × 3 colunas (Parede, Poste, Teto em área coberta), com marcação clara de "compatível" ou "não indicado" em cada célula, **por texto**, não só por ícone ou cor.
- **Produto(s):** ME-60, ME-70, FC-10, FC-15 — validado na planilha (campo `instalacao`):
  - ME-60: "Teto ou parede (sobrepor)" → parede sim, teto coberto sim, poste **não documentado**;
  - ME-70: "Parede/poste (sobrepor)" → parede sim, poste sim, teto **não** (já registrado em texto na página: "não é indicado para teto");
  - FC-10: "Parede/poste (vertical)" → parede sim, poste sim, teto **não documentado**;
  - FC-15: "Parede/poste (vertical)" → parede sim, poste sim, teto **não documentado**.
- **Implementação futura, quando autorizada, deve usar:**
  - `<table>`;
  - `<caption>`;
  - cabeçalhos de coluna com `<th scope="col">`;
  - cabeçalhos de linha com `<th scope="row">`;
  - texto explícito em cada célula;
  - responsividade para celular;
  - nenhuma informação transmitida somente por cor ou ícone.
- **Alt/legenda proposta (para a `<caption>` futura):** "Pontos de instalação compatíveis: parede, poste e teto em área coberta, por modelo".
- **Prioridade:** não aplicável (não é ativo de imagem) — a melhoria estrutural em si não bloqueia a publicação das fotos e diagramas desta página.
- **Reutilização em página de produto:** parcial — a linha específica de cada produto pode ser reaproveitada na respectiva página de produto, quando a tabela existir.
- **Dependências:** nenhuma — dado já validado nesta entrega; falta só a autorização para implementar a tabela em HTML.

### EX09 — Diagrama elétrico 127 V / 220 V

- **Página e posição:** seção "Instalação externa: cabo, entrada de água e pingadeira", depois da `<dl>` de cores de fio (mesmo ponto onde hoje existe um comentário reservando o espaço, sem imagem).
- **Verificação (obrigatória antes de propor arquivo novo):** campo `tipo_ligacao` da planilha, os 4 modelos desta página:
  - FC-10, FC-15, ME-60, ME-70: todos "3 fios (Fase: vermelho · Neutro: preto — ou 2ª fase em 220 V · Retorno: verde)", com comprimento de 20 cm (FC-10, FC-15) ou 30 cm (ME-60, ME-70). **Mesmo padrão de cores já usado em CX06 (`caixa-4x2.html`) e TT11 (`teto.html`).**
- **Decisão:** **não criar arquivo novo.** Reutilizar `ligacao-3-fios-127-220.svg`, o mesmo ativo compartilhado descrito em "Ativos Compartilhados entre Páginas" (início deste documento).
- **Nome do arquivo:** `ligacao-3-fios-127-220.svg` (compartilhado).
- **Caminho:** `assets/images/diagramas/ligacao-3-fios-127-220.svg`.
- **Produto(s):** genérico — vale para os 4 modelos desta página (e para os 12 modelos das outras 2 páginas).
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** sim, nas 4 páginas de produto desta família.
- **Dependências:** nenhuma — arquivo já definido; só falta ser produzido (nenhuma das 3 páginas o tem ainda).

### EX10 — Imagem Open Graph

- **Página e posição:** `<meta property="og:image">` (a criar no `<head>` — hoje ausente, mesma situação das outras 2 páginas).
- **Objetivo:** boa leitura ao compartilhar o link, com mensagem curta o bastante para não cortar no preview do WhatsApp.
- **Conteúdo visual:** teste 1 — ME-60 + FC-10 (reaproveitando as fotos do EX01, painel ME-60 e painel FC-10, já produzidas separadamente); se ficar carregada em miniatura, teste 2 — só o ME-60 (instalado, reaproveitando o EX06, ou frontal, reaproveitando o EX02).
- **Produto(s):** ME-60 (+ FC-10, condicional).
- **Tipo:** composição fotográfica (reaproveitando os painéis do EX01 e/ou EX02/EX06, depois de produzidos).
- **Orientação:** paisagem. **Proporção:** 1200:630 exato. **Dimensão:** 1200 × 630 px.
- **Formato final:** JPG. **Nome previsto:** `externo-og.jpg`.
- **Fundo:** branco `#FFFFFF` ou cinza técnico `#F4F5F7`.
- **Enquadramento:** produto(s) ocupando ~50% do quadro. **Texto escolhido nesta rodada:** linha principal "Iluminação externa automática"; segunda linha opcional "Movimento ou luminosidade". Máximo 2 linhas, letras grandes, legível a ~300 px de largura (tamanho real de preview no WhatsApp/celular).
- **Iluminação:** igual às fotos de produto.
- **Devem aparecer:** ME-60 (sempre, reconhecível); nome ou logotipo Tektron, presente sem competir com a mensagem.
- **Não podem aparecer:** especificações técnicas; nomes dos 4 modelos; diagrama de pingadeira ou de pontos de instalação; texto técnico pequeno; mais de 2 produtos.
- **Regra de fallback (mantida):** se ME-60 + FC-10 ficar carregado ou pouco legível a ~300 px, usar somente o ME-60 — FC-10 só entra na imagem se continuar claramente reconhecível nesse teste.
- **Alt proposto:** "Sensor de movimento e fotocélula Tektron para área externa".
- **Prioridade:** Essencial.
- **Reutilização em página de produto:** não — específica de compartilhamento desta página.
- **Dependências:** painéis do EX01 (ME-60 e FC-10), EX02 ou EX06 prontos primeiro — é composição, não sessão nova.

### EX11 — Foto instalada: ME-70 em poste (complementar)

- **Página e posição:** nenhuma reservada hoje — a página explica a instalação em poste só em texto (prosa da situação-movimento e FAQ).
- **Objetivo:** reforçar visualmente a capacidade de instalação em poste do ME-70 — mas o texto e o card já cobrem essa informação; esta foto é reforço, não requisito.
- **Conteúdo visual:** ME-70 montado num poste real.
- **Produto(s):** ME-70. **Tipo:** fotografia real, instalada.
- **Proporção:** 1:1. **Dimensão:** 1200 × 1200 px, WEBP.
- **Nome previsto:** `me-70-instalado-poste.webp`.
- **Alt proposto:** "Sensor de movimento ME-70 instalado em poste".
- **Prioridade:** Complementar — não bloqueia a publicação.
- **Reutilização em página de produto:** sim, se produzida.
- **Dependências:** exige um poste real disponível para a foto; agendar só se sobrar tempo/recursos da sessão principal.

---

## 3. Avaliado e não incluído: diagrama movimento × luminosidade

Você pediu para avaliar a necessidade de um diagrama conceitual
mostrando "sensor reage a movimento" × "fotocélula reage à
luminosidade". Avaliação: **não recomendo criar esse ativo agora.**

Motivo: essa dualidade já fica coberta por dois ativos que já existem no
plano — o **hero (EX01)**, que mostra os dois produtos reais lado a
lado, e a **tabela de características** (já no HTML, texto puro,
seção "Tecnologia": "ME-60/ME-70 detectam movimento; FC-10/FC-15
respondem à luminosidade ambiente"). Um terceiro ativo repetindo a
mesma ideia em forma de ilustração conceitual (silhueta + feixe/dia-e-
noite) seria, neste caso, uma imagem para reforçar algo que a página já
comunica bem em dois lugares — o tipo de redundância que as entregas
anteriores já evitaram (ex.: ícones de "O problema" na caixa-4x2, selo
de garantia). Se depois de publicados os ativos essenciais você achar
que a dualidade ainda não está clara, reavaliamos.

---

## 4. Classificação

**Essenciais para publicação:** EX01 (hero, dois painéis editoriais),
EX02 (ME-60), EX03 (ME-70), EX04 (FC-10), EX05 (FC-15), EX07 (diagrama
pingadeira), EX09 (diagrama elétrico — arquivo compartilhado), EX10
(Open Graph).

**Importantes/complementares (não bloqueiam publicação):** EX06 (ME-60
instalado em teto externo coberto — reclassificado nesta rodada), EX11
(ME-70 instalado em poste).

**Não é ativo de imagem:** EX08 (matriz de pontos de instalação parede ×
poste × teto coberto) — reclassificado nesta rodada como melhoria
estrutural em HTML (tabela semântica), não SVG. Ver especificação
própria acima.

Nenhum ícone decorativo incluído. Diagrama movimento × luminosidade
avaliado e não recomendado (ver item 3).

---

## 5. Decisão do hero e justificativa

**Decisão revisada nesta rodada: EX01 — composição editorial em dois
painéis separados** (ME-60 e FC-10), substituindo a decisão anterior de
still life lado a lado numa mesma cena física. Segue não sendo a Opção A
(ME-60 instalado + fotocélula "discreta") nem uma composição com os 4
produtos.

**Motivo da mudança:**
- **Diferença real de tamanho é grande demais para uma cena só.** ME-60
  (74×56×80 mm) e FC-10 (24×26×24 mm) — numa mesma composição still
  life, respeitando a escala real, o FC-10 fica pequeno a ponto de
  desaparecer visualmente no hero, principalmente no celular.
- **Aumentar o FC-10 artificialmente foi descartado.** Igualar a escala
  aparente dos dois produtos falsificaria uma informação técnica real
  (tamanho), o que não é aceitável mesmo em troca de uma composição mais
  equilibrada.
- **Separar em painéis resolve as duas restrições ao mesmo tempo:** cada
  produto recebe um enquadramento independente, dimensionado para ficar
  reconhecível no espaço disponível, sem alterar o tamanho real do
  objeto fotografado — o ajuste é de câmera/crop, não de escala do
  produto.
- **A separação em painéis comunica a dualidade da página** ("movimento"
  × "luminosidade") de forma direta — cada painel já carrega o papel do
  respectivo produto, sem depender de peso visual relativo entre os
  dois numa cena só.
- **A instalação correta já tem ativo próprio** (EX06, EX07) — o hero
  não precisa carregar essa informação.
- **Não usei os 4 produtos**: ME-70 e FC-15 já têm identidade visual
  suficiente nos próprios cards (EX03, EX05); reservá-los pro hero
  também poluiria a leitura em tela pequena, sem ganho real de
  comunicação.
- **Viabilidade:** a mesma sessão still life dos cards (EX02/EX04) pode
  ser reaproveitada, com um enquadramento adicional específico do hero
  por produto, se o enquadramento do card não for suficientemente
  próximo para o FC-10 ficar legível no hero.

**Registro obrigatório:** a separação em painéis não representa
comparação de dimensões físicas entre ME-60 e FC-10. As dimensões reais
continuam informadas apenas no conteúdo técnico das páginas de produto —
ninguém deve inferir proporção de tamanho a partir do hero.

---

## 6. Decisão da imagem Open Graph

**Decisão: EX10 — testar primeiro ME-60 + FC-10** (reaproveitando as
fotos dos 2 painéis do EX01, produzidas separadamente). Critério de
fallback (igual ao já usado nas outras 2 páginas): testar a leitura a
~300 px de largura; se a miniatura ficar carregada ou qualquer um dos 2
produtos perder reconhecimento, **usar somente o ME-60** (instalado,
reaproveitando EX06, ou frontal, reaproveitando EX02) — o texto do card
do WhatsApp já comunica "duas soluções", a imagem não precisa provar
isso sozinha.

**Texto escolhido nesta rodada:** linha principal "Iluminação externa
automática"; segunda linha opcional "Movimento ou luminosidade". Mais
curto que o texto anterior ("Soluções para iluminação de áreas
externas"), que corria risco de cortar no preview do WhatsApp. Regras:
máximo 2 linhas, letras grandes, legível a ~300 px de largura, sem
especificações, sem os 4 nomes de modelo, ME-60 sempre reconhecível,
FC-10 só se continuar claramente reconhecível, nome/logotipo Tektron
presente sem competir com a mensagem.

---

## 7. Fotografias frontais necessárias

4 fotos novas — nenhuma existe (`Arquivos/Midia/` vazio para os 4
modelos, ver item 1): ME-60 (EX02), ME-70 (EX03), FC-10 (EX04), FC-15
(EX05). Mesma sessão, mesmo fundo, mesma altura de câmera — respeitando
que ME-60/ME-70 são maiores que FC-10/FC-15 e não devem ser igualados
artificialmente em escala aparente.

---

## 8. Fotografias instaladas realmente necessárias

- **EX06 (importante/complementar — reclassificado nesta rodada):**
  ME-60 em teto de área externa coberta. Não bloqueia a publicação: a
  aplicação já é explicada em texto, a página funciona com a foto
  frontal do produto (EX02), e a futura matriz de pontos de instalação
  em HTML (EX08) vai ajudar a explicar os pontos de instalação. A
  fotografia depende de encontrar e preparar um local externo coberto
  adequado — o brief completo (na especificação do EX06, acima) fica
  mantido para produção posterior. Só volta a ser essencial se surgir
  justificativa visual concreta de que a página não é compreensível sem
  ela.
- **EX11 (complementar):** ME-70 em poste — reforça algo que o texto já
  cobre; não bloqueia publicação.
- **Descartadas, com justificativa:** ME-60 em parede (a foto frontal já
  basta — parede é o uso mais genérico/esperado, sem lacuna de
  compreensão); FC-10/FC-15 verticalidade (coberta pelo diagrama de
  pingadeira, EX07 — repetir em foto seria redundante).

---

## 9. Diagrama de pingadeira

**EX07** — 2 painéis (correto × incorreto), com silhueta fiel ao ME-60
(não formato genérico), rótulo em texto (não só ícone/cor). EX07 depende
da foto frontal EX02 e da referência técnica interna
`referencia-me-60-saida-fios.jpg`, necessárias para reproduzir com
fidelidade tanto a silhueta quanto a saída dos fios do ME-60.

---

## 10. Diagrama movimento × luminosidade

**Avaliado, não recomendado.** Ver item 3 — a dualidade já é coberta pelo
hero (EX01) e pela tabela de características em texto.

---

## 11. Matriz de pontos de instalação — reclassificada

**EX08 não é mais tratado como diagrama SVG.** O conteúdo é puramente
textual/tabular (compatibilidade de instalação por modelo) —
reclassificado nesta rodada como "melhoria estrutural em HTML", a
implementar futuramente como tabela semântica (`<table>`, `<caption>`,
`<th scope="col">`/`<th scope="row">`), não como arquivo de imagem. O
erro real que o dado evita continua o mesmo — a compatibilidade **não é
simétrica** entre os 4 modelos (ME-60 não documentado para poste; ME-70,
FC-10 e FC-15 não documentados para teto) — só muda o formato de
entrega. Ver especificação completa em EX08, acima.

---

## 12. Decisão sobre o diagrama elétrico compartilhado

**EX09 usa o mesmo arquivo de CX06 (`caixa-4x2.html`) e TT11
(`teto.html`): `ligacao-3-fios-127-220.svg`, em
`assets/images/diagramas/`.** Confirmado nesta entrega: os 4 modelos de
`externo.html` têm o `tipo_ligacao` idêntico (mesmas 3 cores, mesma
lógica 127 V/220 V) — nenhuma diferença documentada que justifique um
arquivo separado. Não é um diagrama novo; é o terceiro ponto de uso do
mesmo ativo (ver "Ativos Compartilhados entre Páginas", já atualizado no
início deste documento).

---

## 13. Ativos existentes que podem ser reutilizados

**Nenhum.** As 4 pastas de mídia (ME-60, ME-70, FC-10, FC-15) estão
completamente vazias — sem solapa, sem desenho técnico, sem render, sem
foto. Todas as fotografias desta página (EX01–EX06, EX11) são novas.

---

## 14. Ordem recomendada de produção

1. **Fotos de produto (still life), 1 sessão só:** EX02, EX03, EX04,
   EX05 (os 4 modelos — mesmo fundo/luz montados uma vez).
2. **Hero (EX01)** — dois painéis editoriais (ME-60 e FC-10, fotografados
   separadamente, mesma iluminação/fundo); pode ser feito na mesma sessão
   do passo 1, com um enquadramento adicional específico do hero para
   cada um dos dois produtos.
3. **Referência fotográfica técnica adicional para EX07** (não
   publicada) — foto de apoio da saída dos fios do ME-60, feita na mesma
   sessão do passo 1 ou logo em seguida; ver especificação em EX07,
   acima.
4. **Foto instalada do ME-60 em teto coberto (EX06)** — importante/
   complementar (reclassificado nesta rodada); sessão separada, exige
   uma área externa coberta real (varanda, garagem ou corredor coberto);
   não bloqueia a publicação das demais.
5. **EX10 (Open Graph)** — composição a partir dos passos 1–2, não é
   sessão nova.
6. **EX07 (diagrama de pingadeira)** — depende da foto EX02 (ME-60
   frontal) **e** da referência fotográfica técnica do passo 3 existirem
   primeiro, pra manter a silhueta e a saída dos fios fiéis ao produto
   real.
7. **EX09 (diagrama elétrico)** — mesmo arquivo do CX06/TT11; se algum
   dos três já estiver em produção, reaproveitar diretamente.
8. **EX11 (ME-70 em poste)** — complementar, só se sobrar tempo/recursos
   e houver um poste real disponível.

**Fora desta fila (não é produção de imagem):** EX08 — matriz de pontos
de instalação, agora tratada como melhoria estrutural em HTML (tabela
semântica); não entra na sessão fotográfica nem em produção de SVG.

---

# Página: `index.html`

## Ativo: hero da home (IDX01)

**Status:** aprovado e integrado em 2026-07-20, por decisão explícita de
Fernanda. Registrado aqui retroativamente — a imagem já existia pronta
(gerada fora deste fluxo de manifesto) quando foi inserida.

- **Local:** `.hero-layout` > `.hero-media`, ao lado do H1/`hero-lead`.
- **Arquivo:** `assets/images/index/hero-economia-energia.webp` (fonte:
  `Gemini_Generated_Image_8mk9m28mk9m28mk9.png`, convertido para WEBP;
  arquivo de origem solto removido depois da conversão).
- **Conteúdo:** mão segurando um celular exibindo um mockup do site da
  Tektron, com a mensagem "um minuto de atenção para anos de economia",
  em um escritório ao fundo, com rosto de pessoa visível.
- **Alt text:** "Mão segurando um celular exibindo o site da Tektron, com
  a mensagem 'um minuto de atenção para anos de economia', em um
  escritório ao fundo".

**Exceção às regras deste manifesto:** este ativo é imagem 100% gerada
por IA, sem nenhuma fotografia real por trás — contraria diretamente
"Regra: fotografia real, edição por IA permitida" (início deste
documento: "proibido: imagem 100% gerada por IA sem nenhuma fotografia
real por trás"). Também contraria o reforço explícito registrado no
brief do CX01 (`aplicacoes/caixa-4x2.html`, acima): "sem cena lifestyle
(nenhuma pessoa, nenhuma mão tocando o sensor)", "sem ambiente doméstico
completo".

**Motivo da exceção:** decisão editorial explícita de Fernanda em
2026-07-20 — o hero da home cumpre um papel diferente do hero de uma
página de Aplicação. Lá (CX01 etc.) o objetivo é "provar que o produto
existe fisicamente e resolve X"; aqui o objetivo é institucional/de
conversão, e uma cena lifestyle com o mockup do site foi julgada
adequada para esse papel.

**Escopo da exceção:** vale só para este ativo (IDX01, hero da home).
Não altera a regra geral de fotografia real para as páginas de
Aplicações ou de Produto, nem para futuros ativos da própria home —
qualquer novo ativo 100% gerado por IA precisa da mesma aprovação
explícita, caso a caso, não fica liberado por precedente.
