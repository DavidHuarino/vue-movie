<script setup>
//import Pagination from '../../components/Pagination/Pagination.vue';
import MoviesListByPagination from './MoviesListByPagination/MoviesListByPagination.vue';
import GenresList from '../../components/GenresList/GenresList.vue';
import useFetchGenre from '../../hooks/useFetchGenre';
import { onMounted } from 'vue';
//import { ref } from 'vue';
//const currentPage = ref(1);
const { response, error, fetching, fetchApi } = useFetchGenre();
onMounted(async () => {
  await fetchApi();
});
</script>
<template>
  <div class="bg-home-main text-white">
    <div class="flex space-x-2 ml-5 py-4">
      <div class="w-1 bg-red-600"></div>
      <h2 class="text-xl capitalize">movies</h2>
    </div>
    <!-- <span>newMovies.totalResult</span> -->
    <div class="bg-home-main text-white flex">
      <movies-list-by-pagination />
      <genres-list :genres="response" />
      <!-- <pagination v-model="currentPage" /> -->
    </div>
  </div>
</template>
