<script setup>
defineProps({
  item: Object,
});
</script>
<template>
  <div class="p-2 cursor-pointer">
    {{ item.name }}
  </div>
</template>
