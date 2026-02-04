<template>
  <section id="experience" class="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100 relative">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5 pattern-grid overflow-hidden">
      <div v-for="i in 20" :key="i" class="absolute bg-indigo-500" 
           :style="{
             width: Math.random() * 8 + 'px', 
             height: Math.random() * 8 + 'px',
             top: Math.random() * 100 + '%',
             left: Math.random() * 100 + '%'
           }">
      </div>
    </div>
    
    <div class="container mx-auto relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-500">
          {{ language === 'de' ? 'Berufserfahrung' : 'Professional Experience' }}
        </h2>
        <div class="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
        <p class="text-gray-600 max-w-2xl mx-auto tracking-wide">
          {{ language === 'de'
            ? 'MEIN BERUFLICHER WERDEGANG UND MEINE EXPERTISE IN BLOCKCHAIN, FORSCHUNG UND LEHRE'
            : 'SHOWCASING MY PROFESSIONAL JOURNEY AND EXPERTISE IN BLOCKCHAIN, RESEARCH, AND EDUCATION' }}
        </p>
      </div>
      
      <div class="relative experience-timeline">
        <!-- Timeline line with animation -->
        <div class="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300 transform md:translate-x-px timeline-line"></div>
        
        <div class="space-y-28">
          <!-- Job 1: Current -->
          <div class="experience-card" data-aos="fade-up">
            <!-- Timeline dot with pulsing effect -->
            <div class="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 timeline-dot">
              <div class="w-5 h-5 rounded-full border-4 border-indigo-500 bg-white"></div>
              <div class="w-5 h-5 rounded-full border-4 border-indigo-500 bg-white absolute top-0 left-0 animate-ping opacity-50"></div>
            </div>
            
            <div class="flex flex-col md:flex-row group">
              <!-- Left side (Date on desktop) -->
              <div class="md:w-1/2 md:pr-16 md:text-right mb-6 md:mb-0 relative transition-all duration-500 group-hover:md:-translate-x-2">
                <div class="md:hidden flex items-center mb-3 text-gray-500">
                  <div class="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                  <span>{{ language === 'de' ? 'Aug 2024 - Heute' : 'Aug 2024 - Present' }}</span>
                </div>
                <div class="hidden md:block">
                  <span class="inline-block text-indigo-700 font-bold text-xl date-display">{{ language === 'de' ? 'Aug 2024 - Heute' : 'Aug 2024 - Present' }}</span>
                  <span class="block text-indigo-500 mt-1 opacity-80">{{ language === 'de' ? '~ Aktuelle Position' : '~ Current Position' }}</span>
                </div>
              </div>
              
              <!-- Right side (Content on desktop) -->
              <div class="md:w-1/2 md:pl-16 transition-all duration-500 group-hover:md:translate-x-2">
                <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 job-card relative overflow-hidden">
                  <!-- Decorative corner element -->
                  <div class="absolute -top-2 -right-2 w-16 h-16 bg-indigo-500 rotate-12 opacity-10"></div>
                  
                  <div class="job-header mb-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-1">{{ language === 'de' ? 'Developer Relations & Researcher' : 'Developer Relations & Researcher' }}</h3>
                    <div class="text-lg text-indigo-600 mb-1 font-medium flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      growthepie
                    </div>
                    <div class="text-gray-500 flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Remote
                    </div>
                  </div>
                  
                  <ul class="space-y-4 responsibility-list">
                    <li class="flex transform hover:translate-x-1 transition-transform duration-300">
                      <div class="mr-3 mt-1 text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">{{ language === 'de' ? 'Fokus auf Forschung und Datenanalyse durch Smart-Contract-Labeling und Datenbank-Kuration' : 'Focus on research and data analytics through Smart contract labeling and curation of the database' }}</span>
                    </li>
                    <li class="flex transform hover:translate-x-1 transition-transform duration-300">
                      <div class="mr-3 mt-1 text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">{{ language === 'de' ? 'Aufbau einer Datenbank fuer Open-Source- und weitere Web3-Projekte sowie Foerderung des Open-Labels-Standards' : 'Building a database of open source and other projects in web3, and promoting adoption of open labels standard' }}</span>
                    </li>
                    <li class="flex transform hover:translate-x-1 transition-transform duration-300">
                      <div class="mr-3 mt-1 text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">{{ language === 'de' ? 'Erstellung von Grants und Antraegen zur Finanzierung von Projekten' : 'Writing grants and proposals for the organization to secure funding for our projects' }}</span>
                    </li>
                  </ul>
                  
                  <div class="skill-tags mt-6 flex flex-wrap gap-2">
                    <span class="skill-tag">Blockchain</span>
                    <span class="skill-tag">Smart Contracts</span>
                    <span class="skill-tag">{{ language === 'de' ? 'Datenanalyse' : 'Data Analytics' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Job 2 -->
          <div class="experience-card" data-aos="fade-up" data-aos-delay="100">
            <!-- Timeline dot -->
            <div class="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 timeline-dot">
              <div class="w-5 h-5 rounded-full border-4 border-indigo-500 bg-white"></div>
            </div>
            
            <div class="flex flex-col md:flex-row group">
              <!-- Left side (Date on desktop) -->
              <div class="md:w-1/2 md:pr-16 md:text-right mb-6 md:mb-0 transition-all duration-500 group-hover:md:-translate-x-2">
                <div class="md:hidden flex items-center mb-3 text-gray-500">
                  <div class="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                  <span>{{ language === 'de' ? 'Jun 2023 - Jul 2024' : 'Jun 2023 - Jul 2024' }}</span>
                </div>
                <div class="hidden md:block">
                  <span class="inline-block text-indigo-700 font-bold text-xl date-display">Jun 2023 - Jul 2024</span>
                  <span class="block text-indigo-500 mt-1 opacity-80">{{ language === 'de' ? '~ 1 Jahr 2 Monate' : '~ 1 year 2 months' }}</span>
                </div>
              </div>
              
              <!-- Right side (Content on desktop) -->
              <div class="md:w-1/2 md:pl-16 transition-all duration-500 group-hover:md:translate-x-2">
                <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 job-card relative overflow-hidden">
                  <!-- Decorative corner element -->
                  <div class="absolute -top-2 -right-2 w-16 h-16 bg-indigo-500 rotate-12 opacity-10"></div>
                  
                  <div class="job-header mb-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-1">{{ language === 'de' ? 'Community- und Social-Media-Management' : 'Community and Socials Management' }}</h3>
                    <div class="text-lg text-indigo-600 mb-1 font-medium flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      growthepie
                    </div>
                    <div class="text-gray-500 flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Remote
                    </div>
                  </div>
                  
                  <ul class="space-y-4 responsibility-list">
                    <li class="flex transform hover:translate-x-1 transition-transform duration-300">
                      <div class="mr-3 mt-1 text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">{{ language === 'de' ? 'Management der Community-Interaktion ueber verschiedene Social-Media-Plattformen' : 'Managed community engagement across various social media platforms' }}</span>
                    </li>
                    <li class="flex transform hover:translate-x-1 transition-transform duration-300">
                      <div class="mr-3 mt-1 text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">{{ language === 'de' ? 'Entwicklung von Content-Strategien zur Steigerung der Sichtbarkeit von Blockchain-Metriken' : 'Developed content strategies to increase awareness about blockchain metrics' }}</span>
                    </li>
                    <li class="flex transform hover:translate-x-1 transition-transform duration-300">
                      <div class="mr-3 mt-1 text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">{{ language === 'de' ? 'Aufbau von Beziehungen zu zentralen Stakeholdern im Web3-Bereich' : 'Built relationships with key industry stakeholders in the Web3 space' }}</span>
                    </li>
                  </ul>
                  
                  <div class="skill-tags mt-6 flex flex-wrap gap-2">
                    <span class="skill-tag">{{ language === 'de' ? 'Community-Management' : 'Community Management' }}</span>
                    <span class="skill-tag">Social Media</span>
                    <span class="skill-tag">Web3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Job 3 -->
          <div class="experience-card" data-aos="fade-up" data-aos-delay="200">
            <!-- Timeline dot -->
            <div class="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 timeline-dot">
              <div class="w-5 h-5 rounded-full border-4 border-indigo-500 bg-white"></div>
            </div>
            
            <div class="flex flex-col md:flex-row group">
              <!-- Left side (Date on desktop) -->
              <div class="md:w-1/2 md:pr-16 md:text-right mb-6 md:mb-0 transition-all duration-500 group-hover:md:-translate-x-2">
                <div class="md:hidden flex items-center mb-3 text-gray-500">
                  <div class="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                  <span>{{ language === 'de' ? 'Mrz 2022 - Dez 2023' : 'Mar 2022 - Dec 2023' }}</span>
                </div>
                <div class="hidden md:block">
                  <span class="inline-block text-indigo-700 font-bold text-xl date-display">{{ language === 'de' ? 'Mrz 2022 - Dez 2023' : 'Mar 2022 - Dec 2023' }}</span>
                  <span class="block text-indigo-500 mt-1 opacity-80">{{ language === 'de' ? '~ 1 Jahr 10 Monate' : '~ 1 year 10 months' }}</span>
                </div>
              </div>
              
              <!-- Right side (Content on desktop) -->
              <div class="md:w-1/2 md:pl-16 transition-all duration-500 group-hover:md:translate-x-2">
                <div class="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 job-card relative overflow-hidden">
                  <!-- Decorative corner element -->
                  <div class="absolute -top-2 -right-2 w-16 h-16 bg-indigo-500 rotate-12 opacity-10"></div>
                  
                  <div class="job-header mb-6">
                    <h3 class="text-2xl font-bold text-gray-800 mb-1">{{ language === 'de' ? 'Studentische Hilfskraft Design Thinking' : 'Student Assistant in Design Thinking' }}</h3>
                    <div class="text-lg text-indigo-600 mb-1 font-medium flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      FH Aachen University of Applied Sciences
                    </div>
                    <div class="text-gray-500 flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {{ language === 'de' ? 'Deutschland' : 'Germany' }}
                    </div>
                  </div>
                  
                  <ul class="space-y-4 responsibility-list">
                    <li class="flex transform hover:translate-x-1 transition-transform duration-300">
                      <div class="mr-3 mt-1 text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">{{ language === 'de' ? 'Unterstuetzung von Professoren und Studierenden bei der Umsetzung von Design-Thinking-Methoden' : 'Supported professors and students in implementing design thinking methodologies' }}</span>
                    </li>
                    <li class="flex transform hover:translate-x-1 transition-transform duration-300">
                      <div class="mr-3 mt-1 text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">{{ language === 'de' ? 'Moderation von Workshops und kollaborativen Problemloesungssitzungen' : 'Facilitated workshops and collaborative problem-solving sessions' }}</span>
                    </li>
                    <li class="flex transform hover:translate-x-1 transition-transform duration-300">
                      <div class="mr-3 mt-1 text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-gray-700">{{ language === 'de' ? 'Beitrag zur Entwicklung von Curriculum und Lehrmaterialien' : 'Contributed to curriculum development and instructional materials' }}</span>
                    </li>
                  </ul>
                  
                  <div class="skill-tags mt-6 flex flex-wrap gap-2">
                    <span class="skill-tag">Design Thinking</span>
                    <span class="skill-tag">{{ language === 'de' ? 'Bildung' : 'Education' }}</span>
                    <span class="skill-tag">Facilitation</span>
                  </div>
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
import { onMounted } from 'vue';

defineProps({
  language: {
    type: String,
    default: 'en'
  }
});

onMounted(() => {
  // Add scroll animation effects
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.experience-card').forEach(card => {
    observer.observe(card);
  });
});
</script> 

<style scoped>
.pattern-grid {
  background-size: 20px 20px;
  background-image: radial-gradient(circle, rgba(99, 102, 241, 0.8) 1px, transparent 1px);
}

.experience-card {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.experience-card.animated {
  opacity: 1;
  transform: translateY(0);
}

.timeline-line {
  position: relative;
  overflow: hidden;
}

.timeline-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.5), transparent);
  height: 30%;
  animation: timeline-pulse 3s infinite;
}

@keyframes timeline-pulse {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(400%); }
}

.timeline-dot {
  position: relative;
  z-index: 5;
}

.job-card {
  position: relative;
  z-index: 2;
}

.skill-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
  color: rgb(79, 70, 229);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  transition: all 0.3s ease;
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.1), 0 2px 4px -1px rgba(99, 102, 241, 0.06);
  background: linear-gradient(to right, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
}

.date-display {
  position: relative;
  display: inline-block;
}

.date-display::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, rgba(99, 102, 241, 1), rgba(168, 85, 247, 0.5));
  transition: width 0.3s ease;
}

.group:hover .date-display::after {
  width: 100%;
}

@media (max-width: 768px) {
  .experience-card {
    margin-bottom: 3rem;
  }
  
  .job-card {
    padding: 1.5rem;
  }
}
</style> 
