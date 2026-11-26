# Portfólio de Apresentação — Milo Ruback

Portfólio interativo de apresentação desenvolvido para **Milo Ruback** ([github.com/MiloRuback](https://github.com/MiloRuback)), reunindo os projetos desenvolvidos no GitHub, cena interativa por frames gerada no **Google Flow**, benchmark visual capturado de **aura.build** via **sd.asimov.academy**, e o Design System extraído pela skill **`extract-ds`**.

## Projetos Apresentados

1. **[Every Helper for Minecraft](https://github.com/MiloRuback/E-Helper-for-Minecraft)**
   - Aplicativo desktop Windows (`Electron 43`, `React 18`, `TypeScript`, `Vite`, `electron-builder`) com canais `Development` e `Stable`.
   - Editor de skins `64×64` com camadas Base/Overlay, simetria e preview 3D via `skinview3d` + `Three.js`.
   - Seed Map movido a WebAssembly (`cubiomes.wasm`) com camadas Superfície/Subsolo/Abissal, suporte Java/Bedrock e filtros de estruturas.
   - Importador de mundos Java com parsing de `level.dat` e regiões `.mca` via `prismarine-nbt` e `@taku128/java-schematic`.
   - Sincronização em nuvem com **Supabase** (PostgreSQL + Auth + Row Level Security via `auth.uid()`), backup Google Drive (OAuth PKCE) e lookup Microsoft/Minecraft.

2. **[MiloDex](https://github.com/MiloRuback/MiloDex)**
   - Leitor multiplataforma de mangás, comics e livros para **Windows Desktop** (`Electron 31` + `electron-vite`) e **Android APK** (`Capacitor 8` + WebView).
   - Busca integrada diretamente à **MangaDex REST API** com filtros por status, demografia, idioma e seleção de grupos/versões.
   - Modos de leitura `RTL`, `LTR`, página única, página dupla e rolagem vertical, zoom (`Ctrl+scroll` / `pinch-to-zoom`), histórico persistido em `sql.js` + `Zustand`, exportação `.cbz` com `JSZip` e leitura local (`CBZ`, `CBR`, `TXT`, `HTML`, `DOCX/DOC`).

3. **[Pesquisa Trimestral do Abate de Animais — IBGE](https://github.com/MiloRuback/Pesquisa-Abate-Trimestral-de-Animais)**
   - Painel interativo de visualização estatística da série histórica `2016–2025` e comparativos trimestrais `2023–2025` do IBGE/SIDRA.
   - Contadores animados dos recordes de 2025 (`42.935 mil` bovinos, `60.692 mil` suínos, `6.690 milhões` frangos, `31+ milhões t` de carcaças).
   - Gráficos interativos em `Chart.js` com filtro por espécie, variação percentual anual, tabela analítica e modo apresentação em tela cheia.

## Recursos e Fluxo Aplicado

- **Referência Visual (`aura.build` + `sd.asimov.academy`)**: Benchmark `https://sharper-creative.aura.build/` preservado localmente em [reference/sharper-creative.aura.build/index.html](reference/sharper-creative.aura.build/index.html).
- **Skill `extract-ds`**: Instalada exatamente a partir de [rtadewald/skills/extract-ds](https://github.com/rtadewald/skills/tree/main/extract-ds) em `.agents/skills/extract-ds/`.
- **Design System Extraído**: Catálogo completo (`Overview` + `Components`) em [buildx-design-system/design-system.html](buildx-design-system/design-system.html).
- **Google Flow (Primeiro → Último Frame)**: Vídeo `Camera_moving_through_manga_rotunda_272502cd.mp4` fatiado em 95 frames WebP (`assets/rotunda-frames/frame_001.webp` a `frame_095.webp`), com controle reativo ao movimento do mouse, toque, slider e autoplay.
- **Direção de Arte em JSON**: Especificações estruturadas em `assets/json/art-direction-rotunda.json` e `assets/json/art-direction-portrait.json`, além de espaço reservado no site para o retrato de Milo Ruback.

## Estrutura do Repositório

```text
portfolio/
├── index.html                                    # Portfólio principal de apresentação
├── README.md                                     # Documentação do portfólio e dos 3 projetos
├── .agents/skills/extract-ds/                    # Skill extract-ds instalada sem modificações
├── assets/
│   ├── css/portfolio.css                         # Tokens e animações do Design System
│   ├── js/portfolio.js                           # Scrubbing dos 95 frames, catálogo, modais e modo apresentação
│   ├── json/                                     # Direção de arte em JSON (rotunda e retrato)
│   ├── projects/                                 # Capturas reais dos projetos no GitHub
│   ├── rotunda-frames/                           # 95 frames WebP extraídos do vídeo Google Flow
│   └── Camera_moving_through_manga_rotunda_272502cd.mp4
├── buildx-design-system/                         # Catálogo gerado seguindo o fluxo /extract-ds
│   ├── design-system.html
│   └── assets/overview/
└── reference/sharper-creative.aura.build/        # Benchmark capturado via sd.asimov.academy
```

## Como Executar Localmente

Basta abrir `index.html` no navegador ou iniciar um servidor HTTP local na raiz do repositório:

```bash
npx serve .
```
