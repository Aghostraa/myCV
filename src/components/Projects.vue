<template>
  <section id="projects" class="py-20 px-6 bg-gradient-to-br from-teal-50/70 via-cyan-50/50 to-white">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
        <div>
          <h2 class="text-3xl font-bold mb-2 text-gray-800">{{ language === 'de' ? 'Wichtige Projekte & Erfolge' : 'Notable Projects & Achievements' }}</h2>
          <div class="w-24 h-1 bg-teal-600"></div>
        </div>
        <p class="text-gray-500 mt-4 md:mt-0 md:text-right text-sm font-medium">
          {{ language === 'de' ? 'WAS ICH GEBAUT HABE' : "What I've shipped" }}
        </p>
      </div>

      <!-- Project grid: expanded card goes full-width, others pair up -->
      <div class="grid md:grid-cols-2 gap-6 items-start">
        <div
          v-for="project in orderedProjects"
          :key="project.id"
          :class="activeProjectIndex === project.id ? 'md:col-span-2' : ''"
          class="transition-all duration-500"
        >
          <ProjectCard
            :title="project.title"
            :tagline="project.tagline"
            :description="project.description"
            :fullDescription="project.fullDescription"
            :technologies="project.technologies"
            :features="project.features"
            :colorScheme="project.colorScheme"
            :codeLink="project.codeLink"
            :liveLink="project.liveLink"
            :bgImage="project.bgImage"
            :isExpanded="activeProjectIndex === project.id"
            :language="language"
            @toggle-expand="handleProjectExpand(project.id)"
          />
        </div>
      </div>

      <!-- Achievements -->
      <div class="mt-12 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
        <div class="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6">
          <h3 class="text-2xl font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
            </svg>
            {{ language === 'de' ? 'Erfolge & Auszeichnungen' : 'Achievements & Recognition' }}
          </h3>
        </div>
        <div class="p-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex">
              <div class="mr-4 flex-shrink-0 text-2xl">🏆</div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'ETH Global Open Agents — Cortex' : 'ETH Global Open Agents — Cortex' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'Gewinner des 0G Best Agent Framework Tracks. Selbst-evolvierende KI-Agenten-Zwillinge mit verschluesseltem persistentem Gedaechtnis auf dezentralem Storage — persistente Identitaet fuer KI.' : 'Winner of the 0G Best Agent Framework track. Built self-evolving AI agent twins with encrypted persistent memory on decentralized storage — persistent identity for AI.' }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="mr-4 flex-shrink-0 text-2xl">🏆</div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Mammothan 2025 Gewinner' : 'Mammothan 2025 Winner' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'Gewinner des 2025 Mammothan Hackathons von Celestia mit PrivaCT — vertrauensminimierte Zertifikatstransparenz direkt im Browser.' : 'Winner of the 2025 Mammothan hackathon by Celestia with PrivaCT — trust-minimized Certificate Transparency delivered directly in the browser.' }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="mr-4 flex-shrink-0 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Ethereum Foundation Grant' : 'Ethereum Foundation Grant' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'ESP DevTooling Grant fuer die Open Labels Initiative als kritische Ethereum Ecosystem-Infrastruktur.' : 'ESP DevTooling Grant awarded to Open Labels Initiative as critical Ethereum ecosystem infrastructure.' }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="mr-4 flex-shrink-0 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Gitcoin Grants' : 'Gitcoin Grants' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'OLI akzeptiert in Gitcoin GG25 OSS Developer Tooling & Infra.' : 'OLI accepted into Gitcoin GG25 OSS Developer Tooling & Infra.' }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="mr-4 flex-shrink-0 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'KI Labeling Agent — 100x Kostenreduktion' : 'AI Labeling Agent — 100x Cost Reduction' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'KI-Agent fuer Smart-Contract-Labeling: Kosten von €1 auf €0,01 pro Label gesenkt — Bearbeitungszeit von 4 Stunden auf 10 Minuten.' : 'Built an automated AI agent that cut smart contract labeling costs from €1 to €0.01 per label — reducing processing time from 4 hours to 10 minutes at scale.' }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="mr-4 flex-shrink-0 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'KI Sales Engine — 3 Stellen automatisiert' : 'AI Sales Engine — 3 Hires Replaced' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'Agentisches System fuer 30 simultane Business-Gespraeche — Outreach-Zeit von 1 Stunde auf 10 Minuten, ersetzte Aufwand von 3 zusaetzlichen Mitarbeitern.' : 'Built an agentic system managing 30 simultaneous business conversations, reducing per-contact outreach time from 1 hour to 10 minutes — collectively replacing the workload of 3 additional hires.' }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="mr-4 flex-shrink-0 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Web3 Community Partner' : 'Web3 Community Partner' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'Organisation von Hackathon Side-Events, Workshops und Community-Events fuer Solana, Celestia und ICP — inkl. 5 Mammothan Pit-Stops in Deutschland als Blockchain Club President.' : 'Organized hackathon side events, workshops, and community events for Solana, Celestia, and ICP — including 5 Mammothan pit-stops across Germany as Blockchain Club President.' }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="mr-4 flex-shrink-0 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Award-Winning Writing' : 'Award-Winning Writing' }}</h4>
                <p class="text-gray-600">
                  {{ language === 'de' ? 'Analyse zum Stand des Ethereum Ecosystems — in der Web3-Research-Community verbreitet und anerkannt.' : 'Published analysis on the state of the Ethereum ecosystem — featured and recognized across the Web3 research community.' }}
                  <a href="https://app.t2.world/article/cm13hjiki91314821mcrbk78i1q" target="_blank" rel="noopener" class="text-teal-600 hover:text-teal-800 underline ml-1">{{ language === 'de' ? 'Lesen' : 'Read it' }}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProjectCard from './ProjectCard.vue';

const props = defineProps({
  language: { type: String, default: 'en' }
});

const activeProjectIndex = ref(null);

const handleProjectExpand = (id) => {
  activeProjectIndex.value = activeProjectIndex.value === id ? null : id;
};

const allProjects = computed(() => [
  {
    id: 0,
    title: 'Cortex',
    tagline: props.language === 'de' ? 'ETH Global Open Agents Gewinner' : 'ETH Global Open Agents Winner',
    description: props.language === 'de'
      ? 'Selbst-evolvierende KI-Agenten-Zwillinge — verschluesselt auf 0G, TeeML-verifiziert, ENS-auffindbar, P2P via AXL. Gewinner des 0G Best Agent Framework Tracks beim ETH Global Open Agents Hackathon.'
      : 'Self-evolving AI agent twins — encrypted on 0G, TeeML-verified, ENS-discoverable, P2P via AXL. Winner of the 0G Best Agent Framework track at ETH Global Open Agents.',
    fullDescription: props.language === 'de'
      ? 'Cortex ermoeglicht Protokollen, Agent-Zwillinge zu bauen, die Entwicklern bei der Integration helfen, miteinander kommunizieren und aus fehlgeschlagenen Sessions lernen. Die Flagship-Demo zeigt drei Live-Protokoll-Zwillinge (0G, AXL, ENS), die Rollen deklarieren, sich gegenseitig befragen, aus Fehlern Faehigkeiten entwickeln und aktualisierte verschluesselte Brains auf 0G Storage hochladen. Das apply-twin: ein MCP-Server fuer Claude Desktop, der massgeschneiderte Bewerbungsschreiben entwirft und die Bewerbungspipeline in 0G KV trackt.'
      : 'Cortex lets protocols build agent twins that help developers integrate their products, talk to other protocol twins, and learn from failed sessions. The flagship demo is three live protocol twins — 0G, AXL, and ENS — that declare roles, query each other over AXL, evolve skills from failure, and upload updated encrypted brains to 0G Storage. The apply-twin is a self-twin MCP server that connects to Claude Desktop, drafts tailored cover letters via 0G Compute, and tracks your application pipeline in 0G KV — your encrypted professional brain persists across devices.',
    technologies: ['TypeScript', 'pnpm monorepo', '0G Storage/KV/Compute', 'AXL', 'ENS', 'ERC-721/iNFT', 'TeeML', 'AES-256'],
    features: props.language === 'de'
      ? [
        'Agent SDK: Agent.create, ask, remember, recall, send, listen — Storage, Memory, Inference und Messaging in einem Objekt',
        'TeeML-verifizierte Inferenz — Runtime schlaegt fehl, wenn Verifikation nicht besteht',
        'AES-256-verschluesselte Agent-Brains auf 0G Storage; Skill-Evolution mit on-chain Verifikation',
        'ENS-Namensaufloesung via CCIP-read Gateway — Agenten veroeffentlichen agent.resume, agent.skills, agent.proof',
        'apply-twin MCP-Server: Claude Desktop entwirft Bewerbungsschreiben, trackt Pipeline in 0G KV',
        'Die eigenen Agenten-Ausgaben trieben den Produkt-Pivot an — der klarste Beweis fuer funktionierendes persistentes Gedaechtnis'
      ]
      : [
        'Agent SDK: Agent.create, ask, remember, recall, send, listen — storage, memory, inference, and messaging in one object',
        'TeeML-verified inference — runtime fails closed if verification does not pass',
        'AES-256 encrypted agent brains on 0G Storage; skill evolution with verifiable on-chain root hash',
        'ENS name resolution via CCIP-read gateway — agents publish agent.resume, agent.skills, agent.proof text records',
        'apply-twin MCP server: connects to Claude Desktop, drafts tailored cover letters, tracks application pipeline in 0G KV',
        'The system\'s own agent output drove the product pivot — the clearest proof that persistent, evolving agents actually work'
      ],
    colorScheme: 'purple',
    codeLink: 'https://github.com/Aghostraa/cortex',
    liveLink: 'https://ethglobal.com/showcase/cortex',
    bgImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 1,
    title: 'Open Labels Initiative (OLI)',
    tagline: props.language === 'de' ? 'Ethereum Foundation gefördert' : 'Ethereum Foundation Funded',
    description: props.language === 'de'
      ? 'Ein offener Standard fuer EVM-Adress-Labeling — von einem leeren Repo zu Ethereum Foundation-gefoerderter Infrastruktur entwickelt. Drei Produktions-Artefakte geliefert und adoptiert von Enscribe, walletlabels, Blockscout und mehreren Daten-Teams.'
      : 'An open standard for EVM address labeling — built from an empty repo to Ethereum Foundation-funded infrastructure. Shipped three production artifacts and adopted by Enscribe, walletlabels, Blockscout, and multiple ecosystem data teams.',
    fullDescription: props.language === 'de'
      ? 'OLI bietet einen einheitlichen, erlaubnisfreien Labeling-Rahmen, der redundante Arbeit in Blockchain-Daten-Teams eliminiert. Drei Grants eigenstaendig gesichert: Ethereum Foundation ESP DevTooling, Gitcoin GG25 OSS Developer Tooling & Infra, Arbitrum Questbook Dev Tooling.'
      : 'OLI provides a unified, permissionless labeling framework that eliminates redundant work across blockchain data teams. Three grants secured independently: Ethereum Foundation ESP DevTooling, Gitcoin GG25 OSS Developer Tooling & Infra, and Arbitrum Questbook Dev Tooling.',
    technologies: ['TypeScript', 'JavaScript', 'Node.js', 'Hardhat', 'REST APIs', 'EAS'],
    features: props.language === 'de'
      ? [
        'TypeScript/JavaScript SDK fuer das Lesen des OLI EVM Label Pools ueber REST',
        'Hardhat-Plugin: Entwickler koennen Labels direkt beim Deployment attestieren',
        'Web-Frontend fuer Community-Label-Submissions',
        'Adoptiert von Enscribe, walletlabels, Blockscout und mehreren Ethereum-Datenplattformen',
        'Finanziert durch Ethereum Foundation, Gitcoin GG25 OSS Developer Tooling & Infra und Arbitrum Questbook Dev Tooling'
      ]
      : [
        'TypeScript/JavaScript SDK for reading the OLI EVM label pool over REST',
        'Hardhat plugin that lets developers attest labels on deployment',
        'Web frontend for community label submissions',
        'Adopted by Enscribe, walletlabels, Blockscout, and multiple Ethereum ecosystem data platforms',
        'Funded by Ethereum Foundation, Gitcoin GG25 OSS Developer Tooling & Infra, and Arbitrum Questbook Dev Tooling'
      ],
    colorScheme: 'teal',
    codeLink: 'https://github.com/openlabelsinitiative',
    liveLink: 'https://www.openlabelsinitiative.org/',
    bgImage: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    title: props.language === 'de' ? 'PrivaCT: Vertrauensminimierte Zertifikatstransparenz' : 'PrivaCT: Trust-Minimized Certificate Transparency',
    tagline: props.language === 'de' ? 'Hackathon Gewinner — Mammothan 2025' : 'Hackathon Winner — Mammothan 2025 by Celestia',
    description: props.language === 'de'
      ? 'Browser-Erweiterung, die Website-Zertifikate direkt im Browser verifiziert — mit Prism-basierten dezentralen Transparenzlogs. Schuetzt vor Man-in-the-Middle-Angriffen ohne zentraler Autoritaet zu vertrauen.'
      : 'Browser extension that verifies website certificates directly in the browser using Prism-based decentralized transparency logs — protecting users from man-in-the-middle attacks without trusting a central authority.',
    fullDescription: props.language === 'de'
      ? 'PrivaCT schliesst eine kritische Sicherheitsluecke beim Surfen im Web: Merkle-Proof-Verifikation und visuelle Echtzeit-Indikatoren direkt im Browser, ohne zentrale Infrastruktur.'
      : 'PrivaCT closes a critical security gap in web browsing: Merkle Proof verification and real-time visual indicators directly in the browser, with no central infrastructure required.',
    technologies: props.language === 'de'
      ? ['TypeScript', 'Blockchain', 'Web-Sicherheit', 'Browser-Erweiterung']
      : ['TypeScript', 'Blockchain', 'Web Security', 'Browser Extension'],
    features: props.language === 'de'
      ? [
        'Browser-Erweiterung verifiziert Website-Zertifikate automatisch in Echtzeit',
        'Prism-basiertes Transparenzsystem fuer dezentrale Verifikation',
        'Sichere Merkle-Proof-Verifikation direkt im Browser',
        'Visuelle Indikatoren fuer Zertifikatsstatus — kein zentraler Broker'
      ]
      : [
        'Browser extension that automatically verifies website certificates in real time',
        'Prism-based transparency system for decentralized verification',
        'Secure Merkle Proof verification within the browser',
        'Visual certificate validity indicators — no central broker'
      ],
    colorScheme: 'green',
    codeLink: 'https://github.com/Aghostraa/PrivaCT',
    liveLink: '',
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    title: props.language === 'de' ? 'Sustained: Plattform fuer umweltfreundliches Verhalten' : 'Sustained: Pro-Environmental Behavior Platform',
    tagline: props.language === 'de' ? 'Abschlussprojekt' : 'Thesis Project',
    description: props.language === 'de'
      ? 'Full-Stack-Plattform zur Foerderung pro-umweltlichen Verhaltens in Aachen durch demokratische Finanzierung und Community-Aktionen. Quadratic-Funding-Simulation, Initiative Hub und Impact-Visualisierungssystem.'
      : 'Full-stack platform designed to foster pro-environmental behavior in Aachen through democratic funding and community action. Built a Quadratic Funding simulation (EcoFundSim), an Initiative Hub for local sustainability projects, and an Impact Visualization System.',
    fullDescription: props.language === 'de'
      ? 'Forschungsgetriebene Plattform auf Basis von Value-Belief-Norm und Theory of Planned Behavior Frameworks — entwickelt als Abschlussprojekt an der FH Aachen.'
      : 'Research grounded in Value-Belief-Norm and Theory of Planned Behavior frameworks — developed as a thesis project at FH Aachen University.',
    technologies: props.language === 'de'
      ? ['React', 'TypeScript', 'Tailwind CSS', 'Quadratische Finanzierung']
      : ['React', 'TypeScript', 'Tailwind CSS', 'Quadratic Funding'],
    features: props.language === 'de'
      ? [
        'EcoFundSim: Quadratic-Funding-Simulation fuer demokratische Ressourcenverteilung',
        'Initiative Hub fuer lokale Nachhaltigkeitsprojekte',
        'Impact-Visualisierungssystem: Ziele in messbare Kennzahlen uebersetzt',
        'Persoenliches Dashboard mit Community-Engagement-Funktionen',
        'VBN- und TPB-Framework-Integration fuer verhaltensbasiertes Design'
      ]
      : [
        'EcoFundSim: Quadratic Funding simulation for democratic resource allocation',
        'Initiative Hub for local sustainability projects',
        'Impact Visualization System: translates initiative goals into tangible metrics',
        'Personal Dashboard with community engagement features',
        'Value-Belief-Norm and Theory of Planned Behavior framework integration'
      ],
    colorScheme: 'blue',
    codeLink: 'https://github.com/Aghostraa/sustained-aachen',
    liveLink: 'https://sustained-aachen.vercel.app',
    bgImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
]);

// Expanded card goes first, others follow in original order — no whitespace gap
const orderedProjects = computed(() => {
  if (activeProjectIndex.value === null) return allProjects.value;
  const expanded = allProjects.value.find(p => p.id === activeProjectIndex.value);
  const rest = allProjects.value.filter(p => p.id !== activeProjectIndex.value);
  return [expanded, ...rest];
});
</script>
