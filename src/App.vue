<script setup>
import Header from './components/Header.vue'
import Contact from './components/Contact.vue'
import Experience from './components/Experience.vue'
import Volunteer from './components/Volunteer.vue'
import Projects from './components/Projects.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen font-sans antialiased bg-gradient-to-br from-gray-50 to-gray-100">
    <Header />
    <Contact />
    <Experience />
    <Volunteer />
    <Projects />
    <Education />
    <Skills />
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
}

/* Any global styles if needed */
</style>
