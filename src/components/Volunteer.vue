<template>
  <section id="volunteer" class="py-20 px-6 bg-gradient-to-br from-cyan-50 via-white to-teal-50">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
        <div>
          <h2 class="text-3xl font-bold mb-2 text-gray-800">{{ language === 'de' ? 'Ehrenamt & Fuehrung' : 'Volunteer & Leadership' }}</h2>
          <div class="w-24 h-1 bg-teal-600"></div>
        </div>
        <p class="text-gray-500 mt-4 md:mt-0 md:text-right text-sm font-medium">
          {{ language === 'de' ? 'FUEHRUNG IN DER BLOCKCHAIN-COMMUNITY' : 'LEADERSHIP IN THE BLOCKCHAIN COMMUNITY' }}
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Position 1: Advisor -->
        <div class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
          <div class="h-3 bg-gradient-to-r from-teal-400 to-cyan-500"></div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-gray-800">{{ language === 'de' ? 'Berater' : 'Advisor' }}</h3>
                <div class="text-lg text-teal-600 font-medium">Aachen Blockchain Club e.V.</div>
              </div>
              <span class="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">{{ language === 'de' ? 'Mrz 2025 - Heute' : 'Mar 2025 - Present' }}</span>
            </div>
            
            <p class="text-gray-700 mb-4">
              {{ language === 'de' ? 'Als Berater des Clubs unterstuetze ich das Executive Team strategisch, begleite neue Mitglieder und foerdere Blockchain-Bildungsinitiativen an der FH Aachen.' : 'As an advisor to the club, I provide strategic guidance to the executive team, mentor new members, and support blockchain education initiatives at FH Aachen.' }}
            </p>
            
            <div class="flex flex-wrap gap-2 mt-4">
              <div class="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">{{ language === 'de' ? 'Mentoring' : 'Mentoring' }}</div>
              <div class="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">{{ language === 'de' ? 'Strategische Planung' : 'Strategic Planning' }}</div>
              <div class="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">{{ language === 'de' ? 'Blockchain Bildung' : 'Blockchain Education' }}</div>
            </div>
            
            <div class="mt-6 flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 text-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <span>{{ language === 'de' ? 'Wissenschafts- und Technologiesektor' : 'Science and Technology sector' }}</span>
            </div>
          </div>
        </div>
        
        <!-- Position 2: President -->
        <div class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
          <div class="h-3 bg-gradient-to-r from-green-400 to-emerald-500"></div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-gray-800">{{ language === 'de' ? 'Praesident' : 'President' }}</h3>
                <div class="text-lg text-green-600 font-medium">Aachen Blockchain Club e.V.</div>
              </div>
              <span class="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Jun 2024 - Mar 2025</span>
            </div>
            
            <p class="text-gray-700 mb-4">
              {{ language === 'de' ? 'Leitung des universitaeren Blockchain-Clubs, inklusive Organisation von Bildungs-Events, Workshops und Networking-Sessions zur Foerderung von Blockchain und Web3 auf dem Campus.' : 'Led the university blockchain club, organizing educational events, workshops, and networking sessions to promote blockchain technology and Web3 awareness on campus.' }}
            </p>
            
            <div class="flex flex-wrap gap-2 mt-4">
              <div class="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">{{ language === 'de' ? 'Fuehrung' : 'Leadership' }}</div>
              <div class="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">{{ language === 'de' ? 'Event-Management' : 'Event Management' }}</div>
              <div class="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">{{ language === 'de' ? 'Bildung' : 'Education' }}</div>
            </div>
            
            <div class="mt-6 flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 text-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span>{{ language === 'de' ? 'Bildungssektor' : 'Education sector' }}</span>
            </div>
          </div>
        </div>
      
        <!-- Position 3: Vice President -->
        <div class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
          <div class="h-3 bg-gradient-to-r from-green-400 to-emerald-500"></div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-gray-800">{{ language === 'de' ? 'Vizepraesident' : 'Vice President' }}</h3>
                <div class="text-lg text-green-600 font-medium">Aachen Blockchain Club e.V.</div>
              </div>
              <span class="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">{{ language === 'de' ? 'Dez 2023 - Jun 2024' : 'Dec 2023 - Jun 2024' }}</span>
            </div>
            
            <p class="text-gray-700 mb-4">
              {{ language === 'de' ? 'Unterstuetzung des Praesidenten in Administration und Betrieb mit Fokus auf Partnerschaften und Ausbau des Club-Netzwerks.' : "Supported the club president in administration and operations, while focusing on building relationships with industry partners and expanding the club's network." }}
            </p>
            
            <div class="flex flex-wrap gap-2 mt-4">
              <div class="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">{{ language === 'de' ? 'Administration' : 'Administration' }}</div>
              <div class="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">{{ language === 'de' ? 'Partnerschaften' : 'Partnership Building' }}</div>
              <div class="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">{{ language === 'de' ? 'Netzwerken' : 'Networking' }}</div>
            </div>
            
            <div class="mt-6 flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 text-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <span>{{ language === 'de' ? 'Bildungssektor' : 'Education sector' }}</span>
            </div>
          </div>
        </div>
        
        <!-- Position 4: Board Member -->
        <div class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
          <div class="h-3 bg-gradient-to-r from-green-400 to-emerald-500"></div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-gray-800">{{ language === 'de' ? 'Vorstand Forschung und Lehre' : 'Board Member Research and Teaching' }}</h3>
                <div class="text-lg text-green-600 font-medium">Aachen Blockchain Club e.V.</div>
              </div>
              <span class="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">{{ language === 'de' ? 'Nov 2022 - Dez 2023' : 'Nov 2022 - Dec 2023' }}</span>
            </div>
            
            <p class="text-gray-700 mb-4">
              {{ language === 'de' ? 'Entwicklung von Lehrinhalten und Forschungsinitiativen zu Blockchain-Technologien, Smart Contracts und dezentralen Anwendungen fuer Studierende.' : 'Developed educational curriculum and research initiatives focusing on blockchain technologies, smart contracts, and decentralized applications for university students.' }}
            </p>
            
            <div class="flex flex-wrap gap-2 mt-4">
              <div class="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">{{ language === 'de' ? 'Curriculum-Entwicklung' : 'Curriculum Development' }}</div>
              <div class="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">{{ language === 'de' ? 'Forschung' : 'Research' }}</div>
              <div class="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs font-medium">{{ language === 'de' ? 'Lehre' : 'Teaching' }}</div>
            </div>
            
            <div class="mt-6 flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 text-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span>{{ language === 'de' ? 'Bildungssektor' : 'Education sector' }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="mt-12 bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
        <h3 class="text-xl font-bold text-gray-800 mb-3">{{ language === 'de' ? 'Blockchain-Bildung voranbringen' : 'Facilitating Blockchain Education' }}</h3>
        <p class="text-gray-600 max-w-2xl mx-auto mb-6">
          {{ language === 'de'
            ? 'Durch meine Rollen im Aachen Blockchain Club foerdere ich das Verstaendnis und die Anwendung von Blockchain-Technologie bei Studierenden und Lehrenden der FH Aachen.'
            : "Through my leadership roles at Aachen Blockchain Club, I'm dedicated to fostering understanding and adoption of blockchain technology among students and faculty at FH Aachen University." }}
        </p>
        <a href="#contact" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-green-200 transition-all">
          {{ language === 'de' ? 'Kontakt' : 'Contact Me' }}
          <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  language: {
    type: String,
    default: 'en'
  }
});
</script> 
