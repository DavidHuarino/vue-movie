<script setup>
import { onMounted, computed } from 'vue';
import MovieCard from '../../../components/MovieCard/MovieCard.vue';
import { useMovieStore } from '../../../stores/movieStore';
import { storeToRefs } from 'pinia';

const store = useMovieStore();
const { newMovies } = storeToRefs(store);
const { fetchNewMovies } = store;
const pathImage = 'https://image.tmdb.org/t/p/original/';
const currentDate = new Date();
onMounted(async () => {
  await fetchNewMovies(currentDate);
});
// const releaseDate = computed(() => {
//   return response.value.release_date?.split('-')[0];
// });
</script>
<template>
  <div class="flex justify-between">
    <h2>Nuevas películas</h2>
    <div class="flex justify-between">
      <router-link :to="{ name: 'Movie' }"> Ver todo </router-link>
    </div>
  </div>
  <div
    class="grid gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7"
  >
    <!-- <movie-card
      v-for="(movie, index) in newMovies.slice(0, 14)"
      :key="index"
      :movie="movie"
      :pathImage="pathImage"
    /> -->
    <movie-card
      v-for="(item, index) in newMovies.slice(0, 14)"
      :key="index"
      :movieId="item.id"
      :pathImage="pathImage"
      route="MovieSingle"
      movieType="movie"
    >
      <template #release-date="{ releaseDate }">
        <span
          class="absolute bottom-1 left-2 text-white text-sm bg-black/75 px-2 py-0.5 rounded"
        >
          {{ releaseDate }}</span
        >
      </template>
      <template #vote-average="{ voteAverage }">
        <div
          class="absolute bottom-0 right-0 text-white text-sm bg-black/75 px-1 py-0.5 flex items-center justify-between rounded-br-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="#ffff00"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span>{{ voteAverage }}</span>
        </div>
      </template>
      <template #name>
        <router-link
          :to="{
            name: 'MovieSingle',
            params: { id: item.id },
          }"
        >
          <p class="truncate font-normal hover:text-red-700">
            {{ item.title }}
          </p>
        </router-link>
      </template>
    </movie-card>
  </div>
</template>
