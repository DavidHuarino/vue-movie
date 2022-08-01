import { ref } from "vue";
const useFetchMovies = (parameter) => {
  const movies = ref([]);
  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${parameter}?api_key=9a22b0050e2d46e11611865134b2efac&language=en-US&page=1`
      );
      const data = await response.json();
      movies.value = data.results;
    } catch (error) {
      console.error(error);
    }
  };

  fetchApi();
  return { movies };
};
export default useFetchMovies;
