<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vue App: Garza Rest...</title>
    </head>
    <body>
      <NavBar></NavBar>
    </body>
  </html>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import NavBar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
