<template>
  <div class="project-card">
    <!-- Main Card -->
    <div 
      class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      :class="{'expanded': isExpanded}"
      @click="toggleExpand"
    >
      <!-- Background image with overlay -->
      <div class="absolute inset-0 bg-gradient-to-r opacity-90" :class="gradientClasses"></div>
      <div class="absolute inset-0 bg-cover bg-center mix-blend-overlay" :style="{ backgroundImage: `url(${bgImage})` }"></div>
      
      <div class="relative p-8 h-full flex flex-col">
        <!-- Header -->
        <div class="mb-4">
          <span class="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">{{ tagline }}</span>
        </div>
        
        <h3 class="text-2xl font-bold text-white mb-3">{{ title }}</h3>
        
        <!-- Content -->
        <div class="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 mb-6 flex-grow">
          <p class="text-white/90 mb-4">
            {{ description }}
          </p>
          
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(tech, index) in technologies" 
              :key="index" 
              class="px-2 py-1 bg-white/20 text-white rounded-full text-xs"
            >
              {{ tech }}
            </span>
          </div>
        </div>
        
        <!-- Links -->
        <div class="flex justify-end gap-3">
          <a v-if="liveLink" :href="liveLink" target="_blank" class="text-white hover:text-white/80 transition-colors" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
          </a>
          <a v-if="codeLink" :href="codeLink" target="_blank" class="text-white hover:text-white/80 transition-colors" @click.stop>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </a>
          <button @click.stop="toggleExpand" class="text-white hover:text-white/80 transition-colors ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 transform transition-transform duration-300" :class="{'rotate-180': isExpanded}">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Expandable Drawer -->
    <div 
      class="drawer bg-white rounded-b-xl shadow-lg overflow-hidden transition-all duration-500 mt-1"
      :class="{ 'drawer-expanded': isExpanded }"
      :style="{ maxHeight: isExpanded ? drawerHeight + 'px' : '0' }"
    >
      <div ref="drawerContent" class="p-6 border border-gray-100">
        <h3 class="text-xl font-bold text-gray-800 mb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2" :class="accentTextColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
          {{ title }} Details
        </h3>
        
        <div class="mt-2">
          <p class="text-gray-700 mb-3">
            {{ fullDescription }}
          </p>
          
          <div class="p-4 rounded-lg mb-4 border" :class="[accentBgColor, accentBorderColor]">
            <h4 class="font-semibold mb-1" :class="accentHeaderColor">Features & Implementation</h4>
            <ul class="list-disc ml-4 text-gray-700 space-y-1">
              <li v-for="(feature, index) in features" :key="index">{{ feature }}</li>
            </ul>
          </div>
          
          <a v-if="codeLink" :href="codeLink" target="_blank" class="inline-flex items-center text-sm transition-colors" :class="accentLinkColor" @click.stop>
            <span>View on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  fullDescription: {
    type: String,
    required: true
  },
  technologies: {
    type: Array,
    default: () => []
  },
  features: {
    type: Array,
    default: () => []
  },
  bgImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1559028012-481c04fa702d'
  },
  colorScheme: {
    type: String,
    default: 'blue' // blue, green, purple, amber
  },
  liveLink: {
    type: String,
    default: ''
  },
  codeLink: {
    type: String,
    default: ''
  },
  isExpanded: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['toggle-expand']);

const drawerContent = ref(null);
const drawerHeight = ref(0);

const toggleExpand = () => {
  emit('toggle-expand');
};

const gradientClasses = computed(() => {
  const schemes = {
    blue: 'from-blue-600 to-cyan-600',
    green: 'from-green-600 to-teal-600',
    purple: 'from-purple-600 to-indigo-600',
    amber: 'from-amber-500 to-orange-500'
  };
  return schemes[props.colorScheme] || schemes.blue;
});

const accentTextColor = computed(() => {
  const colors = {
    blue: 'text-blue-600',
    green: 'text-teal-600',
    purple: 'text-indigo-600',
    amber: 'text-amber-500'
  };
  return colors[props.colorScheme] || colors.blue;
});

const accentBgColor = computed(() => {
  const colors = {
    blue: 'bg-blue-50',
    green: 'bg-teal-50',
    purple: 'bg-indigo-50',
    amber: 'bg-amber-50'
  };
  return colors[props.colorScheme] || colors.blue;
});

const accentBorderColor = computed(() => {
  const colors = {
    blue: 'border-blue-100',
    green: 'border-teal-100',
    purple: 'border-indigo-100',
    amber: 'border-amber-100'
  };
  return colors[props.colorScheme] || colors.blue;
});

const accentHeaderColor = computed(() => {
  const colors = {
    blue: 'text-blue-800',
    green: 'text-teal-800',
    purple: 'text-indigo-800',
    amber: 'text-amber-800'
  };
  return colors[props.colorScheme] || colors.blue;
});

const accentLinkColor = computed(() => {
  const colors = {
    blue: 'text-blue-700 hover:text-blue-900',
    green: 'text-teal-700 hover:text-teal-900',
    purple: 'text-indigo-700 hover:text-indigo-900',
    amber: 'text-amber-700 hover:text-amber-900'
  };
  return colors[props.colorScheme] || colors.blue;
});

// Calculate drawer height when content changes or when expanded
const updateDrawerHeight = () => {
  if (drawerContent.value) {
    drawerHeight.value = drawerContent.value.scrollHeight;
  }
};

onMounted(() => {
  updateDrawerHeight();
  window.addEventListener('resize', updateDrawerHeight);
});

watch(() => props.isExpanded, (newValue) => {
  if (newValue) {
    updateDrawerHeight();
    // Scroll to this card when expanded if it's not in view
    setTimeout(() => {
      const rect = drawerContent.value.getBoundingClientRect();
      if (rect.bottom > window.innerHeight || rect.top < 0) {
        drawerContent.value.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }
});
</script>

<style scoped>
.project-card {
  position: relative;
  margin-bottom: 2rem;
}

.expanded {
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.drawer {
  position: relative;
  z-index: 10;
  transform-origin: top;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translateY(-20px) scaleY(0.95);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.drawer-expanded {
  transform: translateY(0) scaleY(1);
  opacity: 1;
}

@keyframes slideDown {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.drawer-expanded .p-6 {
  animation: slideDown 0.4s ease-out forwards;
}

/* Card hover effects */
.project-card:hover .group {
  transform: translateY(-5px);
}

.project-card .group {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Rotate animation for expand button */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Add a pulse animation when the drawer is expanded */
.expanded .w-6.h-6 {
  animation: pulse 1s ease-in-out;
}
</style> 