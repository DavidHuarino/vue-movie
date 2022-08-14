<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useFetchDetails from '../../hooks/useFetchDetails';
import TvHeader from './TvHeader/TvHeader.vue';
import SimilarCardList from '../../components/SimilarCardList/SimilarCardList.vue';
const route = useRoute();
const { response, error, fetching, fetchApi } = useFetchDetails({
  id: route.params.id,
  type: 'tv',
});
onMounted(async () => {
  await fetchApi();
});
</script>
<template>
  <tv-header :response="response" v-if="fetching" />
  <SimilarCardList />
</template>
