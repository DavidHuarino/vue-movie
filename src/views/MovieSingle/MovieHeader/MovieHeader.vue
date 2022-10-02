<script setup>
import { computed } from 'vue';
import GenresList from '../../../components/GenresList/GenresList.vue';
const pathImage = 'https://image.tmdb.org/t/p/original';
const props = defineProps({
  response: Object,
});
const imgUrl = new URL('../assets/no_image.jpg', import.meta.url).href;
const notImage = computed(() => {
  if (props.response.backdrop_path) {
    return `url('${pathImage}${props.response.backdrop_path}')`;
  }
  return '';
});
</script>
<template>
  <section
    class="h-96 bg-cover bg-top"
    :style="{
      backgroundImage: notImage,
    }"
  >
    <div
      class="relative flex space-x-6 py-8 px-6 backdrop-saturate-50 backdrop-blur-xs w-full h-full after:absolute after:inset-0 after:bg-gradient-to-t from-home-main/100 via-home-main/70 to-home-main/10"
    >
      <div class="flex-none w-48 z-10">
        <img
          v-if="response.poster_path"
          :src="`${pathImage}${response.poster_path}`"
          :alt="`${response.title}`"
          class="w-full"
        />
        <img v-else :src="imgUrl" :alt="`${response.title}`" class="w-full" />
      </div>
      <div class="flex-1 z-10 space-y-3">
        <h2 class="text-white text-3xl font-bold mb-5">
          {{ response.title }}
        </h2>
        <!-- <GenresList :genres="response.genres" /> -->
        <p class="text-white">{{ response.overview }}</p>
        <div class="text-white space-x-4 flex items-center">
          <span class="text-gray-400 text-sm">{{ response.release_date }}</span>
          <div class="flex space-x-1">
            <span
              v-for="(item, index) in response.production_countries"
              :key="index"
            >
              {{ item.iso_3166_1 }}
            </span>
          </div>
          <span> {{ response.runtime }} Min. </span>
          <span class="bg-green-400 px-1 rounded-sm font-medium">HD</span>
        </div>
      </div>
    </div>
  </section>
</template>
