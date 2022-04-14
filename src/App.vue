<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="pageContent">
      <NavBar></NavBar>
      <HeroSection/>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import NavBar from './components/Navbar.vue'
import HeroSection from './components/BodyContent/HeroSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection
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
  color: #2c3e50;
  margin: 0;
}
</style>
