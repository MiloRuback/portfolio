/* Interactive Presentation Portfolio Controller for Milo Ruback */
(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. Project Catalog Data (100% verified from MiloRuback's GitHub repos)
  // ---------------------------------------------------------------------------
  const PROJECTS = [
    {
      id: 'e-helper',
      title: 'Every Helper for Minecraft',
      subtitle: 'Suíte desktop para jogadores e criadores de Minecraft',
      category: 'desktop',
      categoryLabel: 'Desktop / Electron',
      tags: ['Electron 43', 'React 18', 'TypeScript', 'cubiomes.wasm', 'Supabase RLS', 'skinview3d'],
      repoUrl: 'https://github.com/MiloRuback/E-Helper-for-Minecraft',
      releasesUrl: 'https://github.com/MiloRuback/E-Helper-for-Minecraft/releases/latest',
      previewImage: 'assets/projects/seed-map.png',
      gallery: [
        { src: 'assets/projects/seed-map.png', caption: 'Seed Map com engine cubiomes.wasm, filtros de estruturas e zoom amplo' },
        { src: 'assets/projects/skin-library.png', caption: 'Editor de skins 64×64 com preview 3D (skinview3d) e biblioteca em nuvem' },
        { src: 'assets/projects/world-map.png', caption: 'Importador de mundos Java (.mca / level.dat) com relevo e chunks' }
      ],
      version: 'v0.1.24 · Canais Stable & Development',
      summary:
        'Aplicativo desktop Windows construído com Electron, React, TypeScript e Vite, reunindo editor de skins 64×64 com preview 3D, Seed Map em WebAssembly (cubiomes), leitura binária de mundos Java e sincronização em nuvem.',
      highlights: [
        'Editor de skins 64×64 pixel a pixel com camadas Base/Overlay, simetria, pincel, balde, conta-gotas, undo/redo, templates Steve/Alex e visualização 3D via skinview3d + Three.js.',
        'Seed Map inspirado no Chunkbase movido a WebAssembly (cubiomes.wasm), suportando Java/Bedrock, Overworld/Nether/End, camadas Superfície/Subsolo/Abissal e zoom de 1 px = 128 m até 8 px = 1 m.',
        'Importador de mundos Java com parsing de level.dat e regiões .mca via prismarine-nbt e @taku128/java-schematic, exibindo biomas, relevo por heightmap, spawn e estruturas.',
        'Backend Supabase (PostgreSQL + Auth + Row Level Security via auth.uid()), backup JSON local ou Google Drive (OAuth PKCE), lookup Microsoft/Minecraft e auto-update via electron-updater.'
      ]
    },
    {
      id: 'milodex',
      title: 'MiloDex',
      subtitle: 'Leitor multiplataforma de mangás e comics com API MangaDex',
      category: 'mobile',
      categoryLabel: 'Desktop & Android',
      tags: ['Electron 31', 'Capacitor 8', 'MangaDex API', 'React 18', 'Zustand', 'sql.js'],
      repoUrl: 'https://github.com/MiloRuback/MiloDex',
      releasesUrl: 'https://github.com/MiloRuback/MiloDex/releases/latest',
      previewImage: 'assets/projects/milodex-icon.png',
      gallery: [
        { src: 'assets/projects/milodex-icon.png', caption: 'Identidade visual do MiloDex (Windows NSIS x64 & Android APK)' },
        { src: 'assets/rotunda-frames/frame_001.webp', caption: 'Frame inicial (Google Flow) inspirado no universo de leitura do MiloDex' },
        { src: 'assets/rotunda-frames/frame_095.webp', caption: 'Frame final (Google Flow) da rotunda monumental de mangás' }
      ],
      version: 'v1.0.0 · Windows (.exe) & Android (.apk)',
      summary:
        'Leitor moderno de mangás, comics e livros com integração direta à MangaDex REST API, biblioteca local em SQLite (sql.js) e suporte nativo para desktop Windows (Electron) e Android (Capacitor).',
      highlights: [
        'Busca avançada na MangaDex REST API com filtros de status (em andamento, completo, hiato, cancelado), demografia (Shounen, Shoujo, Seinen, Josei), idioma e seleção de grupos/versões.',
        'Reader completo com modos RTL (mangá), LTR, página única, página dupla e rolagem vertical, zoom com Ctrl+scroll (desktop) ou pinch-to-zoom (Android) e canvas de anotações.',
        'Download de capítulos do MangaDex empacotados em CBZ via JSZip e leitura de arquivos locais (CBZ, CBR limitado, TXT, HTML e DOCX/DOC com Mammoth).',
        'Histórico automático de leitura (página, capítulo, zoom e modo) persistido localmente com Zustand e sql.js, com interface escura responsiva e builds automatizadas via GitHub Actions.'
      ]
    },
    {
      id: 'ibge-abate',
      title: 'Pesquisa Trimestral do Abate de Animais',
      subtitle: 'Painel analítico interativo com dados oficiais do IBGE (2016–2025)',
      category: 'data',
      categoryLabel: 'Dados & Visualização',
      tags: ['Chart.js', 'Tailwind CSS', 'HTML5', 'IBGE / SIDRA', 'Apresentação'],
      repoUrl: 'https://github.com/MiloRuback/Pesquisa-Abate-Trimestral-de-Animais',
      releasesUrl: 'https://github.com/MiloRuback/Pesquisa-Abate-Trimestral-de-Animais',
      previewImage: 'assets/projects/ibge-abate-preview.png',
      gallery: [
        { src: 'assets/projects/ibge-abate-preview.png', caption: 'Hero e indicadores de recorde 2025 da Pesquisa Trimestral do Abate — IBGE' }
      ],
      version: 'Série 2016–2025 · Dados Oficiais SIDRA',
      summary:
        'Painel web interativo voltado à apresentação de indicadores agropecuários oficiais do IBGE, acompanhando o abate formal de bovinos, suínos e frangos e o peso das carcaças no Brasil.',
      highlights: [
        'KPIs animados em tempo real destacando os recordes históricos de 2025: 42.935 mil cabeças de bovinos, 60.692 mil cabeças de suínos, 6.690 milhões de frangos e 31+ milhões de toneladas de carcaças.',
        'Múltiplos gráficos interativos em Chart.js: evolução anual (2016–2025) com filtro por espécie e eixo duplo, comparativos trimestrais (2023–2025), variação percentual anual e peso de carcaças.',
        'Tabela analítica com cálculo automático de variação YoY, seção metodológica em 4 passos sobre a coleta SIDRA em ~1.500 estabelecimentos sob inspeção em 27 UFs.',
        'Construído com foco em apresentação ao vivo: navegação por setas do teclado, revelação progressiva por scroll, toast notifications e botão dedicado de tela cheia.'
      ]
    }
  ];

  const ART_DIRECTION_JSON = {
    rotunda: {
      asset: 'Camera_moving_through_manga_rotunda_272502cd.mp4',
      ferramenta: 'Google Flow (interpolação entre primeiro e último frame)',
      resolucao: '1280x720',
      frames_extraidos: 95,
      primeiro_frame: {
        arquivo: 'assets/rotunda-frames/frame_001.webp',
        cena: 'Corredor simétrico em madeira escura com estantes de mangás, escada deslizante à esquerda e arco revelando a rotunda'
      },
      ultimo_frame: {
        arquivo: 'assets/rotunda-frames/frame_095.webp',
        cena: 'Contra-plongée dentro da rotunda circular de 4 andares, escada em espiral e claraboia zenital iluminada'
      },
      interacao: 'Scrubbing reativo ao movimento do mouse (mousemove), toque, slider e autoplay'
    },
    portrait: {
      estilo: 'retrato editorial tech minimalista sobre fundo escuro',
      sujeito: 'Milo Ruback',
      figurino: 'jaqueta ou suéter escuro minimalista',
      ambiente: 'estúdio escuro (#030712) com rim light índigo sutil',
      iluminacao: 'key light suave quente à esquerda e recorte frio à direita',
      enquadramento: 'retrato vertical 4:5',
      restricoes: ['preservar identidade', 'mãos naturais', 'sem marcas d\'água']
    }
  };

  // ---------------------------------------------------------------------------
  // 2. Scroll Reveal Observer (matches BuildX animate-on-scroll behavior)
  // ---------------------------------------------------------------------------
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => el.classList.add('animate'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => io.observe(el));
  }

  // ---------------------------------------------------------------------------
  // 3. Google Flow 95-Frame Interactive 3D-Style Stage
  // ---------------------------------------------------------------------------
  function initRotundaStage() {
    const TOTAL_FRAMES = 95;
    const DURATION_SEC = 7.93;
    const stage = document.getElementById('rotunda-stage');
    const canvas = document.getElementById('rotunda-canvas');
    if (!stage || !canvas) return;

    const ctx = canvas.getContext('2d');
    const frameCounterEl = document.getElementById('rotunda-frame-counter');
    const timeCounterEl = document.getElementById('rotunda-time-counter');
    const cacheStatusEl = document.getElementById('rotunda-cache-status');
    const progressBarEl = document.getElementById('rotunda-progress-bar');
    const sliderEl = document.getElementById('rotunda-slider');
    const autoplayBtn = document.getElementById('rotunda-autoplay-btn');
    const autoplayLabel = document.getElementById('rotunda-autoplay-label');
    const modeMouseBtn = document.getElementById('rotunda-mode-mouse');
    const hintBanner = document.getElementById('rotunda-hint');

    const frames = new Array(TOTAL_FRAMES);
    let loadedCount = 0;
    let currentFrame = 0;
    let targetFrame = 0;
    let isAutoPlaying = false;
    let mouseScrubEnabled = true;
    let isDragging = false;
    let rafId = null;
    let lastAutoTime = performance.now();

    function frameUrl(index) {
      const num = String(index + 1).padStart(3, '0');
      return `assets/rotunda-frames/frame_${num}.webp`;
    }

    function drawFrame(index) {
      const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(index)));
      const img = frames[clamped];
      if (img && img.complete && img.naturalWidth > 0) {
        if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }

      const pct = (clamped / (TOTAL_FRAMES - 1)) * 100;
      const currentSec = (clamped / (TOTAL_FRAMES - 1)) * DURATION_SEC;

      if (frameCounterEl) {
        frameCounterEl.textContent = `Frame ${String(clamped + 1).padStart(2, '0')} / ${TOTAL_FRAMES}`;
      }
      if (timeCounterEl) {
        timeCounterEl.textContent = `${currentSec.toFixed(2)}s / ${DURATION_SEC.toFixed(2)}s`;
      }
      if (progressBarEl) {
        progressBarEl.style.width = `${pct.toFixed(1)}%`;
      }
      if (sliderEl && document.activeElement !== sliderEl) {
        sliderEl.value = String(clamped);
      }
    }

    function preloadAll() {
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        img.decoding = 'async';
        img.onload = () => {
          loadedCount++;
          if (cacheStatusEl) {
            cacheStatusEl.textContent =
              loadedCount === TOTAL_FRAMES
                ? `${TOTAL_FRAMES}/${TOTAL_FRAMES} frames em cache`
                : `Carregando frames (${loadedCount}/${TOTAL_FRAMES})...`;
          }
          if (i === 0 && Math.round(currentFrame) === 0) {
            drawFrame(0);
          }
        };
        img.src = frameUrl(i);
        frames[i] = img;
      }
    }

    function tick(now) {
      if (isAutoPlaying) {
        const dt = (now - lastAutoTime) / 1000;
        targetFrame = (targetFrame + dt * 16) % TOTAL_FRAMES;
      }
      lastAutoTime = now;

      const diff = targetFrame - currentFrame;
      if (Math.abs(diff) > 0.05) {
        currentFrame += diff * (isAutoPlaying ? 0.35 : 0.22);
        drawFrame(currentFrame);
      } else if (Math.round(currentFrame) !== Math.round(targetFrame)) {
        currentFrame = targetFrame;
        drawFrame(currentFrame);
      }

      rafId = requestAnimationFrame(tick);
    }

    function scrubFromClientX(clientX) {
      const rect = stage.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      targetFrame = ratio * (TOTAL_FRAMES - 1);
      if (hintBanner) hintBanner.classList.add('opacity-0');
    }

    stage.addEventListener('mousemove', (e) => {
      if (!mouseScrubEnabled && !isDragging) return;
      if (isAutoPlaying) setAutoplay(false);
      scrubFromClientX(e.clientX);
    });

    stage.addEventListener('mousedown', (e) => {
      isDragging = true;
      if (isAutoPlaying) setAutoplay(false);
      scrubFromClientX(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    stage.addEventListener(
      'touchstart',
      (e) => {
        if (e.touches.length > 0) {
          if (isAutoPlaying) setAutoplay(false);
          scrubFromClientX(e.touches[0].clientX);
        }
      },
      { passive: true }
    );

    stage.addEventListener(
      'touchmove',
      (e) => {
        if (e.touches.length > 0) {
          scrubFromClientX(e.touches[0].clientX);
        }
      },
      { passive: true }
    );

    if (sliderEl) {
      sliderEl.addEventListener('input', (e) => {
        if (isAutoPlaying) setAutoplay(false);
        targetFrame = Number(e.target.value);
      });
    }

    function setAutoplay(active) {
      isAutoPlaying = active;
      if (autoplayLabel) {
        autoplayLabel.textContent = active ? 'Pausar Tour' : 'Auto-Play';
      }
      if (autoplayBtn) {
        autoplayBtn.classList.toggle('ring-1', active);
        autoplayBtn.classList.toggle('ring-indigo-400/50', active);
      }
    }

    if (autoplayBtn) {
      autoplayBtn.addEventListener('click', () => setAutoplay(!isAutoPlaying));
    }

    if (modeMouseBtn) {
      modeMouseBtn.addEventListener('click', () => {
        mouseScrubEnabled = !mouseScrubEnabled;
        modeMouseBtn.textContent = mouseScrubEnabled ? 'Mouse Hover: Ativo' : 'Mouse Hover: Clique/Slider';
        modeMouseBtn.classList.toggle('text-emerald-300', mouseScrubEnabled);
      });
    }

    document.querySelectorAll('[data-jump-frame]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setAutoplay(false);
        targetFrame = Number(btn.getAttribute('data-jump-frame'));
        if (hintBanner) hintBanner.classList.add('opacity-0');
      });
    });

    preloadAll();
    rafId = requestAnimationFrame(tick);

    // Expose spacebar toggle for Presentation Mode
    window.__toggleRotundaAutoplay = () => setAutoplay(!isAutoPlaying);
    window.__cleanupRotunda = () => cancelAnimationFrame(rafId);
  }

  // ---------------------------------------------------------------------------
  // 4. Project Catalog Filtering, Search (⌘K) & Architecture Modal
  // ---------------------------------------------------------------------------
  function initCatalog() {
    const grid = document.getElementById('projects-grid');
    const searchInput = document.getElementById('project-search-input');
    const chips = document.querySelectorAll('.project-filter-chip');
    const countLabel = document.getElementById('projects-count-label');
    if (!grid) return;

    let activeFilter = 'all';
    let searchQuery = '';

    function renderProjects() {
      const q = searchQuery.trim().toLowerCase();
      const filtered = PROJECTS.filter((p) => {
        const matchesFilter = activeFilter === 'all' || p.category === activeFilter;
        const matchesSearch =
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q));
        return matchesFilter && matchesSearch;
      });

      if (countLabel) {
        countLabel.textContent = `Exibindo ${filtered.length} de ${PROJECTS.length} projetos em produção`;
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full rounded-2xl border border-white/10 bg-gray-950/60 p-10 text-center">
            <p class="text-white font-medium">Nenhum projeto corresponde ao filtro "${q}".</p>
            <button id="reset-catalog-btn" class="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-white transition">Limpar filtros</button>
          </div>
        `;
        document.getElementById('reset-catalog-btn')?.addEventListener('click', () => {
          activeFilter = 'all';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          chips.forEach((c) => c.classList.toggle('active', c.dataset.filter === 'all'));
          updateChipStyles();
          renderProjects();
        });
        return;
      }

      grid.innerHTML = filtered
        .map(
          (p) => `
        <article class="group rounded-2xl bg-gray-900/60 ring-1 ring-gray-800 overflow-hidden hover:ring-gray-700 transition flex flex-col justify-between">
          <div>
            <div class="relative">
              <div class="aspect-[16/9] overflow-hidden bg-black flex items-center justify-center">
                <img src="${p.previewImage}" alt="${p.title}" class="h-full w-full ${p.id === 'milodex' ? 'object-contain p-6 bg-gradient-to-br from-indigo-950/70 via-gray-950 to-purple-950/70' : 'object-cover'} transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <span class="absolute left-3 top-3 rounded-full bg-gray-950/80 px-2.5 py-1 text-xs font-medium text-gray-200 ring-1 ring-inset ring-gray-800 backdrop-blur">
                ${p.categoryLabel}
              </span>
              <span class="absolute right-3 top-3 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-geist-mono text-white/90 ring-1 ring-inset ring-white/15 backdrop-blur">
                GitHub
              </span>
            </div>
            <div class="p-5">
              <h3 class="text-xl font-semibold tracking-tight text-white">${p.title}</h3>
              <p class="text-sm text-white/60 mt-1.5 leading-relaxed">${p.subtitle}</p>
              <p class="text-xs text-white/50 mt-3 leading-relaxed">${p.summary}</p>
              <div class="mt-4 flex flex-wrap gap-1.5">
                ${p.tags
                  .map(
                    (tag) =>
                      `<span class="inline-flex items-center rounded-lg bg-gray-950/80 px-2.5 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-800">${tag}</span>`
                  )
                  .join('')}
              </div>
            </div>
          </div>
          <div class="px-5 pb-5 pt-2 flex items-center justify-between gap-3 border-t border-white/5">
            <button data-open-project="${p.id}" class="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-3.5 py-2 transition">
              <span>Explorar arquitetura</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition">
              <span>Repositório</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </a>
          </div>
        </article>
      `
        )
        .join('');

      grid.querySelectorAll('[data-open-project]').forEach((btn) => {
        btn.addEventListener('click', () => openProjectModal(btn.getAttribute('data-open-project')));
      });
    }

    function updateChipStyles() {
      chips.forEach((chip) => {
        const isActive = chip.dataset.filter === activeFilter;
        chip.className = isActive
          ? 'project-filter-chip active inline-flex ring-inset transition text-sm font-medium text-white bg-gray-900 ring-gray-700 ring-1 rounded-xl pt-2 pr-3 pb-2 pl-3 items-center whitespace-nowrap cursor-pointer'
          : 'project-filter-chip inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium ring-1 ring-inset transition bg-gray-900/50 text-gray-300 ring-gray-800 hover:text-white whitespace-nowrap cursor-pointer';
      });
    }

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        activeFilter = chip.dataset.filter || 'all';
        updateChipStyles();
        renderProjects();
      });
    });

    searchInput?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });

    // Global header search sync
    const headerSearch = document.getElementById('header-search-input');
    headerSearch?.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchInput) searchInput.value = searchQuery;
      renderProjects();
      if (searchQuery.trim().length > 1) {
        document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        (headerSearch || searchInput)?.focus();
      }
    });

    renderProjects();
  }

  // ---------------------------------------------------------------------------
  // 5. Project Detail Modal & JSON Spec Viewer
  // ---------------------------------------------------------------------------
  function openProjectModal(projectId) {
    const project = PROJECTS.find((p) => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const body = document.getElementById('project-modal-body');
    if (!modal || !body) return;

    let activeGalleryIdx = 0;

    function renderModalContent() {
      const currentMedia = project.gallery[activeGalleryIdx];
      body.innerHTML = `
        <div class="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
          <div>
            <span class="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 border border-white/10">${project.categoryLabel} · ${project.version}</span>
            <h3 class="text-2xl sm:text-3xl font-medium tracking-tighter text-white mt-3">${project.title}</h3>
            <p class="text-sm text-white/60 mt-1">${project.subtitle}</p>
          </div>
          <button id="close-project-modal" class="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition" aria-label="Fechar">✕</button>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 mt-6">
          <div class="space-y-3">
            <div class="aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/10 flex items-center justify-center">
              <img src="${currentMedia.src}" alt="${currentMedia.caption}" class="w-full h-full ${currentMedia.src.includes('milodex-icon') ? 'object-contain p-8' : 'object-cover'}" />
            </div>
            <p class="text-xs text-white/60">${currentMedia.caption}</p>
            ${
              project.gallery.length > 1
                ? `<div class="flex flex-wrap gap-2 pt-1">
                    ${project.gallery
                      .map(
                        (g, idx) => `
                      <button data-gallery-idx="${idx}" class="px-3 py-1.5 rounded-lg text-xs border transition ${
                        idx === activeGalleryIdx
                          ? 'bg-white/15 border-white/30 text-white'
                          : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                      }">Tela ${idx + 1}</button>
                    `
                      )
                      .join('')}
                  </div>`
                : ''
            }
          </div>

          <div class="space-y-4">
            <p class="text-sm text-white/80 leading-relaxed">${project.summary}</p>
            <div>
              <h4 class="text-xs uppercase tracking-wider text-white/50 font-medium mb-2.5">Recursos &amp; Arquitetura Real do Repositório</h4>
              <ul class="space-y-2.5">
                ${project.highlights
                  .map(
                    (h) => `
                  <li class="flex items-start gap-2.5 text-sm text-white/75 leading-relaxed">
                    <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                    <span>${h}</span>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>
            <div class="flex flex-wrap gap-1.5 pt-2">
              ${project.tags
                .map((t) => `<span class="rounded-lg bg-gray-950 px-2.5 py-1 text-xs text-white/70 border border-white/10">${t}</span>`)
                .join('')}
            </div>
            <div class="pt-3 flex flex-wrap gap-3">
              <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-glow px-4 py-2.5 text-sm font-medium">
                <span class="label-primary">Abrir no GitHub</span>
                <span class="label-hover">Abrir no GitHub</span>
                <span class="glow-line"></span>
                <span class="glow-fill"></span>
              </a>
              <a href="${project.releasesUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/75 hover:text-white transition">
                <span>Releases / Demo</span>
              </a>
            </div>
          </div>
        </div>
      `;

      document.getElementById('close-project-modal')?.addEventListener('click', closeModal);
      body.querySelectorAll('[data-gallery-idx]').forEach((btn) => {
        btn.addEventListener('click', () => {
          activeGalleryIdx = Number(btn.getAttribute('data-gallery-idx'));
          renderModalContent();
        });
      });
    }

    function closeModal() {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    renderModalContent();

    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
  }

  function initJsonModal() {
    const modal = document.getElementById('json-modal');
    const titleEl = document.getElementById('json-modal-title');
    const codeEl = document.getElementById('json-modal-code');
    const closeBtn = document.getElementById('close-json-modal');

    document.querySelectorAll('[data-show-json]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-show-json');
        const payload = ART_DIRECTION_JSON[key];
        if (!payload || !modal || !codeEl || !titleEl) return;
        titleEl.textContent =
          key === 'rotunda'
            ? 'JSON de Direção de Arte — Manga Rotunda (Google Flow)'
            : 'JSON de Direção de Arte — Espaço para Retrato (Milo Ruback)';
        codeEl.textContent = JSON.stringify(payload, null, 2);
        modal.classList.remove('hidden');
      });
    });

    closeBtn?.addEventListener('click', () => modal?.classList.add('hidden'));
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  }

  // ---------------------------------------------------------------------------
  // 6. Portrait Local Preview Slot (Optional live photo test for presentation)
  // ---------------------------------------------------------------------------
  function initPortraitSlot() {
    const input = document.getElementById('portrait-file-input');
    const previewImg = document.getElementById('portrait-preview-img');
    const placeholder = document.getElementById('portrait-placeholder-content');
    const clearBtn = document.getElementById('portrait-clear-btn');
    if (!input || !previewImg || !placeholder) return;

    input.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      previewImg.src = url;
      previewImg.classList.remove('hidden');
      placeholder.classList.add('hidden');
      clearBtn?.classList.remove('hidden');
    });

    clearBtn?.addEventListener('click', () => {
      previewImg.src = '';
      previewImg.classList.add('hidden');
      placeholder.classList.remove('hidden');
      clearBtn.classList.add('hidden');
      input.value = '';
    });
  }

  // ---------------------------------------------------------------------------
  // 7. Presentation Mode Navigation (Keyboard + Floating HUD + Fullscreen)
  // ---------------------------------------------------------------------------
  function initPresentationMode() {
    const slides = Array.from(document.querySelectorAll('section[data-slide]'));
    const indicatorEl = document.getElementById('slide-indicator');
    const slideTitleEl = document.getElementById('slide-title-hud');
    const prevBtn = document.getElementById('slide-prev-btn');
    const nextBtn = document.getElementById('slide-next-btn');
    const fsBtn = document.getElementById('presentation-fs-btn');
    const headerFsBtn = document.getElementById('header-presentation-btn');
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');

    if (slides.length === 0) return;
    let currentIdx = 0;

    function updateSlideHud() {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let found = 0;
      slides.forEach((sec, idx) => {
        if (scrollPos >= sec.offsetTop) found = idx;
      });
      currentIdx = found;

      if (indicatorEl) {
        indicatorEl.textContent = `${String(currentIdx + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
      }
      if (slideTitleEl) {
        slideTitleEl.textContent = slides[currentIdx].dataset.slideTitle || 'Apresentação';
      }

      const activeId = slides[currentIdx].id;
      navLinks.forEach((a) => {
        a.classList.toggle('nav-pill-active', a.getAttribute('href') === `#${activeId}`);
      });
    }

    function goToSlide(idx) {
      const target = Math.max(0, Math.min(slides.length - 1, idx));
      slides[target].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.().catch(() => {});
        document.body.classList.add('presentation-mode');
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    }

    prevBtn?.addEventListener('click', () => goToSlide(currentIdx - 1));
    nextBtn?.addEventListener('click', () => goToSlide(currentIdx + 1));
    fsBtn?.addEventListener('click', toggleFullscreen);
    headerFsBtn?.addEventListener('click', toggleFullscreen);

    window.addEventListener('scroll', updateSlideHud, { passive: true });
    updateSlideHud();

    window.addEventListener('keydown', (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        goToSlide(currentIdx + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToSlide(currentIdx - 1);
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      } else if (e.key === ' ') {
        const rotundaSec = document.getElementById('rotunda-stage');
        if (rotundaSec) {
          const rect = rotundaSec.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            e.preventDefault();
            window.__toggleRotundaAutoplay?.();
          }
        }
      } else if (e.key === 'Escape') {
        document.getElementById('project-modal')?.classList.add('hidden');
        document.getElementById('json-modal')?.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });

    // Expose project modal opener for deep-links in spotlight cards
    window.__openProjectModal = openProjectModal;
  }

  // ---------------------------------------------------------------------------
  // 8. Mobile Menu & Boot
  // ---------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    window.lucide?.createIcons?.();
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileBtn?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));
    mobileMenu?.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => mobileMenu.classList.add('hidden'))
    );

    initScrollReveal();
    initRotundaStage();
    initCatalog();
    initJsonModal();
    initPortraitSlot();
    initPresentationMode();
  });
})();
