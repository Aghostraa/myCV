<template>
  <section id="projects" class="py-20 px-6 bg-gradient-to-br from-indigo-50 to-white">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
        <div>
          <h2 class="text-3xl font-bold mb-2 text-gray-800">{{ language === 'de' ? 'Wichtige Projekte & Erfolge' : 'Notable Projects & Achievements' }}</h2>
          <div class="w-24 h-1 bg-indigo-500"></div>
        </div>
        <p class="text-gray-500 mt-4 md:mt-0 md:text-right text-sm font-medium">
          {{ language === 'de' ? 'AUSWAHL MEINER BESTEN ARBEITEN' : 'SHOWCASING MY BEST WORK' }}
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Project 1: PrivaCT -->
        <ProjectCard
          :title="language === 'de' ? 'PrivaCT: Vertrauensminimierte Zertifikatstransparenz' : 'PrivaCT: Trust-Minimized Certificate Transparency'"
          :tagline="language === 'de' ? 'Hackathon Gewinner' : 'Hackathon Winner'"
          :description="language === 'de'
            ? 'Gewinner des Mammothan 2025 von Celestia. Entwicklung einer Browser-Erweiterung mit Prism, die vertrauensminimierte Zertifikatstransparenz direkt fuer Nutzer bereitstellt, Man-in-the-Middle-Angriffe reduziert und Websicherheit verbessert.'
            : 'Winner of the 2025 Mammothan by Celestia. Developed a browser extension leveraging Prism to deliver trust-minimized Certificate Transparency directly to users, protecting against man-in-the-middle attacks and enhancing web security.'"
          :technologies="language === 'de' ? ['TypeScript', 'Blockchain', 'Web-Sicherheit', 'Browser-Erweiterung'] : ['TypeScript', 'Blockchain', 'Web Security', 'Browser Extension']"
          colorScheme="green"
          codeLink="https://github.com/Aghostraa/PrivaCT"
          bgImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          :fullDescription="language === 'de'
            ? 'PrivaCT schliesst eine kritische Sicherheitsluecke beim Surfen im Web, indem geprueft wird, ob Website-Zertifikate korrekt in Transparenzlogs eingetragen sind. Das verhindert Man-in-the-Middle-Angriffe und verbessert die Internetsicherheit.'
            : 'PrivaCT addresses a critical security gap in web browsing by verifying that website certificates are properly logged in transparency logs. This prevents man-in-the-middle attacks and enhances internet security.'"
          :features="language === 'de'
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
            ]"
          :is-expanded="activeProjectIndex === 0"
          :language="language"
          @toggle-expand="handleProjectExpand(0)"
        />
        
        <!-- Project 2: Sustained Aachen -->
        <ProjectCard
          :title="language === 'de' ? 'Sustained: Plattform fuer umweltfreundliches Verhalten' : 'Sustained: Pro-Environmental Behavior Platform'"
          :tagline="language === 'de' ? 'Abschlussprojekt' : 'Thesis Project'"
          :description="language === 'de'
            ? 'Eine digitale Plattform, die umweltfreundliches Verhalten in Aachen foerdern soll, indem sie die Luecke zwischen Umweltbewusstsein und konsequenter Handlung durch innovative Finanzierungsmechanismen und Impact-Visualisierung schliesst.'
            : 'A digital platform designed to foster pro-environmental behavior in Aachen by bridging the gap between environmental awareness and consistent action through innovative funding mechanisms and impact visualization.'"
          :technologies="language === 'de' ? ['React', 'TypeScript', 'Tailwind CSS', 'Quadratische Finanzierung'] : ['React', 'TypeScript', 'Tailwind CSS', 'Quadratic Funding']"
          colorScheme="blue"
          liveLink="https://sustained-aachen.vercel.app"
          codeLink="https://github.com/Aghostraa/sustained-aachen"
          bgImage="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          :fullDescription="language === 'de'
            ? 'Dieses Abschlussprojekt konzipierte Sustained als digitale Plattform zur Foerderung pro-umweltlichen Verhaltens (PEB) in Aachen. Die Forschung adressierte zentrale Herausforderungen aus Literaturauswertung und lokaler Bedarfsanalyse.'
            : 'This thesis project conceptualized Sustained, a digital platform designed to foster pro-environmental behavior (PEB) in Aachen by bridging the gap between environmental awareness and consistent action. The research addressed key challenges identified through a comprehensive literature review and an initial local needs assessment.'"
          :features="language === 'de'
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
            ]"
          :is-expanded="activeProjectIndex === 1"
          :language="language"
          @toggle-expand="handleProjectExpand(1)"
        />
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
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
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
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Open-Source-Beitragender' : 'Open Source Contributor' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'Aktiver Beitragender in Blockchain- und Web3-Open-Source-Projekten' : 'Active contributor to blockchain and web3 open source projects' }}</p>
              </div>
            </div>
            
            <div class="flex">
              <div class="mr-4 flex-shrink-0 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Web3 Researcher' : 'Web3 Researcher' }}</h4>
                <p class="text-gray-600">{{ language === 'de' ? 'Beitrag bei growthepie mit aktueller Forschung zum Wachstum des Ethereum-Oekosystems' : 'Contributing to growthepie with cutting-edge research on Ethereum ecosystem growth' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';

defineProps({
  language: {
    type: String,
    default: 'en'
  }
});

// This variable will track which project is currently expanded
const activeProjectIndex = ref(null);

// Handle project expansion
const handleProjectExpand = (index) => {
  // If clicking the same project that's already expanded, close it
  if (activeProjectIndex.value === index) {
    activeProjectIndex.value = null;
  } else {
    // Otherwise, set this project as the active one
    activeProjectIndex.value = index;
  }
};
</script> 
