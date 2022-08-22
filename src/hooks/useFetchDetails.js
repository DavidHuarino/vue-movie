import {
  reactive,
  onMounted,
  toRefs,
  watch,
  isRef,
  watchEffect,
  onBeforeUnmount,
} from 'vue';
const useFetchDetails = (props) => {
  const dataById = reactive({
    response: [],
    error: null,
    fetching: false,
  });
  // console.log(props);
  //console.log(props, 'propiedades');
  //console.log(props, 'a ver que cambia ');
  //console.log(dataById.fetching, 'before');
  // watch(
  //   () => props.id,
  //   (newId) => {
  //     console.log('viejo id', props.id, 'nuevo id', newId);
  //   }
  // );
  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${props.type}/${props.id}?api_key=9a22b0050e2d46e11611865134b2efac&language=en-US`
      );
      const data = await response.json();
      //console.log(data, 'wadafa');
      dataById.response = data;
      //Object.assign(dataById, data);
    } catch (error) {
      console.error(error);
      dataById.error = error;
    } finally {
      dataById.fetching = true;
    }
  };
  //fetchApi();
  watchEffect(
    async () => {
      await fetchApi();
    },
    { flush: 'post' }
  );
  // onMounted(async () => {
  //   await fetchApi();
  // });
  return { ...toRefs(dataById), fetchApi };
};
export default useFetchDetails;
