<script setup>
import { computed, ref, onMounted, reactive, toRefs } from 'vue';
import useFetchDetails from '../../hooks/useFetchDetails';
const props = defineProps({
  movieId: Number,
  pathImage: String,
  route: String,
  movieType: String,
});
const { movieId, movieType } = toRefs(props);
//const _id = computed(() => props.movieId);
const sendProps = reactive({
  id: movieId,
  type: movieType,
});
//const _id = computed(() => props.movieId);
const { response, error, fetching, fetchApi } = useFetchDetails(sendProps);
onMounted(async () => {
  await fetchApi();
});
//fetchApi();
// onMounted(async () => {
//   await fetchApi(_id.value);
// });
const releaseDate = computed(() => {
  return response.value.release_date?.split('-')[0];
});
</script>
<template>
  <div class="rounded-t-md" v-if="fetching">
    <router-link
      :to="{
        name: props.route,
        params: { id: movieId },
      }"
    >
      <div class="relative">
        <img
          :src="`${pathImage}${response.poster_path}`"
          alt=""
          class="w-full h-full align-top rounded-md"
        />
        <slot name="release-date" :releaseDate="releaseDate"></slot>
        <!-- <span
          class="absolute bottom-1 left-2 text-white text-sm bg-black/75 px-2 py-0.5 rounded"
        >
          {{ releaseDate }}</span
        > -->
        <slot name="vote-average" :voteAverage="response.vote_average"></slot>
        <!-- <div
          class="absolute bottom-0 right-0 text-white text-sm bg-black/75 px-1 py-0.5 flex items-center justify-between rounded-br-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="#ffff00"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span>{{ response.vote_average }}</span>
        </div> -->
        <div
          class="absolute inset-0 rounded-md bg-black/50 transition ease-out flex justify-center items-center opacity-0 hover:opacity-100 duration-300"
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
    </router-link>
    <slot name="name"></slot>
    <!-- <router-link
      :to="{
        name: 'MovieSingle',
        params: { id: props.movie.id },
      }"
    >
      <p class="truncate font-normal">{{ movie.title }}</p>
    </router-link> -->
  </div>
</template>
