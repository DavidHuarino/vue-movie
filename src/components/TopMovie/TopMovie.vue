<script setup>
const pathImage = "https://image.tmdb.org/t/p/original";
defineProps({
  data: Array,
});
</script>
<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main class="divide-y">
      <div
        v-for="(movie, index) in data"
        :key="index"
        class="p-2 flex space-x-1"
      >
        <router-link
          :to="{
            name: 'MovieSingle',
            params: { id: movie.id },
          }"
          class="flex-none"
        >
          <img
            :src="`${pathImage}${movie.poster_path}`"
            :alt="movie.title"
            class="w-14 h-14 object-cover"
          />
        </router-link>
        <div
          class="w-8 flex-none bg-black text-white/75 flex justify-center items-center"
        >
          {{ index + 1 }}
        </div>
        <div class="flex items-center font-medium">
          {{ movie.vote_average }}
        </div>

        <router-link
          v-if="movie.title"
          :to="{ name: 'MovieSingle', params: { id: movie.id } }"
          class="truncate my-auto"
          >{{ movie.title }}</router-link
        >
        <router-link
          v-else
          :to="{ name: 'MovieSingle', params: { id: movie.id } }"
          class="truncate my-auto"
          >{{ movie.name }}</router-link
        >
      </div>
    </main>
  </div>
</template>
