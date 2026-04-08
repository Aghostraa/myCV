<template>
  <div
    ref="cardRoot"
    class="project-card relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    @click="toggleExpand"
  >
    <!-- Background image + gradient -->
    <div class="absolute inset-0 bg-gradient-to-br opacity-90" :class="gradientClasses"></div>
    <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay" :style="{ backgroundImage: `url(${bgImage})` }"></div>

    <!-- Fixed-height collapsed section -->
    <div class="relative flex flex-col p-7 card-body">
      <!-- Tagline pill -->
      <div class="mb-3">
        <span class="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
          {{ tagline }}
        </span>
      </div>

      <h3 class="text-xl font-bold text-white mb-4 leading-snug line-clamp-2">{{ title }}</h3>

      <!-- Description box — fixed height so all cards align -->
      <div class="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 mb-5 flex-1 flex flex-col justify-between">
        <p class="text-white/90 text-sm leading-relaxed line-clamp-3">{{ description }}</p>

        <!-- Tech pills -->
        <div class="flex flex-wrap gap-2 mt-4">
          <span
            v-for="(tech, i) in technologies"
            :key="i"
            class="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Expanded detail panel -->
      <div
        class="expanded-panel overflow-hidden transition-all duration-500"
        :style="{ maxHeight: isExpanded ? expandedHeight + 'px' : '0', opacity: isExpanded ? 1 : 0 }"
      >
        <div ref="expandedContent" class="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-5 mb-5">
          <p class="text-white/90 text-sm leading-relaxed mb-4">{{ fullDescription }}</p>

          <ul class="space-y-2 mb-4">
            <li
              v-for="(feature, i) in features"
              :key="i"
              class="flex items-start gap-2 text-white/85 text-sm"
            >
              <svg class="w-4 h-4 mt-0.5 shrink-0 text-white/60" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <a
            v-if="codeLink"
            :href="codeLink"
            target="_blank"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full border border-white/30 transition-colors"
            @click.stop
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            {{ language === 'de' ? 'Code ansehen' : 'View Code' }}
          </a>
        </div>
      </div>

      <!-- Footer row -->
      <div class="flex items-center justify-between mt-auto" @click.stop>
        <div class="flex gap-2">
          <a
            v-if="liveLink"
            :href="liveLink"
            target="_blank"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full border border-white/30 transition-colors"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
            {{ language === 'de' ? 'Live' : 'Live' }}
          </a>
        </div>

        <button
          class="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full border border-white/30 transition-colors"
          @click.stop="toggleExpand"
        >
          {{ isExpanded ? (language === 'de' ? 'Weniger' : 'Less') : (language === 'de' ? 'Details' : 'Details') }}
          <svg class="w-3.5 h-3.5 transition-transform duration-300" :class="{ 'rotate-180': isExpanded }" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  tagline: { type: String, required: true },
  description: { type: String, required: true },
  fullDescription: { type: String, required: true },
  technologies: { type: Array, default: () => [] },
  features: { type: Array, default: () => [] },
  bgImage: { type: String, default: '' },
  colorScheme: { type: String, default: 'blue' },
  liveLink: { type: String, default: '' },
  codeLink: { type: String, default: '' },
  isExpanded: { type: Boolean, default: false },
  language: { type: String, default: 'en' }
});

const emit = defineEmits(['toggle-expand']);
const expandedContent = ref(null);
const expandedHeight = ref(0);

const toggleExpand = () => emit('toggle-expand');

const updateHeight = () => {
  if (expandedContent.value) {
    expandedHeight.value = expandedContent.value.scrollHeight + 20;
  }
};

onMounted(() => {
  updateHeight();
  window.addEventListener('resize', updateHeight);
});

const cardRoot = ref(null);

watch(() => props.isExpanded, async (val) => {
  if (val) {
    await nextTick();
    updateHeight();
    // Scroll so the expanded card is comfortably in view
    setTimeout(() => {
      if (cardRoot.value) {
        const rect = cardRoot.value.getBoundingClientRect();
        const offset = 80; // account for any fixed header
        if (rect.top < offset || rect.bottom > window.innerHeight) {
          window.scrollTo({
            top: window.scrollY + rect.top - offset,
            behavior: 'smooth',
          });
        }
      }
    }, 50);
  }
});

const gradientClasses = computed(() => ({
  blue: 'from-blue-700 to-cyan-600',
  teal: 'from-teal-700 to-cyan-600',
  green: 'from-green-700 to-teal-600',
  purple: 'from-purple-700 to-indigo-600',
  amber: 'from-amber-600 to-orange-500',
}[props.colorScheme] || 'from-blue-700 to-cyan-600'));
</script>

<style scoped>
/* Fixed height for the collapsed portion so all cards are uniform */
.card-body {
  min-height: 300px;
}

.expanded-panel {
  transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
}
</style>
