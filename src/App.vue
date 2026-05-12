<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Contact from './components/Contact.vue'
import Experience from './components/Experience.vue'
import Volunteer from './components/Volunteer.vue'
import Projects from './components/Projects.vue'
import Writing from './components/Writing.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'

const language = ref('en')

const setLanguage = (lang) => {
  language.value = lang
}
</script>

<template>
  <div class="min-h-screen font-sans antialiased bg-gradient-to-br from-slate-50 to-cyan-50">
    <Header :language="language" @update-language="setLanguage" />
    <Projects :language="language" />
    <Experience :language="language" />
    <Volunteer :language="language" />
    <Writing :language="language" />
    <Education :language="language" />
    <Skills :language="language" />
    <Contact :language="language" />
    <Footer :language="language" />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Outfit', 'DM Sans', sans-serif;
}

/* Any global styles if needed */
</style>
