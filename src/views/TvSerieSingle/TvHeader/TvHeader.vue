<script setup>
import GenresList from '../../../components/GenresList/GenresList.vue';
const pathImage = 'https://image.tmdb.org/t/p/original';
defineProps({
  response: Object,
});
</script>
<template>
  <section
    class="bg-cover bg-top"
    :style="{
      backgroundImage: `url('${pathImage}${response.backdrop_path}')`,
    }"
  >
    <div
      class="relative flex space-x-6 py-8 px-6 backdrop-saturate-50 backdrop-blur-xs w-full h-full after:absolute after:inset-0 after:bg-gradient-to-t from-home-main/100 via-home-main/70 to-home-main/10"
    >
      <div class="flex-1 z-10 space-y-3">
        <h2 class="text-white text-3xl font-bold mb-5">
          {{ response.name }}
        </h2>
        <genres-list :genres="response.genres" />
        <p class="text-white">{{ response.overview }}</p>
        <div class="flex space-x-2 items-center">
          <div class="text-gray-200 bg-black/60 px-2 py-1 text-sm rounded-sm">
            First air date
          </div>
          <span class="text-white">{{ response.first_air_date }}</span>
        </div>
        <div class="flex space-x-2 items-center">
          <div class="text-gray-200 bg-black/60 px-2 py-1 text-sm rounded-sm">
            Seasons
          </div>
          <span class="text-white">{{ response.number_of_seasons }}</span>
        </div>
        <div class="flex space-x-2 items-center">
          <div class="text-gray-200 bg-black/60 px-2 py-1 text-sm rounded-sm">
            Episodes
          </div>
          <span class="text-white">{{ response.number_of_episodes }}</span>
        </div>
        <!-- <div class="text-white space-x-4 flex items-center">
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
        </div> -->
      </div>
    </div>
  </section>
</template>
