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

      <!-- ═══════════ ROADMAP ═══════════ -->
      <div class="roadmap">

        <!-- ── STONE 01 — Design Thinking — LEFT ── -->
        <div class="stone stone-left" ref="el0">
          <div class="stone-card">
            <div class="stone-header">
              <span class="step-pill">01</span>
              <span class="date-pill">{{ language === 'de' ? 'Mrz 2022 – Dez 2023' : 'Mar 2022 – Dec 2023' }}</span>
            </div>
            <h3 class="stone-title">{{ language === 'de' ? 'Studentische Hilfskraft Design Thinking' : 'Design Thinking Coach & Student Assistant' }}</h3>
            <div class="stone-company">
              <svg class="w-4 h-4 mr-1.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
              </svg>
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

        <!-- Connector 01 → 02 (right) -->
        <div class="connector conn-right">
          <div class="conn-inner">
            <div class="conn-line"></div>
            <div class="conn-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>

        <!-- ── STONE 02 — Community & Growth Manager — RIGHT ── -->
        <div class="stone stone-right" ref="el1">
          <div class="stone-card">
            <div class="stone-header">
              <span class="step-pill">02</span>
              <span class="date-pill">Jun 2023 – Jul 2024</span>
            </div>
            <h3 class="stone-title">{{ language === 'de' ? 'Community & Growth Manager' : 'Community & Growth Manager' }}</h3>
            <div class="stone-company">
              <svg class="w-4 h-4 mr-1.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
              growthepie · Remote
            </div>
            <ul class="stone-bullets">
              <li>{{ language === 'de' ? 'Multi-Plattform Community-Engagement-Strategie zur Bekanntheitssteigerung von Blockchain-Analytics-Tools unter Web3-Entwicklern' : 'Managed multi-platform community engagement, growing awareness of blockchain analytics tools among Web3 developers and researchers' }}</li>
              <li>{{ language === 'de' ? 'Content-Strategien und Redaktionskalender, die komplexe On-Chain-Daten in zugaengliche Narrative uebersetzten' : 'Developed content strategies and editorial calendars translating complex on-chain data into accessible narratives for diverse audiences' }}</li>
              <li>{{ language === 'de' ? 'Aufbau strategischer Beziehungen zu Protokollen und Ecosystem-Partnern; Sales-Outreach als direkter Beitrag zur Wachstumsstrategie' : 'Built strategic relationships with protocols and ecosystem partners; led sales outreach contributing directly to the platform\'s growth engine' }}</li>
            </ul>
            <div class="stone-tags">
              <span>{{ language === 'de' ? 'Community' : 'Community' }}</span>
              <span>{{ language === 'de' ? 'Content-Strategie' : 'Content Strategy' }}</span>
              <span>Web3</span>
              <span>Sales</span>
            </div>
          </div>
        </div>

        <!-- Connector 02 → 03 (left) -->
        <div class="connector conn-left">
          <div class="conn-inner conn-inner-left">
            <div class="conn-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>
            <div class="conn-line conn-line-left"></div>
          </div>
        </div>

        <!-- ── STONE 03 — Current Role — FULL WIDTH ── -->
        <div class="stone stone-full" ref="el2">
          <div class="current-glow-wrap">
            <div class="stone-card stone-card-current">
              <div class="stone-header">
                <span class="step-pill step-pill-current">03</span>
                <span class="date-pill date-pill-current">
                  <span class="live-dot"></span>
                  {{ language === 'de' ? 'Aug 2024 – Heute' : 'Aug 2024 – Present' }}
                </span>
                <span class="now-badge">{{ language === 'de' ? 'Aktuelle Position' : 'Current Role' }}</span>
              </div>
              <h3 class="stone-title stone-title-lg">{{ language === 'de' ? 'Blockchain Researcher & Data Analyst' : 'Blockchain Researcher & Data Analyst' }}</h3>
              <div class="stone-company stone-company-accent">
                <svg class="w-4 h-4 mr-1.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
                growthepie · Remote
              </div>
              <ul class="stone-bullets stone-bullets-2col">
                <li>{{ language === 'de' ? 'Aufbau der Open Labels Initiative (OLI) — von der Ethereum Foundation gefoerderter offener Standard fuer EVM-Adress-Labeling, adoptiert von Blockscout, Enscribe und mehreren Daten-Teams' : 'Architected the Open Labels Initiative (OLI) — an Ethereum Foundation-funded open standard for EVM address labeling, adopted by Blockscout, Enscribe, and multiple data teams' }}</li>
                <li>{{ language === 'de' ? 'Drei Open-Source-Artefakte: TypeScript/JavaScript-SDK, Hardhat-Plugin und Web-Frontend fuer Community-Label-Submissions' : 'Shipped three production open-source artifacts: a TypeScript/JavaScript SDK, a Hardhat plugin for developer workflow integration, and a web frontend for label submissions' }}</li>
                <li>{{ language === 'de' ? 'Grants gesichert: Gitcoin GG24 OSS, ESP DevTooling Grant und Arbitrum Questobook Dev Tooling Grant' : 'Secured Gitcoin GG24 OSS, ESP DevTooling Grant, and Arbitrum Questobook Dev Tooling Grant for OLI' }}</li>
                <li>{{ language === 'de' ? 'KI-Agenten-Automatisierungspipelines fuer internes Smart-Contract-Metadata-Labeling gebaut' : 'Built AI agent-based automation pipelines for internal smart contract metadata labeling, reducing manual research overhead' }}</li>
                <li>{{ language === 'de' ? 'Wachstumsmetriken im Ethereum-Ecosystem verfolgt; Forschungsergebnisse fuer externe Teams, Protokolle und Stakeholder' : 'Tracked and analyzed growth metrics across the Ethereum ecosystem; research consumed by external teams, protocols, and stakeholders' }}</li>
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

      </div>
      <!-- ═══════════ END ROADMAP ═══════════ -->

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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('stone-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  [el0.value, el1.value, el2.value].forEach(el => { if (el) observer.observe(el); });
});
</script>

<style scoped>

/* ─── Roadmap container ─── */
.roadmap {
  display: flex;
  flex-direction: column;
}

/* ─── Stone rows ─── */
.stone {
  display: flex;
  opacity: 0;
  transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.stone-left  { justify-content: flex-start;  transform: translateX(-52px); }
.stone-right { justify-content: flex-end;    transform: translateX(52px); }
.stone-full  { justify-content: stretch;     transform: translateY(36px); }

.stone-visible { opacity: 1 !important; transform: none !important; }

/* Card widths */
.stone-left  .stone-card,
.stone-right .stone-card { width: 100%; }
.stone-full  .current-glow-wrap { width: 100%; }

@media (min-width: 768px) {
  .stone-left  .stone-card { width: 60%; }
  .stone-right .stone-card { width: 60%; }
}

/* ─── Base card ─── */
.stone-card {
  background: #ffffff;
  border-radius: 1.25rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  padding: 1.6rem;
  position: relative;
  overflow: hidden;
}

.stone-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, #0d9488, #06b6d4);
  border-radius: 1.25rem 1.25rem 0 0;
}

/* ─── Current role card + animated glow border ─── */
.current-glow-wrap {
  position: relative;
  border-radius: 1.35rem;
  padding: 2px;
  background: linear-gradient(135deg, #0d9488, #06b6d4, #6366f1, #0d9488);
  background-size: 300% 300%;
  animation: border-flow 5s ease infinite;
}

@keyframes border-flow {
  0%, 100% { background-position: 0% 50%; }
  50%       { background-position: 100% 50%; }
}

.stone-card-current {
  border: none;
  box-shadow: 0 8px 40px rgba(13,148,136,0.15);
}

.stone-card-current::before { display: none; }

/* ─── Card internals ─── */
.stone-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
}

.step-pill {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #0f766e;
  background: #ccfbf1;
  border: 1px solid #99f6e4;
  border-radius: 9999px;
  padding: 0.18rem 0.65rem;
}

.step-pill-current {
  background: linear-gradient(90deg, #0d9488, #0891b2);
  color: #fff;
  border-color: transparent;
}

.date-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: #6b7280;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 9999px;
  padding: 0.18rem 0.7rem;
}

.date-pill-current {
  background: #f0fdfa;
  border-color: #99f6e4;
  color: #0f766e;
}

.live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #14b8a6;
  flex-shrink: 0;
  animation: live-pulse 1.6s ease-in-out infinite;
}

@keyframes live-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(1.4); }
}

.now-badge {
  margin-left: auto;
  font-size: 0.63rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #0f766e;
  background: #ccfbf1;
  border: 1px solid #5eead4;
  border-radius: 9999px;
  padding: 0.18rem 0.7rem;
}

.stone-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.35rem;
  line-height: 1.3;
}

.stone-title-lg { font-size: 1.35rem; }

.stone-company {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #6b7280;
  margin-bottom: 0.9rem;
}

.stone-company-accent { color: #0f766e; font-weight: 500; }

/* ─── Bullets ─── */
.stone-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 0.9rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stone-bullets li {
  font-size: 0.81rem;
  color: #374151;
  line-height: 1.55;
  padding-left: 1rem;
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
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .stone-bullets-2col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem 2.5rem;
  }
}

/* ─── Tags ─── */
.stone-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.stone-tags span {
  font-size: 0.68rem;
  font-weight: 600;
  color: #0f766e;
  background: #f0fdfa;
  border: 1px solid #99f6e4;
  border-radius: 9999px;
  padding: 0.18rem 0.65rem;
}

.stone-tags-current span {
  background: linear-gradient(90deg, #f0fdfa, #ecfeff);
  border-color: #5eead4;
}

/* ─── Connectors ─── */
.connector {
  height: 2.75rem;
  display: flex;
  align-items: center;
}

.conn-inner {
  display: flex;
  align-items: center;
  /* starts at 60% (right edge of left card) and spans to the right */
  margin-left: 60%;
  flex: 1;
}

.conn-inner-left {
  /* starts from the left and ends at 40% (left edge of right card) */
  margin-left: 0;
  margin-right: 60%;
  flex-direction: row-reverse;
}

.conn-line {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, #0d9488 0%, #06b6d4 60%, #cbd5e1 100%);
  border-radius: 9999px;
  opacity: 0.55;
}

.conn-line-left {
  background: linear-gradient(270deg, #0d9488 0%, #06b6d4 60%, #cbd5e1 100%);
}

.conn-arrow {
  color: #0d9488;
  flex-shrink: 0;
  opacity: 0.8;
}

/* ─── Mobile: collapse staircase to full-width vertical stack ─── */
@media (max-width: 767px) {
  .stone-left  .stone-card,
  .stone-right .stone-card { width: 100%; }

  .stone-left,
  .stone-right { transform: translateY(32px); }

  .conn-inner       { margin-left: 0; }
  .conn-inner-left  { margin-right: 0; }

  .connector { height: 2rem; opacity: 0.4; }
}
</style>
