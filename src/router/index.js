import { createRouter, createWebHistory } from 'vue-router';
// import Home from "../views/Home.vue";
import Home from '../views/Home/Home.vue';
import Movies from '../views/Movies/Movies.vue';
import MovieSingle from '../views/MovieSingle/MovieSingle.vue';
import TvSerieSingle from '../views/TvSerieSingle/TvSerieSingle.vue';
import TvSeries from '../views/TvSeries/TvSeries.vue';
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/movie/:id', name: 'MovieSingle', component: MovieSingle },
  { path: '/movie', name: 'Movie', component: Movies },
  { path: '/serie/:id', name: 'TvSerieSingle', component: TvSerieSingle },
  { path: '/tv', name: 'TvSerie', component: TvSeries },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
  // scrollBehavior() {
  //   document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  // },
});
export default router;
