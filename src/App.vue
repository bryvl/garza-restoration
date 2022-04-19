<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="pageContent">
      <NavBar></NavBar>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection />
      <!-- ReviewSection -->
      <!-- Maybe Google Maps Location -->
      <FooterSection/>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import NavBar from './components/Navbar.vue'
import HeroSection from './components/BodyContent/HeroSection.vue'
import AboutSection from './components/BodyContent/AboutSection'
import ServiceSection from './components/BodyContent/ServiceSection'
// import ServiceCard from './components/BodyContent/ServiceSectionComponents/ServiceCard';
import FooterSection from './components/Footer'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    ServiceSection,
    // ServiceCard,
    FooterSection
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #777;
  color: #2c3e50;
  margin: 0;
}
</style>
