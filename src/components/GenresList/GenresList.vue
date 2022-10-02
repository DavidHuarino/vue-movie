<script setup>
defineProps({
  genres: Object,
});
</script>
<template>
  <div class="flex-1">
    <h2 class="text-xl text-center">Genres</h2>
    <div class="grid auto-rows-min pr-5 md:grid-cols-1 lg:grid-cols-2">
      <div
        v-for="(item, index) in genres"
        :key="index"
        class="flex text-white py-2.5 items-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-3 h-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        <span
          class="text-base rounded-sm cursor-pointer hover:text-red-600 ease-in-out duration-200"
        >
          {{ item.name }}</span
        >
      </div>
    </div>
  </div>
</template>
