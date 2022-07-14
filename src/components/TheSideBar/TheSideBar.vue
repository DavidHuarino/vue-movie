<script setup>
import useFetchGenre from "../../hooks/useFetchGenre";
import Item from "./components/Item.vue";
const { genres } = useFetchGenre();
</script>
<template>
  <div class="bg-gray-800 w-60 text-white">
    <h2 class="text-center">GÉNEROS</h2>
    <section class="grid grid-cols-1 divide-y p-2">
      <Item v-for="(item, index) in genres" :key="index" :item="item" />
    </section>
  </div>
</template>
