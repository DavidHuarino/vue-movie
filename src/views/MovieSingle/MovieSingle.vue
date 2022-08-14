<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useFetchDetails from '../../hooks/useFetchDetails';
import MovieHeader from './MovieHeader/MovieHeader.vue';
const route = useRoute();
const { response, error, fetching, fetchApi } = useFetchDetails({
  id: route.params.id,
  type: 'movie',
});
onMounted(async () => {
  await fetchApi();
});
console.log(fetching, 'after');
//const pathImageBack = computed(() => pathImage.value + response?.backdrop_path);
// console.log(route.params.id, 'wadafa', pathImageBack);
</script>
<template>
  <movie-header v-if="fetching" :response="response" />
  <div class="h-20 bg-home-main"></div>
  <!-- <div
    v-if="fetching"
    class="relative before:absolute before:inset-0 before:blur"
    :style="{
      backgroundImage: `url('${pathImage}${response.backdrop_path}')`,
    }"
  >
    <div
      class="flex relative space-x-6 py-8 px-6 h-96 bg-cover bg-top before:absolute before:-z-20 before:inset-0 before:blur-md after:absolute after:left-0 after:top-0 after:w-full after:h-full after:brightness-50 after:bg-gradient-to-t from-black/100 via-black/80 to-black/20"
    >
      <div class="flex-none w-48 z-10">
        <img
          :src="`${pathImage}${response.poster_path}`"
          :alt="`${response.title}`"
          class="w-full"
        />
      </div>
      <div class="flex-1 z-10 space-y-2">
        <h2 class="text-white text-3xl font-bold mb-5">
          {{ response.title }}
        </h2>
        <div class="flex space-x-2">
          <div
            v-for="(item, index) in response.genres"
            :key="index"
            class="text-gray-200 bg-black/60 px-2 py-1 text-sm"
          >
            {{ item.name }}
          </div>
        </div>
        <p class="text-white">{{ response.overview }}</p>
      </div>
    </div>
  </div>
  <div v-else>Cargando</div> -->
</template>
<style scoped lang="scss"></style>
