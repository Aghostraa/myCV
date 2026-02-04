<template>
  <section id="skills" class="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
        <div>
          <h2 class="text-3xl font-bold mb-2 text-gray-800">{{ language === 'de' ? 'Faehigkeiten & Expertise' : 'Skills & Expertise' }}</h2>
          <div class="w-24 h-1 bg-teal-500"></div>
        </div>
        <p class="text-gray-500 mt-4 md:mt-0 md:text-right text-sm font-medium">
          {{ language === 'de' ? 'MEIN TECHNISCHER WERKZEUGKASTEN' : 'MY TECHNICAL TOOLBOX' }}
        </p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-10">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold text-gray-800">{{ language === 'de' ? 'GitHub Aktivitaet' : 'GitHub Activity' }}</h3>
          <a
            href="https://github.com/Aghostraa"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs font-medium text-teal-600 hover:text-teal-800 transition-colors"
          >
            @Aghostraa
          </a>
        </div>

        <div class="overflow-x-auto">
          <a href="https://github.com/Aghostraa" target="_blank" rel="noopener noreferrer" class="block min-w-[760px]">
            <img
              src="https://ghchart.rshah.org/Aghostraa"
              :alt="language === 'de' ? 'GitHub Beitragskalender fuer Aghostraa' : 'GitHub contributions calendar for Aghostraa'"
              loading="lazy"
              class="w-full"
            />
          </a>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-10">
        <!-- Technical Skills -->
        <div>
          <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-teal-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
            </svg>
            {{ language === 'de' ? 'Technische Faehigkeiten' : 'Technical Skills' }}
          </h3>
          
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="flex justify-between mb-2">
                <h4 class="font-semibold text-gray-800">Web3 & Blockchain</h4>
                <span class="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">{{ language === 'de' ? 'Experte' : 'Expert' }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div class="bg-gradient-to-r from-teal-500 to-sky-500 h-2.5 rounded-full" style="width: 95%"></div>
              </div>
              
              <div class="flex flex-wrap gap-2">
                <div class="group">
                  <div class="bg-teal-100 hover:bg-teal-200 text-teal-800 text-xs font-medium px-2.5 py-1.5 rounded-lg transition-colors cursor-default flex items-center">
                    <svg class="w-3 h-3 mr-1 text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    Ethereum
                  </div>
                </div>
                <div class="group">
                  <div class="bg-teal-100 hover:bg-teal-200 text-teal-800 text-xs font-medium px-2.5 py-1.5 rounded-lg transition-colors cursor-default flex items-center">
                    <svg class="w-3 h-3 mr-1 text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    Smart Contracts
                  </div>
                </div>
                <div class="group">
                  <div class="bg-teal-100 hover:bg-teal-200 text-teal-800 text-xs font-medium px-2.5 py-1.5 rounded-lg transition-colors cursor-default flex items-center">
                    <svg class="w-3 h-3 mr-1 text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    {{ language === 'de' ? 'Layer-2-Analyse' : 'Layer 2 Analytics' }}
                  </div>
                </div>
                <div class="group">
                  <div class="bg-teal-100 hover:bg-teal-200 text-teal-800 text-xs font-medium px-2.5 py-1.5 rounded-lg transition-colors cursor-default flex items-center">
                    <svg class="w-3 h-3 mr-1 text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    {{ language === 'de' ? 'Web3-Forschung' : 'Web3 Research' }}
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="flex justify-between mb-2">
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Datenanalyse' : 'Data Analytics' }}</h4>
                <span class="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">{{ language === 'de' ? 'Fortgeschritten' : 'Proficient' }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div class="bg-gradient-to-r from-teal-500 to-sky-500 h-2.5 rounded-full" style="width: 90%"></div>
              </div>
              
              <div class="flex flex-wrap gap-2">
                <div class="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1.5 rounded-lg">SQL</div>
                <div class="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1.5 rounded-lg">{{ language === 'de' ? 'Datenanalyse' : 'Data Analysis' }}</div>
                <div class="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1.5 rounded-lg">{{ language === 'de' ? 'Smart-Contract-Labeling' : 'Smart Contract Labeling' }}</div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="flex justify-between mb-2">
                <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Entwicklung' : 'Development' }}</h4>
                <span class="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">{{ language === 'de' ? 'Versiert' : 'Skilled' }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div class="bg-gradient-to-r from-teal-500 to-sky-500 h-2.5 rounded-full" style="width: 80%"></div>
              </div>
              
              <div class="flex flex-wrap gap-2">
                <div class="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1.5 rounded-lg">React.js</div>
                <div class="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1.5 rounded-lg">{{ language === 'de' ? 'Webdesign' : 'Web Design' }}</div>
                <div class="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1.5 rounded-lg">{{ language === 'de' ? 'Open Source' : 'Open Source' }}</div>
              </div>
            </div>

          </div>
        </div>
        
        <!-- Soft Skills & Languages -->
        <div>
          <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-teal-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            {{ language === 'de' ? 'Ueberfachliche Kompetenzen' : 'Professional Skills' }}
          </h3>
          
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow mb-8">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                  <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-teal-600">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Fuehrung' : 'Leadership' }}</h4>
                </div>
                <div class="ml-12">
                  <div class="w-full bg-white rounded-full h-1.5">
                    <div class="bg-teal-600 h-1.5 rounded-full" style="width: 95%"></div>
                  </div>
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                  <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-teal-600">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Forschung' : 'Research' }}</h4>
                </div>
                <div class="ml-12">
                  <div class="w-full bg-white rounded-full h-1.5">
                    <div class="bg-teal-600 h-1.5 rounded-full" style="width: 90%"></div>
                  </div>
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                  <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-teal-600">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Projektmanagement' : 'Project Management' }}</h4>
                </div>
                <div class="ml-12">
                  <div class="w-full bg-white rounded-full h-1.5">
                    <div class="bg-teal-600 h-1.5 rounded-full" style="width: 85%"></div>
                  </div>
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
                <div class="flex items-center mb-2">
                  <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-teal-600">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                  <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Kommunikation' : 'Communication' }}</h4>
                </div>
                <div class="ml-12">
                  <div class="w-full bg-white rounded-full h-1.5">
                    <div class="bg-teal-600 h-1.5 rounded-full" style="width: 90%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-teal-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
            </svg>
            {{ language === 'de' ? 'Sprachen' : 'Languages' }}
          </h3>
          
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="space-y-6">
              <div>
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Englisch' : 'English' }}</h4>
                  <span class="text-sm text-gray-500">{{ language === 'de' ? 'Verhandlungssicher' : 'Full Professional' }}</span>
                </div>
                <div class="flex space-x-1">
                  <div class="h-2 w-full bg-teal-600 rounded-l-full"></div>
                  <div class="h-2 w-full bg-teal-600"></div>
                  <div class="h-2 w-full bg-teal-600"></div>
                  <div class="h-2 w-full bg-teal-600"></div>
                  <div class="h-2 w-full bg-teal-600 rounded-r-full"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Persisch' : 'Persian' }}</h4>
                  <span class="text-sm text-gray-500">{{ language === 'de' ? 'Muttersprache' : 'Native' }}</span>
                </div>
                <div class="flex space-x-1">
                  <div class="h-2 w-full bg-teal-600 rounded-l-full"></div>
                  <div class="h-2 w-full bg-teal-600"></div>
                  <div class="h-2 w-full bg-teal-600"></div>
                  <div class="h-2 w-full bg-teal-600"></div>
                  <div class="h-2 w-full bg-teal-600 rounded-r-full"></div>
                </div>
              </div>
              
              <div>
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-semibold text-gray-800">{{ language === 'de' ? 'Deutsch' : 'German' }}</h4>
                  <span class="text-sm text-gray-500">{{ language === 'de' ? 'Berufsbezogen' : 'Professional Working' }}</span>
                </div>
                <div class="flex space-x-1">
                  <div class="h-2 w-full bg-teal-600 rounded-l-full"></div>
                  <div class="h-2 w-full bg-teal-600"></div>
                  <div class="h-2 w-full bg-teal-600"></div>
                  <div class="h-2 w-full bg-teal-600"></div>
                  <div class="h-2 w-full bg-gray-200 rounded-r-full"></div>
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
defineProps({
  language: {
    type: String,
    default: 'en'
  }
});
</script> 
