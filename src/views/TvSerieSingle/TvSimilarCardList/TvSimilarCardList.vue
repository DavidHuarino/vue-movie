<script setup>
import useFetchMovie from '../../../hooks/useFetchMovie';
import MovieCard from '../../../components/MovieCard/MovieCard.vue';
import { onMounted, watch, computed, reactive, toRefs } from 'vue';
const pathImage = 'https://image.tmdb.org/t/p/original/';
const props = defineProps({
  movieId: String,
});
const { movieId } = toRefs(props);

const sendProps = reactive({
  movieType: 'tv',
  id: movieId,
  getType: 'similar',
});
const { response, error, fetching, fetchApi } = useFetchMovie(sendProps);
onMounted(async () => {
  await fetchApi();
});

// const { response, error, fetching, fetchApi } = useFetchMovie({
//   movieType: 'tv',
//   id: computed(() => props.movieId),
//   getType: 'similar',
// });
//fetchApi(props.movieId);
// onMounted(async () => {
//   await fetchApi(props.movieId);
// });
// watch(
//   () => props.movieId,
//   async (newId) => {
//     await fetchApi(newId);
//   }
// );
//console.log('me he creado de nuevo list card', props.movieId);
</script>
<template>
  <div class="text-white">
    <h2 class="pl-3 text-lg font-medium">Similar TV Shows</h2>
    <div class="grid grid-cols-6 gap-2 p-3" v-if="fetching">
      <movie-card
        v-for="(item, index) in response.slice(0, 12)"
        :key="index"
        :movieId="item.id"
        :pathImage="pathImage"
        route="TvSerieSingle"
        movieType="tv"
      />
    </div>
    <div v-else>Videos cargando</div>
    <!-- <div class="grid grid-cols-6 gap-2" v-if="fetching">
      <movie-card
        v-for="(item, index) in response"
        :key="index"
        :movieId="item.id"
        :pathImage="pathImage"
        route="TvSerieSingle"
        movieType="tv"
      />
    </div>
    <div v-else>Cargando...</div> -->
  </div>
</template>
