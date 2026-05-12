<template>
  <section id="writing" class="py-20 px-6 bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/40">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
        <div>
          <h2 class="text-3xl font-bold mb-2 text-gray-800">{{ language === 'de' ? 'Schreiben & Denken' : 'Writing & Thinking' }}</h2>
          <div class="w-24 h-1 bg-teal-600"></div>
        </div>
        <p class="text-gray-500 mt-4 md:mt-0 md:text-right text-sm font-medium">
          {{ language === 'de' ? 'WIE ICH IN DER OEFFENTLICHKEIT DENKE' : 'HOW I THINK IN PUBLIC' }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Article 1 -->
        <a
          href="https://app.t2.world/article/cm13hjiki91314821mcrbk78i1q"
          target="_blank"
          rel="noopener"
          class="group block bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          <div class="bg-gradient-to-r from-teal-600 to-cyan-500 p-1"></div>
          <div class="p-6">
            <div class="flex items-start justify-between mb-3">
              <span class="text-xs font-bold tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                {{ language === 'de' ? 'Ausgezeichnetes Schreiben' : 'Award-Winning Writing' }}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors flex-shrink-0 ml-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-teal-700 transition-colors">
              {{ language === 'de' ? 'Der Stand des Ethereum Ecosystems' : 'The State of the Ethereum Ecosystem' }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ language === 'de'
                ? 'Ausgezeichnete Analyse von Wachstumsmetriken, L2-Fragmentierung und wohin das Ecosystem steuert.'
                : 'Award-winning analysis of growth metrics, L2 fragmentation, and where the ecosystem is heading.'
              }}
            </p>
            <div class="mt-4 flex items-center text-teal-600 text-sm font-medium">
              {{ language === 'de' ? 'Lesen auf t2.world' : 'Read on t2.world' }}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </a>

        <!-- Placeholder: Circles product analysis -->
        <div class="bg-white/40 backdrop-blur-sm rounded-xl border border-dashed border-gray-200 p-6 flex flex-col justify-center">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-xs font-bold tracking-widest text-gray-400 uppercase bg-gray-50 border border-gray-200 px-3 py-1 rounded-full">
              {{ language === 'de' ? 'In Arbeit' : 'Coming soon' }}
            </span>
          </div>
          <h3 class="text-lg font-bold text-gray-500 mb-2">
            {{ language === 'de'
              ? 'Warum die Circles Imagination Gap das eigentliche UX-Problem ist'
              : 'Why the Circles imagination gap is the real UX problem'
            }}
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            {{ language === 'de'
              ? 'Produktanalyse der Gnosis App — was die App werden koennte, wenn sie Menschen zeigen wuerde, wie vertrauensbasiertes Geld sich wirklich anfuehlt.'
              : 'Product analysis of Gnosis App — what the app could become if it showed people what trust-based money actually feels like.'
            }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  language: { type: String, default: 'en' }
});
</script>
