<script setup>
defineProps({
  genres: Object,
});
</script>
<template>
  <div class="flex space-x-2">
    <div
      v-for="(item, index) in genres"
      :key="index"
      class="text-gray-200 bg-black/60 px-2 py-1 text-sm rounded-sm cursor-pointer hover:bg-red-600 ease-in-out duration-200"
    >
      {{ item.name }}
    </div>
  </div>
</template>
