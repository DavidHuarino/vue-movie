import { ref } from "vue";
const useFetchGenre = () => {
  const genres = ref(null);
  const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=9a22b0050e2d46e11611865134b2efac&language=en-US"
      );
      const data = await response.json();
      genres.value = data.genres;
    } catch (error) {
      console.error(error);
    }
  };
  fetchApi();
  return { genres };
};
export default useFetchGenre;
