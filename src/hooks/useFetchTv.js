import { ref } from "vue";
const useFetchTv = (parameter) => {
  const moviesTv = ref([]);
  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${parameter}?api_key=9a22b0050e2d46e11611865134b2efac&language=en-US&page=1`
      );
      const data = await response.json();
      moviesTv.value = data.results;
    } catch (error) {
      console.error(error);
    }
  };

  fetchApi();
  return { moviesTv };
};
export default useFetchTv;
