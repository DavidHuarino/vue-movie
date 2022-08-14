<script setup lang="ts">
import Search from "./components/Search.vue";
// import { useRouter } from "vue-router";
// const router = useRouter();
</script>
<template>
  <nav
    class="bg-nav-color flex justify-between items-center sticky top-0 z-50 p-4"
  >
    <router-link
      :to="{
        name: 'Home',
      }"
    >
      <div class="text-white font-medium text-lg uppercase">
        Vue Movie
      </div></router-link
    >
    <Search />
  </nav>
</template>
<style></style>
