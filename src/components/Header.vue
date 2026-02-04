<template>
  <header class="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-24">
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-full h-full opacity-10">
      <div class="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
      <div class="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white"></div>
      <div class="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="absolute top-0 right-6 z-20">
        <div class="language-switch" role="group" aria-label="Language">
          <button type="button" class="language-btn" :class="{ active: language === 'en' }" @click="emit('update-language', 'en')">EN</button>
          <button type="button" class="language-btn" :class="{ active: language === 'de' }" @click="emit('update-language', 'de')">DE</button>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div class="max-w-xl">
          <h1 class="text-5xl font-extrabold mb-4 tracking-tight">
            <span class="block text-white">Ahoura Azarbin</span>
          </h1>
          <h2 class="text-2xl font-medium mb-6 text-indigo-100">
            {{ language === 'de' ? 'Researcher @ growthepie | Blockchain, Smart Contracts, Datenanalyse' : 'Researcher @ growthepie | Blockchain, Smart Contracts, Data Analytics' }}
          </h2>
          
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
            <p class="text-xl leading-relaxed text-white/90">
              {{
                language === 'de'
                  ? 'Ich arbeite aktuell an Web3-Forschung und Governance und verfolge das Wachstum des Ethereum-Oekosystems bei growthepie.xyz. Zusaetzlich bin ich Berater des Aachen Blockchain Club e.V., um Studierende in Aachen beim Einstieg in die Welt von Web3 zu unterstuetzen.'
                  : 'I am currently engaged in Web 3 research and governance, keeping a watch on the growth of the Ethereum ecosystem at growthepie.xyz. Furthermore, I am the Advisor of Aachen Blockchain Club e.V to facilitate the journey of students of Aachen into the newly found world of Web 3.'
              }}
            </p>
            
            <div class="flex flex-wrap gap-4 mt-8">
              <a href="#contact" class="bg-white text-indigo-700 hover:bg-indigo-50 transition-colors px-6 py-3 rounded-lg font-medium inline-flex items-center">
                <span class="mr-2">📞</span> {{ language === 'de' ? 'Kontakt' : 'Contact Me' }}
              </a>
              <a href="#projects" class="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center">
                <span class="mr-2">💼</span> {{ language === 'de' ? 'Portfolio ansehen' : 'View Portfolio' }}
              </a>
            </div>
          </div>
        </div>
        
        <!-- Minimalistic picture frame - 3x larger -->
        <div class="mt-12 lg:mt-0 flex-shrink-0 group">
          <div class="minimalist-frame">
            
            <!-- Main circular image container -->
            <div class="image-container">
              <!-- Image -->
              <img src="/images/DSC09272.jpg" alt="Ahoura Azarbin" class="profile-image" />
              
              <!-- Subtle light reflection overlay -->
              <div class="reflection-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  language: {
    type: String,
    default: 'en'
  }
});

const emit = defineEmits(['update-language']);
</script> 

<style scoped>
.language-switch {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem;
}

.language-btn {
  border: none;
  background: transparent;
  color: #e5e7eb;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 0.35rem 0.75rem;
  border-radius: 9999px;
  cursor: pointer;
}

.language-btn.active {
  background: rgba(255, 255, 255, 0.9);
  color: #3730a3;
}

.minimalist-frame {
  position: relative;
  width: 650px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
}

.image-container {
  width: 550px;
  height: 550px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 0 10px rgba(255, 255, 255, 0.1);
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.group:hover .image-container {
  transform: scale(1.02);
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.5),
    0 0 0 15px rgba(255, 255, 255, 0.15);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.8s ease;
}

.group:hover .profile-image {
  transform: scale(1.05);
}

.reflection-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 40%,
    rgba(255, 255, 255, 0) 60%
  );
  pointer-events: none;
  opacity: 0.5;
  transition: opacity 0.5s ease;
}

.group:hover .reflection-overlay {
  opacity: 0.7;
}

.arw-badge {
  position: absolute;
  top: 30px;
  right: 30px;
  background: linear-gradient(45deg, #ff5722, #f44336);
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 1.2rem;
  z-index: 3;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.group:hover .arw-badge {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

@media (max-width: 1024px) {
  .minimalist-frame {
    width: 400px;
    height: 400px;
  }
  
  .image-container {
    width: 360px;
    height: 360px;
  }
  
  .arw-badge {
    top: 20px;
    right: 20px;
    padding: 6px 12px;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .minimalist-frame {
    width: 320px;
    height: 320px;
  }
  
  .image-container {
    width: 280px;
    height: 280px;
  }
  
  .arw-badge {
    top: 15px;
    right: 15px;
    padding: 5px 10px;
    font-size: 0.9rem;
  }
  
  .container {
    padding-bottom: 80px;
  }
}

@media (max-width: 480px) {
  .minimalist-frame {
    width: 280px;
    height: 280px;
  }
  
  .image-container {
    width: 240px;
    height: 240px;
  }
}
</style> 
