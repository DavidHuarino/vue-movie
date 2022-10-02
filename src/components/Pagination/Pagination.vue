<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();
const props = defineProps({
  modelValue: Number,
  totalPages: Number,
  maxPages: Number,
});
const emit = defineEmits(['update:modelValue']);
const visiblePages = computed(() => {
  return middleWindow.value * 2 + 3;
});
const middleWindow = computed(() => {
  let side = 0;
  if (props.maxPages > 3) {
    side = props.maxPages % 2 === 0 ? props.maxPages - 3 : props.maxPages - 4;
  }
  const maxSide = Math.floor(side / 2);
  return maxSide;
  //return side;
});
// const middleWindow = computed(() => Math.floor(window.value / 2));
// const checkLeftWindow = computed(
//   () => props.modelValue >= 1 && props.modelValue <= window.value
// );
const checkLeftWindow = computed(
  () => props.modelValue >= 1 && props.modelValue <= 3 + middleWindow.value
);
// const checkMiddleWindow = computed(
//   () =>
//     props.modelValue > window.value &&
//     props.modelValue <= props.totalPages - window.value
// );
const checkMiddleWindow = computed(
  () =>
    props.modelValue > 3 + middleWindow.value &&
    props.modelValue <= props.totalPages - (3 + middleWindow.value)
);
// const checkRightWindow = computed(
//   () =>
//     props.modelValue >= props.totalPages - window.value &&
//     props.modelValue <= props.totalPages
// );

const checkRightWindow = computed(
  () =>
    props.modelValue > props.totalPages - (3 + middleWindow.value) &&
    props.modelValue <= props.totalPages
);
const checkMaxTotalPages = computed(() => props.totalPages <= props.maxPages);
const start = ref(null);
const end = ref(null);
const btn = ref(null);
const items = ref(null);
const sizeButton = computed(() => {
  const lastItem = items.value?.[items.value?.length - 1];
  const maxWidth = Math.max(lastItem?.offsetWidth, btn.value?.offsetWidth);
  const maxHeight = Math.max(lastItem?.offsetHeight, btn.value?.offsetHeight);
  return {
    width: `${maxWidth}px`,
    height: `${maxHeight}px`,
  };
});
onMounted(() => {
  //console.log(btn.value.clientWidth, 'mounted', btn.value.textContent);
  emit('update:modelValue', +route.query.page || 1);
});
const arrPages = computed(() => {
  if (checkMaxTotalPages.value) {
    start.value = 1;
    end.value = props.totalPages;
  } else if (checkLeftWindow.value) {
    start.value = 1;
    end.value = visiblePages.value;
  } else if (checkMiddleWindow.value) {
    start.value = props.modelValue - middleWindow.value;
    end.value = props.modelValue + middleWindow.value;
  } else if (checkRightWindow) {
    start.value = props.totalPages - visiblePages.value + 1;
    end.value = props.totalPages;
  }
  const res = [];
  for (let i = start.value; i <= end.value; i++) {
    res.push(i);
  }
  return res;
});
const changePageNumber = (newPage) => {
  emit('update:modelValue', newPage);
  router.push({
    path: route.path,
    query: {
      ...route.query,
      page: newPage,
    },
  });
};
watch(
  () => route.query.page,
  (newPage) => {
    emit('update:modelValue', +newPage || 1);
  }
);
</script>
<template>
  <ul class="flex space-x-1">
    <li>
      <button
        :style="sizeButton"
        :disabled="props.modelValue <= 1"
        class="border border-black text-white px-3 py-1 rounded"
        :class="
          props.modelValue <= 1
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-black hover:text-red-800'
        "
        @click="changePageNumber(props.modelValue - 1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </li>
    <li v-show="checkMiddleWindow || (checkRightWindow && !checkMaxTotalPages)">
      <button
        @click="changePageNumber(1)"
        class="border border-black text-white px-3 py-1 rounded hover:bg-black hover:text-red-800"
        :style="sizeButton"
      >
        1
      </button>
    </li>
    <li v-show="checkMiddleWindow || (checkRightWindow && !checkMaxTotalPages)">
      <button
        @click="changePageNumber(props.modelValue - 1)"
        class="border border-black text-white px-3 py-1 rounded hover:bg-black hover:text-red-800"
        :style="sizeButton"
      >
        ...
      </button>
    </li>
    <li v-for="(item, index) in arrPages" :key="index" ref="items">
      <button
        @click="changePageNumber(item)"
        class="border border-black text-white px-3 py-1 rounded hover:bg-black hover:text-red-800"
        :class="
          props.modelValue === item &&
          'bg-red-600 hover:bg-red-600 hover:text-white'
        "
        :style="sizeButton"
      >
        {{ item }}
      </button>
    </li>
    <li v-show="checkMiddleWindow || (checkLeftWindow && !checkMaxTotalPages)">
      <button
        @click="changePageNumber(props.modelValue + 1)"
        class="border border-black text-white px-3 py-1 rounded hover:bg-black hover:text-red-800"
        :style="sizeButton"
      >
        ...
      </button>
    </li>
    <li v-show="(checkLeftWindow && !checkMaxTotalPages) || checkMiddleWindow">
      <button
        ref="btn"
        @click="changePageNumber(props.totalPages)"
        class="border border-black text-white px-4 py-1.5 rounded hover:bg-black hover:text-red-800"
        :style="sizeButton"
      >
        {{ props.totalPages }}
      </button>
    </li>
    <li>
      <button
        :style="sizeButton"
        :disabled="props.modelValue >= props.totalPages"
        class="border border-black text-white px-3 py-1 rounded"
        :class="
          props.modelValue >= props.totalPages
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-black hover:text-red-800'
        "
        @click="changePageNumber(props.modelValue + 1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </li>
  </ul>
  <!-- {{ start }} - {{ end }} -->
  <!-- <button @click="$emit('update:modelValue', 6)">Click me</button> -->
  <!-- <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    /> -->
</template>
<style lang="scss"></style>
