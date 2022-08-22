import { reactive, toRefs } from 'vue';
const useFetchTv = (props) => {
  const newProps = { getType: '', page: '1', ...props };
  const movieData = reactive({
    response: [],
    error: null,
    fetching: false,
  });
  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${newProps.typeMovie}/${newProps.id}${
          newProps.getType ? '/' + newProps.getType : ''
        }?api_key=9a22b0050e2d46e11611865134b2efac&language=en-US&page=${
          newProps.page
        }`
      );
      const data = await response.json();
      movieData.response = data.results;
    } catch (error) {
      movieData.error = error;
    } finally {
      movieData.fetching = true;
    }
  };

  fetchApi();
  return { ...toRefs(movieData) };
};
export default useFetchTv;
