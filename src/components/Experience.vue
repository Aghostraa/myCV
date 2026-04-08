<template>
  <section id="experience" class="py-20 px-6 bg-gradient-to-br from-gray-50 to-slate-100">
    <div class="container mx-auto">

      <!-- Section header -->
      <div class="text-center mb-14">
        <h2 class="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-cyan-600 to-teal-500">
          {{ language === 'de' ? 'Berufserfahrung' : 'Professional Experience' }}
        </h2>
        <div class="w-24 h-1 bg-teal-500 mx-auto mb-5"></div>
        <p class="text-gray-500 text-sm font-semibold tracking-widest uppercase">
          {{ language === 'de' ? 'Eine Reise durch Expertise und Wachstum' : 'A Journey Through Expertise & Growth' }}
        </p>
      </div>

      <!-- Journey start label -->
      <div class="flex items-center gap-3 mb-10">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent to-teal-300"></div>
        <span class="text-xs font-bold tracking-widest text-teal-600 uppercase px-4 py-1.5 rounded-full border border-teal-200 bg-teal-50 whitespace-nowrap">
          {{ language === 'de' ? 'Beginn · 2022' : 'Start of Journey · 2022' }}
        </span>
        <div class="h-px w-10 bg-teal-300"></div>
      </div>

      <!-- ROADMAP -->
      <div class="roadmap">

        <!-- ═══ STONE 01 — Design Thinking (oldest) — LEFT ═══ -->
        <div class="stone stone-left" ref="el0">
          <div class="stone-card">
            <div class="stone-header">
              <span class="step-pill">01</span>
              <span class="date-pill">{{ language === 'de' ? 'Mrz 2022 – Dez 2023' : 'Mar 2022 – Dec 2023' }}</span>
            </div>
            <h3 class="stone-title">{{ language === 'de' ? 'Studentische Hilfskraft Design Thinking' : 'Design Thinking Coach & Student Assistant' }}</h3>
            <div class="stone-company">
              <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" /></svg>
              FH Aachen University · {{ language === 'de' ? 'Deutschland' : 'Germany' }}
            </div>
            <ul class="stone-bullets">
              <li>{{ language === 'de' ? 'Moderation von Design-Thinking-Workshops und kollaborativen Problemloesungssitzungen fuer Studierende und Lehrende' : 'Facilitated design thinking workshops and collaborative problem-solving sessions for student and faculty groups' }}</li>
              <li>{{ language === 'de' ? 'Unterstuetzung von Professoren bei der Implementierung menschzentrierter Designmethodik im Ingenieurcurriculum' : 'Supported professors in implementing human-centered design methodologies across engineering curricula' }}</li>
              <li>{{ language === 'de' ? 'Beitrag zur Curriculum-Entwicklung und Verbesserung der Lernmaterialien' : 'Contributed to curriculum development and instructional material design, improving course delivery' }}</li>
            </ul>
            <div class="stone-tags">
              <span>Design Thinking</span>
              <span>{{ language === 'de' ? 'Bildung' : 'Education' }}</span>
              <span>Facilitation</span>
            </div>
          </div>
        </div>

        <!-- Connector 01 → 02 -->
        <div class="connector conn-right">
          <div class="conn-track">
            <div class="conn-line"></div>
            <div class="conn-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>

        <!-- ═══ STONE 02 — Community Manager — RIGHT ═══ -->
        <div class="stone stone-right" ref="el1">
          <div class="stone-card">
            <div class="stone-header">
              <span class="step-pill">02</span>
              <span class="date-pill">Jun 2023 – Jul 2024</span>
            </div>
            <h3 class="stone-title">{{ language === 'de' ? 'Community & Growth Manager' : 'Community & Growth Manager' }}</h3>
            <div class="stone-company">
              <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
              growthepie · Remote
            </div>
            <ul class="stone-bullets">
              <li>{{ language === 'de' ? 'Multi-Plattform Community-Engagement-Strategie zur Bekanntheitssteigerung von Blockchain-Analytics-Tools' : 'Managed multi-platform community engagement, growing awareness of blockchain analytics tools among Web3 developers and researchers' }}</li>
              <li>{{ language === 'de' ? 'Content-Strategien und Redaktionskalender, die komplexe On-Chain-Daten in zugaengliche Narrative uebersetzten' : 'Developed content strategies and editorial calendars translating complex on-chain data into accessible narratives' }}</li>
              <li>{{ language === 'de' ? 'Sales-Outreach und Partnerschaftsentwicklung als direkte Beitraege zur Wachstumsstrategie der Plattform' : 'Led sales outreach and partnership development, contributing directly to the platform\'s growth engine' }}</li>
            </ul>
            <div class="stone-tags">
              <span>{{ language === 'de' ? 'Community' : 'Community' }}</span>
              <span>{{ language === 'de' ? 'Content-Strategie' : 'Content Strategy' }}</span>
              <span>Web3</span>
              <span>Sales</span>
            </div>
          </div>
        </div>

        <!-- Connector 02 → 03 -->
        <div class="connector conn-left">
          <div class="conn-track">
            <div class="conn-line"></div>
            <div class="conn-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>
          </div>
        </div>

        <!-- ═══ STONE 03 — Current Role — FULL WIDTH ═══ -->
        <div class="stone stone-full stone-current" ref="el2">
          <!-- Glowing top accent -->
          <div class="current-glow"></div>
          <div class="stone-card stone-card-current">
            <div class="stone-header">
              <span class="step-pill step-pill-current">03</span>
              <span class="date-pill date-pill-current">
                <span class="current-dot"></span>
                {{ language === 'de' ? 'Aug 2024 – Heute' : 'Aug 2024 – Present' }}
              </span>
              <span class="now-badge">{{ language === 'de' ? 'Aktuelle Position' : 'Current Role' }}</span>
            </div>
            <h3 class="stone-title stone-title-current">{{ language === 'de' ? 'Blockchain Researcher & Data Analyst' : 'Blockchain Researcher & Data Analyst' }}</h3>
            <div class="stone-company stone-company-current">
              <svg class="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
              growthepie · Remote
            </div>
            <!-- 2-column bullets on desktop -->
            <ul class="stone-bullets stone-bullets-grid">
              <li>{{ language === 'de' ? 'Aufbau der Open Labels Initiative (OLI) — von der Ethereum Foundation gefoerderter offener Standard fuer EVM-Adress-Labeling, adoptiert von walletlabels, Enscribe und mehreren Daten-Teams' : 'Architected the Open Labels Initiative (OLI) — an Ethereum Foundation-funded open standard for EVM address labeling, adopted by walletlabels, Enscribe, and multiple data teams' }}</li>
              <li>{{ language === 'de' ? 'Drei Open-Source-Artefakte: TypeScript/JavaScript-SDK, Hardhat-Plugin und Web-Frontend fuer Community-Label-Submissions' : 'Shipped three production open-source artifacts: a TypeScript/JavaScript SDK, a Hardhat plugin for developer workflow integration, and a web frontend for label submissions' }}</li>
              <li>{{ language === 'de' ? 'Grants gesichert: Gitcoin GG24 OSS, ESP DevTooling Grant und Arbitrum Questobook Dev Tooling Grant' : 'Secured Gitcoin GG24 OSS, ESP DevTooling Grant, and Arbitrum Questobook Dev Tooling Grant for OLI' }}</li>
              <li>{{ language === 'de' ? 'KI-Agenten-Automatisierungspipelines fuer internes Smart-Contract-Metadata-Labeling gebaut' : 'Built AI agent-based automation pipelines for internal smart contract metadata labeling, reducing manual research overhead' }}</li>
              <li>{{ language === 'de' ? 'Wachstumsmetriken im Ethereum-Ecosystem verfolgt und analysiert; Forschungsergebnisse fuer externe Teams und Protokolle' : 'Tracked and analyzed growth metrics across the Ethereum ecosystem; research consumed by external teams and protocols' }}</li>
              <li>{{ language === 'de' ? 'Produktseitige Webseiten und Frontend-Komponenten zur Verbindung von Forschungs-Output mit nutzerorientierten Interfaces' : 'Developed product-facing web pages and frontend components bridging research output into user-facing interfaces' }}</li>
            </ul>
            <div class="stone-tags stone-tags-current">
              <span>TypeScript</span>
              <span>Blockchain</span>
              <span>{{ language === 'de' ? 'Datenanalyse' : 'Data Analytics' }}</span>
              <span>{{ language === 'de' ? 'KI-Agenten' : 'AI Agents' }}</span>
              <span>Grants</span>
              <span>Open Source</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Journey end / present indicator -->
      <div class="flex items-center gap-3 mt-10">
        <div class="h-px flex-1 bg-gradient-to-r from-teal-300 to-transparent"></div>
        <span class="text-xs font-bold tracking-widest text-teal-600 uppercase px-4 py-1.5 rounded-full border border-teal-200 bg-teal-50 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-teal-500 animate-pulse inline-block"></span>
          {{ language === 'de' ? 'Jetzt' : 'Present' }}
        </span>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

defineProps({ language: { type: String, default: 'en' } });

const el0 = ref(null);
const el1 = ref(null);
const el2 = ref(null);

onMounted(() => {
  const stones = [el0.value, el1.value, el2.value];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('stone-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  stones.forEach(el => { if (el) observer.observe(el); });
});
</script>

<style scoped>
/* ── Roadmap container ── */
.roadmap {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* ── Stones (cards) ── */
.stone {
  display: flex;
  opacity: 0;
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.stone-left  { justify-content: flex-start; transform: translateX(-48px); }
.stone-right { justify-content: flex-end;   transform: translateX(48px); }
.stone-full  { justify-content: stretch;    transform: translateY(32px); }

.stone-visible { opacity: 1; transform: translate(0, 0) !important; }

.stone-left  .stone-card { width: 100%; }
.stone-right .stone-card { width: 100%; }
.stone-full  .stone-card { width: 100%; }

@media (min-width: 768px) {
  .stone-left  .stone-card { width: 62%; }
  .stone-right .stone-card { width: 62%; }
}

/* ── Card base ── */
.stone-card {
  background: #fff;
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  border: 1px solid #e5e7eb;
  padding: 1.75rem;
  position: relative;
  overflow: hidden;
}

.stone-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(to right, #0d9488, #06b6d4);
}

/* ── Current role card ── */
.stone-current { position: relative; }

.current-glow {
  position: absolute;
  inset: -2px;
  border-radius: 1.35rem;
  background: linear-gradient(135deg, #0d9488 0%, #06b6d4 50%, #0d9488 100%);
  background-size: 200% 200%;
  animation: glow-shift 4s ease infinite;
  z-index: -1;
}

@keyframes glow-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.stone-card-current {
  border: none;
  box-shadow: 0 8px 40px rgba(13, 148, 136, 0.18);
}

.stone-card-current::before {
  height: 4px;
  background: linear-gradient(to right, #0d9488, #06b6d4, #0d9488);
  background-size: 200%;
  animation: glow-shift 3s ease infinite;
}

/* ── Card internals ── */
.stone-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 0.85rem;
}

.step-pill {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #0f766e;
  background: #ccfbf1;
  border: 1px solid #99f6e4;
  border-radius: 9999px;
  padding: 0.2rem 0.7rem;
}

.step-pill-current {
  background: linear-gradient(to right, #0d9488, #0891b2);
  color: #fff;
  border-color: transparent;
}

.date-pill {
  font-size: 0.72rem;
  font-weight: 600;
  color: #6b7280;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 9999px;
  padding: 0.2rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.date-pill-current {
  background: #f0fdfa;
  border-color: #99f6e4;
  color: #0f766e;
}

.current-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #14b8a6;
  animation: pulse-dot 1.5s ease-in-out infinite;
  display: inline-block;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.35); }
}

.now-badge {
  margin-left: auto;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #0f766e;
  background: #ccfbf1;
  border: 1px solid #5eead4;
  border-radius: 9999px;
  padding: 0.2rem 0.75rem;
}

.stone-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.4rem;
  line-height: 1.3;
}

.stone-title-current {
  font-size: 1.4rem;
}

.stone-company {
  display: flex;
  align-items: center;
  font-size: 0.82rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.stone-company-current {
  color: #0f766e;
  font-weight: 500;
}

/* ── Bullets ── */
.stone-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.stone-bullets li {
  font-size: 0.82rem;
  color: #374151;
  line-height: 1.55;
  padding-left: 1.1rem;
  position: relative;
}

.stone-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #14b8a6;
}

/* 2-col bullets for the full-width card on desktop */
@media (min-width: 768px) {
  .stone-bullets-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.55rem 2rem;
  }
}

/* ── Tags ── */
.stone-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.stone-tags span {
  font-size: 0.7rem;
  font-weight: 600;
  color: #0f766e;
  background: #f0fdfa;
  border: 1px solid #99f6e4;
  border-radius: 9999px;
  padding: 0.2rem 0.7rem;
}

.stone-tags-current span {
  background: linear-gradient(to right, #f0fdfa, #ecfeff);
  border-color: #5eead4;
}

/* ── Connectors ── */
.connector {
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
}

.conn-track {
  display: flex;
  align-items: center;
  width: 100%;
}

.conn-right .conn-track {
  /* line spans from 62% rightward */
  padding-left: 62%;
}

.conn-left .conn-track {
  /* line spans from left to 38% */
  padding-right: 62%;
  flex-direction: row-reverse;
}

.conn-line {
  flex: 1;
  height: 2px;
  background: linear-gradient(to right, #0d9488, #06b6d4, #94a3b8);
  border-radius: 9999px;
  opacity: 0.5;
}

.conn-left .conn-line {
  background: linear-gradient(to left, #0d9488, #06b6d4, #94a3b8);
}

.conn-arrow {
  color: #0d9488;
  flex-shrink: 0;
  margin: 0 0.25rem;
}

@media (max-width: 767px) {
  /* Mobile: full-width vertical stack, connectors hidden */
  .stone-left .stone-card,
  .stone-right .stone-card { width: 100%; }

  .conn-right .conn-track { padding-left: 0; }
  .conn-left .conn-track  { padding-right: 0; }

  .connector {
    height: 2rem;
    padding-left: 0.5rem;
  }
  .conn-line { opacity: 0.3; }
}
</style>
