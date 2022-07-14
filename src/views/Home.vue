<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import "./style.css";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
import { useMovieStore } from "../stores/movieStore";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import MovieCard from "../components/MovieCard/MovieCard.vue";

const store = useMovieStore();
const { popularMovies, newMovies } = storeToRefs(store);
const { fetchPopularMovies, fetchNewMovies } = store;
const pathImage = "https://image.tmdb.org/t/p/original/";
const currentDate = new Date();
onMounted(() => {
  fetchPopularMovies();
  fetchNewMovies(currentDate);
});
</script>
<template>
  <section class="px-10">
    <div class="flex justify-between">
      <h2>Películas populares</h2>
      <div class="flex justify-between">
        <span><a href="#">Ver todo</a></span>
        <div>
          <button class="prevArrow">Prev</button>
          <button class="nextArrow">Next</button>
        </div>
      </div>
    </div>
    <swiper
      :spaceBetween="10"
      :navigation="{ prevEl: '.prevArrow', nextEl: '.nextArrow' }"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      }"
      :modules="[Navigation, Autoplay]"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(movie, index) in popularMovies"
        :key="index"
        class="relative cursor-pointer"
      >
        <div>
          <img
            :src="`${pathImage}${movie.poster_path}`"
            alt=""
            class="rounded"
          />
        </div>
        <div
          class="absolute bottom-2 left-3 px-2 py-0.5 rounded-md bg-black/75"
        >
          <span class="text-white">2022</span>
        </div>
        <div class="absolute bottom-2 right-3">
          <span class="text-white">5</span>
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <section class="px-10">
    <div class="flex justify-between">
      <h2>Nuevas películas</h2>
      <div class="flex justify-between">
        <span><a href="#">Ver todo</a></span>
      </div>
    </div>
    <div
      class="grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7"
    >
      <movie-card
        v-for="(movie, index) in newMovies.slice(0, 14)"
        :key="index"
        :movie="movie"
        :pathImage="pathImage"
      />
      <!-- <div v-for="(movie, index) in newMovies" :key="index">
        
      </div> -->
    </div>
  </section>
  <section class="px-10">
    <div class="flex justify-between">
      <h2>Popular TV shows</h2>
      <div class="flex justify-between">
        <span><a href="#">Ver todo</a></span>
      </div>
    </div>
    <swiper
      :spaceBetween="10"
      :pagination="{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      }"
      :modules="[Pagination]"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(movie, index) in popularMovies"
        :key="index"
        class="relative cursor-pointer"
      >
        <div>
          <img
            :src="`${pathImage}${movie.poster_path}`"
            alt=""
            class="rounded"
          />
        </div>
        <div
          class="absolute bottom-2 left-3 px-2 py-0.5 rounded-md bg-black/75"
        >
          <span class="text-white">2022</span>
        </div>
        <div class="absolute bottom-2 right-3">
          <span class="text-white">5</span>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<style>
/* #app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
} */
:root {
  --swiper-pagination-bullet-inactive-color: red;
}
.swiper {
  width: 100%;
  height: 100%;
  /* background-color: red; */
  /* padding: 2rem; */
}
.swiper-pagination-bullet-active {
  /** Marker styling of selected image in carousel */
  background: var(--swiper-pagination-color, #000));
}
.swiper-pagination-bullet {
  background: yellow;
}
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
