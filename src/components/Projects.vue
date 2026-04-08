<template>
  <section id="projects" class="py-20 px-6 bg-gradient-to-br from-cyan-50 to-white">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
        <div>
          <h2 class="text-3xl font-bold mb-2 text-gray-800">{{ language === 'de' ? 'Wichtige Projekte & Erfolge' : 'Notable Projects & Achievements' }}</h2>
          <div class="w-24 h-1 bg-teal-600"></div>
        </div>
        <p class="text-gray-500 mt-4 md:mt-0 md:text-right text-sm font-medium">
          {{ language === 'de' ? 'AUSWAHL MEINER BESTEN ARBEITEN' : 'SHOWCASING MY BEST WORK' }}
        </p>
      </div>

      <!-- Project grid: expanded card goes full-width, others pair up -->
      <div class="grid md:grid-cols-2 gap-6">
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
              <div class="mr-4 flex-shrink-0 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Mammothan 2025 Gewinner' : 'Mammothan 2025 Winner' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'Gewinner des Mammothan Hackathons 2025 von Celestia mit dem Projekt PrivaCT' : 'Winner of the 2025 Mammothan hackathon by Celestia with the PrivaCT project' }}</p>
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
                <p class="text-gray-600">{{ language === 'de' ? 'ESP DevTooling Grant fuer die Open Labels Initiative als kritische Ecosystem-Infrastruktur' : 'ESP DevTooling Grant awarded to Open Labels Initiative as critical ecosystem infrastructure' }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="mr-4 flex-shrink-0 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Gitcoin GG24 OSS Grant' : 'Gitcoin GG24 OSS Grant' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'OLI akzeptiert in Gitcoin GG24 Developer Tooling & Infra sowie GG22 OSS Libraries Round' : 'OLI accepted into Gitcoin GG24 OSS Developer Tooling & Infra and GG22 OSS Libraries rounds' }}</p>
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
                <p class="text-gray-600">{{ language === 'de' ? 'Organisation von Side-Events, Workshops und Community-Formaten fuer Solana, Celestia und ICP' : 'Organized hackathon side events, workshops, and community events for Solana, Celestia, and ICP' }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="mr-4 flex-shrink-0 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'KI-gesteuerte Sales & Growth Engine' : 'AI-Powered Sales & Growth Engine' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'Entwicklung eines KI-Agenten-Systems zur Automatisierung von Outreach, Lead-Qualifizierung und Partnerschafts-Tracking' : 'Designed and deployed an AI agent-based system to automate outreach, lead qualification, and partnership tracking' }}</p>
              </div>
            </div>

            <div class="flex">
              <div class="mr-4 flex-shrink-0 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Smart Contract Labeling Automation' : 'Smart Contract Labeling Automation' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'End-to-End-Pipeline fuer automatisiertes Metadata-Labeling von Smart Contracts im Ethereum Ecosystem' : 'Built an end-to-end pipeline for automated metadata labeling of smart contracts, improving data quality and research scalability' }}</p>
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
    title: 'Open Labels Initiative (OLI)',
    tagline: props.language === 'de' ? 'Ethereum Foundation gefördert' : 'Ethereum Foundation Funded',
    description: props.language === 'de'
      ? 'Von der Ethereum Foundation gefoerderter offener Standard fuer EVM-Adress-Labeling — adoptiert von Enscribe, walletlabels und mehreren Ethereum-Datenplattformen.'
      : 'Ethereum Foundation-funded open standard for EVM address labeling — adopted by Enscribe, walletlabels, and multiple Ethereum ecosystem data platforms.',
    fullDescription: props.language === 'de'
      ? 'OLI bietet einen einheitlichen, erlaubnisfreien Labeling-Rahmen, der redundante Arbeit in Blockchain-Daten-Teams reduziert. Finanziert durch Ethereum Foundation Data Collection Grants und akzeptiert in Gitcoin GG22 OSS — Developer Tooling & Libraries.'
      : 'OLI provides a unified, permissionless labeling framework reducing redundant work across blockchain data teams. Funded by Ethereum Foundation Data Collection Grants and accepted into Gitcoin GG22 OSS — Developer Tooling & Libraries round.',
    technologies: ['TypeScript', 'JavaScript', 'Node.js', 'Hardhat', 'REST APIs', 'EAS'],
    features: props.language === 'de'
      ? [
        'Type-sicheres TypeScript/JavaScript SDK fuer das Lesen des OLI EVM Label Pools ueber REST',
        'Hardhat-Plugin fuer die Integration von Labeling in bestehende Entwickler-Workflows',
        'Web-Frontend fuer Community-Label-Submissions',
        'Adoptiert von Enscribe, walletlabels und mehreren Ethereum-Datenplattformen',
        'Finanziert durch Ethereum Foundation, Gitcoin GG22/GG24 und Arbitrum Questobook Grant'
      ]
      : [
        'Type-safe TypeScript/JavaScript SDK for reading the OLI EVM label pool over REST',
        'Hardhat plugin for developer workflow integration with smart contract labeling',
        'Web frontend for community label submissions',
        'Adopted by Enscribe, walletlabels, and multiple Ethereum ecosystem data platforms',
        'Funded by Ethereum Foundation, Gitcoin GG22/GG24 OSS, and Arbitrum Questobook Dev Tooling Grant'
      ],
    colorScheme: 'teal',
    codeLink: 'https://github.com/openlabelsinitiative',
    liveLink: 'https://www.openlabelsinitiative.org/',
    bgImage: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 1,
    title: props.language === 'de' ? 'PrivaCT: Vertrauensminimierte Zertifikatstransparenz' : 'PrivaCT: Trust-Minimized Certificate Transparency',
    tagline: props.language === 'de' ? 'Hackathon Gewinner' : 'Hackathon Winner',
    description: props.language === 'de'
      ? 'Gewinner des Mammothan 2025 von Celestia. Browser-Erweiterung mit Prism fuer vertrauensminimierte Zertifikatstransparenz — schuetzt vor Man-in-the-Middle-Angriffen.'
      : 'Winner of the 2025 Mammothan by Celestia. Browser extension leveraging Prism to deliver trust-minimized Certificate Transparency, protecting against man-in-the-middle attacks.',
    fullDescription: props.language === 'de'
      ? 'PrivaCT schliesst eine kritische Sicherheitsluecke beim Surfen im Web, indem geprueft wird, ob Website-Zertifikate korrekt in Transparenzlogs eingetragen sind.'
      : 'PrivaCT addresses a critical security gap in web browsing by verifying that website certificates are properly logged in transparency logs. This prevents man-in-the-middle attacks and enhances internet security.',
    technologies: props.language === 'de'
      ? ['TypeScript', 'Blockchain', 'Web-Sicherheit', 'Browser-Erweiterung']
      : ['TypeScript', 'Blockchain', 'Web Security', 'Browser Extension'],
    features: props.language === 'de'
      ? [
        'Browser-Erweiterung, die Website-Zertifikate automatisch verifiziert',
        'Prism-basiertes Transparenzsystem fuer dezentrale Verifikation',
        'Sichere Merkle-Proof-Verifikation direkt im Browser',
        'Visuelle Indikatoren fuer den Zertifikatsstatus'
      ]
      : [
        'Browser extension that automatically verifies website certificates',
        'Uses Prism-based transparency system for decentralized verification',
        'Secure Merkle Proof verification within the browser',
        'Visual indicators for certificate validity status'
      ],
    colorScheme: 'green',
    codeLink: 'https://github.com/Aghostraa/PrivaCT',
    liveLink: '',
    bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 2,
    title: props.language === 'de' ? 'Sustained: Plattform fuer umweltfreundliches Verhalten' : 'Sustained: Pro-Environmental Behavior Platform',
    tagline: props.language === 'de' ? 'Abschlussprojekt' : 'Thesis Project',
    description: props.language === 'de'
      ? 'Digitale Plattform zur Foerderung pro-umweltlichen Verhaltens in Aachen durch innovative Finanzierungsmechanismen, Impact-Visualisierung und Community-Engagement.'
      : 'Digital platform to foster pro-environmental behavior in Aachen through innovative funding mechanisms, impact visualization, and community engagement.',
    fullDescription: props.language === 'de'
      ? 'Dieses Abschlussprojekt konzipierte Sustained als digitale Plattform zur Foerderung pro-umweltlichen Verhaltens in Aachen. Die Forschung adressierte zentrale Herausforderungen aus Literaturauswertung und lokaler Bedarfsanalyse.'
      : 'This thesis project conceptualized Sustained, a digital platform designed to foster pro-environmental behavior (PEB) in Aachen by bridging the gap between environmental awareness and consistent action. The research addressed key challenges identified through a comprehensive literature review and an initial local needs assessment.',
    technologies: props.language === 'de'
      ? ['React', 'TypeScript', 'Tailwind CSS', 'Quadratische Finanzierung']
      : ['React', 'TypeScript', 'Tailwind CSS', 'Quadratic Funding'],
    features: props.language === 'de'
      ? [
        'Initiativen-Hub zur Unterstuetzung lokaler Nachhaltigkeitsprojekte',
        'Persoenliches Dashboard mit Community-Funktionen fuer mehr Engagement',
        'Impact-Visualisierung zur Uebersetzung von Zielen in konkrete Kennzahlen',
        'EcoFundSim-Simulation verschiedener Quadratic-Funding-Modelle',
        'Forschungsgetriebene Plattform zwischen VBN- und TPB-Frameworks'
      ]
      : [
        'Initiative Hub to support organizational efficiency for local sustainability projects',
        'Personal Dashboard with community features to enhance user engagement',
        'Impact Visualization System to translate initiative goals into tangible metrics',
        'EcoFundSim simulation of Quadratic Funding variations for democratic resource allocation',
        'Research-driven platform bridging Value-Belief-Norm and Theory of Planned Behavior frameworks'
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
