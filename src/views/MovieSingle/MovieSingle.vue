<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params.id);
</script>
<template>
  Soy un video en particular
  <span>{{ route.params.id }}</span>
</template>
