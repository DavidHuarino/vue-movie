<script setup>
import { useMovieStore } from "../../stores/movieStore";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import MovieCard from "../../components/MovieCard/MovieCard.vue";
import CarouselTv from "./CarouselTv/CarouselTv.vue";
import CarouselPopularMovies from "./CarouselPopularMovies/CarouselPopularMovies.vue";
import TopMovieList from "./TopMovieList/TopMovieList.vue";
//import TopVideoList from "./TopVideoList/TopVideoList.vue";
//import TopVideoList from "../../components/TopVideoList/TopVideoList.vue";

const store = useMovieStore();
const { popularMovies, newMovies } = storeToRefs(store);
const { fetchPopularMovies, fetchNewMovies } = store;
const pathImage = "https://image.tmdb.org/t/p/original/";
const currentDate = new Date();
onMounted(async () => {
  await fetchPopularMovies();
  await fetchNewMovies(currentDate);
});
fetchNewMovies(currentDate);
console.log(newMovies, "peliculas nuevas");
</script>
<template>
  <div class="px-10">
    <carousel-popular-movies />
    <section>
      <div class="flex justify-between">
        <h2>Nuevas películas</h2>
        <div class="flex justify-between">
          <!-- <span><a href="#">Ver todo</a></span> -->
          <router-link :to="{ name: 'Movie' }"> Ver todo </router-link>
        </div>
      </div>
      <div
        class="grid gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7"
      >
        <movie-card
          v-for="(movie, index) in newMovies.slice(0, 14)"
          :key="index"
          :movie="movie"
          :pathImage="pathImage"
        />
      </div>
    </section>
    <carousel-tv />
    <top-movie-list />
  </div>
</template>
<style lang="scss">
// .swiper {
//   width: 100%;
//   height: 100%;
// }
/* .swiper-slide { */
/* background-color: blue; */
/* text-align: center;
  font-size: 18px; */
/* background: red; */

/* Center slide text vertically */
/* display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 25rem; */
/* } */

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;
} */
</style>
