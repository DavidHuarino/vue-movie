<script setup>
import useFetchMovies from '../../../hooks/useFetchMovies';
import TopMovie from '../../../components/TopMovie/TopMovie.vue';
//import useFetchTv from "../../../hooks/useFetchTv";
//const { movies } = useFetchMovies("top_rated");
//const { moviesTv } = useFetchTv("top_rated");
import useFetchMovie from '../../../hooks/useFetchMovie';
import { onMounted, reactive } from 'vue';
const sendPropsMovie = reactive({
  movieType: 'movie',
  getType: 'top_rated',
});
const sendPropsTv = reactive({
  movieType: 'tv',
  getType: 'top_rated',
});
const {
  response: movies,
  error: errorMovie,
  fetching: fetchingMovie,
  fetchApi: fetchMovie,
} = useFetchMovie(sendPropsMovie);
const {
  response: moviesTv,
  error: errorTv,
  fetching: fetchingTv,
  fetchApi: fetchTv,
} = useFetchMovie(sendPropsTv);
onMounted(async () => {
  fetchMovie();
  fetchTv();
});
</script>
<template>
  <div class="flex">
    <top-movie
      class="flex-1 pr-3 min-w-0"
      :data="movies.slice(0, 5)"
      v-if="fetchingMovie"
    >
      <template #header>
        <div class="flex justify-between">
          <h3>Top movies</h3>
          <button>Ver todo</button>
        </div>
      </template>
    </top-movie>

    <top-movie
      class="flex-1 pr-3 min-w-0"
      :data="moviesTv.slice(0, 5)"
      v-if="fetchingTv"
    >
      <template #header>
        <div class="flex justify-between">
          <h3>Top series</h3>
          <button>Ver todo</button>
        </div>
      </template>
    </top-movie>
  </div>
</template>
