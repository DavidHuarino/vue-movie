<script setup>
import TheNavBar from './components/TheNavBar/TheNavBar.vue';
//import TheSideBar from "./components/TheSideBar/TheSideBar.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import TheFooter from './components/TheFooter/TheFooter.vue';
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <TheNavBar />
  <!-- <TheSideBar /> -->
  <router-view></router-view>
  <TheFooter />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@300;400;500&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
