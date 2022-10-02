<script setup>
import { onMounted, reactive } from 'vue';
import useFetchGenre from '../../hooks/useFetchGenre';
import GenresList from '../../components/GenresList/GenresList.vue';
import TvListByPagination from './TvListByPagination/TvListByPagination.vue';
const {
  response: tvMovies,
  error: tvError,
  fetching: tvFetching,
  fetchApi: tvFetch,
} = useFetchGenre();
onMounted(async () => {
  await tvFetch();
});
</script>
<template>
  <div class="bg-home-main text-white">
    <div class="flex space-x-2 ml-5 py-4">
      <div class="w-1 bg-red-600"></div>
      <h2 class="text-xl capitalize">tv</h2>
    </div>
    <!-- <span>newMovies.totalResult</span> -->
    <div class="bg-home-main text-white flex">
      <!-- <movies-list-by-pagination /> -->
      <tv-list-by-pagination />
      <genres-list :genres="tvMovies" />
      <!-- <pagination v-model="currentPage" /> -->
    </div>
  </div>
</template>
