<script setup>
import useFetchMovie from '../../../hooks/useFetchMovie';
import MovieCard from '../../../components/MovieCard/MovieCard.vue';
import { onMounted, toRefs, reactive } from 'vue';
const pathImage = 'https://image.tmdb.org/t/p/original/';
const props = defineProps({
  movieId: String,
});
const { movieId } = toRefs(props);
const sendProps = reactive({
  movieType: 'tv',
  id: movieId,
  getType: 'recommendations',
});
const { response, error, fetching, fetchApi } = useFetchMovie(sendProps);
// const { response, error, fetching, fetchApi } = useFetchMovie({
//   movieType: 'tv',
//   id: movieId,
//   getType: 'recommendations',
// });
onMounted(async () => {
  await fetchApi();
});
</script>
<template>
  <div>
    <h2>Recommendation Tv Shows</h2>
    <div class="grid grid-cols-3 gap-2 p-3" v-if="fetching">
      <movie-card
        v-for="(item, index) in response.slice(0, 9)"
        :key="index"
        :movieId="item.id"
        :pathImage="pathImage"
        route="TvSerieSingle"
        movieType="tv"
      />
      <!-- <movie-card
        v-for="(item, index) in response"
        :key="index"
        :movie="item"
        :pathImage="pathImage"
      /> -->
    </div>
  </div>
</template>
