<script setup>
import useFetchMovies from "../../../hooks/useFetchMovies";
import TopMovie from "../../../components/TopMovie/TopMovie.vue";
import useFetchTv from "../../../hooks/useFetchTv";
const { movies } = useFetchMovies("top_rated");
const { moviesTv } = useFetchTv("top_rated");
</script>
<template>
  <div class="flex">
    <top-movie class="flex-1 pr-3 min-w-0" :data="movies.slice(0, 5)">
      <template #header>
        <div class="flex justify-between">
          <h3>Top movies</h3>
          <button>Ver todo</button>
        </div>
      </template>
    </top-movie>

    <top-movie class="flex-1 pr-3 min-w-0" :data="moviesTv.slice(0, 5)">
      <template #header>
        <div class="flex justify-between">
          <h3>Top series</h3>
          <button>Ver todo</button>
        </div>
      </template>
    </top-movie>
  </div>
</template>
