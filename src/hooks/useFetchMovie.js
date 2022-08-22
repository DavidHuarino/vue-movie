import { reactive, toRefs, watchEffect, onMounted, ref } from 'vue';
const useFetchMovie = (props) => {
  //const newProps = reactive({ getType: '', page: '1', ...props });
  const defaultProps = reactive({
    getType: '',
    page: '1',
    id: '',
  });
  //const newProps = Object.assign({}, defaultProps, props);
  const newProps = reactive({ ...toRefs(defaultProps), ...toRefs(props) });
  console.log(props, newProps, 'wadafa');
  const movieData = reactive({
    response: [],
    error: null,
    fetching: false,
  });
  // const loadUserData = async () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({
  //         name: 'Matt Maribojoc',
  //         pic: 'https://cdn-images-1.medium.com/fit/c/100/100/2*EcZb9cndrhTF7_d74dv2Fg.png',
  //         bio: 'I run a VueJS community over at https://learnvue.co, develop web sites, and post whatever I find cool on the Internet.',
  //       });
  //     }, 2000);
  //   });
  // };
  const fetchApi = async () => {
    try {
      // const userData = ref(await loadUserData());
      // const response = await fetch(
      //   `https://api.themoviedb.org/3/${newProps.movieType}/${newProps.id}${
      //     newProps.getType ? '/' + newProps.getType : ''
      //   }?api_key=9a22b0050e2d46e11611865134b2efac&language=en-US&page=${
      //     newProps.page
      //   }`
      // );
      const response = await fetch(
        `https://api.themoviedb.org/3/${newProps.movieType}${
          newProps.id ? '/' + newProps.id : ''
        }${
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
  // onMounted(async () => {
  //   await fetchApi();
  // });
  watchEffect(async () => {
    await fetchApi();
  });
  return { ...toRefs(movieData), fetchApi };
};
export default useFetchMovie;
