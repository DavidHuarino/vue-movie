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
  <div class="flex justify-between items-center">
    <div class="flex space-x-2">
      <div class="w-1 bg-red-600"></div>
      <h2 class="text-xl capitalize">Películas populares</h2>
    </div>
    <div class="flex justify-between">
      <button @click="swiper_popular.slidePrev()" class="hover:text-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button @click="swiper_popular.slideNext()" class="hover:text-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
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
    class="swiper-popular-movies"
  >
    <swiper-slide
      v-for="(movie, index) in movies"
      :key="index"
      class="relative cursor-pointer hover:scale-105 ease-in-out duration-300"
    >
      <div>
        <img
          :src="`${pathImage}${movie.poster_path}`"
          alt=""
          class="rounded block"
        />
        <div
          class="absolute inset-0 bottom-12 rounded-md bg-black/50 transition flex justify-center items-center opacity-0 hover:opacity-100 ease-in-out duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <!-- <div class="absolute bottom-2 left-3 px-2 py-0.5 rounded-md bg-black/75">
        <span class="text-white">2022</span>
      </div>
      <div class="absolute bottom-2 right-3">
        <span class="text-white">5</span>
      </div> -->
      <p class="truncate font-semibold hover:text-red-600">
        {{ movie.title }}
      </p>
      <span class="text-gray-400 font-normal">2022</span>
    </swiper-slide>
  </swiper>
</template>
<style lang="scss">
.swiper-popular-movies {
  padding: 1.5rem 0.5rem;
}
</style>
