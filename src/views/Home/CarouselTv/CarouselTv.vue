<script setup>
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

import { computed, ref } from 'vue';
import useFetchTv from '../../../hooks/useFetchTv';
const { moviesTv } = useFetchTv('popular');
const pathImage = 'https://image.tmdb.org/t/p/original/';
const swiper_tv = ref(null);
const onSwiper = (swiper) => {
  swiper_tv.value = swiper;
};
const filterMovies = computed(() => {
  return moviesTv.value.filter((movie) => movie.backdrop_path).slice(0, 12);
});
const getReleasedYear = computed(() => {
  return (date) => date.split('-')[0];
});
</script>
<template>
  <div class="flex justify-between">
    <h2>Popular TV shows</h2>
    <div class="flex justify-between">
      <span><a href="#">Ver todo</a></span>
      <button @click="swiper_tv.slidePrev()">Prev</button>
      <button @click="swiper_tv.slideNext()">Next</button>
    </div>
  </div>
  <swiper
    @swiper="onSwiper"
    :spaceBetween="10"
    :pagination="{
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      el: '.swiper-tv__swiper-pagination',
    }"
    :breakpoints="{
      '640': {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 30,
        spaceBetween: 10,
      },
    }"
    :modules="[Pagination, Navigation]"
    class="swiper-tv"
  >
    <swiper-slide
      v-for="(movie, index) in filterMovies"
      :key="index"
      class="relative cursor-pointer bg-green-500 swiper-tv__swiper-slide"
    >
      <router-link :to="{ name: 'TvSerieSingle', params: { id: movie.id } }">
        <div
          class="after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t from-black/100 via-black/0 to-black/0"
        >
          <img
            :src="`${pathImage}${movie.backdrop_path}`"
            alt=""
            class="block aspect-video"
          />
        </div>
        <div class="absolute bottom-2 left-3 px-2 py-0.5 rounded-md">
          <span class="block text-white text-xl font-medium">{{
            movie.name
          }}</span>
          <span class="text-white block font-normal">{{
            getReleasedYear(movie.first_air_date)
          }}</span>
        </div>
        <div class="absolute bottom-2 right-3">
          <span class="text-white">5</span>
        </div>
      </router-link>
    </swiper-slide>

    <div class="swiper-tv__swiper-pagination"></div>
  </swiper>
</template>
<style lang="scss">
.swiper-tv {
  &__swiper-slide {
    background-color: green;
    color: black;
  }
  background-color: gray;
  &__swiper-pagination {
    text-align: center;
    margin-top: 1rem;
    .swiper-pagination-bullet {
      width: 0.6rem;
      height: 0.6rem;
      display: inline-block;
      background: #fff;
      opacity: 0.2;
      border-radius: 20px;
      margin-right: 50px;
      -webkit-transition: opacity 0.5s, background-color 0.5s, width 0.5s;
      -o-transition: opacity 0.5s, background-color 0.5s, width 0.5s;
      transition: opacity 0.5s, background-color 0.5s, width 0.5s;
    }
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    width: 2.3rem;
  }
}
</style>
