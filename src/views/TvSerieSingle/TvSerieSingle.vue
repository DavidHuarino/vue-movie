<script setup>
import { onMounted, watch, ref, reactive, computed, toRefs, toRef } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useFetchDetails from '../../hooks/useFetchDetails';
import TvHeader from './TvHeader/TvHeader.vue';
import TvSimilarCardList from './TvSimilarCardList/TvSimilarCardList.vue';
import TvRecommendationCardList from './TvRecommendationCardList/TvRecommendationCardList.vue';
const route = useRoute();
const router = useRouter();
//const showId = toRef(route.params, 'id');
// const showId = computed(() => route.params.id);
//const routeId = ref(route.params.id);
//const routeId = computed(() => route.params.id);
//const { params } = toRefs(route);
// onMounted(() => {
//   console.log(route.params.id, 'wat', routeId.value);
// });
//console.log(route.params.id, 'wadafa');
// onMounted(() => {
//   console.log(route.params.id, 'wadafa');
// });
const showId = ref(route.params.id);
//const showId = computed(() => route.params.id);
//const showId = ref(null);
const sendProps = reactive({
  id: showId,
  //id: showId.value,
  //id: routeId,
  type: 'tv',
});
const { response, error, fetching, fetchApi } = useFetchDetails(sendProps);
onMounted(async () => {
  // await router.isReady();
  // showId.value = route.params.id;
  await fetchApi();
});
//await fetchApi();
watch(
  () => route.params.id,
  (newId) => {
    console.log(newId, 'veremos el tipo', showId.value);
    showId.value = newId;
    //sendProps.id = newId;
  }
);
// const { response, error, fetching, fetchApi } = useFetchDetails({
//   id: routeId,
//   type: 'tv',
// });
</script>
<template>
  <!-- {{ route.params.id }} -->
  <tv-header :response="response" v-if="fetching" />
  <div class="flex justify-between">
    <tv-similar-card-list class="flex-3" :movieId="showId" />
    <tv-recommendation-card-list class="flex-1" :movieId="showId" />
    <!-- <tv-similar-card-list class="flex-3" :movieId="route.params.id" />
    <tv-recommendation-card-list class="flex-1" :movieId="route.params.id" /> -->
  </div>
</template>
