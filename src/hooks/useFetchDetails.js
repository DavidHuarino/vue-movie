import { reactive } from "vue";
const useFetchDetails = (id) => {
  const dataById = reactive({});
  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9a22b0050e2d46e11611865134b2efac&language=en-US`
      );
      const data = await response.json();
      Object.assign(dataById, data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchApi();
  return { dataById };
};
export default useFetchDetails;
