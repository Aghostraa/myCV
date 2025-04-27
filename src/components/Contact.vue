<template>
  <section id="contact" class="py-28 px-6 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 text-white relative overflow-hidden">
    <!-- Background animated particles -->
    <div class="absolute inset-0 overflow-hidden opacity-20">
      <div v-for="i in 30" :key="i" class="particle absolute rounded-full" 
           :style="{
             width: Math.random() * 6 + 'px', 
             height: Math.random() * 6 + 'px',
             top: Math.random() * 100 + '%',
             left: Math.random() * 100 + '%',
             backgroundColor: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 200 + 55)}, ${Math.random() * 0.7 + 0.3})`,
             animationDuration: (Math.random() * 50 + 30) + 's',
             animationDelay: (Math.random() * 5) + 's'
           }">
      </div>
    </div>

    <div class="container mx-auto relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 leading-tight">
          Let's Connect & Collaborate
        </h2>
        <div class="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
        <p class="text-gray-300 text-lg leading-relaxed">
          I'm always open to discussing new projects, opportunities in the blockchain space, or just having a conversation about Web3 technology.
        </p>
        
        <!-- Download CV Button -->
        <div class="mt-8">
          <button @click="generatePDF" class="cv-download-btn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download CV
          </button>
        </div>
      </div>
      
      <div class="grid lg:grid-cols-5 gap-10">
        <!-- Contact Methods - 2 Columns -->
        <div class="lg:col-span-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Email Card -->
            <div class="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 group">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:from-indigo-500 group-hover:to-indigo-700 group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 class="font-semibold text-xl mb-3 text-white">Email</h3>
              <a href="mailto:ahouraazarbin@gmail.com" class="text-indigo-300 hover:text-indigo-200 transition-colors break-all">ahouraazarbin@gmail.com</a>
              <div class="mt-6">
                <a href="mailto:ahouraazarbin@gmail.com" class="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                  <span>Send Message</span>
                  <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Phone Card -->
            <div class="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-700/20 flex items-center justify-center mb-6 text-purple-400 group-hover:from-purple-500 group-hover:to-purple-700 group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 class="font-semibold text-xl mb-3 text-white">Phone</h3>
              <p class="text-purple-300">+4915737274797</p>
              <div class="mt-6">
                <a href="tel:+4915737274797" class="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
                  <span>Call Now</span>
                  <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Location Card -->
            <div class="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10 group">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-700/20 flex items-center justify-center mb-6 text-pink-400 group-hover:from-pink-500 group-hover:to-pink-700 group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 class="font-semibold text-xl mb-3 text-white">Location</h3>
              <p class="text-pink-300">Aachen, North Rhine-Westphalia, Germany</p>
              <div class="mt-6">
                <a href="https://maps.google.com/?q=Aachen,Germany" target="_blank" class="inline-flex items-center text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors">
                  <span>View on Map</span>
                  <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <!-- Calendly Card -->
            <div class="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-teal-500/30 transition-all transform hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/10 group">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-700/20 flex items-center justify-center mb-6 text-teal-400 group-hover:from-teal-500 group-hover:to-teal-700 group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 class="font-semibold text-xl mb-3 text-white">Schedule a Meeting</h3>
              <p class="text-teal-300">Book a 30-minute call with me</p>
              <div class="mt-6">
                <a href="https://calendly.com/ahouraazarbin/30min" target="_blank" class="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors">
                  <span>Open Calendar</span>
                  <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Social Media Section -->
          <div class="mt-10 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
            <h3 class="font-semibold text-xl mb-6 text-white">Connect with me</h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <!-- LinkedIn Button -->
              <a href="https://www.linkedin.com/in/ahoura-azarbin-a3887b180" target="_blank" class="social-btn bg-gradient-to-r from-blue-600/10 to-blue-800/10 hover:from-blue-600 hover:to-blue-800 border border-blue-500/30">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
                </svg>
                <span>LinkedIn</span>
              </a>
              
              <!-- Twitter/X Button -->
              <a href="https://x.com/ahoura_az" target="_blank" class="social-btn bg-gradient-to-r from-gray-700/10 to-gray-900/10 hover:from-gray-700 hover:to-gray-900 border border-gray-500/30">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
                <span>Twitter</span>
              </a>
              
              <!-- Instagram Button -->
              <a href="https://instagram.com/ahouraazarbin" target="_blank" class="social-btn bg-gradient-to-r from-pink-600/10 to-purple-600/10 hover:from-pink-600 hover:to-purple-600 border border-pink-500/30">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>
                <span>Instagram</span>
              </a>
              
              <!-- Telegram Button -->
              <a href="https://t.me/AghostraA" target="_blank" class="social-btn bg-gradient-to-r from-blue-400/10 to-blue-600/10 hover:from-blue-400 hover:to-blue-600 border border-blue-400/30">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Calendly Integration - 3 Columns -->
        <div class="lg:col-span-3 calendly-container">
          <div class="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all h-full overflow-hidden shadow-xl">
            <div class="p-6 bg-gradient-to-r from-indigo-800/30 to-purple-800/30 border-b border-white/10">
              <h3 class="text-2xl font-bold text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mr-3 text-indigo-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Schedule a Meeting
              </h3>
              <p class="text-indigo-200 mt-2">Book a 30-minute slot that works for you</p>
            </div>
            <!-- Calendly inline widget -->
            <div class="calendly-embed p-4 h-[600px]">
              <iframe
                src="https://calendly.com/ahouraazarbin/30min?embed_domain=yourwebsite.com&embed_type=Inline&background_color=1e1b4b&text_color=ffffff&primary_color=6366f1"
                width="100%"
                height="100%"
                frameborder="0"
                class="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Projects I contributed to -->
      <div class="mt-20 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center">
        <h3 class="text-2xl font-bold text-white mb-5">Visit Projects I Contributed To</h3>
        <p class="text-indigo-200 max-w-2xl mx-auto mb-8">
          Check out my work at growthepie and other Web3 projects. I'm focused on research, analytics, and community building in the blockchain space.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://www.growthepie.com/" target="_blank" class="project-btn">
            <span>growthepie</span>
            <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
          <a href="https://www.aachen-blockchain.de/" target="_blank" class="project-btn">
            <span>Aachen Blockchain Club</span>
            <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
          <a href="https://www.openlabelsinitiative.org/" target="_blank" class="project-btn">
            <span>Open Labels Initiative</span>
            <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
          <a href="https://www.opensource.observer/" target="_blank" class="project-btn">
            <span>Open Source Observer</span>
            <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Hidden CV content for PDF -->
    <div id="cv-content-for-pdf" class="hidden">
      <div class="cv-header">
        <h1>Ahoura Azarbin</h1>
        <p>Researcher @ growthepie | Blockchain, Smart Contracts, Data Analytics</p>
      </div>
      
      <div class="cv-section">
        <h2>Contact Information</h2>
        <ul>
          <li>Email: ahouraazarbin@gmail.com</li>
          <li>Phone: +4915737274797</li>
          <li>Location: Aachen, North Rhine-Westphalia, Germany</li>
          <li>LinkedIn: linkedin.com/in/ahoura-azarbin-a3887b180</li>
          <li>Twitter: x.com/ahoura_az</li>
          <li>Telegram: t.me/AghostraA</li>
        </ul>
      </div>
      
      <div class="cv-section">
        <h2>Professional Experience</h2>
        <div class="cv-job">
          <h3>Researcher</h3>
          <p>growthepie, Remote | Aug 2024 - Present</p>
          <ul>
            <li>Focus on research and data analytics through Smart contract labeling</li>
            <li>Building a database of all open source and other projects in web3, and adoption of open labels standard</li>
            <li>Tracking growth metrics of projects in the Ethereum ecosystem</li>
          </ul>
        </div>
        
        <div class="cv-job">
          <h3>Community and Socials Management</h3>
          <p>growthepie, Remote | Jun 2023 - Jul 2024</p>
          <ul>
            <li>Managed community engagement across various social media platforms</li>
            <li>Developed content strategies to increase awareness about blockchain metrics</li>
            <li>Built relationships with key industry stakeholders in the Web3 space</li>
          </ul>
        </div>
        
        <div class="cv-job">
          <h3>Student Assistant in Design Thinking</h3>
          <p>FH Aachen University of Applied Sciences, Germany | Mar 2022 - Dec 2023</p>
          <ul>
            <li>Supported professors and students in implementing design thinking methodologies</li>
            <li>Facilitated workshops and collaborative problem-solving sessions</li>
            <li>Contributed to curriculum development and instructional materials</li>
          </ul>
        </div>
      </div>
      
      <div class="cv-section">
        <h2>Education</h2>
        <div class="cv-education">
          <h3>Mechanical Engineering</h3>
          <p>FH Aachen University of Applied Sciences | 2019 - 2025</p>
          <p>Currently pursuing mechanical engineering degree with a focus on innovative mechanical solutions and sustainable technologies.</p>
        </div>
        
        <div class="cv-education">
          <h3>German Language, Math & Physics</h3>
          <p>FH Aachen University of Applied Sciences | 2018 - 2019</p>
          <p>Completed preparatory coursework for international students, focusing on German language skills, mathematics, and physics for engineering studies.</p>
        </div>
      </div>
      
      <div class="cv-section">
        <h2>Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Web3 & Blockchain</h3>
            <ul>
              <li>Ethereum</li>
              <li>Smart Contracts</li>
              <li>Layer 2 Analytics</li>
              <li>Web3 Research</li>
            </ul>
          </div>
          
          <div class="skill-category">
            <h3>Data Analytics</h3>
            <ul>
              <li>SQL</li>
              <li>Data Analysis</li>
              <li>Smart Contract Labeling</li>
            </ul>
          </div>
          
          <div class="skill-category">
            <h3>Professional Skills</h3>
            <ul>
              <li>Leadership</li>
              <li>Research</li>
              <li>Project Management</li>
              <li>Communication</li>
            </ul>
          </div>
          
          <div class="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>English (Full Professional)</li>
              <li>Persian (Native)</li>
              <li>German (Professional Working)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="cv-section">
        <h2>Volunteer Experience</h2>
        <div class="cv-volunteer">
          <h3>Advisor</h3>
          <p>Aachen Blockchain Club e.V. | Mar 2025 - Present</p>
          <p>As an advisor to the club, I provide strategic guidance to the executive team, mentor new members, and support blockchain education initiatives at FH Aachen.</p>
        </div>
        
        <div class="cv-volunteer">
          <h3>President</h3>
          <p>Aachen Blockchain Club e.V. | Jun 2024 - Mar 2025</p>
          <p>Led the university blockchain club, organizing educational events, workshops, and networking sessions to promote blockchain technology and Web3 awareness on campus.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import html2pdf from 'html2pdf.js';

function generatePDF() {
  // Get the CV content
  const element = document.getElementById('cv-content-for-pdf');
  
  // Apply PDF-specific styling for better output
  const clone = element.cloneNode(true);
  clone.classList.remove('hidden');
  clone.style.padding = '30px';
  clone.style.fontFamily = 'Arial, sans-serif';
  clone.style.color = '#333';
  
  // Configure PDF options
  const opt = {
    margin: [10, 10, 10, 10],
    filename: 'Ahoura_Azarbin_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  // Generate the PDF
  html2pdf().from(clone).set(opt).save();
  
  // Show a success message or confirmation
  alert('Your CV is being generated!');
}

onMounted(() => {
  // Animate particles
  const particles = document.querySelectorAll('.particle');
  particles.forEach(particle => {
    // Random initial position
    const startPosX = Math.random() * 100;
    const startPosY = Math.random() * 100;
    
    // Create animation
    particle.animate([
      { transform: `translate(${startPosX}px, ${startPosY}px)` },
      { transform: `translate(${startPosX + Math.random() * 100 - 50}px, ${startPosY + Math.random() * 100 - 50}px)` },
      { transform: `translate(${startPosX}px, ${startPosY}px)` }
    ], {
      duration: Math.random() * 20000 + 10000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
  });
});
</script>

<style scoped>
/* Flowing background animation */
@keyframes float {
  0% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-10px) translateX(10px); }
  100% { transform: translateY(0) translateX(0); }
}

.particle {
  animation: float ease-in-out infinite;
}

/* Social Media Buttons */
.social-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: all 0.3s ease;
  gap: 0.5rem;
}

.social-btn:hover {
  transform: translateY(-4px);
  color: white;
}

.social-btn span {
  font-size: 0.875rem;
  font-weight: 500;
}

/* Project Buttons */
.project-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background: linear-gradient(to right, rgba(99, 102, 241, 0.8), rgba(168, 85, 247, 0.8));
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.project-btn:hover {
  background: linear-gradient(to left, rgba(99, 102, 241, 1), rgba(168, 85, 247, 1));
  transform: translateY(-2px);
  box-shadow: 0 4px 20px -2px rgba(99, 102, 241, 0.5);
}

/* CV Download Button */
.cv-download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(to right, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8));
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.cv-download-btn:hover {
  background: linear-gradient(to right, rgba(16, 185, 129, 1), rgba(5, 150, 105, 1));
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Hidden CV content styling (for PDF) */
#cv-content-for-pdf {
  font-family: Arial, sans-serif;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
}

.cv-header {
  text-align: center;
  margin-bottom: 20px;
}

.cv-header h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}

.cv-section {
  margin-bottom: 20px;
}

.cv-section h2 {
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.cv-job, .cv-education, .cv-volunteer {
  margin-bottom: 15px;
}

.cv-job h3, .cv-education h3, .cv-volunteer h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 3px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .calendly-embed {
    height: 500px;
  }
}

@media (max-width: 640px) {
  .calendly-embed {
    height: 400px;
  }
}
</style> 