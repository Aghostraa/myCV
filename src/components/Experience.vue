<template>
  <section id="experience" class="py-20 px-6 bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/40">
    <div class="container mx-auto max-w-3xl">

      <!-- Section header -->
      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold mb-4 text-gray-900">
          {{ language === 'de' ? 'Berufserfahrung' : 'Professional Experience' }}
        </h2>
        <div class="w-16 h-1 bg-teal-500 mx-auto mb-4"></div>
        <p class="text-gray-400 text-sm font-semibold tracking-widest uppercase">
          {{ language === 'de' ? 'Luecken identifiziert. Systeme gebaut. Ergebnisse geliefert.' : 'Gaps identified. Systems built. Results shipped.' }}
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-teal-400 via-teal-300 to-gray-200"></div>

        <div class="space-y-8">

          <!-- ── Role 01 — Current ── -->
          <div class="role-entry" ref="el0">
            <!-- Dot -->
            <div class="absolute left-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-md shadow-teal-200 z-10">
              <span class="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
            </div>

            <!-- Card -->
            <div class="ml-16 bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <!-- Top accent -->
              <div class="h-1 bg-gradient-to-r from-teal-500 to-cyan-400"></div>
              <div class="p-6">
                <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">{{ language === 'de' ? 'Ecosystem & Product Builder' : 'Ecosystem & Product Builder' }}</h3>
                    <p class="text-sm text-teal-600 font-medium mt-0.5">growthepie / orbal GmbH · Remote</p>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <span class="flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                      <span class="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                      {{ language === 'de' ? 'Aktuell' : 'Current' }}
                    </span>
                    <span class="text-xs text-gray-400 font-medium">Aug 2024 – {{ language === 'de' ? 'Heute' : 'Present' }}</span>
                  </div>
                </div>

                <ul class="space-y-2">
                  <li class="role-bullet"><strong class="role-kw">{{ language === 'de' ? 'KI Labeling Agent' : 'AI labeling agent' }}</strong> — {{ language === 'de' ? '€1→€0,01/Label, 4h→10min (100×)' : '€1→€0.01/label, 4h→10min (100×)' }}</li>
                  <li class="role-bullet"><strong class="role-kw">{{ language === 'de' ? 'KI Sales Engine' : 'AI sales engine' }}</strong> — {{ language === 'de' ? '30 simultane Gespraeche, 1h→10min pro Kontakt' : '30 simultaneous conversations, 1h→10min per contact' }}</li>
                  <li class="role-bullet"><strong class="role-kw">{{ language === 'de' ? '3 Grants · $50,000' : '3 grants · $50,000' }}</strong> — EF ESP DevTooling, Gitcoin GG22 OSS, Arbitrum Questbook</li>
                  <li class="role-bullet"><strong class="role-kw">Open Labels Initiative</strong> — {{ language === 'de' ? 'TypeScript SDK, Hardhat Plugin, Web-Frontend; adoptiert von Blockscout, Enscribe, Sourcify' : 'TypeScript SDK, Hardhat plugin, web frontend; adopted by Blockscout, Enscribe, Sourcify' }}</li>
                  <li class="role-bullet"><strong class="role-kw">{{ language === 'de' ? 'L2 Ecosystem Research' : 'L2 ecosystem research' }}</strong> — {{ language === 'de' ? 'Metriken & Insights; Protokolle & Daten-Teams' : 'metrics & insights; protocols & data teams' }}</li>
                  <li class="role-bullet"><strong class="role-kw">{{ language === 'de' ? 'Frontend' : 'Frontend' }}</strong> — {{ language === 'de' ? 'Forschung in Produkt-Interfaces ueberfuehrt' : 'bridged research output into product interfaces' }}</li>
                  <li class="role-bullet"><strong class="role-kw">{{ language === 'de' ? 'KI Advocate' : 'AI advocate' }}</strong> — {{ language === 'de' ? 'Tools, Workflows & Agenten: Engineering, Research, Produkt' : 'tools, workflows & agents across engineering, research, product' }}</li>
                </ul>

                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="tag">TypeScript</span>
                  <span class="tag">Blockchain</span>
                  <span class="tag">AI Agents</span>
                  <span class="tag">Grants</span>
                  <span class="tag">Open Source</span>
                  <span class="tag">Product</span>
                </div>
              </div>
            </div>
          </div>

          <!-- ── Role 02 — Community & Growth ── -->
          <div class="role-entry" ref="el1">
            <div class="absolute left-0 w-10 h-10 rounded-full bg-white border-2 border-teal-300 flex items-center justify-center z-10">
              <span class="w-2 h-2 rounded-full bg-teal-400"></span>
            </div>
            <div class="ml-16 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div class="h-1 bg-gradient-to-r from-gray-200 to-teal-200"></div>
              <div class="p-6">
                <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">{{ language === 'de' ? 'Community & Growth Manager' : 'Community & Growth Manager' }}</h3>
                    <p class="text-sm text-gray-500 font-medium mt-0.5">growthepie · Remote</p>
                  </div>
                  <span class="text-xs text-gray-400 font-medium shrink-0">Jun 2023 – Jul 2024</span>
                </div>

                <ul class="space-y-2">
                  <li class="role-bullet"><strong class="role-kw">{{ language === 'de' ? 'Community Management' : 'Community management' }}</strong> — {{ language === 'de' ? 'Web3-Entwickler & Researcher; Blockchain-Analytics-Awareness' : 'Web3 developers & researchers; blockchain analytics awareness' }}</li>
                  <li class="role-bullet"><strong class="role-kw">{{ language === 'de' ? 'Content Strategie' : 'Content strategy' }}</strong> — {{ language === 'de' ? 'On-Chain-Daten in zugaengliche Narrative uebersetzt' : 'on-chain data translated into accessible narratives' }}</li>
                  <li class="role-bullet"><strong class="role-kw">{{ language === 'de' ? 'Sales & Partnerschaften' : 'Sales & partnerships' }}</strong> — {{ language === 'de' ? 'Protokoll-Beziehungen; Beitrag zur Wachstums-Engine' : 'protocol relationships; contribution to growth engine' }}</li>
                </ul>

                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="tag">Community</span>
                  <span class="tag">Content Strategy</span>
                  <span class="tag">Web3</span>
                  <span class="tag">Sales</span>
                </div>
              </div>
            </div>
          </div>

          <!-- ── Role 03 — Design Thinking ── -->
          <div class="role-entry" ref="el2">
            <div class="absolute left-0 w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center z-10">
              <span class="w-2 h-2 rounded-full bg-gray-300"></span>
            </div>
            <div class="ml-16 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div class="h-1 bg-gradient-to-r from-gray-100 to-gray-200"></div>
              <div class="p-6">
                <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">{{ language === 'de' ? 'Design Thinking Coach & Studentische Hilfskraft' : 'Design Thinking Coach & Student Assistant' }}</h3>
                    <p class="text-sm text-gray-500 font-medium mt-0.5">FH Aachen University · {{ language === 'de' ? 'Deutschland' : 'Germany' }}</p>
                  </div>
                  <span class="text-xs text-gray-400 font-medium shrink-0">{{ language === 'de' ? 'Mrz 2022 – Dez 2023' : 'Mar 2022 – Dec 2023' }}</span>
                </div>

                <ul class="space-y-2">
                  <li class="role-bullet"><strong class="role-kw">{{ language === 'de' ? 'DT Workshops' : 'DT workshops' }}</strong> — {{ language === 'de' ? 'Studierende & Lehrende; Problem-Framing vor Loesungssuche' : 'students & faculty; problem framing before solutioning' }}</li>
                  <li class="role-bullet"><strong class="role-kw">{{ language === 'de' ? 'HCD Methodik' : 'HCD methodology' }}</strong> — {{ language === 'de' ? 'Ingenieur-Curriculum; menschzentrierte Designprozesse' : 'engineering curriculum; human-centered design' }}</li>
                  <li class="role-bullet"><strong class="role-kw">{{ language === 'de' ? 'Curriculum' : 'Curriculum' }}</strong> — {{ language === 'de' ? 'Lernmaterialien & Kursgestaltung' : 'instructional materials & course design' }}</li>
                </ul>

                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="tag">Design Thinking</span>
                  <span class="tag">{{ language === 'de' ? 'Bildung' : 'Education' }}</span>
                  <span class="tag">Facilitation</span>
                </div>
              </div>
            </div>
          </div>

        </div>
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
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  [el0.value, el1.value, el2.value].forEach(el => { if (el) observer.observe(el); });
});
</script>

<style scoped>
.role-entry {
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.role-entry.visible {
  opacity: 1;
  transform: none;
}

.role-bullet {
  font-size: 0.82rem;
  color: #4b5563;
  line-height: 1.5;
  padding-left: 0.75rem;
  position: relative;
}

.role-bullet::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #14b8a6;
}

.role-kw {
  color: #0f766e;
  font-weight: 700;
  font-size: 0.82rem;
}

.tag {
  font-size: 0.68rem;
  font-weight: 600;
  color: #0f766e;
  background: #f0fdfa;
  border: 1px solid #99f6e4;
  border-radius: 9999px;
  padding: 0.15rem 0.6rem;
}
</style>
