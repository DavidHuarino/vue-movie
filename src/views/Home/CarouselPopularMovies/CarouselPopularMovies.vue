<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import { ref } from "vue";
import useFetchMovies from "../../../hooks/useFetchMovies";

const { movies } = useFetchMovies("popular");
const swiper_popular = ref(null);
const pathImage = "https://image.tmdb.org/t/p/original/";
const onSwiper = (swiper) => {
  swiper_popular.value = swiper;
};
</script>
<template>
  <div class="flex justify-between">
    <h2>Películas populares</h2>
    <div class="flex justify-between">
      <span><a href="#">Ver todo</a></span>
      <div>
        <button @click="swiper_popular.slidePrev()">Prev</button>
        <button @click="swiper_popular.slideNext()">Next</button>
      </div>
    </div>
  </div>
  <swiper
    @swiper="onSwiper"
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
      v-for="(movie, index) in movies"
      :key="index"
      class="relative cursor-pointer"
    >
      <div>
        <img :src="`${pathImage}${movie.poster_path}`" alt="" class="rounded" />
      </div>
      <div class="absolute bottom-2 left-3 px-2 py-0.5 rounded-md bg-black/75">
        <span class="text-white">2022</span>
      </div>
      <div class="absolute bottom-2 right-3">
        <span class="text-white">5</span>
      </div>
    </swiper-slide>
  </swiper>
</template>
